import Image from 'next/image'
import { SectionLabel } from './section-label'

export function Overview() {
  return (
    <section className="mx-auto max-w-7xl lg:pl-0">
      <div className="pl-0">
        <SectionLabel>01 / Overview</SectionLabel>
      </div>
      <div className="mt-8 grid items-center gap-10 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-10">
        <div className="flex flex-col gap-6 text-base leading-relaxed text-pretty">
          <h3 className="text-2xl font-bold">Same Day Me overview</h3>
          <p>
            SameDay Dental Clinic brings together a broad range of advanced dental care
            under one roof, from same-day implants to zygomatic procedures and smile
            rehabilitation. That level of expertise is a major strength, but for many
            patients it can also feel overwhelming when the decision is already stressful.
          </p>
          <p>
            The website needed to feel reassuring and easy to navigate, not crowded or
            clinical. By organizing the offer around trust, clarity, and action, the clinic
            can present its specialism without making patients feel lost or pressured.
          </p>
        </div>
        <Image
          src="/images/sameday-mockup.png"
          alt="Same Day Dental Clinic website shown on a desktop and mobile device mockup"
          width={1563}
          height={1006}
          className="w-full rounded-xl object-cover"
        />
      </div>
    </section>
  )
}
