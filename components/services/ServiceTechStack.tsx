import styles from "./ServicePage.module.css";
import type { Service } from "@/data/services";

export default function ServiceTechStack({ service }: { service: Service }) {
  const techItems = service.tech.flatMap((group) => group.items);
  const duplicatedTechItems = [...techItems, ...techItems];

  return (
    <section className={`${styles.section} ${styles.approach}`}>
      <div className="wrap">
        <div className={styles.sectionHead}>
          <span className="eyebrow">Tech Stack</span>
        </div>

        <div className={styles.techMarquee}>
          <div className={styles.techTrack}>
            {duplicatedTechItems.map((item, index) => (
              <span key={`${item}-${index}`} className={styles.techPill}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
