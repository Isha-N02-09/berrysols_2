import styles from "./ServicePage.module.css";
import type { Service } from "@/data/services";

export default function ServiceCapabilities({ service }: { service: Service }) {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.sectionHead}>
          <span className="eyebrow">What We Do</span>
          <h2>Everything you need, in one place.</h2>
        </div>
        <div className={styles.capGrid}>
          {service.capabilities.map((cap, i) => (
            <div key={cap.title} className={styles.capCard}>
              <span className={styles.capNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
