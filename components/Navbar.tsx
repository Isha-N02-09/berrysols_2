"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { services } from "@/data/services";

type DropdownItem = { label: string; href: string };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const homeHref = pathname === "/" ? "#top" : "/";

  const serviceDropdownItems: DropdownItem[] = services.map((service) => ({
    label: service.eyebrow,
    href: `/services/${service.slug}`,
  }));

  const insightDropdownItems: DropdownItem[] = [
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ];

  const desktopLinks = [
    { label: "Home", href: homeHref },
    {
      label: "Services",
      href: "/services",
      children: serviceDropdownItems,
    },
    { label: "Portfolio", href: "#portfolio" },
    {
      label: "Industries",
      href: "#industries",
      children: [
        "Government Agencies",
        "Vigilance & Recognition",
        "Telehealth",
        "Maritime & Logistics",
        "Real Estate",
        "Manufacturing",
        "Travel & Tourism",
        "FinTech",
        "EdTech",
      ],
    },
    {
      label: "About Us",
      href: "/about",
      children: insightDropdownItems,
    },
  ];

  return (
    <>
      <header className="navbar-font fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white text-[13px] leading-[1.5]">
        <div className="flex h-[74px] w-full items-center justify-between px-[26px] lg:px-[48px]">
          <a
            href="/"
            aria-label="Berry Solutions home"
            className="group flex h-11 items-center gap-3 overflow-visible"
          >
            <span className="relative block h-10 w-9 shrink-0 overflow-hidden">
              <img
                src="/assets/icon2.png"
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-left font-[Poppins,sans-serif] text-[14px] font-extrabold uppercase leading-[1.05] tracking-[0.08em] text-black opacity-0 transition-all duration-300 group-hover:max-w-[92px] group-hover:whitespace-normal group-hover:opacity-100">
              Berry
              <br />
              Solutions
            </span>
          </a>

          <nav
            className="absolute left-[49%] hidden w-max -translate-x-1/2 items-center justify-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {desktopLinks.map((link) => (
              <div key={link.label} className="group relative py-7">
                <a
                  href={link.label === "Home" ? homeHref : link.href}
                  className="flex items-center gap-2 whitespace-nowrap text-[13px] font-medium text-[#111] transition-colors hover:text-[#f45e2b]"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={15} strokeWidth={2} aria-hidden="true" />
                  )}
                </a>

                {link.children && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 translate-y-2 rounded-xl border border-black/10 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {link.children.map((child) => {
                      const item = typeof child === "string" ? { label: child, href: link.href } : child;

                      return (
                        <a
                          key={item.href + item.label}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-[13px] text-[#111] transition-colors hover:bg-[#fff1eb] hover:text-[#ce4111]"
                        >
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/careers"
              className="hidden rounded-full bg-[#f45e2b] px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#ce4111] md:inline-flex"
            >
              Explore Careers
            </a>
            <a
              href="#contact"
              className="hidden rounded-full border border-[#f45e2b] px-5 py-[11px] text-[13px] font-medium text-[#ce4111] transition-colors hover:bg-[#f45e2b] hover:text-white md:inline-flex"
            >
              Get In Touch
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-colors hover:text-[#f45e2b] lg:hidden"
              aria-haspopup="true"
              aria-expanded={open}
            >
              <Menu size={18} aria-hidden="true" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      <style jsx>{`
        @media (max-width: 767px) {
          header > div {
            height: 68px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          header > div > a > span:first-child {
            height: 36px !important;
            width: 32px !important;
          }

          header > div > a > span:last-child {
            display: none !important;
          }
        }
      `}</style>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
