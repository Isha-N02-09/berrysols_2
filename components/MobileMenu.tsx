"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

type LinkItem = {
  label: string;
  href: string;
  children?: string[];
};

const links: LinkItem[] = [
  { label: "Home", href: "#top" },
  {
    label: "Services",
    href: "#services",
    children: ["Strategy", "Design", "Development", "Digital Marketing"],
  },
  { label: "Portfolio", href: "#portfolio" },
  {
    label: "Industries",
    href: "#industries",
    children: [
      "Fintech",
      "Real Estate",
      "Education",
      "Retail",
      "Hotels & Restaurants",
      "Healthcare",
      "Airlines",
      "Cruise Lines",
    ],
  },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "/careers" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const homeHref = pathname === "/" ? "#top" : "/";
  const handleClose = () => {
    setExpanded(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* backdrop */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* panel — one side, white bg */}
      <div
        className={`absolute right-0 top-0 h-full w-full overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ease-out sm:w-[440px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* top bar inside panel */}
        <div className="flex h-[72px] items-center justify-between px-6 md:px-10">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors hover:text-orange-500"
          >
            Close
            <span className="text-lg leading-none">×</span>
          </button>

          <a
            href="#contact"
            onClick={handleClose}
            className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white"
          >
            Get in touch
          </a>
        </div>

        {/* nav links */}
        <nav className="flex flex-col gap-6 px-6 pb-16 pt-6 md:px-10">
          {links.map((link) => (
            <div key={link.label}>
              <div
                className="group flex cursor-pointer items-center justify-between"
                onClick={() => link.children && setExpanded((v) => !v)}
              >
                <a
                  href={link.label === "Home" ? homeHref : link.href}
                  onClick={(event) => {
                    if (link.children) {
                      event.preventDefault();
                      return;
                    }
                    handleClose();
                  }}
                  className="text-4xl font-extrabold uppercase leading-tight text-black transition-colors duration-200 group-hover:text-orange-500 sm:text-5xl"
                >
                  {link.label}
                </a>
                {link.children && (
                  <span
                    className={`text-2xl text-black/30 transition-transform duration-300 group-hover:text-orange-500 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                )}
              </div>

              {link.children && (
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="flex flex-col gap-3 overflow-hidden pl-1">
                    {link.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#"
                          className="text-base font-medium text-black/60 transition-colors hover:text-orange-500"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
