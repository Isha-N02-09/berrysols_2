"use client";

import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
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

const roles = [
  {
    title: "Frontend Developer",
    dept: "Engineering",
    location: "Sialkot / Remote",
    type: "Full-time",
  },
  {
    title: "AI Engineer",
    dept: "Engineering",
    location: "Sialkot / Remote",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    location: "Sialkot / Remote",
    type: "Part-time",
  },
];

const process = [
  {
    step: "01",
    title: "Apply",
    copy: "Send your CV and a couple of things you have built.",
  },
  {
    step: "02",
    title: "Review",
    copy: "We read every application with direct feedback and a clear next step.",
  },
  {
    step: "03",
    title: "Interview",
    copy: "A conversation about your work, your thinking, and how you operate.",
  },
  {
    step: "04",
    title: "Technical round",
    copy: "A short, practical challenge close to the kind of work we ship.",
  },
  {
    step: "05",
    title: "Offer",
    copy: "We move fast when the fit is clear and the chemistry is right.",
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

        .careers-marquee {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(23, 20, 16, 0.12);
          border-bottom: 1px solid rgba(23, 20, 16, 0.12);
          background: #171410;
          white-space: nowrap;
        }

        .careers-marquee-track {
          display: inline-flex;
          min-width: 100%;
          padding: 16px 0;
          animation: careers-scroll 24s linear infinite;
        }

        .careers-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          color: rgba(255, 253, 248, 0.9);
          font-size: 17px;
          letter-spacing: -0.02em;
          font-weight: 500;
          padding-right: 28px;
          text-transform: none;
        }

        .careers-marquee-item strong {
          color: #ff9c6b;
          font-weight: 600;
        }

        @keyframes careers-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .careers-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top right, rgba(244, 94, 43, 0.18), transparent 26%),
            linear-gradient(180deg, rgba(245, 240, 230, 1) 0%, rgba(255, 253, 248, 1) 100%);
        }

        .careers-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(23, 20, 16, 0.18) 1.25px, transparent 1.25px);
          background-size: 24px 24px;
          mask-image: radial-gradient(circle at center, black 42%, transparent 92%);
          opacity: 0.28;
        }

        .careers-hero-inner {
          position: relative;
          z-index: 1;
        }

        .careers-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--orange);
        }

        .careers-eyebrow::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 0 8px rgba(244, 94, 43, 0.12);
        }

        .careers-role-row {
          transition: transform 0.25s ease, background 0.25s ease, padding-left 0.25s ease;
        }

        .careers-role-row:hover {
          transform: translateY(-1px);
          background: rgba(245, 240, 230, 0.55);
          padding-left: 18px;
        }

        .careers-role-arrow {
          transition: all 0.25s ease;
        }

        .careers-role-row:hover .careers-role-arrow {
          background: var(--orange);
          border-color: var(--orange);
          color: white;
          transform: rotate(45deg);
        }

        .process-line {
          position: relative;
        }

        .process-line::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 26px;
          height: 1px;
          background: rgba(23, 20, 16, 0.16);
        }

        .process-line::after {
          content: "";
          position: absolute;
          left: 0;
          top: 26px;
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, rgba(244, 94, 43, 0.9), rgba(244, 94, 43, 0.4), transparent);
          transform-origin: left center;
          transform: scaleX(0);
          transition: transform 1s ease;
        }

        [data-reveal].is-visible .process-line::after {
          transform: scaleX(1);
        }

        @media (max-width: 860px) {
          .careers-role-row {
            grid-template-columns: 1fr;
            row-gap: 10px;
          }

          .careers-role-arrow {
            display: none;
          }

          .process-line {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .process-line::before,
          .process-line::after {
            display: none;
          }
        }
      `}</style>

      <Navbar />

      <section data-reveal className="careers-hero px-[var(--gutter)] pb-20 pt-24 md:pt-28">
        <div className="careers-hero-inner mx-auto max-w-[1200px]">
          <div className="careers-eyebrow mb-8">Careers at Berry Solutions</div>

          <h1 className="max-w-[1100px] text-[3.2rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#171410] sm:text-6xl md:text-[7rem] lg:text-[8rem]">
            Build what <span className="italic text-[#f45e2b]">ships</span>, not what gathers dust.
          </h1>

          <div className="mt-8 flex flex-col items-start justify-between gap-7 md:flex-row md:items-end">
            <p className="max-w-[34rem] text-lg leading-8 text-[#5f5a53] md:text-2xl md:leading-10">
              A software house building production work for real clients. Small team, direct ownership, and work that reaches the market the week you ship it.
            </p>

            <a
              href="mailto:careers@berrysols.com?subject=Open%20role%20inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f45e2b] px-7 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#ce4111]"
            >
              See open roles <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div className="careers-marquee" aria-label="Hiring highlights">
        <div className="careers-marquee-track">
          {[...Array(2)].flatMap(() => [
            <span key={Math.random()} className="careers-marquee-item"><strong>Frontend Developer</strong><span>·</span></span>,
            <span key={Math.random()} className="careers-marquee-item"><strong>AI Engineer</strong><span>·</span></span>,
            <span key={Math.random()} className="careers-marquee-item"><strong>UI/UX Designer</strong><span>·</span></span>,
            <span key={Math.random()} className="careers-marquee-item">Sialkot<span>·</span></span>,
            <span key={Math.random()} className="careers-marquee-item">Remote-friendly<span>·</span></span>,
          ])}
        </div>
      </div>

      <section data-reveal className="border-b border-black/10 bg-white px-[var(--gutter)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.7fr] lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ce4111]">Why work here</p>
            <h2 className="max-w-sm text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
              No layers between you and the work.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-xl leading-8 text-[#5f5a53] md:text-2xl md:leading-10">
              You will ship to clients within your first weeks, not your first year. Decisions get made at your desk, not three meetings away.
            </p>

            <div className="mt-12 space-y-0 border-t border-black/15">
              {values.map((value) => (
                <article key={value.number} className="grid gap-6 border-b border-black/15 py-8 md:grid-cols-[92px_1fr] md:gap-10 md:py-10">
                  <div className="font-serif text-5xl font-medium text-[#e9e0d2] md:text-6xl">{value.number}</div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold tracking-[-0.04em]">{value.title}</h3>
                    <p className="max-w-[42rem] text-base leading-7 text-[#756f65]">{value.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="border-b border-black/10 px-[var(--gutter)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-[3.2rem] font-semibold leading-none text-[#f45e2b] md:text-[5rem]">Live</div>
            <p className="mt-4 max-w-[20rem] text-sm leading-6 text-[#756f65]">Every project ships to a real client, not a demo.</p>
          </div>
          <div>
            <div className="font-serif text-[3.2rem] font-semibold leading-none text-[#f45e2b] md:text-[5rem]">Sialkot</div>
            <p className="mt-4 max-w-[20rem] text-sm leading-6 text-[#756f65]">Home base, open to remote across Pakistan.</p>
          </div>
          <div>
            <div className="font-serif text-[3.2rem] font-semibold leading-none text-[#f45e2b] md:text-[5rem]">1:1</div>
            <p className="mt-4 max-w-[20rem] text-sm leading-6 text-[#756f65]">Direct mentorship, no layers of management.</p>
          </div>
        </div>
      </section>

      <section id="open-roles" data-reveal className="px-[var(--gutter)] py-20 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ce4111]">Open positions</p>
              <h2 className="max-w-3xl text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.05em] md:text-7xl">Find your role.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#756f65]">Nothing fits right now? Send your CV anyway — we are always reading for the right person.</p>
          </div>

          <div className="rounded-[18px] border border-black/10 bg-white">
            {roles.map((role) => (
              <a
                key={role.title}
                href={`mailto:careers@berrysols.com?subject=${encodeURIComponent(role.title)}`}
                className="careers-role-row grid items-center gap-5 border-b border-black/10 px-5 py-6 md:grid-cols-[2.3fr_1fr_1fr_auto] md:px-8"
              >
                <div>
                  <div className="text-[1.7rem] font-bold tracking-[-0.04em] md:text-[2.1rem]">{role.title}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#756f65]">{role.dept}</div>
                </div>
                <div className="text-sm text-[#5f5a53]">{role.location}</div>
                <div className="text-sm text-[#5f5a53]">{role.type}</div>
                <div className="careers-role-arrow flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-transparent text-lg text-[#171410]">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="px-[var(--gutter)] py-20 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ce4111]">How hiring works</p>
              <h2 className="max-w-3xl text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">Five steps, two to three weeks.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#756f65]">We will tell you where you stand at every stage, with no disappearing into a black hole.</p>
          </div>

          <div className="process-line grid gap-8 pt-6 md:grid-cols-5 md:gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative pt-8 md:pr-5">
                <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.18em] text-[#f45e2b]">{item.step}</span>
                <h3 className="mb-3 text-xl font-bold tracking-[-0.03em]">{item.title}</h3>
                <p className="text-sm leading-6 text-[#756f65]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="px-[var(--gutter)] pb-28 pt-10 md:pb-36">
        <div className="mx-auto max-w-[1200px] rounded-[28px] border border-black/10 bg-white px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ce4111]">
                <Sparkles size={16} aria-hidden="true" />
                We are always open
              </div>
              <h2 className="max-w-[20ch] text-4xl font-extrabold uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
                Don’t see your role? Introduce yourself anyway.
              </h2>
            </div>

            <div className="flex flex-col items-start gap-5">
              <p className="max-w-[32rem] text-lg leading-8 text-[#5f5a53]">
                We are always interested in meeting people who build good software. Send your CV and tell us the kind of work you would love to do.
              </p>
              <a
                href="mailto:careers@berrysols.com?subject=Introduce%20myself"
                className="inline-flex items-center gap-2 rounded-full bg-[#171410] px-7 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#ce4111]"
              >
                Send your CV <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
