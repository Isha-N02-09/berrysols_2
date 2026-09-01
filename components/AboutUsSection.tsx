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
      className={`m-0 max-w-[1100px] font-[var(--font-poppins)] font-semibold uppercase leading-[1.12] tracking-[-0.04em] text-black text-[clamp(1rem,1.8vw,2rem)] md:text-[clamp(1.2rem,1.8vw,2.2rem)] not-italic ${
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
  const [firstWord, secondWord] = title.split(" ");

  return (
    <div className="w-full">
      <div
        className={`flex w-full items-start gap-3 md:gap-6 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {align === "left" && (
          <span className="pt-1 text-[clamp(3rem,6vw,7rem)] leading-none text-neutral-900 select-none">
            “
          </span>
        )}

        <div
          className={`w-full max-w-[1100px] ${
            align === "right" ? "ml-auto text-right" : "mr-auto text-left"
          }`}
        >
          <h3
            className={`m-0 mb-3 md:mb-5 text-[clamp(2.2rem,4.5vw,5.6rem)] font-black uppercase leading-none tracking-[-0.06em] ${
              align === "right" ? "text-right" : "text-left"
            }`}
            style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
          >
            <span className="text-neutral-900">{firstWord}</span>{" "}
            <span className="text-orange-500">{secondWord}</span>
          </h3>

          <TypingLine text={text} align={align} />
        </div>

        {align === "right" && (
          <span className="pt-1 text-[clamp(3rem,6vw,7rem)] leading-none text-neutral-900 select-none">
            ”
          </span>
        )}
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="w-full bg-white px-4 py-16 text-neutral-900 md:px-8 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col gap-10 md:gap-16">
          <MissionVisionRow title="OUR MISSION" text={missionText} align="left" />
          <MissionVisionRow title="OUR VISION" text={visionText} align="right" />
        </div>
      </div>
    </section>
  );
}
