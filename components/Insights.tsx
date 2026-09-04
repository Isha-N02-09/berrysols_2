"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import styles from "./Insights.module.css";

type Insight = {
  category: string;
  title: string;
  image: string;
  slug?: string;
};

const blogInsights: Insight[] = blogPosts.slice(0, 5).map((post) => ({
  category: "Blog",
  title: post.title,
  image: post.image,
  slug: post.slug,
}));

const insightColumns: Insight[][] = [
  [
    {
      category: "Case Study",
      title: "US Fashion Resale Platform Scales to 100K+ Transactions",
      image: "/assets/inslights/1.jpg",
    },
    {
      ...blogInsights[0],
      image: "/assets/inslights/2.jpg",
    },
  ],

  [
    {
      ...blogInsights[1],
      image: "/assets/inslights/3.jpg",
    },
    {
      ...blogInsights[2],
      image: "/assets/inslights/4.jpg",
    },
    {
      ...blogInsights[3],
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
      ...blogInsights[4],
      image: "/assets/inslights/7.jpg",
    },
    {
      category: "Case Study",
      title: "US Fintech's AI Financial Modeling Secures $2M+ Funding",
      image: "/assets/inslights/8.jpg",
    },
  ],
];

export default function Insight() {
  return (
    <section className={styles.insightSection}>
      <div className={styles.inner}>
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

          <Link href="/blog" className={styles.exploreLink}>
            Learn more <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
          </Link>
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
                    {insight.slug ? (
                      <Link href={`/blog/${insight.slug}`} className={styles.cardLink}>
                        <Image src={insight.image} alt={insight.title} fill className={styles.image} />
                        <div className={styles.overlay} />
                        <div className={styles.cardContent}>
                          <span>{insight.category}</span>
                          <h3>{insight.title}</h3>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <Image src={insight.image} alt={insight.title} fill className={styles.image} />
                        <div className={styles.overlay} />
                        <div className={styles.cardContent}>
                          <span>{insight.category}</span>
                          <h3>{insight.title}</h3>
                        </div>
                      </>
                    )}
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}