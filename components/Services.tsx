"use client";

import React, { useEffect, useRef, useState } from "react";
import { HeartPulse, Network, Stethoscope, Timer, Truck } from "lucide-react";
import styles from "./Services.module.css";

const features = [
  {
    title: "Clock Log is a tracker application",
    description:
      "A focused tracker application designed to make everyday logging simple and clear.",
    eyebrow: "PROJECTS · PRODUCT DESIGN",
    visual: "/assets/vector1.png",
    detail: "Tracker application · Case study",
    icon: Timer,
    href: "https://berrysols.com/portfolio/clock-log-is-a-tracker-application/",
  },
  {
    title: "ATF Movers",
    description:
      "A digital experience built to help a moving business present its services and reach customers.",
    eyebrow: "PROJECTS · DIGITAL EXPERIENCE",
    visual: "/assets/vector2.png",
    detail: "Moving services · Case study",
    icon: Truck,
    href: "https://berrysols.com/portfolio/atf-movers/",
  },
  {
    title: "Same Day Me",
    description:
      "A healthcare-focused digital solution for dental implants and specialized dentistry.",
    eyebrow: "PROJECTS · HEALTHCARE",
    visual: "/assets/vector1.png",
    detail: "Dental care · Case study",
    icon: Stethoscope,
    href: "https://berrysols.com/portfolio/same-day-me/",
  },
  {
    title: "ibuild.co",
    description:
      "A polished creative network experience shaped around a clear, modern digital presence.",
    eyebrow: "PROJECTS · ENGINEERING",
    visual: "/assets/vector2.png",
    detail: "Creative network · Case study",
    icon: Network,
    href: "https://berrysols.com/portfolio/ibuild-co/",
  },
  {
    title: "Telehealth",
    description:
      "A responsive, SEO-ready healthcare website that improves access, trust, and patient experience.",
    eyebrow: "PROJECTS · HEALTHCARE",
    visual: "/assets/vector1.png",
    detail: "Healthcare platform · Case study",
    icon: HeartPulse,
    href: "https://berrysols.com/portfolio/telehealth/",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [carouselCenter, setCarouselCenter] = useState(0);

  useEffect(() => {
    const targetCenter = { current: 0 };
    const currentCenter = { current: 0 };
    let lastTime: number | null = null;
    let animationFrame = 0;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      targetCenter.current = progress * features.length * 2;
    };

    const animate = (now: number) => {
      if (lastTime === null) lastTime = now;
      const delta = now - lastTime;
      lastTime = now;
      const smoothing = 1 - Math.exp(-delta / 160);
      currentCenter.current += (targetCenter.current - currentCenter.current) * smoothing;
      setCarouselCenter(currentCenter.current);
      animationFrame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(animationFrame);
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
            const Icon = feature.icon;
            let offset = (index - carouselCenter) % features.length;
            if (offset > features.length / 2) offset -= features.length;
            if (offset < -features.length / 2) offset += features.length;
            const distance = Math.abs(offset);
            const angle = offset * 25;
            const angleRadians = angle * Math.PI / 180;
            const radius = 900;
            const x = radius * Math.sin(angleRadians);
            const y = radius * (1 - Math.cos(angleRadians));
            const scale = Math.max(.62, 1 - distance * .09);
            const opacity = distance > 3.4 ? 0 : Math.max(0, 1 - Math.pow(distance / 3.4, 1.5));
            return (
              <a
                key={feature.title}
                className={styles.featureCard}
                style={{
                  "--x": `${x}px`,
                  "--y": `${y}px`,
                  "--angle": `${angle}deg`,
                  "--scale": scale,
                  "--opacity": opacity,
                  "--z": Math.round(200 - distance * 10),
                } as React.CSSProperties}
              >
                <span className={styles.cardIcon} aria-hidden="true">
                  <Icon size={30} strokeWidth={1.8} />
                </span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <span className={styles.cardDetails}>
                  <span className={styles.cardEyebrow}>{feature.eyebrow}</span>
                  <p>{feature.description}</p>
                </span>
                <span className={styles.cardSpacer} />
                <span className={styles.cardButton}>CASE STUDY</span>
                <img
                  src={feature.visual}
                  alt=""
                  className={styles.cardVisual}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
