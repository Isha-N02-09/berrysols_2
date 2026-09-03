export default function NotFound() {
  const dots = [
    { size: 46, top: 0, left: 10, sx: -140, sy: -90, delay: 0 },
    { size: 50, top: 0, left: 66, sx: 130, sy: -100, delay: 0.04 },
    { size: 44, top: 0, left: 122, sx: 160, sy: -40, delay: 0.08 },
    { size: 48, top: 0, left: 178, sx: -100, sy: -130, delay: 0.02 },
    { size: 50, top: 42, left: 36, sx: -170, sy: 60, delay: 0.12 },
    { size: 52, top: 42, left: 92, sx: 90, sy: 140, delay: 0.16 },
    { size: 46, top: 42, left: 148, sx: 150, sy: -20, delay: 0.06 },
    { size: 48, top: 84, left: 62, sx: -120, sy: 110, delay: 0.2 },
    { size: 50, top: 84, left: 118, sx: 100, sy: -110, delay: 0.14 },
    { size: 44, top: 126, left: 90, sx: -60, sy: 150, delay: 0.24 },
  ];

  return (
    <main className="not-found-page">
      <div className="not-found-inner">
        <div className="not-found-copy">
          <p className="not-found-mark">404</p>
          <h1>This page took a different route.</h1>
          <p className="not-found-sub">
            The link you followed doesn&rsquo;t lead anywhere on Berrysols. It may
            have moved, or the address has a typo.
          </p>
          <a className="not-found-cta" href="/">Go to homepage</a>
        </div>

        <div className="not-found-cluster" aria-hidden="true">
          <svg className="not-found-stem" viewBox="0 0 40 70" width="40" height="70">
            <path d="M20 68 C 8 50, 8 30, 24 2" fill="none" stroke="#4B7A4E" strokeWidth="4" strokeLinecap="round" />
            <path d="M22 14 C 30 10, 36 14, 36 22 C 30 24, 24 22, 22 14 Z" fill="#4B7A4E" />
          </svg>
          <div className="not-found-dots">
            {dots.map((dot, index) => (
              <span
                key={index}
                className="not-found-dot"
                style={{
                  width: dot.size,
                  height: dot.size,
                  top: dot.top,
                  left: dot.left,
                  animationDelay: `${dot.delay}s`,
                  ["--sx" as string]: `${dot.sx}px`,
                  ["--sy" as string]: `${dot.sy}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #1c1a20;
          padding: 2.5rem 1.5rem;
        }
        .not-found-inner {
          width: 100%;
          max-width: 920px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 3rem;
        }
        .not-found-copy { max-width: 460px; }
        .not-found-mark { margin: 0 0 1rem; font-size: 15px; font-weight: 600; color: #d9611f; }
        .not-found-copy h1 { margin: 0 0 1rem; font-size: clamp(1.9rem, 3.4vw, 2.6rem); font-weight: 700; line-height: 1.15; }
        .not-found-sub { max-width: 42ch; margin: 0 0 2rem; font-size: 1.05rem; line-height: 1.6; color: #6b6774; }
        .not-found-cta { display: inline-flex; align-items: center; height: 46px; padding: 0 22px; background: #d9611f; color: #ffffff; text-decoration: none; font-weight: 600; font-size: .95rem; border-radius: 8px; transition: background .15s ease; }
        .not-found-cta:hover { background: #b84f18; }
        .not-found-cta:focus-visible { outline: 2px solid #1c1a20; outline-offset: 3px; }
        .not-found-cluster { position: relative; height: 260px; display: flex; align-items: flex-start; justify-content: center; }
        .not-found-stem { position: absolute; top: -46px; left: 50%; transform: translateX(-4px); z-index: 2; }
        .not-found-dots { position: relative; width: 222px; height: 170px; }
        .not-found-dot { position: absolute; border-radius: 50%; background: radial-gradient(circle at 32% 28%, #f0904f, #d9611f 78%); animation: not-found-assemble .85s cubic-bezier(.2, .7, .2, 1) both; }
        @keyframes not-found-assemble { from { transform: translate(var(--sx), var(--sy)) scale(.35); opacity: 0; } to { transform: translate(0, 0) scale(1); opacity: 1; } }
        @media (max-width: 760px) {
          .not-found-inner { grid-template-columns: 1fr; text-align: center; gap: 2.5rem; }
          .not-found-copy { max-width: none; margin: 0 auto; }
          .not-found-sub { margin-left: auto; margin-right: auto; }
          .not-found-cluster { order: -1; height: 220px; }
        }
        @media (prefers-reduced-motion: reduce) { .not-found-dot { animation: none; opacity: 1; transform: none; } }
      `}</style>
    </main>
  );
}