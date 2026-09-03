"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./team.module.css";

const teamMembers = [
  ["Chief Executive Officer", "Ahsan Mehmood", "Keeps the big picture clear, the work useful, and every decision close to the people it serves.", "/assets/team/ahsan.jpg"],
  ["Chief Technology Officer", "Ahmed mehmood", "Turns ambitious ideas into calm, resilient systems that are ready for what comes next.", "/assets/team/ahmed.png"],
  ["Project Manager", "Safi Ahmed", "Makes the moving parts move together, giving good ideas the structure to arrive on time.", "/assets/team/safi.jpg"],
  ["Software Developer", "Fahad Yaseen", "Builds the details users rely on, with clean code, sharp thinking, and a practical edge.", "/assets/team/fahad.jpg"],
];

export default function TeamScrollIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const distance = section.offsetHeight - window.innerHeight;
      const value = distance > 0 ? -section.getBoundingClientRect().top / distance : 0;
      setProgress(Math.min(Math.max(value, 0), 1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const active = Math.min(Math.round(progress * (teamMembers.length - 1)), teamMembers.length - 1);

  const goToMember = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const distance = section.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY + (distance * index) / (teamMembers.length - 1),
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.teamIntro} ref={sectionRef} aria-label="Meet the Berry Solutions team">
      <div className={styles.teamIntroStage}>
        <div className={styles.teamIntroCopy}>
          <p className={styles.eyebrow}>Meet the people</p>
          <div className={styles.memberCopyStack}>
            {teamMembers.map(([role, name, bio], index) => (
              <div className={`${styles.memberCopy} ${index === active ? styles.memberCopyActive : ""}`} key={name}>
                <p className={styles.memberNumber}>0{index + 1} / 04</p>
                <p className={styles.memberRole}>{role}</p>
                <p className={styles.memberBio}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.memberVisual}>
          <div className={styles.imageRail}>
            <div className={styles.imageTrack} style={{ "--scroll-progress": progress } as CSSProperties}>
              {teamMembers.map(([, name, , image], index) => (
                <div className={`${styles.imageTile} ${index === active ? styles.imageTileActive : ""}`} key={name}>
                  {index === active && <><span className={styles.imageTopBox} /><span className={styles.imageBottomBox} /></>}
                <img src={image} alt={`${name} portrait`} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.memberDisplay}>
            <h3>{teamMembers[active][1]}</h3>
          </div>
          <div className={styles.memberArrows} aria-label="Change team member">
            <button type="button" aria-label="Previous team member" onClick={() => goToMember(Math.max(active - 1, 0))} disabled={active === 0}>↑</button>
            <button type="button" aria-label="Next team member" onClick={() => goToMember(Math.min(active + 1, teamMembers.length - 1))} disabled={active === teamMembers.length - 1}>↓</button>
          </div>
          <nav className={styles.memberNumbers} aria-label="Team members">
            {teamMembers.map(([, name], index) => (
              <button type="button" className={index === active ? styles.memberNumberActive : ""} aria-label={`Show ${name}`} aria-current={index === active ? "step" : undefined} onClick={() => goToMember(index)} key={name}>0{index + 1}</button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}