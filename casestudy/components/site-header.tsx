import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#', hasMenu: false },
  { label: 'Services', href: '#', hasMenu: true },
  { label: 'Portfolio', href: '#', hasMenu: false, active: true },
  { label: 'Industries', href: '#', hasMenu: true },
  { label: 'About Us', href: '#', hasMenu: true },
]

export function SiteHeader() {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#" aria-label="Home" className="flex items-center">
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <path
              d="M6 4 C6 2.9 6.9 2 8 2 H16 C21 2 24 5.2 24 9.5 C24 12.3 22.6 14.3 20.6 15.2 C23.4 16.1 25.5 18.5 25.5 21.8 C25.5 26 22.2 29 17.3 29 H8 C6.9 29 6 28.1 6 27 Z"
              fill="var(--primary)"
            />
            <circle cx="9" cy="24" r="4.5" fill="var(--background)" />
          </svg>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                item.active ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.label}
              {item.hasMenu && <ChevronDown className="size-3.5" aria-hidden="true" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Careers
          </Link>
          <Link
            href="#"
            className="hidden rounded-full border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-accent sm:inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
