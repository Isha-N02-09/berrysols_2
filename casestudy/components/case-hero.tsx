import Image from 'next/image'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'

const meta = [
  { label: 'Client', value: 'SameDay Dental Clinic, Dubai' },
  { label: 'Role', value: 'UI/UX & Front-end Build' },
  { label: 'Category', value: 'Healthcare' },
]

export function CaseHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="flex flex-col gap-6 pt-4">
          <div className="-ml-6 flex items-center gap-4 lg:-ml-10">
            <span aria-hidden="true" className="h-0.5 w-10 bg-primary lg:w-16" />
            <p className="text-lg text-primary md:text-xl">
              Web design &amp; development · Case study
            </p>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Same Day Me
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-pretty">
            Rebuilding the digital front door for Dubai&apos;s only certified ZAGA Center,
            turning a 25-plus page medical service catalogue into a calm, trustworthy
            booking experience.
          </p>

        </div>

        <figure className="flex flex-col gap-3">
          <BrowserFrame />
          <figcaption className="flex justify-between text-xs text-muted-foreground">
            <span>Homepage - desktop</span>
            <span className="font-mono">1920 x 1080</span>
          </figcaption>
        </figure>
      </div>

      <dl className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-3 md:gap-0 md:border-t-0 md:pt-0">
        {meta.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col gap-2 md:px-8 ${i > 0 ? 'md:border-l md:border-border' : 'md:pl-0'}`}
          >
            <dt className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              {item.label}
            </dt>
            <dd className="text-sm font-semibold">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function BrowserFrame() {
  return (
    <div className="overflow-hidden rounded-lg shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-4 bg-ink px-4 py-2.5 text-background/70">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex gap-2" aria-hidden="true">
          <ChevronLeft className="size-4" />
          <ChevronRight className="size-4" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-full bg-background/10 px-3 py-1 font-mono text-xs">
          <Search className="size-3" aria-hidden="true" />
          <span className="mx-auto">samedayme.com</span>
        </div>
      </div>
      <Image
        src="/images/sameday-desktop.png"
        alt="Same Day Dental Clinic homepage hero showing the headline Leading Dental Implant Clinic in Dubai"
        width={1926}
        height={816}
        priority
        className="aspect-[1926/816] w-full object-cover"
      />
    </div>
  )
}
