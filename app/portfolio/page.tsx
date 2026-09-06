import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";
import BlogHero from "@/app/blog/BlogHero";
import PortfolioList from "./PortfolioList";

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
  {
    title: "Northline Logistics",
    category: "Operations platform",
    excerpt: "A logistics brand system and conversion-focused site experience built to strengthen trust and streamline buyer decisions.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/northline-logistics/",
  },
  {
    title: "Summit Dental Care",
    category: "Healthcare",
    excerpt: "A patient-first digital experience designed to clarify services, reduce friction, and increase booked appointments.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/summit-dental-care/",
  },
  {
    title: "Atlas Living",
    category: "Brand experience",
    excerpt: "A warm, editorial marketing site for a hospitality brand built to elevate story, trust, and direct inquiry flow.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/atlas-living/",
  },
  {
    title: "Harbor Finance",
    category: "Fintech",
    excerpt: "A secure, confidence-driven website system that turns complex financial messaging into a clearer customer path.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/harbor-finance/",
  },
  {
    title: "Motive Studio",
    category: "Creative network",
    excerpt: "A modern portfolio and service platform designed to help a creative studio attract the right clients and partnerships.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/motive-studio/",
  },
  {
    title: "Relic Commerce",
    category: "E-commerce",
    excerpt: "An online storefront refresh focused on product discovery, brand clarity, and stronger mobile conversion performance.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/relic-commerce/",
  },
  {
    title: "Kite Ops",
    category: "B2B software",
    excerpt: "A cleaner SaaS narrative and landing experience built to make technical value easier to understand and buy.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/kite-ops/",
  },
  {
    title: "Orchard Lane",
    category: "Home services",
    excerpt: "A modern service website crafted to strengthen lead quality, trust, and local search visibility for a growing company.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/orchard-lane/",
  },
  {
    title: "Northstar Labs",
    category: "Research platform",
    excerpt: "A product-focused launch site built to distill a complex service offering into a clear conversion path for buyers.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/northstar-labs/",
  },
  {
    title: "Brightpath Studio",
    category: "Brand strategy",
    excerpt: "A presentation-rich identity site designed to help a consulting practice look premium, modern, and easy to trust.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/brightpath-studio/",
  },
  {
    title: "Pulse Health",
    category: "Digital health",
    excerpt: "A highly structured health-tech website experience designed to present services clearly and support enrolled leads.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/pulse-health/",
  },
  {
    title: "Riverstone Advisors",
    category: "Professional services",
    excerpt: "A polished consulting presence built to balance credibility, trust, and conversion with a refined strategic story.",
    image: "/assets/vector1.png",
    href: "https://berrysols.com/portfolio/riverstone-advisors/",
  },
  {
    title: "Asteri Labs",
    category: "Product design",
    excerpt: "A premium web presence and service narrative designed to help a product-thinking team stand out in a crowded market.",
    image: "/assets/vector2.png",
    href: "https://berrysols.com/portfolio/asteri-labs/",
  },
];

export const metadata: Metadata = {
  title: "Portfolio | Berry Solutions",
  description: "A selection of digital products, platforms, and experiences built by Berry Solutions.",
};

export default function PortfolioPage() {
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

      <PortfolioList projects={portfolioProjects} />
      <SimpleFooter />
    </main>
  );
}
