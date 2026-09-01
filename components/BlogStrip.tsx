import Link from "next/link";
import styles from "./BlogStrip.module.css";

const blogs = [
  {
    title: "AI Agents: The Future of Automation",
    description:
      "Explore how AI agents are shaping the future of intelligent automation.",
    link: "https://berrysols.com/blog/ai-agent-future-automation/",
  },
  {
    title: "SEO for Startups: Organic Growth",
    description:
      "Learn how startups can use SEO to build sustainable organic growth.",
    link: "https://berrysols.com/blog/seo-for-startups-organic-growth/",
  },
  {
    title: "Cybersecurity for Startups in 2025",
    description:
      "Essential cybersecurity practices and considerations for modern startups.",
    link: "https://berrysols.com/blog/cybersecurity-for-startups-in-2025/",
  },
  {
    title: "How to Start an Ecommerce Business in 2025",
    description:
      "A guide to starting and growing an ecommerce business.",
    link: "https://berrysols.com/blog/how-to-start-an-ecommerce-business-in-2025/",
  },
  {
    title: "What Is Cybersecurity?",
    description:
      "Understand the basics of cybersecurity and why it matters.",
    link: "https://berrysols.com/blog/what-is-cybersecurity/",
  },
  {
    title: "Standard",
    description:
      "Explore more insights, articles, and resources from Berry Solutions.",
    link: "https://berrysols.com/blog/category/standard/",
  },
  {
    title: "Adaptive Software Development",
    description:
      "Discover a flexible approach to building software in changing environments.",
    link: "https://berrysols.com/blog/adaptive-software-development/",
  },
  {
    title: "How to Use ChatGPT to Write SEO Content",
    description:
      "Learn how AI can help create content for your SEO strategy.",
    link: "https://berrysols.com/blog/use-chatgpt-to-write-seo-content/",
  },
  {
    title: "ChatGPT for Technical SEO with AI",
    description:
      "Discover how ChatGPT and AI can assist with technical SEO tasks.",
    link: "https://berrysols.com/blog/chatgpt-for-technical-seo-with-ai/",
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
              href={blog.link}
              className={styles.item}
              key={`${blog.title}-${index}`}
              target="_blank"
              rel="noopener noreferrer"
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