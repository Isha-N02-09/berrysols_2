import { Pin } from 'lucide-react'
import { SectionLabel } from './section-label'

export type Note = {
  number: string
  title: string
  text: string
  /** Position on the desktop board, in percentages of the board width/height. */
  left: number
  top: number
}

type StickyNotesProps = {
  title: string
  notes: Note[]
  /** Dashed connector path in the board's 1200x{height} coordinate space. */
  connectors: string[]
  boardHeight: number
}

export function StickyNotes({ title, notes, connectors, boardHeight }: StickyNotesProps) {
  return (
    <section className="mx-auto max-w-7xl">
      <SectionLabel>{title}</SectionLabel>

      {/* Mobile / tablet: simple vertical stack */}
      <ol className="mt-8 flex flex-col gap-10 px-6 md:hidden">
        {notes.map((note) => (
          <li key={note.number} className="mx-auto w-full max-w-xs">
            <NoteCard note={note} />
          </li>
        ))}
      </ol>

      {/* Desktop: pinned board with dashed connectors */}
      <div
        className="relative mt-6 hidden w-full md:block"
        style={{ aspectRatio: `1200 / ${boardHeight}` }}
      >
        <svg
          aria-hidden="true"
          viewBox={`0 0 1200 ${boardHeight}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="14 12"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {connectors.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
        <ol>
          {notes.map((note) => (
            <li
              key={note.number}
              className="absolute w-[26%]"
              style={{ left: `${note.left}%`, top: `${note.top}%` }}
            >
              <NoteCard note={note} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function NoteCard({ note }: { note: Note }) {
  return (
    <article className="relative bg-card p-4 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.35)]">
      <Pin
        aria-hidden="true"
        className="absolute -top-3 -right-2 size-12 rotate-[30deg] text-muted-foreground/70 drop-shadow"
        strokeWidth={1.25}
      />
      <p className="text-2xl font-bold">{note.number}</p>
      <div className="mt-3 flex flex-col gap-2 rounded-lg bg-peach px-5 py-7 text-center">
        <h3 className="text-base font-bold leading-snug text-balance">{note.title}</h3>
        <p className="text-sm leading-relaxed text-pretty">{note.text}</p>
      </div>
    </article>
  )
}
