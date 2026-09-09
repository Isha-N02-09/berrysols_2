import { SectionLabel } from './section-label'

const groups = [
  {
    label: 'Design',
    tools: [
      { name: 'Figma', mark: 'Fi' },
      { name: 'Illustrator', mark: 'Il' },
      { name: 'Photoshop', mark: 'Ph' },
    ],
  },
  {
    label: 'Build',
    tools: [
      { name: 'HTML5', mark: '</>' },
      { name: 'CSS3', mark: 'CS' },
      { name: 'JavaScript', mark: 'Ja' },
      { name: 'WordPress', mark: 'Wo' },
      { name: 'Elementor', mark: 'El' },
    ],
  },
  {
    label: 'Grow & Measure',
    tools: [
      { name: 'SEO', mark: 'SE' },
      { name: 'Analytics', mark: 'An' },
      { name: 'WhatsApp API', mark: 'Wh' },
    ],
  },
]

const badgeShades = ['#c2410c', '#f26a2e', '#f4823f', '#f9a26b', '#fbb98a']

export function Technology() {
  return (
    <section className="mx-auto max-w-7xl" id="technology">
      <div className="px-6 lg:px-10">
        <SectionLabel size="sm">06 / Technology</SectionLabel>
        <h3 className="mt-5 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-[2.6rem]">
          Tools used to design and build it.
        </h3>
      </div>

      <div className="mt-10 flex flex-col gap-10 px-6 lg:px-10">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              {group.label}
            </h4>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {group.tools.map((tool, index) => (
                <li
                  key={tool.name}
                  className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card px-4 py-6"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-8 items-center justify-center rounded-md text-[10px] font-bold text-primary-foreground"
                    style={{ backgroundColor: badgeShades[index] }}
                  >
                    {tool.mark}
                  </span>
                  <span className="text-xs font-semibold">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
