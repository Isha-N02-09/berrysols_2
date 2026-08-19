const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function FinalCTA() {
  return (
    <section className="final-cta" id="start">
      <span className="section-index">Start</span>
      <h2>
        Where clarity
        <br />
        <em>becomes progress.</em>
      </h2>
      <p>From pricing to features, here are the answers to common questions about Berrysols.</p>
      <a className="button light" href="mailto:hello@berrysols.com">
        Start your journey <Arrow />
      </a>
      <div className="cta-orbit" aria-hidden="true">
        <span />
        <b>b</b>
      </div>
    </section>
  );
}
