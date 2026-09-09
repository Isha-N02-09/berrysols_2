'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SectionLabel } from './section-label'

type Device = 'desktop' | 'mobile'
type Mode = 'live' | 'screenshot'

const liveUrl = 'https://www.samedayme.com'

export function Preview() {
  const [device, setDevice] = useState<Device>('desktop')
  const [mode, setMode] = useState<Mode>('screenshot')

  const width = device === 'desktop' ? '1440px' : '390px'

  return (
    <section className="mx-auto max-w-7xl" id="preview">
      <div className="px-6 lg:px-10">
        <SectionLabel size="sm">07 / Preview</SectionLabel>
        <h3 className="mt-5 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-[2.6rem]">
          Desktop &amp; mobile - live.
        </h3>
      </div>

      <div className="mt-8 flex flex-col items-center gap-6 px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-sm">
          <div role="tablist" aria-label="Preview device" className="flex gap-1">
            {(['desktop', 'mobile'] as Device[]).map((d) => (
              <button
                key={d}
                role="tab"
                type="button"
                aria-selected={device === d}
                onClick={() => setDevice(d)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                  device === d ? 'bg-foreground text-background' : 'hover:bg-muted'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <span aria-hidden="true" className="h-5 w-px bg-border" />
          <div role="tablist" aria-label="Preview mode" className="flex gap-1">
            {(
              [
                { id: 'live', label: 'Try live' },
                { id: 'screenshot', label: 'Screenshot' },
              ] as { id: Mode; label: string }[]
            ).map((m) => (
              <button
                key={m.id}
                role="tab"
                type="button"
                aria-selected={mode === m.id}
                onClick={() => setMode(m.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  mode === m.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
          <span className="pr-3 pl-1 text-xs text-muted-foreground">{width}</span>
        </div>

        <div className="w-full rounded-2xl border border-border bg-card p-3 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] sm:p-6">
          <div
            className={`mx-auto overflow-hidden rounded-xl border border-border bg-background ${
              device === 'mobile' ? 'w-full max-w-[390px]' : 'w-full'
            }`}
          >
            <div className="flex items-center gap-3 border-b border-border bg-muted px-4 py-2.5">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
              </div>
              <span className="truncate text-xs text-muted-foreground">www.samedayme.com</span>
            </div>

            {mode === 'live' ? (
              <iframe
                src={liveUrl}
                title="Same Day Me live site"
                loading="lazy"
                className={`block w-full bg-background ${
                  device === 'mobile' ? 'aspect-[390/780]' : 'aspect-[16/9]'
                }`}
              />
            ) : device === 'desktop' ? (
              <Image
                src="/images/sameday-desktop.png"
                alt="Same Day Me homepage on desktop"
                width={1926}
                height={816}
                className="block w-full object-cover"
              />
            ) : (
              <Image
                src="/images/sameday-mobile.png"
                alt="Same Day Me homepage on mobile"
                width={942}
                height={1670}
                className="block w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
