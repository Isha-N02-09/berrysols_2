"use client";

import Image from "next/image";
import styles from "./Insights.module.css";

const insightColumns = [
  [
    {
      category: "Case Study",
      title: "US Fashion Resale Platform Scales to 100K+ Transactions",
      image: "/assets/inslights/1.jpg",
    },
    {
      category: "Blogs",
      title: "How Cloud Computing Can Transform Your Business",
      image: "/assets/inslights/2.jpg",
    },
  ],

  [
    {
      category: "Blogs",
      title: "Custom Web Application: Everything You Need to Know",
      image: "/assets/inslights/3.jpg",
    },
    {
      category: "Blogs",
      title: "Trends of Mobile Design: What's Next for Your Business?",
      image: "/assets/inslights/4.jpg",
    },
    {
      category: "Blogs",
      title: "How Generative AI is Transforming Business Operations",
      image: "/assets/inslights/5.jpg",
    },
  ],

  [
    {
      category: "Case Study",
      title: "Hospital AI Platform Reconciles $300M+ in Automation",
      image: "/assets/inslights/6.jpg",
    },
    {
      category: "Case Study",
      title: "Pakistan's Furniture Leader Shoots 55% Margin Growth",
      image: "/assets/inslights/7.jpg",
    },
    {
      category: "Case Study",
      title: "US Fintech's AI Financial Modeling Secures $2M+ Funding",
      image: "/assets/inslights/7.jpg",
    },
  ],
];

export default function Insight() {
  return (
    <section className={styles.insightSection}>
      <div className={styles.leftContent}>
        <span className={styles.eyebrow}>
          FEATURED INSIGHTS
        </span>

        <h2>
          Stories of our transformations across
          <br />
          Services and Industries
        </h2>

        <p>From Concept to Completion</p>

        <button>Explore More</button>
      </div>

      <div className={styles.insightsArea}>
        <div className={styles.columns}>
          {insightColumns.map((column, columnIndex) => (
            <div
              className={`${styles.column} ${
                styles[`column${columnIndex + 1}`]
              }`}
              key={columnIndex}
            >
              {column.map((insight, index) => (
                <article
                  className={styles.insightCard}
                  key={index}
                >
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className={styles.image}
                  />

                  <div className={styles.overlay} />

                  <div className={styles.cardContent}>
                    <span>{insight.category}</span>

                    <h3>{insight.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}