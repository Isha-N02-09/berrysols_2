import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";
import { careerRoles, getCareerRole } from "@/data/careers";

type CareerDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const role = getCareerRole(params.slug);

  if (!role) notFound();

  return (
    <main className="min-h-screen bg-white text-[#171410]">
      <Navbar />
      <section className="border-b border-black/10 px-[var(--gutter)] pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1200px]">
          <Link href="/careers#open-roles" className="mb-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ce4111] transition-colors hover:text-[#171410]">
            <ArrowLeft size={15} aria-hidden="true" /> All open positions
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ce4111]">{role.dept} / {role.type}</p>
              <h1 className="max-w-4xl text-6xl font-extrabold uppercase leading-[0.88] tracking-[-0.06em] md:text-8xl">{role.title}</h1>
            </div>
            <p className="max-w-sm text-lg leading-8 text-[#5f5a53]">{role.summary}</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-black/15 pt-5 text-sm font-semibold uppercase tracking-[0.12em]">
            <span>{role.location}</span>
            <span>{role.type}</span>
          </div>
        </div>
      </section>

      <section className="px-[var(--gutter)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ce4111]">The role</p>
            <h2 className="max-w-sm text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">Make useful work with us.</h2>
          </div>
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <h3 className="mb-6 border-b border-black/15 pb-4 text-xl font-bold">Responsibilities</h3>
              <ul className="space-y-5">
                {role.responsibilities.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-[#5f5a53]"><Check className="mt-1 shrink-0 text-[#ce4111]" size={17} aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 border-b border-black/15 pb-4 text-xl font-bold">Requirements</h3>
              <ul className="space-y-5">
                {role.requirements.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-[#5f5a53]"><Check className="mt-1 shrink-0 text-[#ce4111]" size={17} aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-[1200px] border-t border-black/15 pt-8">
          <Link href={`/careers/${role.slug}/apply`} className="inline-flex items-center rounded-full bg-[#171410] px-7 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#ce4111]">Apply to job</Link>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
