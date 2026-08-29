"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";

const values = [
  {
    number: "01",
    title: "Stay curious",
    copy: "We ask better questions before we rush toward answers.",
  },
  {
    number: "02",
    title: "Make it useful",
    copy: "Good work should create momentum for the people using it.",
  },
  {
    number: "03",
    title: "Own the outcome",
    copy: "We bring care, clarity, and follow-through to every detail.",
  },
];

export default function CareersPage() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" className="min-h-screen bg-[#fffdf8] text-[#171410]">
      <style jsx>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <Navbar />

      <section data-reveal className="overflow-hidden bg-white px-[var(--gutter)] pb-20 pt-24 md:pt-28">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#1d2a2a] md:text-sm">
            Careers at Pulse
          </p>

          <h1 className="mx-auto max-w-[1100px] text-[3.2rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#171410] sm:text-6xl md:text-[7rem] lg:text-[8rem]">
            Join the team behind the future of work
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[#5f5a53] md:text-2xl md:leading-10">
            At Pulse, we are building the tools that help companies thrive, and we are looking for people who want to shape how teams connect, grow, and succeed.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="mailto:hello@berrysols.com?subject=Let%27s%20talk%20about%20working%20together"
              className="inline-flex items-center justify-center rounded-full bg-[#f45e2b] px-7 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#ce4111]"
            >
              Talk to Berry
            </a>
          </div>
        </div>
      </section>

      <section data-reveal className="border-y border-black/10 bg-white px-[var(--gutter)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.8fr_1.6fr] lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ce4111]">How we work</p>
            <h2 className="max-w-sm text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Bring your whole self.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-xl leading-8 text-[#5f5a53] md:text-2xl md:leading-10">
              The best work happens when strategy, craft, and humanity sit at the same table. You will have room to think deeply, speak plainly, and shape the way we grow.
            </p>
            <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-3 md:gap-6">
              {values.map((value) => (
                <article key={value.number}>
                  <p className="mb-7 font-mono text-xs font-semibold tracking-[0.18em] text-[#f45e2b]">{value.number}</p>
                  <h3 className="mb-3 text-xl font-bold uppercase">{value.title}</h3>
                  <p className="text-sm leading-6 text-[#756f65]">{value.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="open-roles" data-reveal className="px-[var(--gutter)] py-20 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ce4111]">Open roles</p>
              <h2 className="max-w-3xl text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.05em] md:text-7xl">No open roles right now.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#756f65]">We are growing carefully. The next opportunity will appear here when the right one opens.</p>
          </div>

          <div className="flex min-h-56 flex-col items-start justify-center border-y-2 border-[#171410] bg-white px-7 py-10 md:px-12">
            <BriefcaseBusiness className="mb-5 text-[#f45e2b]" size={30} aria-hidden="true" />
            <h3 className="text-2xl font-bold tracking-[-0.03em] md:text-3xl">Our team is complete for now.</h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#756f65]">Keep an eye on this page for future openings, or send us a note so we know what kind of work you would love to do with Berry.</p>
          </div>

        
        </div>
      </section>

      <section data-reveal className="border-t border-black/10 px-[var(--gutter)] py-20 md:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <CircleCheck className="mb-6 text-[#f45e2b]" size={30} aria-hidden="true" />
            <h2 className="max-w-2xl text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">Clear minds. Kind people. Better outcomes.</h2>
          </div>
          <a
            href="mailto:hello@berrysols.com?subject=Hello%20Berry%20team"
            className="inline-flex items-center gap-2 border-b border-[#171410] pb-2 text-sm font-semibold uppercase tracking-[0.1em] transition-colors hover:border-[#f45e2b] hover:text-[#ce4111]"
          >
            Talk to Berry <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
