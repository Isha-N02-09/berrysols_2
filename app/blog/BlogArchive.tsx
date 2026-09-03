"use client";

import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";

type BlogArchiveProps = {
  posts: BlogPost[];
};

const categories = ["All", "Digital", "Growth", "Technology"] as const;
type Category = (typeof categories)[number];

export default function BlogArchive({ posts }: BlogArchiveProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visiblePosts = activeCategory === "All"
    ? posts
    : posts.filter((post) => post.category === activeCategory);
  const latestPost = posts[0];

  return (
    <>
      <nav className="blog-category-bar" aria-label="Post categories">
        <span className="blog-category-label">Categories</span>
        <div className="blog-filters">
          {categories.map((category) => {
            const count = category === "All"
              ? posts.length
              : posts.filter((post) => post.category === category).length;

            return (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category} <span>{String(count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <section className="blog-feature" aria-label="Latest blog post">
        <div className="blog-feature-image-wrap">
          <img src={latestPost.image} alt="" className="blog-feature-image" />
          <span className="blog-feature-badge">Read<br />the<br />latest</span>
        </div>
        <div className="blog-feature-card">
          <p className="blog-feature-kicker">Featured / {latestPost.category}</p>
          <h2>{latestPost.title}</h2>
          <p className="blog-feature-excerpt">{latestPost.excerpt}</p>
          <Link href={`/blog/${latestPost.slug}`} className="blog-feature-link">Read post</Link>
        </div>
      </section>

      <section className="blog-sheet-posts" aria-label="Blog posts">
        <div className="blog-section-heading"><span>All stories</span></div>
        <div className="blog-post-grid">
          {visiblePosts.map((post, index) => (
            <article key={post.slug} className="blog-post-card group">
              <Link href={`/blog/${post.slug}`} className="blog-post-image-wrap">
                <img src={post.image} alt="" className="blog-post-image" />
              </Link>
              <div className="blog-post-copy">
                <div className="blog-post-meta"><span>{post.date}</span><span>{post.category}</span></div>
                <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.excerpt}</p>
                <div className="blog-post-footer"><span>Read story</span><span>{String(index + 1).padStart(2, "0")}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
