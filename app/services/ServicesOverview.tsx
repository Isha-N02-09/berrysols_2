"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";
import styles from "./overview.module.css";

const serviceCategories = ["Digital", "Growth", "Technology"] as const;
type ServiceCategory = (typeof serviceCategories)[number];

export default function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");
  const visibleServices = activeCategory === "All"
    ? services
    : services.filter((service) => service.category === activeCategory);

  return (
    <>
      <nav className={styles.categoryBar} aria-label="Service categories">
        <span className={styles.categoryLabel}>Categories</span>
        <div className={styles.categoryLinks}>
          <button
            type="button"
            className={activeCategory === "All" ? styles.categoryLinkActive : styles.categoryLink}
            aria-pressed={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
          >
            All <span>{String(services.length).padStart(2, "0")}</span>
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? styles.categoryLinkActive : styles.categoryLink}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category} <span>{String(services.filter((service) => service.category === category).length).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="wrap" id="all-services">
        {activeCategory !== "All" && <div className={styles.categoryHeading}>{activeCategory}</div>}
        <div className={styles.list}>
          {visibleServices.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className={styles.listItem}>
              <div className={styles.row}>
                <div className={styles.rowLeft}>
                  <span className={styles.rowNum}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.rowTitle}>{service.eyebrow}</span>
                </div>
                <span className={styles.rowArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}