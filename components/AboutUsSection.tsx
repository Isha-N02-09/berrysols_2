import styles from "./AboutUsSection.module.css";

/* Simple line icons (no external icon library required) */
const icons = {
  quality: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17v-5a8 8 0 0 1 16 0v5" />
      <path d="M4 17a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4Z" />
      <path d="M20 17a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3Z" />
    </svg>
  ),
  innovate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z" />
    </svg>
  ),
  speed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  ),
};

const nodes = [
  {
    key: "quality",
    title: "Quality",
    text: "Every deliverable is reviewed and tested before it reaches you — nothing ships on trust alone.",
    angle: 0,
  },
  {
    key: "strategy",
    title: "Strategy",
    text: "Smart solutions aligned with your business goals, not just your feature list.",
    angle: 72,
  },
  {
    key: "support",
    title: "Support",
    text: "We stay with you, today and tomorrow — support doesn't end at handover.",
    angle: 144,
  },
  {
    key: "innovate",
    title: "Innovate",
    text: "An AI-first mindset to build smarter, more capable digital products.",
    angle: 216,
  },
  {
    key: "speed",
    title: "Speed",
    text: "Fast execution without compromising quality or cutting corners.",
    angle: 288,
  },
];

export default function AboutUs() {
  return (
    <section className={styles.section} aria-labelledby="why-us-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>
          <span>Why Berrysols</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
        </p>
        <h2 id="why-us-heading" className={styles.heading}>
          Built
          <br />
          Different.
          <span className={styles.headingAccent}>
            Better Results.
          </span>
        </h2>
        <span className={styles.headingRule} aria-hidden="true" />
        <p className={styles.lede}>
          We combine strategy, design, technology and intelligence to create
          outcomes that matter.
        </p>
      </div>

      <div className={styles.diagram}>
        <span className={styles.ring} aria-hidden="true" />
        <span className={styles.ringOuter} aria-hidden="true" />

        <div className={styles.core}>
          <span className={styles.coreTop}>BERRY</span>
          <span className={styles.coreBottom}>SOLUTIONS</span>
        </div>

        {nodes.map((node) => (
          <div
            className={styles.node}
            style={{ "--angle": `${node.angle}deg` }}
            key={node.key}
          >
            <span className={styles.spoke} aria-hidden="true">
              <span className={styles.spokeDot} />
            </span>

            <div className={styles.content} style={{ "--counter-angle": `${-node.angle}deg` }}>
              <button
                type="button"
                className={styles.bubble}
                aria-describedby={`${node.key}-card`}
              >
                {icons[node.key]}
              </button>
              <span className={styles.label}>{node.title}</span>

              <div className={styles.card} id={`${node.key}-card`} role="note">
                <h3 className={styles.cardTitle}>{node.title}</h3>
                <p className={styles.cardText}>{node.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}