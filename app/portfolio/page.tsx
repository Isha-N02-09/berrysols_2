import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";
import BlogHero from "@/app/blog/BlogHero";

const portfolioProjects = [
  {
    title: "Clock Log is a tracker application",
    category: "Product design",
    excerpt:
      "A focused tracker application designed to make everyday logging simple, practical, and easy to trust.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/clock-log-is-a-tracker-application/",
  },
  {
    title: "ATF Movers",
    category: "Digital experience",
    excerpt:
      "A digital experience built to help a moving company present services clearly and win more customer trust.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/atf-movers/",
  },
  {
    title: "Same Day Me",
    category: "Healthcare",
    excerpt:
      "A healthcare-focused solution built to improve access, communication, and conversion for dental care services.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/same-day-me/",
  },
  {
    title: "ibuild.co",
    category: "Engineering",
    excerpt:
      "A polished creative network experience shaped around a clear, modern digital presence and stronger lead flow.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/ibuild-co/",
  },
  {
    title: "Telehealth",
    category: "Healthcare",
    excerpt:
      "A responsive, SEO-ready healthcare website that improves patient access, trust, and digital engagement.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/telehealth/",
  },
];

export const metadata: Metadata = {
  title: "Portfolio | Berry Solutions",
  description: "A selection of digital products, platforms, and experiences built by Berry Solutions.",
};

export default function PortfolioPage() {
  const [featuredProject, ...remainingProjects] = portfolioProjects;

  return (
    <main className="portfolio-page min-h-screen bg-white text-[#111]">
      <Navbar />

      <BlogHero>
        <header className="blog-sheet-header">
          <div className="blog-rule" />
          <div className="blog-masthead">
            <p>Berry Solutions / Selected work</p>
            <h1>PORTFOLIO</h1>
            <p>Digital products, platforms, and experiences made to move businesses forward.</p>
          </div>
        </header>
      </BlogHero>

      <section className="blog-sheet-posts" aria-label="Portfolio case studies">
        <div className="blog-section-heading">
          <span>Selected work</span>
        </div>

        <div className="blog-feature" aria-label="Featured portfolio project">
          <div className="blog-feature-image-wrap">
            <img src={featuredProject.image} alt="" className="blog-feature-image" />
            <span className="blog-feature-badge">Case<br />study</span>
          </div>

          <div className="blog-feature-card">
            <p className="blog-feature-kicker">Featured / {featuredProject.category}</p>
            <h2>{featuredProject.title}</h2>
            <p className="blog-feature-excerpt">{featuredProject.excerpt}</p>
            <Link href={featuredProject.href} className="blog-feature-link">
              View project
            </Link>
          </div>
        </div>

        <div className="blog-post-grid">
          {remainingProjects.map((project, index) => (
            <article key={project.title} className="blog-post-card group">
              <Link href={project.href} className="blog-post-image-wrap">
                <img src={project.image} alt="" className="blog-post-image" />
              </Link>
              <div className="blog-post-copy">
                <div className="blog-post-meta">
                  <span>{project.category}</span>
                  <span>Case study</span>
                </div>
                <h2>
                  <Link href={project.href}>{project.title}</Link>
                </h2>
                <p>{project.excerpt}</p>
                <div className="blog-post-footer">
                  <span>Read story</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
