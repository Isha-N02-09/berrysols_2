import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { getService, getAllSlugs } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.eyebrow,
    description: service.description,
    keywords: [service.eyebrow, "Berry Solutions", service.category],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      title: service.eyebrow,
      description: service.description,
      url: absoluteUrl(`/services/${service.slug}`),
    },
    twitter: { card: "summary" },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
