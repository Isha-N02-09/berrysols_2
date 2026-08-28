import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";
import { blogPosts, getBlogPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  return { title: post ? `${post.title} | Berry Solutions` : "Blog | Berry Solutions", description: post?.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#171410]">
      <Navbar />
      <article className="px-6 pb-24 pt-36 lg:px-[12vw] lg:pt-48">
        <Link href="/blog" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f45e2b] hover:text-[#ce4111]">Back to journal</Link>
        <div className="mt-8 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#756f65]">{post.category} / {post.date}</p>
          <h1 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-[#ce4111] md:text-7xl">{post.title}</h1>
        </div>
        <img src={post.image} alt="" className="mt-14 aspect-[1.8] w-full object-cover" />
        <div className="mx-auto mt-12 max-w-2xl text-lg leading-8 text-[#4f4a43]">
          <p className="text-2xl leading-9 text-[#171410]">{post.excerpt}</p>
          <div className="mt-12 space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-medium leading-tight tracking-[-0.025em] text-[#ce4111]">{section.heading}</h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
      <SimpleFooter />
    </main>
  );
}