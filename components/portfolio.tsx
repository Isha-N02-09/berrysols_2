"use client";

import {
  ArrowRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Monitor,
} from "lucide-react";
import { useState } from "react";
import styles from "./Servicesshowcase.module.css";

const SERVICES = [
  { title: "Custom Software", description: "Bespoke systems built around how your business actually works.", tone: "orange", icon: "code", visual: "/assets/vector1.png" },
  { title: "Data and Analytics", description: "Organise, analyse, and activate your data to uncover insights faster.", tone: "coral", icon: "analytics", visual: "/assets/vector2.png" },
  { title: "Cloud", description: "Secure, scalable environments that improve agility and reduce complexity.", tone: "amber", icon: "cloud", visual: "/assets/vector1.png" },
  { title: "Digital", description: "Strategy, design, and technology brought together into one connected approach.", tone: "orangeLight", icon: "digital", visual: "/assets/vector2.png" },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeService = (direction: number) => {
    setActiveIndex((current) => (current + direction + SERVICES.length) % SERVICES.length);
  };

  return (
    <section id="portfolio" className={styles.root}>
      <div className={styles.header}>
        <h2>Our services</h2>
        <span>Explore our capabilities</span>
      </div>

      <div className={styles.carousel}>
        <button className={styles.navButton} onClick={() => changeService(-1)} aria-label="Previous service">
          <ChevronLeft size={22} />
        </button>

        <div className={styles.cardsGrid}>
          {SERVICES.map((service, index) => (
            <article
              className={`${styles.card} ${styles[service.tone]} ${index === activeIndex ? styles.activeCard : ""}`}
              key={service.title}
            >
              <div className={styles.cardCenterIcon} aria-hidden="true">
                <ServiceIcon name={service.icon} />
              </div>
              <div className={styles.cardCopy}>
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className={styles.learnMore}>
                  Learn more <ArrowRight size={17} />
                </button>
              </div>
              <img
                src={service.visual}
                alt=""
                className={styles.cardVisual}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <button className={styles.navButton} onClick={() => changeService(1)} aria-label="Next service">
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const icons = {
    code: Code2,
    analytics: BarChart3,
    cloud: Cloud,
    digital: Monitor,
  };
  const Icon = icons[name as keyof typeof icons];

  return <Icon size={22} strokeWidth={1.8} />;
}
