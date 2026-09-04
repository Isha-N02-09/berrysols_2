import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";
import BlogEngagement from "@/components/BlogEngagement";
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
      <article className="blog-article px-6 pb-24 pt-36 lg:px-[12vw] lg:pt-48">
        <Link href="/blog" className="blog-back-link">Back to journal</Link>
        <div className="blog-article-heading">
          <p className="blog-article-meta">{post.category} / {post.date} / 0 Comments</p>
          <h1>{post.title}</h1>
          <p className="blog-author">By Ahsan Mehmood</p>
        </div>
        <img src={post.image} alt={post.title} className="blog-article-image" />
        <div className="blog-article-layout">
          <div className="blog-article-body">
            <p className="blog-article-lede">{post.excerpt}</p>
            {post.stats && <div className="blog-stat-grid" aria-label="Article statistics">{post.stats.map((stat) => <div className="blog-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.detail}</small></div>)}</div>}
            {post.graph && <div className="blog-graph" aria-label="Article graph"><div className="blog-graph-heading"><span>Signal at a glance</span><small>Relative index</small></div>{post.graph.map((item) => <div className="blog-graph-row" key={item.label}><span>{item.label}</span><div><i style={{ width: `${item.value}%` }} /></div><strong>{item.value}</strong></div>)}</div>}
            <div className="blog-article-sections">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.image && <img src={section.image} alt="" className="blog-inline-image" />}
                  <div>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </section>
              ))}
              {post.table && (
                <div className="blog-table-wrap">
                  <table>
                    <thead><tr>{post.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                    <tbody>{post.table.rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
              {post.relatedImages && <div className="blog-related-images">{post.relatedImages.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>)}</div>}
              {post.faqs && <section><h2>FAQs</h2><div className="blog-faqs">{post.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</div></section>}
            </div>
          </div>
          <aside className="blog-article-sidebar">
            <BlogEngagement />
            <p>About Author</p>
            <h2>Ahsan Mehmood</h2>
            <p>Welcome to Berry Solutions! I&apos;m Ahsan, the CEO and Founder. I&apos;m a passionate tech enthusiast and digital solutions architect with over 10 years of experience in the IT industry.</p>
            <Link href="/blog">More stories</Link>
          </aside>
        </div>
      </article>
      <SimpleFooter />
    </main>
  );
}