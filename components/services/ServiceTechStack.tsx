import styles from "./ServicePage.module.css";
import type { Service } from "@/data/services";

export default function ServiceTechStack({ service }: { service: Service }) {
  return (
    <section className={`${styles.section} ${styles.approach}`}>
      <div className="wrap">
        <div className={styles.sectionHead}>
          <span className="eyebrow">Tech Stack</span>
          <h2>Built with the right technology.</h2>
        </div>
        <div className={styles.techGrid}>
          {service.tech.map((group) => (
            <div key={group.label} className={styles.techGroup}>
              <h4>{group.label}</h4>
              {group.items.map((item) => (
                <div key={item} className={styles.techItem}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
