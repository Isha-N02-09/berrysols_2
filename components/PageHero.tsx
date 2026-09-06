type PageHeroProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageHero({ children, className = "" }: PageHeroProps) {
  return (
    <section className={`blog-hero ${className}`.trim()}>
      <div className="blog-hero-content">{children}</div>
    </section>
  );
}
