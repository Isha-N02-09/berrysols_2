"use client";

import Image from "next/image";

export default function HeroCoach() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/assets/ceo-bg.avif"
            alt="City skyline"
            fill
            priority
            style={{ objectFit: "cover", filter: "grayscale(1)" }}
          />
          <div className="hero-overlay" />
        </div>

        <header className="header">
          <div className="logo">
            <span>A</span>
            <span>M</span>
          </div>
        </header>

        <div className="frame" />

        <div className="portrait">
          <Image
            src="/assets/ceo.png"
            alt="Ahsan Mehmood"
            fill
            priority
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
          />
        </div>

        <div className="hero-text">
          <h1>AHSAN MEHMOOD</h1>
          <p>CEO &amp; Founder</p>
          <div className="chevron" aria-hidden="true">
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
              <path
                d="M1 1L14 13L27 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      <div className="ceo-mini-bio">
        <strong>Ahsan Mehmood</strong>
        <span>CEO &amp; Founder</span>
        <p>
         A strategic operator and growth-led
          leader who turns complexity into momentum for ambitious teams.
           A strategic operator and growth-led
          leader who turns complexity into momentum for ambitious teams.
           A strategic operator and growth-led
          leader who turns complexity into momentum for ambitious teams.
        </p>
      </div>

      <style jsx>{`
        .page {
          background: #1c1c1c;
          font-family: "Helvetica Neue", Arial, sans-serif;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #121212;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0.55) 0%,
            rgba(20, 20, 20, 0.75) 60%,
            rgba(10, 10, 10, 0.92) 100%
          );
        }

        .header {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px 60px;
        }

        .logo {
          display: flex;
          flex-direction: column;
          width: 46px;
          border: 2px solid #fff;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25);
        }

        .logo span {
          color: #000;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.1;
          text-align: center;
          padding: 4px 0;
          letter-spacing: 1px;
        }

        .logo span:first-child {
          border-bottom: 2px solid #000;
        }

        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
        }

        .menu-btn span {
          display: block;
          width: 28px;
          height: 2px;
          background: #fff;
        }

        .frame {
          position: absolute;
          z-index: 1;
          top: 18%;
          left: 50%;
          width: min(50%, 620px);
          height: 52%;
          border: 3px solid rgba(255, 255, 255, 0.8);
          transform: translateX(-50%);
        }

        .portrait {
          position: absolute;
          z-index: 2;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .portrait > span {
          width: min(90%, 760px) !important;
          height: 92% !important;
        }

        .hero-text {
          position: relative;
          z-index: 5;
          margin-top: auto;
          padding: 0 60px 90px;
          text-align: center;
        }

        .hero-text h1 {
          color: #fff;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: 10px;
          margin: 0;
          text-transform: uppercase;
        }

        .hero-text p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          letter-spacing: 6px;
          margin: 14px 0 0;
          text-transform: uppercase;
          font-weight: 400;
          font-family: Georgia, "Times New Roman", serif;
        }

        .chevron {
          margin-top: 28px;
          display: flex;
          justify-content: center;
        }

        .ceo-mini-bio {
          position: relative;
          z-index: 5;
          width: 100%;
          margin: 0;
          padding: 24px clamp(20px, 5vw, 60px);
          background: rgba(18, 18, 18, 0.38);
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          text-align: left;
          backdrop-filter: blur(14px) saturate(1.2);
          -webkit-backdrop-filter: blur(14px) saturate(1.2);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            inset 0 -1px 0 rgba(255, 255, 255, 0.04),
            0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .ceo-mini-bio strong {
          display: block;
          color: #fff;
          font-size: 18px;
          margin-bottom: 4px;
        }

        .ceo-mini-bio span {
          display: block;
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .ceo-mini-bio p {
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .header {
            padding: 24px 28px;
          }

          .frame {
            top: 18%;
            width: 65%;
            height: 50%;
          }

          .portrait > span {
            width: min(92%, 520px) !important;
            height: 80% !important;
          }

          .hero-text {
            padding: 0 20px 60px;
          }

          .hero-text h1 {
            letter-spacing: 6px;
          }
        }
      `}</style>
    </main>
  );
}