"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";

const features = [
  {
    title: "Clock Log is a tracker application",
    description:
      "A focused tracker application designed to make everyday logging simple and clear.",
    eyebrow: "PROJECTS · PRODUCT DESIGN",
    visual: "Clock Log",
    detail: "Tracker application · Case study",
    href: "https://berrysols.com/portfolio/clock-log-is-a-tracker-application/",
  },
  {
    title: "ATF Movers",
    description:
      "A digital experience built to help a moving business present its services and reach customers.",
    eyebrow: "PROJECTS · DIGITAL EXPERIENCE",
    visual: "ATF Movers",
    detail: "Moving services · Case study",
    href: "https://berrysols.com/portfolio/atf-movers/",
  },
  {
    title: "Same Day Me",
    description:
      "A healthcare-focused digital solution for dental implants and specialized dentistry.",
    eyebrow: "PROJECTS · HEALTHCARE",
    visual: "Same Day Me",
    detail: "Dental care · Case study",
    href: "https://berrysols.com/portfolio/same-day-me/",
  },
  {
    title: "ibuild.co",
    description:
      "A polished creative network experience shaped around a clear, modern digital presence.",
    eyebrow: "PROJECTS · ENGINEERING",
    visual: "ibuild.co",
    detail: "Creative network · Case study",
    href: "https://berrysols.com/portfolio/ibuild-co/",
  },
  {
    title: "Telehealth",
    description:
      "A responsive, SEO-ready healthcare website that improves access, trust, and patient experience.",
    eyebrow: "PROJECTS · HEALTHCARE",
    visual: "Telehealth NP",
    detail: "Healthcare platform · Case study",
    href: "https://berrysols.com/portfolio/telehealth/",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      setActiveIndex(Math.min(features.length - 1, Math.floor(progress * features.length)));
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className={styles.servicesHero}>
      <div className={styles.stickyStage}>
        <h2 className={styles.portfolioTitle}>
          <span className={styles.portfolioTitleOur}>Our</span>{" "}
          <span className={styles.portfolioTitleWord}>Portfolio</span>
        </h2>
        <div className={styles.featureTrack}>
          {features.map((feature, index) => {
            const offset = index - activeIndex;
            return (
              <a
                key={feature.title}
                href={feature.href}
                target="_blank"
                rel="noreferrer"
                className={styles.featureCard}
                data-active={index === activeIndex}
                style={{ "--offset": offset } as React.CSSProperties}
              >
                <div className={styles.cardChrome}>
                  <span>{feature.eyebrow}</span>
                  <span className={styles.cardSignal}><i /> LIVE</span>
                </div>
                <div className={styles.cardVisual}>
                  <span className={styles.visualPrompt}>{feature.visual}</span>
                  <strong>{feature.detail}</strong>
                  <div className={styles.visualLines}><i /><i /><i /></div>
                </div>
                <div className={styles.cardCopy}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span>0{index + 1} / 0{features.length}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
