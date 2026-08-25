"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.berryLoader} ${
        isExiting ? styles.exiting : ""
      }`}
    >
      <div className={styles.loaderContent}>
        <div className={styles.lineLoader}></div>

        <div className={styles.brandName}>
          BERRY <span>SOLUTIONS</span>
        </div>
      </div>
    </div>
  );
}