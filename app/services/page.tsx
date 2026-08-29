import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";
import styles from "./overview.module.css";
import HeroSection from "./HeroSection";

export const metadata: Metadata = {
  title: "Services — Berry",
  description:
    "Web, mobile, AI, cloud, security and marketing — one team, one system, built around how your business works.",
};

export default function ServicesOverviewPage() {
  return (
    <main className={styles.page}>
      <HeroSection />

      <div className="wrap">
        <div className={styles.list}>
          {services.map((service, i) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className={styles.listItem}>
              <div className={styles.row}>
                <div className={styles.rowLeft}>
                  <span className={styles.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.rowTitle}>
                    {service.eyebrow.charAt(0) + service.eyebrow.slice(1).toLowerCase()}
                  </span>
                  <span className={styles.rowSub}>{service.flow.join(" → ")}</span>
                </div>
                <span className={styles.rowArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
