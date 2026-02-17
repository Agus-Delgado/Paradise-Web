import type { ModuleItem } from '../../data/modules'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { ModuleCard } from '../landing/ModuleCard'

export function FeaturedModules({
  title,
  subtitle,
  items,
  highlightTags,
}: {
  title: string
  subtitle: string
  items: ModuleItem[]
  highlightTags?: string[]
}) {
  return (
    <Section id="modulos" className="py-16">
      <Container>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="p-text-muted mt-3 max-w-2xl text-sm leading-relaxed md:text-base">{subtitle}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => (
            <ModuleCard key={m.id} module={m} highlightTags={highlightTags ?? []} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
