"use client";


import "./about.css";
import { useEffect, useRef, useState } from "react";
import { BarChart3, Bot, MessageCircle, Zap } from "lucide-react";
import SimpleFooter from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactFlow from "../components/ContactFlow";
const TEAM = [
  {
    name: "Ahmed Mehmood",
    role: "Full-Stack Engineer",
    img: "/male.png",
    initials: "AM",
    gradient: "linear-gradient(135deg,#FF5A1F,#FFB020)",
  },
  {
    name: "Isha",
    role: "AI & Automation",
    img: "/female.jpg",
    initials: "SR",
    gradient: "linear-gradient(135deg,#FFB020,#FF5A1F)",
  },
  {
    name: "[Name]",
    role: "Product & Systems Design",
    img: "/male2.jpg",
    initials: "MH",
    gradient: "linear-gradient(135deg,#F4F2EE,#FF5A1F)",
  },
  {
    name: "[Name]",
    role: "Client Strategy",
    img: "/male3.jpg",
    initials: "JW",
    gradient: "linear-gradient(135deg,#E0470B,#FFB020)",
  },
  {
    name: "[Name]",
    role: "Creative Technology",
    img: "/female2.jpg",
    initials: "KT",
    gradient: "linear-gradient(135deg,#FF8A3D,#F4F2EE)",
  },
];

export default function AboutPage() {
  const barRef = useRef<HTMLDivElement>(null);
  const whoHeroRef = useRef<HTMLElement>(null);
  const halfLeftRef = useRef<HTMLSpanElement>(null);
  const halfRightRef = useRef<HTMLSpanElement>(null);
  const whoEyebrowRef = useRef<HTMLDivElement>(null);
  const whoStoryRef = useRef<HTMLDivElement>(null);
  const stepsWrapRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);
  const dotFieldSvgRef = useRef<SVGSVGElement>(null);

  const [activeTeam, setActiveTeam] = useState(2);

  // scroll progress bar
  useEffect(() => {
    function updateBar() {
      const h = document.documentElement;

      if (barRef.current) {
        const maxScroll = h.scrollHeight - h.clientHeight;

        barRef.current.style.width =
          (maxScroll > 0 ? (h.scrollTop / maxScroll) * 100 : 0) + "%";
      }
    }

    document.addEventListener("scroll", updateBar, { passive: true });
    updateBar();

    return () => document.removeEventListener("scroll", updateBar);
  }, []);

  // generic reveal-on-scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    document
      .querySelectorAll(".reveal, .reveal-stagger, .step")
      .forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, []);

  // "Who We Are" pinned reveal
  useEffect(() => {
    function onScrollWho() {
      const whoHero = whoHeroRef.current;
      const halfLeft = halfLeftRef.current;
      const halfRight = halfRightRef.current;
      const whoEyebrow = whoEyebrowRef.current;
      const whoStory = whoStoryRef.current;

      if (
        !whoHero ||
        !halfLeft ||
        !halfRight ||
        !whoEyebrow ||
        !whoStory
      ) {
        return;
      }

      const rect = whoHero.getBoundingClientRect();
      const total = whoHero.offsetHeight - window.innerHeight;

      const scrolled = -rect.top;

      const progress =
        total > 0
          ? Math.min(Math.max(scrolled / total, 0), 1)
          : 0;

      const spread = progress * 46;

      halfLeft.style.transform = `translateX(${-spread}vw)`;
      halfRight.style.transform = `translateX(${spread}vw)`;

      const titleFade = Math.max(1 - progress * 1.6, 0);

      halfLeft.style.opacity = String(titleFade);
      halfRight.style.opacity = String(titleFade);
      whoEyebrow.style.opacity = String(titleFade);

      const storyIn = Math.min(
        Math.max((progress - 0.25) / 0.55, 0),
        1
      );

      whoStory.style.opacity = String(storyIn);
      whoStory.style.transform = `translateY(${(1 - storyIn) * 18}px)`;
    }

    document.addEventListener("scroll", onScrollWho, {
      passive: true,
    });

    window.addEventListener("resize", onScrollWho);

    onScrollWho();

    return () => {
      document.removeEventListener("scroll", onScrollWho);
      window.removeEventListener("resize", onScrollWho);
    };
  }, []);

  // approach timeline fill
  useEffect(() => {
    function onScrollSteps() {
      const stepsWrap = stepsWrapRef.current;
      const fillLine = fillLineRef.current;

      if (!stepsWrap || !fillLine) return;

      const rect = stepsWrap.getBoundingClientRect();

      const progressed = Math.min(
        Math.max(
          (window.innerHeight * 0.8 - rect.top) / rect.height,
          0
        ),
        1
      );

      fillLine.style.height = progressed * 100 + "%";
    }

    document.addEventListener("scroll", onScrollSteps, {
      passive: true,
    });

    window.addEventListener("resize", onScrollSteps);

    onScrollSteps();

    return () => {
      document.removeEventListener("scroll", onScrollSteps);
      window.removeEventListener("resize", onScrollSteps);
    };
  }, []);

  // fixed bubble field
  useEffect(() => {
    const svg = dotFieldSvgRef.current;

    if (!svg) return;

    const NS = "http://www.w3.org/2000/svg";

    const W = 1000;
    const H = 620;

    const cx0 = W * 0.86;
    const cy0 = H * 0.88;

    const spreadX = W * 0.4;
    const spreadY = H * 0.5;

    const count = 70;

    const dots: {
      el: SVGCircleElement;
      dx: number;
      dy: number;
      baseR: number;
      speed: number;
      phase: number;
      wobble: number;
      pulse: number;
    }[] = [];

    const SHADES = [
      "#FF5A1F",
      "#FF8A3D",
      "#FFB020",
      "#E0470B",
      "#FFD08A",
    ];

    let seed = 42;

    function rand() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    for (let i = 0; i < count; i++) {
      const baseX =
        cx0 + (rand() - 0.5) * 2 * spreadX * rand();

      const baseY =
        cy0 + (rand() - 0.5) * 2 * spreadY * rand();

      const baseR = 3 + rand() * rand() * 20;

      const circle = document.createElementNS(NS, "circle");

      circle.setAttribute("r", String(baseR));

      circle.setAttribute(
        "fill",
        SHADES[Math.floor(rand() * SHADES.length)]
      );

      circle.style.opacity = String(0.18 + rand() * 0.42);

      svg.appendChild(circle);

      dots.push({
        el: circle,
        dx: baseX - cx0,
        dy: baseY - cy0,
        baseR,
        speed: 0.5 + rand() * 1.2,
        phase: rand() * Math.PI * 2,
        wobble: 8 + rand() * 20,
        pulse: 0.3 + rand() * 0.6,
      });
    }

    let targetFrac = 0;
    let currentFrac = 0;

    function onScroll() {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      targetFrac =
        max > 0 ? window.scrollY / max : 0;
    }

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll, {
      passive: true,
    });

    onScroll();

    let raf = 0;

    function tick() {
      currentFrac +=
        (targetFrac - currentFrac) * 0.06;

      const angle =
        currentFrac * Math.PI * 1.6;

      const scale =
        0.85 + currentFrac * 0.3;

      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      dots.forEach((d) => {
        const rx =
          (d.dx * cos - d.dy * sin) * scale;

        const ry =
          (d.dx * sin + d.dy * cos) * scale;

        const t =
          currentFrac * 12 * d.speed + d.phase;

        const x =
          cx0 +
          rx +
          Math.sin(t) * d.wobble;

        const y =
          cy0 +
          ry +
          Math.cos(t * 0.8) * d.wobble;

        const r = Math.max(
          2,
          d.baseR +
            Math.sin(t * 1.3) *
              d.baseR *
              d.pulse *
              0.5
        );

        d.el.setAttribute("cx", x.toFixed(1));
        d.el.setAttribute("cy", y.toFixed(1));
        d.el.setAttribute("r", r.toFixed(1));
      });

      raf = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      cancelAnimationFrame(raf);

      dots.forEach((d) => d.el.remove());
    };
  }, []);

  return (
    <>
     

      <main>
        <Navbar />
        <div id="clarity-bar" ref={barRef} />

        <div className="bg-layer" />


        {/* ===================== WHO WE ARE ===================== */}
        <section className="who-hero" ref={whoHeroRef}>
          <div className="who-sticky">
            <div className="hero-bubbles" aria-hidden="true">
              <span className="hero-bubble"><Bot /></span>
              <span className="hero-bubble"><Zap /></span>
              <span className="hero-bubble"><MessageCircle /></span>
              <span className="hero-bubble"><BarChart3 /></span>
            </div>

            <div
              className="eyebrow who-eyebrow"
              ref={whoEyebrowRef}
            >
              About BerrySols
            </div>

            <h1 className="who-title">
              <span
                className="half"
                ref={halfLeftRef}
              >
                Who we
              </span>

              <span
                className="half accent-word"
                ref={halfRightRef}
              >
                are
              </span>
            </h1>

            <div
              className="who-story"
              ref={whoStoryRef}
            >
              <p>
                A team that started with one question — how
                can this work better — and never stopped
                asking it. From one client&apos;s chaos to a
                studio that still listens before it builds.
              </p>
            </div>

            <div className="who-cue">
              Keep scrolling
            </div>
          </div>
        </section>

        {/* ===================== ORIGIN STORY ===================== */}
        <section className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">
                Where it started
              </span>

              <h2>
                The story behind the studio
              </h2>
            </div>

            <div className="story-copy">
              <div className="milestones reveal-stagger">
                <svg className="milestone-road" viewBox="10 0 500 1100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <path className="road-shadow" d="M 120 1030 L 120 940 Q 120 870 190 870 L 350 870 Q 420 870 420 800 L 420 710 Q 420 640 350 640 L 170 640 Q 100 640 100 570 L 100 480 Q 100 410 170 410 L 330 410 Q 400 410 400 340 L 400 250 Q 400 180 330 180 L 180 180 Q 110 180 110 110 L 110 40" />
                  <path className="road-main" d="M 120 1030 L 120 940 Q 120 870 190 870 L 350 870 Q 420 870 420 800 L 420 710 Q 420 640 350 640 L 170 640 Q 100 640 100 570 L 100 480 Q 100 410 170 410 L 330 410 Q 400 410 400 340 L 400 250 Q 400 180 330 180 L 180 180 Q 110 180 110 110 L 110 40" />
                  <path className="road-dashes" d="M 120 1030 L 120 940 Q 120 870 190 870 L 350 870 Q 420 870 420 800 L 420 710 Q 420 640 350 640 L 170 640 Q 100 640 100 570 L 100 480 Q 100 410 170 410 L 330 410 Q 400 410 400 340 L 400 250 Q 400 180 330 180 L 180 180 Q 110 180 110 110 L 110 40" />
                  <g className="road-pin pin-1" transform="translate(120 950)"><circle cx="0" cy="-8" r="16" /><path d="M0 30 C-12 15 -20 5 -20 -8 A20 20 0 1 1 20 -8 C20 5 12 15 0 30Z" /><circle className="pin-hole" cx="0" cy="-8" r="6" /></g>
                  <g className="road-pin pin-2" transform="translate(420 760)"><circle cx="0" cy="-8" r="16" /><path d="M0 30 C-12 15 -20 5 -20 -8 A20 20 0 1 1 20 -8 C20 5 12 15 0 30Z" /><circle className="pin-hole" cx="0" cy="-8" r="6" /></g>
                  <g className="road-pin pin-3" transform="translate(110 550)"><circle cx="0" cy="-8" r="16" /><path d="M0 30 C-12 15 -20 5 -20 -8 A20 20 0 1 1 20 -8 C20 5 12 15 0 30Z" /><circle className="pin-hole" cx="0" cy="-8" r="6" /></g>
                  <g className="road-pin pin-4" transform="translate(400 320)"><circle cx="0" cy="-8" r="16" /><path d="M0 30 C-12 15 -20 5 -20 -8 A20 20 0 1 1 20 -8 C20 5 12 15 0 30Z" /><circle className="pin-hole" cx="0" cy="-8" r="6" /></g>
                  <g className="road-pin pin-5" transform="translate(180 180)"><circle cx="0" cy="-8" r="16" /><path d="M0 30 C-12 15 -20 5 -20 -8 A20 20 0 1 1 20 -8 C20 5 12 15 0 30Z" /><circle className="pin-hole" cx="0" cy="-8" r="6" /></g>
                  <g className="road-pin pin-6" transform="translate(110 70)"><circle cx="0" cy="-8" r="16" /><path d="M0 30 C-12 15 -20 5 -20 -8 A20 20 0 1 1 20 -8 C20 5 12 15 0 30Z" /><circle className="pin-hole" cx="0" cy="-8" r="6" /></g>
                </svg>
                <article className="milestone">
                  <div className="milestone-year">2021</div>
                  <div className="milestone-card">
                    <h3>First steps</h3>
                    <p>BerrySols begins with a simple belief: technology should make work clearer.</p>
                  </div>
                </article>
                <article className="milestone">
                  <div className="milestone-year">2022</div>
                  <div className="milestone-card">
                    <h3>Listen first</h3>
                    <p>We learn how teams really work before we design what they need.</p>
                  </div>
                </article>
                <article className="milestone">
                  <div className="milestone-year">2023</div>
                  <div className="milestone-card">
                    <h3>Build better</h3>
                    <p>Websites, platforms, and automation turn daily complexity into momentum.</p>
                  </div>
                </article>
                <article className="milestone">
                  <div className="milestone-year">2024</div>
                  <div className="milestone-card">
                    <h3>Keep going</h3>
                    <p>Our work expands across industries, from education and retail to real estate.</p>
                  </div>
                </article>
                <article className="milestone">
                  <div className="milestone-year">2025</div>
                  <div className="milestone-card">
                    <h3>Connect the dots</h3>
                    <p>We bring strategy, design, and intelligent systems together in one direction.</p>
                  </div>
                </article>
                <article className="milestone">
                  <div className="milestone-year">2026</div>
                  <div className="milestone-card">
                    <h3>What comes next</h3>
                    <p>We are still asking the same question: how can this work better?</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CEO ===================== */}
        <section className="section ceo-section">
          <div className="wrap">

            <div className="section-head reveal">
              <span className="eyebrow">
                The person behind the question
              </span>

              <h2>Founder &amp; CEO</h2>
            </div>

            <div className="ceo-panel reveal">
              <div className="ceo-photo-slot">
                <span className="placeholder-txt">
                  Photo
                  <br />
                  coming soon
                </span>
              </div>

              <div className="ceo-text">
                <h2>Ahsan Mehmood</h2>

                <div className="role">
                  Founder &amp; CEO, BerrySols
                </div>

                <p className="quote">
                  &quot;I&apos;ve never been interested in
                  technology for its own sake. I&apos;m
                  interested in the moment a business owner
                  stops firefighting and starts
                  building.&quot;
                </p>

                <p className="bio">
                  Started BerrySols after watching too many
                  good businesses get held together by sheer
                  effort instead of good systems — and still
                  runs every project on the same instinct:
                  understand the real problem first.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== TEAM ===================== */}
        <section className="section family-section">
          <div className="wrap">

            <div className="section-head reveal">
              <span className="eyebrow">
                Our Team
              </span>

              <h2>
                Small on paper. Close in practice.
              </h2>

              <p>
                We&apos;re small enough that everyone knows
                every project, and close enough that
                &quot;team meeting&quot; usually looks a lot
                like family dinner — opinions included.
              </p>
            </div>

            <div className="team-stage reveal">
              {TEAM.map((member, i) => (
                <div
                  key={i}
                  className={`team-card${
                    activeTeam === i ? " active" : ""
                  }`}
                  onClick={() => setActiveTeam(i)}
                >
                  <div className="fallback">{member.initials}</div>
                </div>
              ))}
            </div>

            <div className="team-info">
              <h3>{TEAM[activeTeam].name}</h3>

              <div className="m-role">
                {TEAM[activeTeam].role}
              </div>
            </div>

            <div className="team-dots">
              {TEAM.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show team member ${i + 1}`}
                  className={
                    activeTeam === i ? "active" : ""
                  }
                  onClick={() => setActiveTeam(i)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ===================== APPROACH ===================== */}
        <section className="section">
          <div className="wrap">

            <div className="section-head reveal">
              <span className="eyebrow">
                How we approach a project
              </span>

              <h2>
                Every engagement follows the same instinct
              </h2>

              <p>
                No two clients need the same system. But
                every project moves through the same four
                stages, in the same order, for the same
                reason: understanding has to come before
                building.
              </p>
            </div>

            <div className="steps" ref={stepsWrapRef}>
              <div
                className="fill-line"
                ref={fillLineRef}
              />

              <div className="step">
                <div className="num">01</div>

                <div>
                  <h3>Listen</h3>

                  <p>
                    Before any proposal, we sit with how the
                    work actually happens today — the
                    workarounds, the spreadsheets, the steps
                    nobody wrote down. Not the org chart
                    version. The real one.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="num">02</div>

                <div>
                  <h3>Understand</h3>

                  <p>
                    We map where time and information get
                    lost, and separate what&apos;s genuinely
                    complex from what&apos;s just been
                    complicated for years out of habit.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="num">03</div>

                <div>
                  <h3>Build</h3>

                  <p>
                    We design the system around the people
                    who&apos;ll use it, not the other way
                    around — website, operations platform,
                    or AI workflow.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="num">04</div>

                <div>
                  <h3>Grow</h3>

                  <p>
                    We build for what comes next, not just
                    what&apos;s needed today, so the system
                    can scale with the business.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <ContactFlow />

      </main>

      <SimpleFooter />
    </>
  );
}