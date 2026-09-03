type BlogHeroProps = {
  children: React.ReactNode;
};

export default function BlogHero({ children }: BlogHeroProps) {
  return (
    <section className="blog-hero">
      <div className="blog-hero-content">{children}</div>
    </section>
  );
}
