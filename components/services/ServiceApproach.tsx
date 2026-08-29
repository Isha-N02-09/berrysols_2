import styles from "./ServicePage.module.css";
import type { Service } from "@/data/services";

export default function ServiceApproach({ service }: { service: Service }) {
  return (
    <section className={`${styles.section} ${styles.approach}`}>
      <div className="wrap">
        <div className={styles.sectionHead}>
          <span className="eyebrow">The Berry Approach</span>
          <h2>How we get {service.eyebrow.toLowerCase()} right.</h2>
        </div>
        <div className={styles.flowRow}>
          {service.flow.map((step, i) => (
            <span key={step} className={styles.flowStep}>
              <span className={styles.flowStep}>
                <span className={styles.flowNum}>0{i + 1}</span>
                <span className={styles.flowLabel}>{step}</span>
              </span>
              {i < service.flow.length - 1 && <span className={styles.flowArrow}>→</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
