import PageHero from "@/components/PageHero";

type BlogHeroProps = {
  children: React.ReactNode;
};

export default function BlogHero({ children }: BlogHeroProps) {
  return <PageHero>{children}</PageHero>;
}
