"use client";

import { useEffect, useRef } from "react";
import BlogStrip from "./BlogStrip";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const startMobileVideo = () => {
      if (mobileQuery.matches) {
        video.currentTime = 4;
      }
    };
    const keepMobileVideoCropped = () => {
      if (mobileQuery.matches && video.duration && video.currentTime < 0.1) {
        video.currentTime = 4;
      }
    };

    video.addEventListener("loadedmetadata", startMobileVideo);
    video.addEventListener("timeupdate", keepMobileVideoCropped);
    if (video.readyState >= 1) {
      startMobileVideo();
    }

    return () => {
      video.removeEventListener("loadedmetadata", startMobileVideo);
      video.removeEventListener("timeupdate", keepMobileVideoCropped);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[520px] w-full overflow-hidden bg-black max-[767px]:h-auto max-[767px]:overflow-visible">
      <video
        ref={videoRef}
        className="hero-video-flip absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hidden sm:block">
        <BlogStrip />
      </div>

      <div className="hero-content relative z-10 flex h-full max-w-3xl flex-col items-start justify-center px-4 pb-6 pt-[120px] sm:px-8 md:px-16">
        <h1 className="hero-title font-poppins text-left text-[2rem] font-bold uppercase leading-[0.96] max-[359px]:text-[1.5rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.3rem]">
          <span className="block text-black">From Chaos  To{" "}</span>
            <span className="hero-clarity text-[#f45e2b] drop-shadow-[0_0_10px_rgba(244,94,43,0.45)]">
              Clarity
            </span>
        </h1>
        <p className="hero-copy mt-6 max-w-[90vw] text-left text-sm font-medium uppercase leading-relaxed text-black/70 sm:mt-7 sm:max-w-md sm:text-base md:text-lg">
          Complex problems. Smarter solutions. We engineer digital experiences, intelligent systems, and automation that bring clarity to your business and turn complexity into growth.
        </p>

        <div className="hero-actions mt-7 flex gap-3 max-[767px]:flex-row">
          <a
            href="#portfolio"
            className="rounded-full bg-[#f45e2b] px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#ce4111] sm:px-7 sm:text-sm"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="hidden max-[767px]:inline-flex rounded-full border border-white/60 bg-white/10 px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:px-7 sm:text-sm"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative z-10 block sm:hidden">
        <BlogStrip />
      </div>
    </section>
  );
}
