"use client";

import styles from "./Loader.module.css";
import { useEffect, useState } from "react";

export default function Loader() {
 const [isExiting, setIsExiting] = useState(false);
const [progress, setProgress] = useState(0);
const [lineIndex, setLineIndex] = useState(0);

  const codeLines = [
    "> initializing BerrySols...",
    "> loading digital systems...",
    "> compiling solutions...",
    "> connecting services...",
    "> optimizing experience...",
    "> ready.",
  ];

useEffect(() => {
  // Progress animation
  const progressTimer = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(progressTimer);
        return 100;
      }

      return prev + 1;
    });
  }, 25);

  // Code line animation
  const lineTimer = setInterval(() => {
    setLineIndex((prev) => {
      if (prev >= codeLines.length - 1) {
        clearInterval(lineTimer);
        return prev;
      }

      return prev + 1;
    });
  }, 500);

  // Start smooth reveal after loading finishes
  const exitTimer = setTimeout(() => {
    setIsExiting(true);
  }, 3000);

  return () => {
    clearInterval(progressTimer);
    clearInterval(lineTimer);
    clearTimeout(exitTimer);
  };
}, []);

  return (
    <div
      className={`${styles.berryLoader} ${
        isExiting ? styles.exiting : ""
      }`}
    >
      <div className={styles.loaderTerminal}>
        {/* Terminal header */}
        <div className={styles.terminalHeader}>
          <div className={styles.terminalDots}>
            <span />
            <span />
            <span />
          </div>

          <div className={styles.terminalTitle}>
            berrysols — terminal
          </div>
        </div>

        {/* Terminal body */}
        <div className={styles.terminalBody}>
          <div className={styles.terminalCode}>
            {codeLines.slice(0, lineIndex + 1).map((line, index) => (
              <div
                key={index}
                className={
                  index === lineIndex
                    ? `${styles.codeLine} ${styles.active}`
                    : styles.codeLine
                }
              >
                {line}
              </div>
            ))}

            {lineIndex < codeLines.length - 1 && (
              <span className={styles.terminalCursor}>
                ▋
              </span>
            )}
          </div>

          {/* Progress */}
          <div className={styles.loaderProgressWrapper}>
            <div className={styles.loaderProgressTop}>
              <span>BUILDING EXPERIENCE</span>
              <span>{progress}%</span>
            </div>

            <div className={styles.loaderProgress}>
              <div
                className={styles.loaderProgressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className={styles.loaderBrand}>
          <div className={styles.loaderBrandName}>
            BERRY<span>SOLUTIONS</span>
          </div>

          <div className={styles.loaderTagline}>
            DIGITAL SOLUTIONS THAT MOVE BUSINESSES FORWARD
          </div>
        </div>
      </div>
    </div>
  );
}