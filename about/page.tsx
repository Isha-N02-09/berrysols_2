"use client";


import "./about.css";
import { useEffect, useRef, useState } from "react";
import { BarChart3, Bot, MessageCircle, Zap } from "lucide-react";
import SimpleFooter from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactFlow from "../components/ContactFlow";
import RoadReveal from "./components/RoadReveal";
import HeroCoach from "./components/HeroCoach";
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
      const steps = stepsWrap.querySelectorAll<HTMLElement>(".step");

      const progressed = Math.min(
        Math.max(
          (window.innerHeight * 0.8 - rect.top) / rect.height,
          0
        ),
        1
      );

      fillLine.style.height = progressed * 100 + "%";

      steps.forEach((step, idx) => {
        const stepRect = step.getBoundingClientRect();
        const center = stepRect.top + stepRect.height / 2;
        const travel = window.innerHeight * 0.72 - center;
        const distance = Math.abs(travel) / (window.innerHeight * 0.65);

        step.classList.toggle("active", distance < 0.9);
        step.style.setProperty("--pulse", String(1 - Math.min(distance, 1)));

        if (idx < steps.length - 1) {
          const next = steps[idx + 1];
          const nextRect = next.getBoundingClientRect();
          const nextCenter = nextRect.top + nextRect.height / 2;
          const linkGlow = Math.max(0, 1 - Math.abs((center + nextCenter) / 2 - window.innerHeight * 0.62) / (window.innerHeight * 0.42));
          next.style.setProperty("--link-glow", String(linkGlow));
        }
      });
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
              <RoadReveal
                className="milestones-road"
                contentClassName="milestones reveal-stagger"
              >
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
              </RoadReveal>
            </div>
          </div>
        </section>

        {/* ===================== APPROACH ===================== */}
        <section className="section workflow-section">
          <div className="wrap workflow-grid">
            <div className="workflow-copy reveal">
              <span className="eyebrow workflow-eyebrow">
                OUR WORKFLOW
              </span>

              <h2>
                THIS IS HOW WE APPROACH
                <span>EVERY SINGLE PROJECT</span>
              </h2>

              <p>
                At Berry Solutions, we believe successful projects start with clarity and end with measurable impact. With over 10 years of experience in IT services, our process ensures efficiency, transparency, and results that exceed expectations for businesses worldwide.
              </p>

              <a href="/portfolio" className="workflow-cta">
                VIEW ALL PORTFOLIO
              </a>
            </div>

            <div className="workflow-column">
              <div className="workflow-list">
                <div className="workflow-item reveal">
                  <div className="workflow-icon" aria-hidden="true">
                    <span className="workflow-mark">◼</span>
                  </div>
                  <div className="workflow-content">
                    <h3>
                      <a href="https://berrysols.com/services/technology-services-introduction/">
                        Introduction
                      </a>
                    </h3>
                    <p>
                      Berry Solutions helps businesses grow with innovative technology services tailored to their unique needs. From IT support to digital transformation, we keep you ahead in the digital world.
                    </p>
                  </div>
                </div>

                <div className="workflow-item reveal">
                  <div className="workflow-icon" aria-hidden="true">
                    <span className="workflow-mark">◫</span>
                  </div>
                  <div className="workflow-content">
                    <h3>
                      <a href="https://berrysols.com/services/it-strategy-consulting/">
                        IT Strategy Consulting
                      </a>
                    </h3>
                    <p>
                      IT strategy consulting helps businesses align technology with long-term goals, driving growth and efficiency.
                    </p>
                  </div>
                </div>

                <div className="workflow-item reveal">
                  <div className="workflow-icon" aria-hidden="true">
                    <span className="workflow-mark">◌</span>
                  </div>
                  <div className="workflow-content">
                    <h3>
                      <a href="https://berrysols.com/services/meeting/">
                        Meeting
                      </a>
                    </h3>
                    <p>
                      It’s not just a discussion, it’s the starting point for creating strategies that drive real business growth.
                    </p>
                  </div>
                </div>

                <div className="workflow-item reveal">
                  <div className="workflow-icon" aria-hidden="true">
                    <span className="workflow-mark">▣</span>
                  </div>
                  <div className="workflow-content">
                    <h3>
                      <a href="https://berrysols.com/services/business-goals-and-kpis/">
                        Business Goals and KPIs
                      </a>
                    </h3>
                    <p>
                      Business Goals and KPIs help organizations set clear objectives and measure progress effectively. Goals define where you want to go, while KPIs track how well you’re getting there.
                    </p>
                  </div>
                </div>

                <div className="workflow-item reveal">
                  <div className="workflow-icon" aria-hidden="true">
                    <span className="workflow-mark">◍</span>
                  </div>
                  <div className="workflow-content">
                    <h3>
                      <a href="https://berrysols.com/services/scope-of-work/">
                        Scope of work
                      </a>
                    </h3>
                    <p>
                      Berry Solutions creates clear, detailed Scope of Work (SOW) documents that align vision, define deliverables, and ensure flawless project execution from start to finish.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
 <HeroCoach />
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

       
        {/* ===================== CONTACT ===================== */}
        <ContactFlow />

      </main>

      <SimpleFooter />
    </>
  );
}