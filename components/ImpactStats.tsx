"use client";

import { useEffect, useRef, useState } from "react";

const impactStats = [
  { value: 90, label: "Projects" },
  { value: 65, label: "People" },
  { value: 10, label: "Services" },
  { value: 15, label: "Countries" },
];

const locations = [
  { name: "USA", left: "38%", top: "32%" },
  { name: "Canada", left: "39%", top: "20%" },
  { name: "Mexico", left: "40%", top: "44%" },
  { name: "Brazil", left: "45%", top: "63%" },
  { name: "UK", left: "53%", top: "28%" },
  { name: "Germany", left: "56%", top: "36%" },
];

const cityNames = [
  "LHR",
  "Karachi",
  "Sialkot",
  "New York",
  "Chicago",
  "Toronto",
  "Vancouver",
  "London",
  "Manchester",
];

export default function ImpactStats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stats = statsRef.current;
    if (!stats) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const duration = 1500;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(90 * easedProgress));

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.25 });

    observer.observe(stats);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-stats" aria-label="Our impact">
      <div className="impact-stats-inner">
        <h2 className="impact-stats-heading">Track Record</h2>
        <div className="impact-main">
          <div className="impact-map-column">
            <div className="impact-map" aria-label="Global locations">
              <div className="impact-map-content">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  alt=""
                  className="impact-map-image"
                />
                {locations.map((location) => (
                  <span
                    className="impact-flag"
                    key={location.name}
                    style={{ left: location.left, top: location.top }}
                    title={location.name}
                    aria-hidden="true"
                  >
                    <span />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="impact-stat-grid" ref={statsRef}>
            {impactStats.map((stat) => (
              <div className="impact-stat" key={stat.label}>
                <strong className="impact-number">
                  {Math.round((count / 90) * stat.value)}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-city-strip" aria-label="Cities served">
          <div className="impact-city-track">
            {[...cityNames, ...cityNames].map((city, index) => (
              <span className="impact-city" key={`${city}-${index}`}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
