"use client";

import { useEffect, useState } from "react";

const languages = [
  {
    flag: "🇪🇸",
    name: "Español",
    user: "¿Tienen habitaciones disponibles para el próximo fin de semana?",
    bot: "¡Por supuesto! Tenemos disponibilidad. ¿Cuántas noches le gustaría?",
  },
  {
    flag: "🇫🇷",
    name: "Français",
    user: "Avez-vous des chambres disponibles ce week-end?",
    bot: "Bien sûr! Nous avons de la disponibilité. Combien de nuits?",
  },
  {
    flag: "🇯🇵",
    name: "日本語",
    user: "今週末に空室はございますか？",
    bot: "はい、ございます！何泊のご予定でしょうか？",
  },
  {
    flag: "🇸🇦",
    name: "العربية",
    user: "هل لديكم غرف متاحة لعطلة نهاية الأسبوع؟",
    bot: "بالتأكيد! لدينا غرف متاحة. كم ليلة تودّ الإقامة؟",
  },
];

const channels = [
  ["S", "Sarah Mitchell", "Can I arrange a late check-out?", "just now"],
  ["@", "@journey.emma", "Is breakfast included in the suite?", "2m"],
  ["M", "Marc Dubois", "What time does check-in start?", "5m"],
  ["A", "Alex K.", "Please book 2 nights starting Friday", "8m"],
  ["h", "hello@acme.com", "Group booking enquiry — 8 guests", "12m"],
];

const addons = [
  ["Spa & wellness add-on", "+$45"],
  ["Airport transfer", "+$32"],
  ["Late checkout · 4pm", "+$18"],
];

const tools = ["CRM", "Book", "Pay", "Cal", "Slack", "DB", "API", "Mail"];

function Watch() {
  return (
    <a className="watch-link" href="#roi">
      <span>▶</span> See the impact
    </a>
  );
}

export default function Features() {
  const [lang, setLang] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setLang((current) => (current + 1) % languages.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  const active = languages[lang];

  return (
    <section className="features" id="features">
      <div className="ticker" aria-hidden="true">
        <div>
          {Array.from({ length: 14 }, (_, index) => (
            <span key={index}>{index % 2 === 0 ? "OUR FEATURES ✦ " : "POWERED BY AI ✦ "}</span>
          ))}
        </div>
      </div>

      <div className="section features-body">
      <div className="section-heading">
        <span className="section-index">01 — Capabilities</span>
        <h2>
          Everything a live agent
          <br />
          <em>can do — and more.</em>
        </h2>
        <p>From the first question to a confirmed booking, Berrysols stays in the conversation across every channel your customers already use.</p>
      </div>

      <div className="feature-grid">
        <article className="feature-card feature-wide orange-card">
          <div className="card-copy">
            <span>01</span>
            <h3>Conversational AI</h3>
            <p>Engage customers with natural, human-like conversations powered by advanced AI.</p>
            <Watch />
          </div>
          <div className="assistant-ui">
            <div className="ui-top">
              <span className="avatar">b</span>
              <span>
                Berrysols · Assistant
                <small>How can I help today?</small>
              </span>
              <i />
            </div>
            <div className="prompt">
              Ask anything — from drafting a reply to summarizing a thread.
              <button type="button" aria-label="Send">↑</button>
            </div>
            <div className="quick-actions">
              <span>Create image</span>
              <span>Summarize text</span>
              <span>Generate</span>
              <span>Translate</span>
            </div>
          </div>
        </article>

        <article className="feature-card dark-card">
          <div className="card-copy">
            <span>02</span>
            <h3>End-to-End Transactions</h3>
            <p>Automate the entire booking flow from inquiry to confirmation with real-time availability.</p>
          </div>
          <div className="booking-ui">
            <div className="booking-steps">
              Discover<i /><b>Book</b><i />Pay<i />Confirm
            </div>
            <div className="hotel-card">
              <span className="hotel-image">PARIS</span>
              <span>
                <small>Paris, FR</small>
                <b>Hôtel Lumière · Marais</b>
                <em>Sep 14 → Sep 16 · 2 guests</em>
              </span>
            </div>
            <div className="confirmed">
              <span>✓</span>
              Payment confirmed
              <strong>€420</strong>
            </div>
          </div>
        </article>

        <article className="feature-card cream-card">
          <div className="card-copy">
            <span>03</span>
            <h3>Multilingual Support</h3>
            <p>Break language barriers by engaging customers in their own language, anywhere.</p>
            <Watch />
          </div>
          <div className="language-ui">
            <div className="language-head">
              Berrysols · Responding in your language
              <span> {active.flag} {active.name} Detected</span>
            </div>
            <div className="bubble user">{active.user}</div>
            <div className="bubble bot">{active.bot}</div>
            <div className="language-row">Español · Français · 日本語 · العربية · Deutsch · 한국어 · Português · Italiano</div>
          </div>
        </article>

        <article className="feature-card dark-card">
          <div className="card-copy">
            <span>04</span>
            <h3>Voice Search</h3>
            <p>Enable hands-free discovery through natural voice commands for faster, effortless bookings.</p>
            <Watch />
          </div>
          <div className="voice-ui">
            <div className="voice-live">
              <i /><i /><i /><i /><i /><i /><i />
            </div>
            <small>Listening</small>
            <p>Find me a flight to Tokyo next Friday</p>
          </div>
        </article>

        <article className="feature-card dark-card">
          <div className="card-copy">
            <span>05</span>
            <h3>Mobile App &amp; Human Handover</h3>
            <p>Seamlessly transfer conversations to your team when needed, with full access via a mobile app.</p>
          </div>
          <div className="handover-ui">
            <div className="message">I&apos;d like to change my flight to Friday</div>
            <div className="connecting"><span className="pulse" /> Connecting you to a specialist…</div>
            <div className="agent">
              <span>S</span>
              <p>
                Sarah · Support
                <small>Joining the conversation</small>
              </p>
              <em>WhatsApp · 2.3s</em>
            </div>
          </div>
        </article>

        <article className="feature-card dark-card">
          <div className="card-copy">
            <span>06</span>
            <h3>Omnichannel Support</h3>
            <p>Connect with customers across WhatsApp, Instagram, Messenger and more all in one place.</p>
          </div>
          <div className="channel-ui">
            <div className="channel-title">
              All Channels
              <span>5 unread</span>
            </div>
            {channels.map((row) => (
              <div className="channel-item" key={row[1]}>
                <i>{row[0]}</i>
                <p>
                  {row[1]}
                  <small>{row[2]}</small>
                </p>
                <time>{row[3]}</time>
              </div>
            ))}
          </div>
        </article>

        <article className="feature-card dark-card">
          <div className="card-copy">
            <span>07</span>
            <h3>Smart Negotiation</h3>
            <p>Guide every conversation to a win-win outcome with personalized offers that balance margin and customer satisfaction.</p>
          </div>
          <div className="negotiate-ui">
            <div className="offer-card">
              <small>Standard Rate</small>
              <b>$148</b>
              <em>Refundable · Sep 14–16</em>
            </div>
            <div className="offer-card best">
              <span>BEST FIT</span>
              <small>Personalized Offer</small>
              <b>$119</b>
              <em>Free breakfast · 2 nights</em>
              <p>Win-win match · +12% margin, −$29 for guest</p>
            </div>
          </div>
        </article>

        <article className="feature-card dark-card">
          <div className="card-copy">
            <span>08</span>
            <h3>Cross-selling &amp; Upselling</h3>
            <p>Increase revenue by recommending relevant add-ons and upgrades at the right moment in the journey.</p>
            <Watch />
          </div>
          <div className="upsell-ui">
            {addons.map((item) => (
              <div className="upsell-row" key={item[0]}>
                <span>{item[0]}</span>
                <b>{item[1]}</b>
                <i>+</i>
              </div>
            ))}
            <div className="upsell-total">
              <span>Your stay · Hôtel Lumière</span>
              <small>3 personalized recommendations</small>
              <strong>+$95 value</strong>
            </div>
          </div>
        </article>

        <article className="feature-card cream-card">
          <div className="card-copy">
            <span>09</span>
            <h3>Built to Fit Business Workflows</h3>
            <p>Integrate Berrysols with your existing tools — CRM, booking, payments, Slack and more.</p>
          </div>
          <div className="workflow-ui" aria-hidden="true">
            <b>b</b>
            {tools.map((tool, index) => (
              <span key={tool} style={{ "--i": index } as React.CSSProperties}>{tool}</span>
            ))}
          </div>
        </article>

        <article className="feature-card feature-wide dashboard-card dark-card">
          <div className="card-copy">
            <span>10</span>
            <h3>Interactive Dashboard</h3>
            <p>Track performance, analyze customer interactions and uncover insights through powerful dashboards.</p>
          </div>
          <div className="dashboard-ui">
            <div className="metric-row">
              <span>
                <small>Conversations</small>
                <b>12,908</b>
                <em>▲ 18.6%</em>
              </span>
              <span>
                <small>CSAT</small>
                <b>96%</b>
                <em>▲ 2.4%</em>
              </span>
              <span>
                <small>Avg Resp.</small>
                <b>1.5s</b>
                <em>▼ 0.8s</em>
              </span>
            </div>
            <div className="chart" aria-hidden="true">
              {[42, 55, 48, 70, 62, 88, 74, 91, 80, 96, 84, 100].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </article>

        <article className="feature-card dark-card">
          <div className="card-copy">
            <span>11</span>
            <h3>Easy Customization</h3>
            <p>Quickly customize Berrysols to match your brand with a flexible, widget-based design.</p>
          </div>
          <div className="theme-ui">
            <div className="theme-widget">
              <small>Assistant</small>
              <p>How can I help?</p>
              <button type="button">Chat with Berrysols</button>
            </div>
            <div className="theme-meta">
              <span>Launcher</span>
              <span>Ask a question</span>
              <b>Brand color #F25D23</b>
            </div>
          </div>
        </article>

        <article className="feature-card dark-card">
          <div className="card-copy">
            <span>12</span>
            <h3>Multimedia Responses</h3>
            <p>Bring conversations to life with photos, videos and location cards sent right inside the chat.</p>
            <Watch />
          </div>
          <div className="media-ui">
            <div className="bubble user">Can you show me the rooftop pool and a room?</div>
            <div className="bubble bot">Of course — here&apos;s a quick look 📸</div>
            <div className="media-grid">
              <span>Rooftop pool</span>
              <span>Deluxe suite</span>
              <span>0:18</span>
              <span>City view</span>
            </div>
            <small>4 photos · 1 video attached</small>
          </div>
        </article>
      </div>
      </div>
    </section>
  );
}
