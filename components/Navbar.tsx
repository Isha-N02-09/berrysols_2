"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 md:px-10">
        
         <a href="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Berry logo"
            className="h-[90px] w-[90px] max-w-none object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </a>
 
          {/* Right side controls */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-orange-400"
              aria-haspopup="true"
              aria-expanded={open}
            >
              Menu
              <span className="text-lg leading-none">+</span>
            </button>

            <a
              href="#contact"
              className="gradient-border rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white md:text-sm"
            >
              Get in touch
            </a>

            {/* Theme toggle intentionally omitted per spec */}
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
