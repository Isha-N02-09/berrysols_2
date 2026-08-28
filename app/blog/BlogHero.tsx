"use client";

import { useEffect, useState } from "react";

type BlogHeroProps = {
  children: React.ReactNode;
};

export default function BlogHero({ children }: BlogHeroProps) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const updateHeroSize = () => setIsCompact(window.scrollY > 120);
    updateHeroSize();
    window.addEventListener("scroll", updateHeroSize, { passive: true });

    return () => window.removeEventListener("scroll", updateHeroSize);
  }, []);

  return (
    <section className={`blog-hero ${isCompact ? "blog-hero--compact" : ""}`}>
      <div className="blog-hero-frame">
        <img src="/assets/blogbg.png" alt="" className="blog-hero-image" />
      </div>
      <div className="blog-hero-content">{children}</div>
    </section>
  );
}
