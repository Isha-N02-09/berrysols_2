"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  { name: "Education", icon: "ED", copy: "Admissions, student records, learning portals and campus operations." },
  { name: "Real Estate", icon: "RE", copy: "Property discovery, lead management, visits and buyer journeys." },
  { name: "Hospitality", icon: "HO", copy: "Reservations, guest support, upselling and hotel operations." },
  { name: "Retail & eCommerce", icon: "RT", copy: "Commerce, inventory, loyalty and personalized shopping." },
  { name: "Healthcare", icon: "HC", copy: "Appointments, patient workflows and secure clinical systems." },
  { name: "Airlines & Travel", icon: "AV", copy: "Booking, disruption support and connected traveler experiences." },
  { name: "Fintech", icon: "FT", copy: "Onboarding, payments, account servicing and secure automation." },
  { name: "Logistics", icon: "LG", copy: "Fleet visibility, shipment booking and delivery operations." },
];

export default function IndustriesWheel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const discRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const disc = discRef.current;
    if (!track || !disc) return;
    let queued = false;

    const update = () => {
      queued = false;
      const rect = track.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = travel <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / travel));
      const position = progress * (industries.length - 1);
      disc.style.setProperty("--industry-p", position.toFixed(4));
      const next = Math.round(position);
      setActive((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (direction: number) => {
    const track = trackRef.current;
    if (!track || industries.length < 2) return;
    const next = Math.min(industries.length - 1, Math.max(0, active + direction));
    const travel = Math.max(0, track.offsetHeight - window.innerHeight);
    const top = track.offsetTop + (next / (industries.length - 1)) * travel;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="industries-wheel-scroll" ref={trackRef} id="industries">
      <section className="industries-wheel">
        <div className="industry-disc" ref={discRef}>
          <div className="industry-rotor">
            <span className="industry-wedges" aria-hidden="true" />
            {industries.map((industry, index) => (
              <i className="industry-spoke" key={industry.name} style={{ "--spoke": index } as React.CSSProperties} />
            ))}
            {industries.map((industry, index) => (
              <article
                className={`industry-slot ${active === index ? "active" : ""}`}
                key={industry.name}
                style={{ "--slot": index } as React.CSSProperties}
              >
                <div className="industry-slot-inner">
                  <span className="industry-icon">{industry.icon}</span>
                  <h3>{industry.name}</h3>
                  <p>{industry.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="industry-hub">
            <span className="section-index">Built for every industry</span>
            <b className="industry-wordmark">berrysols</b>
            <small>Engineering &amp; AI partner</small>
          </div>
        </div>

        <div className="industry-controls">
          <button type="button" onClick={() => go(-1)}>← Prev</button>
          <div>
            {industries.map((industry, index) => (
              <i className={active === index ? "active" : ""} key={industry.name} />
            ))}
          </div>
          <button type="button" onClick={() => go(1)}>Next →</button>
        </div>
      </section>
    </div>
  );
}
