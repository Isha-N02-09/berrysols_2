import { Search, Target, Lightbulb, PenLine, Check } from 'lucide-react'
import { SectionLabel } from './section-label'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    items: ['Stakeholder interviews', 'Patient journey review', 'Competitor clinics audit'],
  },
  {
    icon: Target,
    title: 'Define',
    items: ['Patient personas', 'Anxiety & trust mapping', 'Information architecture'],
  },
  {
    icon: Lightbulb,
    title: 'Ideate',
    items: ['Navigation restructure', 'Content grouping', 'Booking flow sketches'],
  },
  {
    icon: PenLine,
    title: 'Design',
    items: ['Wireframes -> high fidelity', 'Visual & component system', 'Responsive prototype'],
  },
  {
    icon: Check,
    title: 'Test',
    items: ['Usability walkthroughs', 'Mobile QA', 'Iteration on feedback'],
  },
]

export function DesignProcess() {
  return (
    <section className="mx-auto max-w-7xl">
      <SectionLabel size="sm">05 / Design process</SectionLabel>

      <ol className="mt-10 grid gap-10 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-10">
        {steps.map((step) => (
          <li key={step.title} className="flex flex-col gap-4">
            <span className="flex size-12 items-center justify-center rounded-full border border-primary/60 text-primary">
              <step.icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="font-serif text-lg font-semibold">{step.title}</h3>
            <ul className="flex flex-col gap-1 text-xs leading-relaxed text-muted-foreground">
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
