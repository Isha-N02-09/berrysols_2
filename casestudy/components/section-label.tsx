type SectionLabelProps = {
  children: React.ReactNode
  as?: 'h2' | 'p'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'text-xs font-semibold',
  md: 'text-lg font-normal md:text-xl',
  lg: 'text-2xl font-bold md:text-3xl',
}

export function SectionLabel({ children, as = 'h2', size = 'md' }: SectionLabelProps) {
  const Tag = as
  return (
    <div className="flex items-center gap-4">
      <span aria-hidden="true" className="h-0.5 w-12 shrink-0 bg-primary md:w-16" />
      <Tag className={`uppercase tracking-wide text-primary ${sizes[size]}`}>{children}</Tag>
    </div>
  )
}
