import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import styles from "@/styles/Insights.module.css";

type Insight = {
  category: string;
  title: string;
  image: string;
  slug?: string;
  href?: string;
};

const blogInsights: Insight[] = blogPosts.slice(0, 5).map((post) => ({
  category: "Blog",
  title: post.title,
  image: post.image,
  slug: post.slug,
  href: `/blog/${post.slug}`,
}));

const insightColumns: Insight[][] = [
  [
    {
      category: "Case Study",
      title: "Relic Commerce",
      image: "/assets/inslights/1.jpg",
      slug: "relic-commerce",
      href: "/portfolio/relic-commerce",
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
      title: "Telehealth",
      image: "/assets/inslights/6.jpg",
      slug: "telehealth",
      href: "/portfolio/telehealth",
    },
    {
      ...blogInsights[4],
      image: "/assets/inslights/7.jpg",
    },
    {
      category: "Case Study",
      title: "Harbor Finance",
      image: "/assets/inslights/8.jpg",
      slug: "harbor-finance",
      href: "/portfolio/harbor-finance",
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
                    {insight.href ? (
                      <Link href={insight.href} className={styles.cardLink}>
                        <Image
                          src={insight.image}
                          alt={insight.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 260px"
                          className={styles.image}
                        />
                        <div className={styles.overlay} />
                        <div className={styles.cardContent}>
                          <span>{insight.category}</span>
                          <h3>{insight.title}</h3>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <Image
                          src={insight.image}
                          alt={insight.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 260px"
                          className={styles.image}
                        />
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