import type { Metadata } from "next";
import styles from "./overview.module.css";
import HeroSection from "./HeroSection";
import ServicesOverview from "./ServicesOverview";

export const metadata: Metadata = {
  title: "Services — Berry",
  description:
    "Web, mobile, AI, cloud, security and marketing — one team, one system, built around how your business works.",
};

export default function ServicesOverviewPage() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <ServicesOverview />
    </main>
  );
}
