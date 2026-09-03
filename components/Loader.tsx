"use client";

import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.berryLoader} aria-hidden="true">
      <div className={styles.loaderContent}>
        <div className={styles.lineLoader}></div>

        <div className={styles.brandName}>
          BERRY <span>SOLUTIONS</span>
        </div>
      </div>
    </div>
  );
}