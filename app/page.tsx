"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BrandLogo from "./components/BrandLogo";
import Clients from "./components/Clients";
import ContactFlow from "./components/ContactFlow";
import SimpleFooter from "./components/SimpleFooter";
import IndustriesWheel from "./components/IndustriesWheel";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import ThemeToggle from "./components/ThemeToggle";
import TrackRecord from "./components/TrackRecord";



const services = [
  ["Education", "Streamline enrollment inquiries, course guidance and student assistance."],
  ["Retail", "Deliver personalized shopping assistance, order tracking and promotions."],
  ["Hotels & Restaurants", "Reservations made easy, intelligent pre and post booking support."],
  ["Healthcare", "Effortless appointment bookings, patient records and smart FAQ handling."],
  ["Airlines", "Hassle-free flight bookings, live flight updates and baggage info."],
  ["Cruise Lines", "Ask Berrysols for cabin recommendations, promotions and onboard plans."],
  ["Fintech", "Automate onboarding, payments and account questions with confidence."],
  ["Real Estate", "Help clients find properties, book visits and get answers faster."],
];

const replies: [RegExp, string][] = [
  [/pric|cost|plan|budget/i, "Pricing scales with conversation volume and channels. Most teams start on a pilot, then move to an annual plan once volume is clear."],
  [/industr|hotel|health|airline|retail|estate|educat/i, "Berrysols works across hospitality, healthcare, airlines, retail, fintech, education and real estate — each with its own workflows and tone."],
  [/integrat|crm|api|system|connect/i, "We connect to your CRM, booking engine, payment provider, calendar and internal APIs, so answers reflect live data rather than static content."],
  [/secur|privac|data|gdpr|complian/i, "Data stays encrypted in transit and at rest, with scoped permissions and private cloud or on-premises deployment available."],
  [/voice|speak|talk|call|mic/i, "Yes — the same agent handles voice and text. Tap the mic and speak naturally, or type your question here."],
  [/demo|contact|talk to|sales|human/i, "Happy to arrange it. Write to hello@berrysols.com and we will set up a walkthrough with your own use case."],
];

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [voiceState, setVoiceState] = useState<"idle" | "listening" | "answering">("idle");
  const [chatOpen, setChatOpen] = useState(false);
  const [thread, setThread] = useState<{ from: "you" | "agent"; text: string }[]>([]);
  const [question, setQuestion] = useState("");
  const voiceStateRef = useRef<"idle" | "listening" | "answering">("idle");

  const micLevelRef = useRef<(() => number) | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const answerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const getScale = useCallback(() => 1, []);

  useEffect(() => {
    voiceStateRef.current = voiceState;
  }, [voiceState]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const updateNavigation = () => setNavHidden(window.scrollY > 24 && !menuOpen);
    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, [menuOpen]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [thread, chatOpen]);

  const stopMic = useCallback(() => {
    micLevelRef.current = null;
    streamRef.current?.getTracks().forEach((track: MediaStreamTrack) => track.stop());
    streamRef.current = null;
    void audioContextRef.current?.close();
    audioContextRef.current = null;
  }, []);

  useEffect(() => () => {
    stopMic();
    if (answerTimer.current) clearTimeout(answerTimer.current);
  }, [stopMic]);

  const getLevel = useCallback(() => {
    const fromMic = micLevelRef.current?.();
    if (typeof fromMic === "number") return fromMic;
    const time = performance.now() / 1000;
    const active = voiceStateRef.current !== "idle";
    const base = active ? 0.5 : 0.14;
    const motion = active
      ? 0.3 * Math.abs(Math.sin(time * 4.7)) + 0.14 * Math.sin(time * 2.3)
      : 0.07 * Math.sin(time * 1.6);
    return Math.max(0, Math.min(1, base + motion));
  }, []);

  const toggleMic = useCallback(async () => {
    if (voiceStateRef.current === "listening") {
      stopMic();
      setVoiceState("idle");
      return;
    }
    setVoiceState("listening");
    setChatOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new AudioContext();
      const analyser = context.createAnalyser();
      analyser.fftSize = 1024;
      const data = new Uint8Array(analyser.fftSize);
      context.createMediaStreamSource(stream).connect(analyser);
      streamRef.current = stream;
      audioContextRef.current = context;
      micLevelRef.current = () => {
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (let index = 0; index < data.length; index++) {
          const value = (data[index] - 128) / 128;
          sum += value * value;
        }
        return Math.min(1, Math.sqrt(sum / data.length) * 5);
      };
    } catch {
      // Microphone blocked or unavailable — the waveform keeps its simulated motion.
    }
  }, [stopMic]);

  const ask = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const match = replies.find(([pattern]) => pattern.test(trimmed));
    setThread((current: { from: "you" | "agent"; text: string }[]) => [...current, { from: "you", text: trimmed }]);
    setQuestion("");
    setChatOpen(true);
    setVoiceState("answering");
    if (answerTimer.current) clearTimeout(answerTimer.current);
    answerTimer.current = setTimeout(() => {
      setThread((current: { from: "you" | "agent"; text: string }[]) => [
        ...current,
        { from: "agent", text: match ? match[1] : "I can help with that. Tell me your industry and the journey you want to automate, and I'll walk you through it." },
      ]);
      setVoiceState("idle");
    }, 1200);
  }, []);

  return (
    <main>
      <header className={`nav ${navHidden ? "nav-hidden" : ""}`}>
        <button type="button" className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#top" className="logo" aria-label="Berry Sols home"><BrandLogo /></a>
        </div>
      </header>

      <div className="menu-overlay" aria-hidden={!menuOpen}>
        <div className="menu-overlay-inner">
          <nav className="menu-links" aria-label="Main navigation">
            <a href="#top" className="menu-link" onClick={() => setMenuOpen(false)}><span className="idx">01</span><span className="label">Home</span><span className="arrow">→</span></a>
            <a href="#products" className="menu-link" onClick={() => setMenuOpen(false)}><span className="idx">02</span><span className="label">Services</span><span className="arrow">→</span></a>
            <a href="#industries" className="menu-link" onClick={() => setMenuOpen(false)}><span className="idx">03</span><span className="label">Why Us</span><span className="arrow">→</span></a>
            <a href="#clients" className="menu-link" onClick={() => setMenuOpen(false)}><span className="idx">04</span><span className="label">Clients</span><span className="arrow">→</span></a>
            <a href="#contact" className="menu-link" onClick={() => setMenuOpen(false)}><span className="idx">05</span><span className="label">Contact</span><span className="arrow">→</span></a>
          </nav>
        </div>
        <div className="menu-footer">
          <div className="menu-contact"><a href="mailto:hello@berrysols.com">hello@berrysols.com</a><a href="#clients" onClick={() => setMenuOpen(false)}>Karachi · Islamabad · Global</a></div>
          <div className="menu-social"><a href="#">LinkedIn</a><a href="#">Twitter</a><a href="#">GitHub</a></div>
          <ThemeToggle />
        </div>
      </div>

      <section className="hero" id="top">
        <video className="hero-video hero-video-light" autoPlay muted loop playsInline><source src="/assets/hero-bg1.mp4" type="video/mp4" /></video>
        <video className="hero-video hero-video-dark" autoPlay muted loop playsInline><source src="/assets/hero-bg2.mp4" type="video/mp4" /></video>
        <div className="hero-content">
          <span className="eyebrow">Global IT Solutions · Est. Trust</span>
          <h1>Out of the noise, <em>clarity</em> we engineer.</h1>
          <p className="lead">Berry Sols designs and ships software, cloud infrastructure, and AI-driven products for organizations worldwide — from fast-moving startups to institutions where reliability isn&apos;t optional.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a project</a>
            <a href="#products" className="btn btn-ghost">See our services</a>
          </div>
          <div className="hero-note"><span className="dot" /> Trusted by international clients, including the Pakistan Army</div>
        </div>
      </section>

      <TrackRecord />
      <Products />
      <Clients />
      <IndustriesWheel />
      <Testimonials />
      <ContactFlow />
      <SimpleFooter />
    </main>
  );
}
