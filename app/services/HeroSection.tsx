"use client";

import { useEffect, useRef } from "react";
import styles from "./overview.module.css";

const orbitServices = [
  { label: "Market Research" },
  { label: "Brand Strategy" },
  { label: "Technical SEO" },
  { label: "Content Marketing" },
  { label: "Keyword Strategy" },
  { label: "Social Media Ads" },
  { label: "Email Automation" },
  { label: "Conversion Tracking" },
  { label: "UI/UX Design" },
  { label: "Landing Pages" },
  { label: "CMS Integration" },
  { label: "API Development" },
  { label: "Web Development", highlight: true },
  { label: "E-commerce Builds" },
  { label: "Mobile App Dev" },
  { label: "Cross-platform Apps" },
  { label: "App Store Optimization" },
  { label: "Database Architecture" },
  { label: "Cloud Migration" },
  { label: "DevOps Pipelines" },
  { label: "Cloud Infrastructure", highlight: true },
  { label: "Cybersecurity Audits" },
  { label: "QA & Testing" },
  { label: "Performance Tuning" },
  { label: "Technical Support" },
  { label: "Analytics & Reporting" },
];

export default function HeroSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLElement[]>([]);
  const rotationRef = useRef(0);
  const targetRotationRef = useRef(0);

  useEffect(() => {
    const stage = stageRef.current;
    const hero = heroRef.current;
    if (!stage || !hero) return;

    // Get all arc items
    const items = Array.from(stage.querySelectorAll(`.${styles.arcItem}`)) as HTMLElement[];
    itemsRef.current = items;

    const n = items.length;
    const startAngle = -94;
    const endAngle = 94;
    const step = (endAngle - startAngle) / (n - 1);

    function layout(offset: number) {
      const stageElement = stageRef.current;
      if (!stageElement) return;

      const w = stageElement.clientWidth;
      const h = stageElement.clientHeight;
      const isMobile = w < 860;
      const centerX = isMobile ? -0.14 * w : -0.24 * w;
      const centerY = isMobile ? h * 0.3 : h * 0.5;
      const R = isMobile ? h * 0.86 : Math.max(h * 0.58, w * 0.4);

      items.forEach((el, i) => {
        const theta = startAngle + i * step + offset;
        const rad = (theta * Math.PI) / 180;
        const x = centerX + R * Math.cos(rad);
        const y = centerY + R * Math.sin(rad);
        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.transform = `rotate(${theta}deg)`;
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const relY = (e.clientY - rect.top) / rect.height;
      targetRotationRef.current = (relY - 0.5) * 60;
    };

    const handleMouseLeave = () => {
      targetRotationRef.current = 0;
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    function tick() {
      rotationRef.current += (targetRotationRef.current - rotationRef.current) * 0.07;
      layout(rotationRef.current);
      requestAnimationFrame(tick);
    }

    const handleResize = () => layout(rotationRef.current);
    window.addEventListener("resize", handleResize);

    layout(0);
    tick();

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [styles.arcItem]);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroWord} aria-hidden="true">
        SERVICES
      </div>
      <div className={styles.heroLabel} aria-hidden="true">
        Services
      </div>

      <div className={styles.orbitStage} ref={stageRef} aria-hidden="true">
        {orbitServices.map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className={`${styles.arcItem} ${item.highlight ? styles.highlight : ""}`}
          >
            {item.highlight ? (
              <>
                <span className={styles.icon} />
                <span>{item.label}</span>
              </>
            ) : (
              <>
                <span className={styles.slash}>/</span>
                <span>{item.label.toLowerCase().replace(/ & /g, " &amp; ").replace(/\s+/g, "-")}</span>
              </>
            )}
          </span>
        ))}
      </div>

      <div className="wrap">
        <div className={styles.heroContent}></div>
      </div>
    </section>
  );
}

