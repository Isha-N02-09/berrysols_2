import Image from 'next/image'
import { SectionLabel } from './section-label'

const points = [
  {
    title: 'Unified patient journey',
    description:
      'Booking, credentials and treatment info live in one connected flow instead of scattered pages.',
  },
  {
    title: 'Intuitive by design',
    description:
      'Clear hierarchy and tiered navigation mean a 25-plus treatment catalogue never feels like a wall of links.',
  },
  {
    title: 'Scales with the clinic',
    description:
      'The component system supports new doctors, treatments and locations without a rebuild each time the practice grows.',
  },
  {
    title: 'Built for conversion',
    description:
      'A single persistent booking path and click-to-WhatsApp CTA keep the cost-per-lead low without extra ad spend.',
  },
  {
    title: 'Trust before the ask',
    description:
      'ZAGA, Brånemark and Autism Center credentials plus review snippets sit near the decision, reducing pre-visit anxiety.',
  },
]

export function Standout() {
  return (
    <section className="mx-auto max-w-7xl">
      <SectionLabel>Why it stands out</SectionLabel>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
        <ul className="flex flex-col gap-8">
          {points.map((point) => (
            <li key={point.title} className="flex items-start gap-6">
              <div
                aria-hidden="true"
                className="mt-4 flex w-24 shrink-0 items-center sm:w-40 lg:w-56"
              >
                <span className="h-1 flex-1 bg-foreground" />
                <span className="size-5 rounded-full bg-foreground" />
              </div>
              <div className="flex flex-col gap-1 pr-6">
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="leading-relaxed text-pretty">{point.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto w-80 sm:w-96 lg:w-[26rem]">
          <div className="rounded-[2.5rem] border-[10px] border-ink bg-ink p-1 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/sameday-mobile.png"
              alt="Same Day Dental Clinic mobile homepage"
              width={942}
              height={1670}
              className="w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
