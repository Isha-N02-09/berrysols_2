"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "+", label: "Countries served" },
  { value: 10, suffix: "+", label: "Years in operation" },
  { value: 24, suffix: "/7", label: "Support & monitoring" },
];

type Line = { x1: number; y1: number; x2: number; y2: number };

// Layered sine noise standing in for real map data, so dots cluster like coastlines.
function landField(latitude: number, longitude: number) {
  const phi = (latitude * Math.PI) / 180;
  const lambda = (longitude * Math.PI) / 180;
  return (
    Math.sin(phi * 2.6 + 1.1) * Math.cos(lambda * 2.1 - 0.6) +
    0.55 * Math.sin(phi * 4.8 - 1.7 + lambda * 2.4) +
    0.35 * Math.cos(phi * 1.6 + lambda * 4.6 + 0.9) +
    0.25 * Math.sin(lambda * 6.2 - phi * 1.1)
  );
}

function buildPoints() {
  const points: { x: number; y: number; z: number; land: boolean }[] = [];
  for (let latitude = -86; latitude <= 86; latitude += 3.6) {
    const radians = (latitude * Math.PI) / 180;
    const ringRadius = Math.cos(radians);
    const count = Math.max(5, Math.round(92 * ringRadius));
    for (let index = 0; index < count; index++) {
      const longitude = (index / count) * 360 - 180;
      const lambda = (longitude * Math.PI) / 180;
      const land = landField(latitude, longitude) > 0.35;
      if (!land && (index + Math.round(latitude)) % 3 !== 0) continue;
      points.push({
        x: Math.cos(radians) * Math.sin(lambda),
        y: Math.sin(radians),
        z: Math.cos(radians) * Math.cos(lambda),
        land,
      });
    }
  }
  return points;
}

export default function TrackRecord() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const leftLabelRef = useRef<HTMLDivElement>(null);
  const rightLabelRef = useRef<HTMLDivElement>(null);
  const leftMarkerRef = useRef<HTMLSpanElement>(null);
  const rightMarkerRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const points = buildPoints();
    let width = 0;
    let height = 0;
    let theta = 0;
    let frame = 0;
    let last = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const render = (now: number) => {
      frame = requestAnimationFrame(render);
      theta += (now - last) * 0.00013;
      last = now;

      // Sphere centre sits below the frame so only the top cap reads as a horizon.
      const cx = width / 2;
      const cy = height * 1.136;
      const radius = width * 0.4545;

      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      const light = document.documentElement.dataset.theme === "light";
      ctx.strokeStyle = light ? "rgba(206,65,17,.28)" : "rgba(255,180,115,.14)";
      ctx.lineWidth = 1;
      ctx.stroke();

      for (const point of points) {
        const x = point.x * Math.cos(theta) + point.z * Math.sin(theta);
        const z = -point.x * Math.sin(theta) + point.z * Math.cos(theta);
        if (z < -0.04) continue;

        const depth = Math.min(1, z + 0.04);
        const edge = Math.max(0, 1 - Math.abs(z) * 1.5);
        const dotRadius = Math.min(3.2, (point.land ? 1.15 : 0.7) + depth * 0.9 + edge * 1.1);
        const alpha = Math.min(1, (point.land ? 0.4 : 0.18) + depth * 0.4 + edge * 0.42);

        ctx.globalAlpha = light ? Math.min(1, alpha + 0.18) : alpha;
        ctx.fillStyle = point.land ? (light ? "#ce4111" : "#ffb473") : "#f25d23";
        ctx.beginPath();
        ctx.arc(cx + x * radius, cy - point.y * radius, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const measureConnectors = useCallback(() => {
    const stage = stageRef.current;
    const leftLabel = leftLabelRef.current;
    const rightLabel = rightLabelRef.current;
    const leftMarker = leftMarkerRef.current;
    const rightMarker = rightMarkerRef.current;
    if (!stage || !leftLabel || !rightLabel || !leftMarker || !rightMarker) return;
    if (window.matchMedia("(max-width: 760px)").matches) {
      setLines([]);
      return;
    }

    const stageRect = stage.getBoundingClientRect();
    const anchor = (element: Element, side: "left" | "right") => {
      const rect = element.getBoundingClientRect();
      return {
        x: (side === "right" ? rect.right : rect.left) - stageRect.left,
        y: rect.top - stageRect.top + rect.height / 2,
      };
    };
    const center = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return { x: rect.left - stageRect.left + rect.width / 2, y: rect.top - stageRect.top + rect.height / 2 };
    };

    const from = [anchor(leftLabel, "right"), anchor(rightLabel, "left")];
    const to = [center(leftMarker), center(rightMarker)];
    setLines(from.map((start, index) => ({ x1: start.x, y1: start.y, x2: to[index].x, y2: to[index].y })));
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    measureConnectors();
    const observer = new ResizeObserver(measureConnectors);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [measureConnectors]);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        observer.disconnect();
        const startedAt = performance.now();
        const tick = () => {
          const progress = Math.min(1, (performance.now() - startedAt) / 900);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCounts(stats.map((stat) => Math.round(stat.value * eased)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="track" id="track">
      <div className="track-head">
        <span className="section-index">Track record</span>
        <h2>Built for teams that <em>can&apos;t afford downtime.</em></h2>
        <p>Our clients span continents and sectors — enterprises, institutions and service brands that need every customer conversation to hold up under real conditions.</p>
      </div>

      <div className="globe-stage" ref={stageRef}>
        <div className="globe-callout callout-left" ref={leftLabelRef}>
          <span className="num">{counts[0]}<i>+</i></span>
          <span className="lbl">Projects delivered</span>
        </div>

        <div className="globe-visual">
          <span className="globe-glow" aria-hidden="true" />
          <canvas ref={canvasRef} aria-hidden="true" />
          <span className="globe-marker marker-left" ref={leftMarkerRef} aria-hidden="true"><i /></span>
          <span className="globe-marker marker-right" ref={rightMarkerRef} aria-hidden="true"><i /></span>
        </div>

        <div className="globe-callout callout-right" ref={rightLabelRef}>
          <span className="num">{counts[1]}<i>+</i></span>
          <span className="lbl">Countries served</span>
        </div>

        <svg className="connector-svg" aria-hidden="true">
          {lines.map((line, index) => <line key={index} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />)}
        </svg>
      </div>

      <div className="track-headline">
        <h3>A footprint that spans borders.</h3>
        <p>From regional startups to cross-border institutions, Berrysols keeps every conversation consistent across languages and time zones.</p>
      </div>

      <div className="track-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l7 3v6c0 5-3.4 8.4-7 11-3.6-2.6-7-6-7-11V5l7-3z" /></svg>
        Trusted technology partner for mission-critical teams
      </div>

      <div className="track-stats" ref={statsRef}>
        {stats.map((stat, index) => (
          <div className="track-stat" key={stat.label}>
            <span className="num">{counts[index]}<i>{stat.suffix}</i></span>
            <span className="label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
