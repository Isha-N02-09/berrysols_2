"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white text-neutral-900 py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
        <div className="md:col-span-5 select-none">
          <h2
            className="font-black uppercase grid"
            style={{
              fontSize: "clamp(5rem, 11vw, 15rem)",
              gridTemplateColumns: "auto auto auto",
              gridTemplateRows: "auto auto",
              columnGap: "0.02em",
              lineHeight: 0.76,
              letterSpacing: "-0.08em",
            }}
          >
            <span
              className="text-neutral-900"
              style={{
                gridRow: "1",
                gridColumn: "1",
                alignSelf: "start",
                display: "inline-block",
                transform: "scaleY(1.12)",
                transformOrigin: "top left",
              }}
            >
              ABO
            </span>

            <span
              className="text-orange-500"
              style={{
                gridRow: "1 / span 2",
                gridColumn: "2",
                alignSelf: "start",
                display: "inline-block",
                transform: "scaleY(3.5)",
                transformOrigin: "top center",
                lineHeight: 0.7,
              }}
            >
              U
            </span>

            <span
              className="text-black"
              style={{
                gridRow: "1",
                gridColumn: "3",
                alignSelf: "start",
                display: "inline-block",
                transform: "scaleY(1.12)",
                transformOrigin: "top left",
              }}
            >
              T
            </span>

            <span
              className="text-orange-500"
              style={{
                gridRow: "2",
                gridColumn: "3",
                alignSelf: "end",
                display: "inline-block",
                transform: "translateY(0.9em) scaleY(1.95) scaleX(1.05)",
                transformOrigin: "left bottom",
                lineHeight: 0.66,
              }}
            >
              S
            </span>
          </h2>
        </div>

        <div className="md:col-span-7 flex flex-col gap-5 text-sm leading-relaxed text-neutral-600 pt-2 md:pt-6">
          <p>
            Murray Hunter founded Design + Industry (D+I) in a boatshed in the
            Sydney suburb of Balmain in 1987. We were a small band of
            adventurers, approaching each new project with optimism and a can-do
            smugness, pushing boundaries and harbouring a mild disdain for the
            establishment. Routinely forced to replace our rusting computers, we
            caught a spirit of reinvention in those early days that has stayed
            with us to this day.
          </p>
          <p>
            We started this journey as adventurers, and we still rise to any
            challenge, recognising that the one constant in business is change.
            Equipped for the challenges ahead, we continue to push ourselves and
            our clients forward, and never afraid to ask what&apos;s over the
            horizon.
          </p>
          <p>
            D+I has grown to deliver an integrated and agile Complete Product
            Development solution (Industrial Design, Mechanical Engineering +
            Electronics Design) working with both local and international clients,
            from large multinational organisations through to next-generation
            start-ups looking to commercialise novel ideas and discoveries.
          </p>

          <Link
            href="/about"
            className="mt-4 self-start border border-neutral-900 px-8 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
