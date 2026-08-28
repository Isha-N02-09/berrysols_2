"use client";

import {
  ArrowRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Megaphone,
  Monitor,
  Search,
} from "lucide-react";
import { CSSProperties, MouseEvent, useEffect, useState } from "react";
import styles from "./Servicesshowcase.module.css";

const SERVICES = [
  { title: "Custom Software", description: "Bespoke systems built around how your business actually works.", tone: "orange", icon: "code", visual: "/assets/vector1.png" },
  { title: "Data and Analytics", description: "Organise, analyse, and activate your data to uncover insights faster.", tone: "coral", icon: "analytics", visual: "/assets/vector2.png" },
  { title: "Cloud", description: "Secure, scalable environments that improve agility and reduce complexity.", tone: "amber", icon: "cloud", visual: "/assets/vector1.png" },
  { title: "Digital", description: "Strategy, design, and technology brought together into one connected approach.", tone: "orangeLight", icon: "digital", visual: "/assets/vector2.png" },
  { title: "Digital Marketing", description: "Reach the right audience with focused campaigns that turn attention into growth.", tone: "coral", icon: "marketing", visual: "/assets/vector1.png" },
  { title: "SEO", description: "Improve your visibility in search and make it easier for customers to find you.", tone: "amber", icon: "seo", visual: "/assets/vector2.png" },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth <= 560 ? 1 : window.innerWidth <= 899 ? 2 : 4);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const updateTilt = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--tilt-x", `${y * -8}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 8}deg`);
  };

  const resetTilt = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  const changeService = (direction: number) => {
    const lastStart = SERVICES.length - visibleCards;
    setActiveIndex((current) => {
      const nextIndex = current + direction;
      return nextIndex > lastStart ? 0 : nextIndex < 0 ? lastStart : nextIndex;
    });
  };

  return (
    <section id="portfolio" className={styles.root}>
      <div className={styles.header}>
        <h2>Our services</h2>
      </div>

      <div className={styles.carousel}>
        <button className={styles.navButton} onClick={() => changeService(-1)} aria-label="Previous service">
          <ChevronLeft size={22} />
        </button>

        <div className={styles.cardsViewport}>
          <div
            className={styles.cardsGrid}
            style={{ "--active-index": activeIndex } as CSSProperties}
          >
            {SERVICES.map((service, index) => (
              <article
                className={`${styles.card} ${styles[service.tone]} ${index === activeIndex ? styles.activeCard : ""}`}
                key={service.title}
                onMouseMove={updateTilt}
                onMouseLeave={resetTilt}
                style={{ "--tilt-x": "0deg", "--tilt-y": "0deg" } as CSSProperties}
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
    marketing: Megaphone,
    seo: Search,
  };
  const Icon = icons[name as keyof typeof icons];

  return <Icon size={22} strokeWidth={1.8} />;
}
