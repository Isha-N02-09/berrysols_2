"use client";

import { useEffect, useId, useRef, useState } from "react";
import "./RoadReveal.css";

type RoadRevealProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

function smoothPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";

  let path = `M ${points[0].x},${points[0].y}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[index === 0 ? 0 : index - 1];
    const current = points[index];
    const next = points[index + 1];
    const following = points[index + 2] ?? next;
    const controlOne = {
      x: current.x + (next.x - previous.x) / 6,
      y: current.y + (next.y - previous.y) / 6,
    };
    const controlTwo = {
      x: next.x - (following.x - current.x) / 6,
      y: next.y - (following.y - current.y) / 6,
    };

    path += ` C ${controlOne.x},${controlOne.y} ${controlTwo.x},${controlTwo.y} ${next.x},${next.y}`;
  }

  return path;
}

function buildRoadPath(width: number, height: number) {
  if (!width || !height) return "";

  const bends = Math.max(5, Math.round(height / 240));
  const points = [{ x: width * 0.22, y: 0 }];

  for (let index = 1; index <= bends; index += 1) {
    points.push({
      x: index % 2 === 1 ? width * 0.78 : width * 0.22,
      y: (height * index) / (bends + 1),
    });
  }

  points.push({ x: width * 0.78, y: height });
  return smoothPath(points);
}

export default function RoadReveal({
  children,
  className = "",
  contentClassName = "",
}: RoadRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskId = useId();
  const gradientId = useId();
  const [box, setBox] = useState({ width: 0, height: 0 });
  const [reveal, setReveal] = useState(0);

  const targetRevealRef = useRef(0);
  const displayRevealRef = useRef(0);
  const animFrameRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollFrame = 0;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const content = container.querySelector<HTMLElement>(".roadReveal__content");
    if (!content) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setBox({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    resizeObserver.observe(content);

    function updateTarget() {
      if (!content) return;

      scrollFrame = 0;
      if (motionQuery.matches) {
        targetRevealRef.current = 1;
        return;
      }

      const rect = content.getBoundingClientRect();
      const progress = (window.innerHeight * 0.5 - rect.top) / rect.height;
      targetRevealRef.current = Math.min(Math.max(progress, 0), 1);
    }

    function onScroll() {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateTarget);
    }

    function tick() {
      const target = motionQuery.matches ? 1 : targetRevealRef.current;
      const current = displayRevealRef.current;
      const next = current + (target - current) * 0.12;
      const settled = Math.abs(target - next) < 0.001;
      displayRevealRef.current = settled ? target : next;
      setReveal(displayRevealRef.current);
      animFrameRef.current = requestAnimationFrame(tick);
    }

    updateTarget();
    animFrameRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motionQuery.addEventListener("change", updateTarget);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motionQuery.removeEventListener("change", updateTarget);
      resizeObserver.disconnect();
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const path = buildRoadPath(box.width, box.height);
  const roadWidth = Math.max(28, box.width * 0.06);
  const dashWidth = Math.max(2, roadWidth * 0.05);
  const dashGap = Math.max(10, roadWidth * 0.16);
  const fadeHeight = Math.max(40, box.height * 0.05);

  return (
    <div ref={containerRef} className={`roadReveal ${className}`}>
      {box.width > 0 && box.height > 0 && (
        <svg
          className="roadReveal__svg"
          viewBox={`0 0 ${box.width} ${box.height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="white" stopOpacity="1" />
              <stop
                offset={`${Math.max(0, 1 - fadeHeight / box.height) * 100}%`}
                stopColor="white"
                stopOpacity="1"
              />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask
              id={maskId}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={box.width}
              height={box.height}
            >
              <rect
                x="0"
                y="0"
                width={box.width}
                height={reveal * box.height}
                fill={`url(#${gradientId})`}
              />
            </mask>
          </defs>
          <g mask={`url(#${maskId})`}>
            <path
              className="roadReveal__base"
              d={path}
              style={{ strokeWidth: roadWidth }}
            />
            <path
              className="roadReveal__dash"
              d={path}
              style={{
                strokeWidth: dashWidth,
                strokeDasharray: `${dashWidth * 2.2} ${dashGap}`,
              }}
            />
          </g>
        </svg>
      )}
      <div className={`roadReveal__content ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
