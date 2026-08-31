import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { getService, getAllSlugs } from "@/data/services";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.eyebrow} — Berry`,
    description: service.description,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
