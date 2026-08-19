"use client";

import { useState } from "react";

const items = [
  {
    q: "Do I need technical expertise to use your AI agents?",
    a: "No. Berrysols is set up around your workflows, tone and systems. Your team uses a dashboard and chat — we handle the integration, training and ongoing tuning.",
  },
  {
    q: "What kind of tasks can your AI agents handle?",
    a: "Bookings, FAQs, order tracking, appointment changes, payments, upsells and handovers to a human. If the answer lives in your systems, the agent can act on it in the same conversation.",
  },
  {
    q: "How secure is my data with Berrysols?",
    a: "Data is encrypted in transit and at rest, with scoped permissions, audit logs and the option of private cloud or on-premises deployment for regulated industries.",
  },
  {
    q: "Can Berrysols customize solutions for my company?",
    a: "Yes. Every deployment is shaped around your brand, languages, booking rules and tools — CRM, payments, inventory, calendars and internal APIs.",
  },
  {
    q: "Can your solutions run on-premises?",
    a: "They can. Cloud is the default for speed, but we support private cloud and on-premises installs when data residency or internal policy requires it.",
  },
  {
    q: "How long does it take to go live?",
    a: "A focused pilot is typically weeks, not months: connect a channel, load your knowledge, wire one or two live systems, then expand once the conversation quality holds up.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="faq-intro">
        <span className="section-index">03 — Questions</span>
        <h2>
          AI employee FAQs.
          <br />
          <em>Let&apos;s clear things up.</em>
        </h2>
        <p>
          AI tools, automation, workflows and agents can feel overwhelming. Berrysols brings everything together into one connected experience — simple, clear and ready to use.
        </p>
      </div>

      <div>
        {items.map((item, index) => {
          const active = open === index;
          return (
            <article className={`faq-item${active ? " active" : ""}`} key={item.q}>
              <button type="button" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{item.q}</b>
                <i>{active ? "–" : "+"}</i>
              </button>
              <div className="faq-answer">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
