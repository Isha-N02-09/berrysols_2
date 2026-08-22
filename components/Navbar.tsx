"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
  <div className="flex h-[100px] w-full items-center justify-between px-[64px] -translate-y-[8px]">
    
    {/* Logo */}
    <a href="/" className="flex items-center">
     <img
        src="/assets/logo.png"
        alt="Berry logo"
        className="h-auto w-[135px] translate-y-[3px] object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </a>

    {/* Right side controls */}
    <div className="flex items-center gap-6">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-orange-400"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Menu
        <span className="text-xl leading-none">+</span>
      </button>

      <a
        href="#contact"
        className="gradient-border rounded-full px-7 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white"
      >
        Get in touch
      </a>
    </div>
  </div>
</header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
