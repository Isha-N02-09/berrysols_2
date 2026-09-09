const stats = [
  { value: '30+', label: 'years of dental excellence' },
  { value: '35K+', label: 'implant patients treated' },
  { value: '13', label: 'specialist doctors profiled' },
  { value: '1', label: 'certified ZAGA center in the UAE' },
]

export function StatsRow() {
  return (
    <section aria-label="Clinic statistics" className="mx-auto max-w-7xl px-6 lg:px-10">
      <ul className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <li
            key={stat.label}
            className={`relative flex h-32 items-center justify-center border-border ${
              i > 0 ? 'lg:border-l' : ''
            } ${i % 2 === 1 ? 'border-l lg:border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''}`}
          >
            <span
              aria-hidden="true"
              className="text-outline select-none text-7xl font-extrabold tracking-tight md:text-8xl"
            >
              {stat.value}
            </span>
            <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-[11px] font-semibold uppercase leading-snug tracking-[0.2em] text-primary text-balance">
              <span className="sr-only">{stat.value} </span>
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
