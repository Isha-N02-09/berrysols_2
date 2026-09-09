import { SiteHeader } from '@/components/site-header'
import { CaseHero } from '@/components/case-hero'
import { WaveDivider } from '@/components/wave-divider'
import { StatsRow } from '@/components/stats-row'
import { Overview } from '@/components/overview'
import { StickyNotes, type Note } from '@/components/sticky-notes'
import { Standout } from '@/components/standout'
import { DesignProcess } from '@/components/design-process'
import { Technology } from '@/components/technology'
import { Preview } from '@/components/preview'
import { Sitemap } from '@/components/sitemap'

const challenges: Note[] = [
  {
    number: '01',
    title: 'Trust has to be earned fast',
    text: 'Implant surgery is a high-stakes decision. Visitors need credentials, certifications, and real outcomes early in the journey.',
    left: 3,
    top: 0,
  },
  {
    number: '02',
    title: '25-plus treatments, one navigation',
    text: 'Implants, orthodontics, sedation, pediatric, and general dentistry all live under one roof. A flat menu made discovery difficult.',
    left: 36,
    top: 40,
  },
  {
    number: '03',
    title: 'Booking felt like a form',
    text: 'The path from a question to an appointment had too many steps for a nervous, often international, patient to follow through on.',
    left: 71,
    top: 0,
  },
]

const challengeConnectors = [
  'M348 170 H 400 V 420 H 430',
  'M746 400 H 800 V 130 H 852',
]

const solutions: Note[] = [
  {
    number: '01',
    title: 'Credentials up front',
    text: 'ZAGA, Brånemark, and Autism Center accreditations move into the hero and proof sections instead of being buried in About.',
    left: 3,
    top: 0,
  },
  {
    number: '02',
    title: 'Grouped mega-navigation',
    text: 'Implants, Services, and Orthodontics are structured into tiered groups so the treatment list stays browsable.',
    left: 36,
    top: 7,
  },
  {
    number: '03',
    title: 'One persistent booking path',
    text: 'A single appointment form and click-to-WhatsApp action follow visitors across pages and devices.',
    left: 71,
    top: 0,
  },
  {
    number: '04',
    title: 'Social proof near decisions',
    text: 'Reviews and doctor profiles sit alongside treatment descriptions, where they can support the decision.',
    left: 3,
    top: 50,
  },
  {
    number: '05',
    title: 'Mobile-first booking flow',
    text: 'Tap-to-call, tap-to-WhatsApp, and a condensed appointment form support visitors arriving from mobile search.',
    left: 36,
    top: 57,
  },
  {
    number: '06',
    title: 'Clear service architecture',
    text: 'Implants, Services, Doctors, Testimonials, Blog, and Contact remain distinct, predictable sections.',
    left: 71,
    top: 50,
  },
]

const solutionConnectors = [
  'M348 180 H 400 V 270 H 432',
  'M744 270 H 800 V 180 H 852',
  'M1008 420 V 520 H 192 V 600',
  'M348 780 H 400 V 870 H 432',
  'M744 870 H 800 V 780 H 852',
]

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <CaseHero />
        <WaveDivider />
        <StatsRow />
        <div className="h-16" />
        <Overview />
        <WaveDivider />
        <div className="h-16" />
        <StickyNotes
          title="02 / The challenge"
          notes={challenges}
          connectors={challengeConnectors}
          boardHeight={640}
        />
        <div className="h-16" />
        <WaveDivider />
        <div className="h-8" />
        <StickyNotes
          title="03 / The solution"
          notes={solutions}
          connectors={solutionConnectors}
          boardHeight={1200}
        />
        <div className="h-20" />
        <Standout />
        <div className="h-16" />
        <WaveDivider />
        <div className="h-8" />
        <DesignProcess />
        <div className="h-20" />
        <Technology />
        <div className="h-20" />
        <Preview />
        <div className="h-20" />
        <Sitemap />
        <div className="h-20" />
        <ProjectCta />
      </main>
    </>
  )
}
