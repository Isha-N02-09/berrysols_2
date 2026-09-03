import Link from "next/link";
import styles from "./BlogStrip.module.css";

const blogs = [
  {
    title: "AI Agents: The Future of Automation",
    description:
      "Explore how AI agents are shaping the future of intelligent automation.",
    slug: "ai-agent-future-automation",
  },
  {
    title: "SEO for Startups: Organic Growth",
    description:
      "Learn how startups can use SEO to build sustainable organic growth.",
    slug: "seo-for-startups-organic-growth",
  },
  {
    title: "Cybersecurity for Startups in 2025",
    description:
      "Essential cybersecurity practices and considerations for modern startups.",
    slug: "cybersecurity-for-startups-in-2025",
  },
  {
    title: "How to Start an Ecommerce Business in 2025",
    description:
      "A guide to starting and growing an ecommerce business.",
    slug: "how-to-start-an-ecommerce-business-in-2025",
  },
  {
    title: "What Is Cybersecurity?",
    description:
      "Understand the basics of cybersecurity and why it matters.",
    slug: "what-is-cybersecurity",
  },
  {
    title: "Adaptive Software Development",
    description:
      "Discover a flexible approach to building software in changing environments.",
    slug: "adaptive-software-development",
  },
  {
    title: "How to Use ChatGPT to Write SEO Content",
    description:
      "Learn how AI can help create content for your SEO strategy.",
    slug: "use-chatgpt-to-write-seo-content",
  },
  {
    title: "ChatGPT for Technical SEO with AI",
    description:
      "Discover how ChatGPT and AI can assist with technical SEO tasks.",
    slug: "chatgpt-for-technical-seo-with-ai",
  },
];

export default function BlogStrip() {
  const track = [...blogs, ...blogs];

  return (
    <div className={styles.serviceStrip}>
      <div className={styles.heading}>
        <span className={styles.line} />
        <h2>Latest Blogs</h2>
      </div>

      <div className={styles.viewport}>
        <div className={styles.track}>
          {track.map((blog, index) => (
            <Link
              href={`/blog/${blog.slug}`}
              className={styles.item}
              key={`${blog.title}-${index}`}
            >
              <div>
                <b>{blog.title}</b>
                <p>{blog.description}</p>
              </div>

              <i>→</i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}