import { SectionLabel } from './section-label'

const branches = [
  { title: 'About Us', children: ['Brånemark Centre', 'ZAGA Center', 'Autism Center'] },
  { title: 'Implants', children: ['All-on-4 / 6 / X', 'Zygomatic', 'Single Tooth', 'Guarantee'] },
  { title: 'Services', children: ['Orthodontics', 'Sedation', 'Pediatric', 'General'] },
  { title: 'Doctors', children: ['13 profiles'] },
  { title: 'Testimonials · Blog', children: ['Reviews', 'Articles'] },
  { title: 'Contact Us', children: ['Financing', 'Book / WhatsApp'] },
]

const lineColor = 'bg-foreground/25'

export function Sitemap() {
  return (
    <section className="mx-auto max-w-7xl" id="sitemap">
      <div className="px-6 lg:px-10">
        <SectionLabel size="sm">08 / Sitemap</SectionLabel>
        <h3 className="mt-5 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-[2.6rem]">
          Information architecture
        </h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
          Six top-level sections keep the treatment catalogue browsable instead of one long
          dropdown.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center px-6 lg:px-10">
        <div className="rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white">
          Home
        </div>
        <span aria-hidden="true" className={`h-8 w-px ${lineColor}`} />

        <ul className="relative grid w-full grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {/* horizontal trunk connecting first and last branch centers on desktop */}
          <span
            aria-hidden="true"
            className={`absolute top-0 left-[8.333%] right-[8.333%] hidden h-px lg:block ${lineColor}`}
          />
          {branches.map((branch) => (
            <li key={branch.title} className="flex flex-col items-center">
              <span aria-hidden="true" className={`hidden h-6 w-px lg:block ${lineColor}`} />
              <div className="rounded-md border border-foreground bg-background px-4 py-2 text-center text-xs font-semibold">
                {branch.title}
              </div>
              <ul className="flex flex-col items-center">
                {branch.children.map((child) => (
                  <li key={child} className="flex flex-col items-center">
                    <span aria-hidden="true" className={`h-4 w-px ${lineColor}`} />
                    <span className="rounded-md border border-border bg-card px-3 py-1.5 text-center text-[11px] leading-snug text-foreground">
                      {child}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
