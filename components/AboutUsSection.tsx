"use client";

import { useEffect, useState } from "react";

const missionText =
  "TO EMPOWER BUSINESSES WITH TECHNOLOGY THAT ACTUALLY FITS HOW THEY WORK — TAKING THE TANGLED, MANUAL, EVERYDAY-HOLD-TOGETHER PARTS OF AN OPERATION AND TURNING THEM INTO SYSTEMS PEOPLE DON'T HAVE TO FIGHT.";

const visionText =
  "TO EMPOWER BUSINESSES WITH TECHNOLOGY THAT ACTUALLY FITS HOW THEY WORK — TAKING THE TANGLED, MANUAL, EVERYDAY-HOLD-TOGETHER PARTS OF AN OPERATION AND TURNING THEM INTO SYSTEMS PEOPLE DON'T HAVE TO FIGHT.";

function TypingLine({ text, align }: { text: string; align: "left" | "right" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsDone(false);

    let currentIndex = 0;
    const timer = setInterval(() => {
      currentIndex += 1;
      setDisplayedText(text.slice(0, currentIndex));

      if (currentIndex >= text.length) {
        clearInterval(timer);
        setIsDone(true);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <p
      className={`m-0 max-w-[38ch] font-[var(--font-poppins)] font-semibold uppercase leading-[1.3] tracking-[-0.02em] text-black text-[clamp(.82rem,1.25vw,1.2rem)] not-italic ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {displayedText}
      {!isDone && (
        <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[2px] rounded-full bg-orange-500 align-middle animate-pulse" />
      )}
    </p>
  );
}

function MissionVisionRow({
  title,
  text,
  align,
}: {
  title: string;
  text: string;
  align: "left" | "right";
}) {
  return (
    <div className="relative flex aspect-square w-full max-w-[420px] justify-self-center flex-col justify-center overflow-hidden border border-neutral-200 bg-neutral-50 p-6 sm:p-8 md:p-10">
      <span className="absolute left-4 top-2 select-none font-serif text-6xl leading-none text-neutral-900 md:left-6 md:top-3 md:text-7xl">
        “
      </span>
      <div className={`relative z-10 ${align === "right" ? "text-right" : "text-left"}`}>
        <h3
          className="m-0 mb-5 text-[clamp(1.8rem,3.8vw,4rem)] font-black uppercase leading-none tracking-[-0.05em]"
          style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
        >
          <span className="text-neutral-900">{title}</span>
        </h3>

        <TypingLine text={text} align={align} />
      </div>
      <span className="absolute bottom-0 right-4 select-none font-serif text-6xl leading-none text-neutral-900 md:right-6 md:text-7xl">
        ”
      </span>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="w-full bg-white px-4 py-16 text-neutral-900 md:px-8 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="mb-10 text-center text-[clamp(2rem,4.5vw,4.5rem)] font-black uppercase leading-none tracking-[-0.06em] md:mb-14">
          Our Mission <span className="text-orange-500">&amp; Vision</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <MissionVisionRow title="MISSION" text={missionText} align="left" />
          <MissionVisionRow title="VISION" text={visionText} align="right" />
        </div>
      </div>
    </section>
  );
}
