import Link from "next/link";
import NodeFlow from "./NodeFlow";
import styles from "./ServicePage.module.css";
import type { Service } from "@/data/services";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroGrid}`}>
        <div>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroDesc}>{service.description}</p>
          <div className={styles.heroActions}>
            <Link href="/#contact" className="btn">
              Let&rsquo;s talk →
            </Link>
            <Link href="/services" className="btn ghost">
              All services
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <NodeFlow steps={service.flow} />
        </div>
      </div>
    </section>
  );
}
