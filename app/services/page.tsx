import type { Metadata } from "next";
import styles from "@/styles/overview.module.css";
import HeroSection from "./HeroSection";
import ServicesOverview from "./ServicesOverview";

export const metadata: Metadata = {
  title: "Digital, AI & Technology Services",
  description:
    "Explore Berry Solutions services for web development, AI automation, software, startup support, and digital marketing.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital, AI & Technology Services",
    description:
      "Web development, AI automation, software, startup support, and digital marketing from Berry Solutions.",
    url: "/services",
  },
};

export default function ServicesOverviewPage() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <ServicesOverview />
    </main>
  );
}
