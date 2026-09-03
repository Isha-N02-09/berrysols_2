import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";
import Services from "@/components/Services";
import BlogHero from "@/app/blog/BlogHero";

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

      <Services />
      <SimpleFooter />
    </main>
  );
}
