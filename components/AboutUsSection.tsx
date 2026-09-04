"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./AboutUsSection.module.css";

interface WhyUsItem {
  number: string;
  title: string;
  text: string;
}

const items: WhyUsItem[] = [
  {
    number: "01",
    title: "Quality",
    text: "Every deliverable is reviewed and tested before it reaches you.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "Smart solutions aligned with your business goals, not just your feature list.",
  },
  {
    number: "03",
    title: "Support",
    text: "We stay with you, today and tomorrow — support doesn't end at handover.",
  },
  {
    number: "04",
    title: "Innovate",
    text: "An AI-first mindset to build smarter, more capable digital products.",
  },
  {
    number: "05",
    title: "Speed",
    text: "Fast execution without compromising quality or cutting corners.",
  },
];

const SPACING = 30; // degrees between each item on the arc
const CENTER_INDEX = 2; // item whose baseAngle is 0

type NodeStyle = CSSProperties & { "--angle": string };

export default function AboutUsSection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const lockRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const step = (dir: 1 | -1) => {
    if (lockRef.current) return false;

    const next = activeRef.current + dir;
    if (next < 0 || next > items.length - 1) return false;

    lockRef.current = true;
    activeRef.current = next;
    setActive(next);
    setTimeout(() => {
      lockRef.current = false;
    }, 550);
    return true;
  };

  // Mouse wheel / trackpad scroll cycles through items instead of
  // scrolling the page, as long as the pointer is over this section.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      const canStep = direction === 1
        ? activeRef.current < items.length - 1
        : activeRef.current > 0;

      if (canStep) e.preventDefault();
      step(direction);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 40) step(delta > 0 ? 1 : -1);
      touchStartY.current = null;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const groupRotation = -((active - CENTER_INDEX) * SPACING);
  const current = items[active];

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="why-us-heading">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Why Berry solutions</p>
        <h2 id="why-us-heading" className={styles.heading}>
         Technology With
          <span> Purpose.</span>
        </h2>
        <span className={styles.rule} aria-hidden="true" />
        <p className={styles.description}>
          We bring clarity to complex challenges through technology built around <i> your </i>business.
        </p>
        <Link href="/about" className={styles.knowMore}>
          Know more <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
        </Link>
      </div>

      <div className={styles.stage} ref={stageRef}>
        <span className={styles.orbit} aria-hidden="true" />

        <div
          className={styles.wheel}
          style={{ transform: `rotate(${groupRotation}deg)` }}
        >
          {items.map((item, i) => {
            const baseAngle = (i - CENTER_INDEX) * SPACING;
            const isActive = i === active;
            const nodeStyle: NodeStyle = { "--angle": `${baseAngle}deg` };
            return (
              <div className={styles.node} style={nodeStyle} key={item.number}>
                <button
                  type="button"
                  className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${item.title}`}
                  aria-current={isActive}
                />
                {!isActive && (
                  <button
                    type="button"
                    className={styles.numberLabel}
                    onClick={() => setActive(i)}
                  >
                    {item.number}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.panel}>
          <span className={styles.panelNumber}>{current.number}</span>
          <div className={styles.panelText}>
            <h3 className={styles.panelTitle}>{current.title}</h3>
            <p className={styles.panelBody}>{current.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}