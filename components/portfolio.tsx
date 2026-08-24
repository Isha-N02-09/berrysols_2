"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import styles from "./Servicesshowcase.module.css";

// One-time, app-wide config — safe to re-run on a StrictMode remount.
gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

const STICKY_CARD_COUNT = 4;
const CARDS_ENTER_END = 100;
const CARD_FLIP_TRIGGER = 200;
const CARD_DISMISS_START = 300;
const CARD_DISMISS_DURATION = 100;
const TOTAL_SCROLL_SVH =
  CARD_DISMISS_START + STICKY_CARD_COUNT * CARD_DISMISS_DURATION; // 700

const svhToProgress = (svh: number) => svh / TOTAL_SCROLL_SVH;

// index-aligned to the four back cards in DOM order
const CARD_FLIP_TILT_ANGLES = [-10, -20, -5, 10];
const CARD_DISMISS_TILT_ANGLES = [-50, -60, -45, 50];

const SERVICES = [
  { id: "card-1", title: "Custom Software", icon: "code", color: "rgba(244, 94, 43, .9)", ink: "#ffffff" },
  { id: "card-2", title: "Web Apps", icon: "globe", color: "rgba(255, 145, 72, .82)", ink: "#ffffff" },
  { id: "card-3", title: "Mobile Apps", icon: "phone", color: "rgba(220, 67, 34, .9)", ink: "#ffffff" },
  { id: "card-4", title: "Cloud Solutions", icon: "cloud", color: "rgba(255, 112, 67, .78)", ink: "#ffffff" },
];

export default function ServicesShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const frontStickyCard = root.querySelector(`.${styles.cardFront}`);
    const backStickyCards = root.querySelectorAll(`.${styles.cardBack}`);
    const stickyCards = root.querySelectorAll(`.${styles.card}`);
    const heroHeadline = root.querySelector(`.${styles.heroContent}`);
    const heroSection = root.querySelector(`.${styles.hero}`);

    const totalScroll = window.innerHeight * (TOTAL_SCROLL_SVH / 100);

    const lenis = new Lenis();
    const onTick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(onTick);

    const ctx = gsap.context((self) => {
      let isFlipped = false;

      gsap.set(frontStickyCard, { rotationY: 0 });
      gsap.set(backStickyCards, { rotationY: -180 });

      const revealBackCards = () => {
        gsap.to(frontStickyCard, {
          rotationY: 180,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
        backStickyCards.forEach((card, i) => {
          gsap.to(card, {
            rotationY: 0,
            rotationZ: CARD_FLIP_TILT_ANGLES[i],
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          });
        });
      };

      const concealBackCards = () => {
        gsap.to(frontStickyCard, {
          rotationY: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
        backStickyCards.forEach((card) => {
          gsap.to(card, {
            rotationY: -180,
            rotationZ: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          });
        });
      };

      // per-card dismiss windows — last card in the DOM dismisses first
      const dismissWindows = Array.from(backStickyCards).map((_, i) => {
        const dismissOrder = STICKY_CARD_COUNT - 1 - i;
        return [
          svhToProgress(CARD_DISMISS_START + dismissOrder * 100),
          svhToProgress(CARD_DISMISS_START + (dismissOrder + 1) * 100),
        ];
      });

      ScrollTrigger.create({
        trigger: heroSection,
        start: "top top",
        end: `+=${totalScroll}px`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        onUpdate: ({ progress }) => {
          const enterProgress = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(0, svhToProgress(CARDS_ENTER_END), 0, 1, progress)
          );

          gsap.set(stickyCards, {
            y: gsap.utils.mapRange(0, 1, 50, -50, enterProgress) + "%",
          });
          gsap.set(heroHeadline, {
            y: gsap.utils.mapRange(0, 1, 0, -100, enterProgress) + "%",
          });

          const flipPoint = svhToProgress(CARD_FLIP_TRIGGER);
          if (progress > flipPoint && !isFlipped) {
            self.add(() => revealBackCards());
            isFlipped = true;
          } else if (progress <= flipPoint && isFlipped) {
            self.add(() => concealBackCards());
            isFlipped = false;
          }

          backStickyCards.forEach((card, i) => {
            const [dismissStart, dismissEnd] = dismissWindows[i];
            const dismissProgress = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(dismissStart, dismissEnd, 0, 1, progress)
            );
            gsap.set(card, {
              y: gsap.utils.mapRange(0, 1, -50, -250, dismissProgress) + "%",
              rotation: gsap.utils.mapRange(
                0,
                1,
                CARD_FLIP_TILT_ANGLES[i],
                CARD_DISMISS_TILT_ANGLES[i],
                dismissProgress
              ),
            });
          });
        },
      });
    }, rootRef);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.root} ref={rootRef}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Scroll to explore our services</h1>
        </div>

        <div className={styles.stickyCards}>
          <div className={`${styles.card} ${styles.cardFront}`}>
            <h3>First Frame</h3>
            <p>Everything we build at Berry Solutions, in one scroll.</p>
            <div className={styles.icon}>
              <span aria-hidden="true">↓</span>
            </div>
          </div>

          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`${styles.card} ${styles.cardBack}`}
              style={{ "--card-color": service.color, "--card-ink": service.ink } as CSSProperties}
            >
              <h3>{service.title}</h3>
              <span className={styles.cardIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className={styles.icon}
                style={{
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                <ServiceIcon name={service.icon} />
              </div>
              <p>
                {service.title === "Custom Software" &&
                  "Bespoke systems built around how your business actually works."}
                {service.title === "Web Apps" &&
                  "Fast, responsive products people enjoy coming back to."}
                {service.title === "Mobile Apps" &&
                  "Native-feel experiences for iOS and Android, one codebase."}
                {service.title === "Cloud Solutions" &&
                  "Infrastructure that scales quietly while you focus on growth."}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const paths = {
    code: "M9 7 4 12l5 5M15 7l5 5-5 5M13 4l-2 16",
    globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z",
    phone: "M7 3h3l1.2 4-2 1.4a14 14 0 0 0 6.4 6.4l1.4-2 4 1.2v3c0 1.1-.9 2-2 2C11.8 19 5 12.2 5 4.9 5 3.8 5.9 3 7 3Z",
    cloud: "M7.5 18h9.2a4.3 4.3 0 0 0 .6-8.6A5.8 5.8 0 0 0 6.1 8.2 4.9 4.9 0 0 0 7.5 18Z",
  } as const;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d={paths[name as keyof typeof paths]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}