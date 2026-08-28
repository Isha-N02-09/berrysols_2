import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";
import { blogPosts } from "@/lib/blog";
import BlogHero from "./BlogHero";

export const metadata: Metadata = {
  title: "Blog | Berry Solutions",
  description: "Practical perspectives on digital products, growth, and technology from Berry Solutions.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#171410]">
      <Navbar />
      <BlogHero>
        <header className="px-6 pb-16 pt-36 lg:px-[8vw] lg:pb-24 lg:pt-48">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f45e2b]">Berry Solutions / Journal</p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-[#ce4111] md:text-7xl lg:text-8xl">Ideas that move businesses forward.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#756f65]">Perspectives on technology, digital growth, and the decisions that turn a good idea into useful work.</p>
        </header>
      </BlogHero>

      <section className="border-t border-black/10 px-6 py-14 lg:px-[8vw] lg:py-20" aria-label="Blog posts">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className="group flex flex-col">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden bg-[#eae2d4]">
                <img src={post.image} alt="" className="aspect-[1.48] w-full object-cover transition duration-700 group-hover:scale-105" />
              </Link>
              <div className="flex items-center gap-3 pt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f45e2b]"><span>{String(index + 1).padStart(2, "0")}</span><span className="h-px w-6 bg-[#f45e2b]" /><span>{post.category}</span></div>
              <h2 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.025em] group-hover:text-[#ce4111]"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p className="mt-4 leading-7 text-[#756f65]">{post.excerpt}</p>
              <time className="mt-5 text-xs uppercase tracking-[0.14em] text-[#9b9388]">{post.date}</time>
            </article>
          ))}
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}