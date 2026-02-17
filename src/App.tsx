import { useMemo, useState } from 'react'
import { ThemeProvider } from './theme/useThemeEngine'
import { PageShell } from './components/layout/PageShell'
import { modules, Status, type ModuleItem } from './data/modules'
import { marketingCopy } from './content/marketingCopy'
import {
  Contact,
  CreatorSection,
  Faq,
  FeaturedModules,
  FinalCTA,
  FullCatalog,
  HeroCommercial,
  HowItWorks,
  OutcomesGrid,
  UseCaseTabs,
  WhoUses,
} from './components/marketing'

function pickFeatured(all: ModuleItem[], max = 6) {
  // Prefer Active/MVP and distribute across pillars.
  const priority = (m: ModuleItem) => (m.status === Status.Active ? 2 : m.status === Status.Mvp ? 1 : 0)
  const sorted = [...all].sort((a, b) => priority(b) - priority(a))
  const byPillar = new Map<string, ModuleItem[]>()
  for (const m of sorted) {
    const list = byPillar.get(m.pillar) ?? []
    list.push(m)
    byPillar.set(m.pillar, list)
  }

  const pillars = Array.from(byPillar.keys())
  const out: ModuleItem[] = []
  let i = 0
  while (out.length < max && pillars.length) {
    const pillar = pillars[i % pillars.length]
    const list = byPillar.get(pillar) ?? []
    const next = list.shift()
    if (next) out.push(next)
    i += 1
    if (list.length === 0) {
      byPillar.delete(pillar)
      const idx = pillars.indexOf(pillar)
      if (idx >= 0) pillars.splice(idx, 1)
      i = 0
    }
  }
  return out.slice(0, max)
}

export default function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const featured = useMemo(() => pickFeatured(modules, 6), [])
  const navItems = marketingCopy.nav

  return (
    <ThemeProvider>
      <PageShell navItems={navItems} enableCommandPalette={false}>
        <a
          href="#solucion"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-night-950 shadow"
        >
          Saltar al contenido
        </a>

        <div className="relative">
          <HeroCommercial
            kicker={marketingCopy.hero.kicker}
            title={marketingCopy.hero.title}
            description={marketingCopy.hero.description}
            ctas={marketingCopy.hero.ctas}
            proof={marketingCopy.hero.proof}
          />

          <OutcomesGrid title={marketingCopy.outcomes.title} items={marketingCopy.outcomes.items} />

          <WhoUses title={marketingCopy.who.title} items={marketingCopy.who.items} />

          <UseCaseTabs
            title={marketingCopy.useCases.title}
            subtitle={marketingCopy.useCases.subtitle}
            cases={marketingCopy.useCases.cases}
            modules={modules}
            onSelectTags={(tags) => setSelectedTags([...tags])}
          />

          <HowItWorks title={marketingCopy.how.title} steps={marketingCopy.how.steps} technicalToggle={marketingCopy.how.technicalToggle} />

          <FeaturedModules
            title={marketingCopy.featured.title}
            subtitle={marketingCopy.featured.subtitle}
            items={featured}
            highlightTags={selectedTags}
          />

          <FullCatalog
            title={marketingCopy.fullCatalog.title}
            subtitle={marketingCopy.fullCatalog.subtitle}
            toggleLabel={marketingCopy.fullCatalog.toggle}
            hideLabel={marketingCopy.fullCatalog.hide}
            searchPlaceholder={marketingCopy.fullCatalog.searchPlaceholder}
            filtersLabel={marketingCopy.fullCatalog.filtersLabel}
            clearLabel={marketingCopy.fullCatalog.clear}
            modules={modules}
            selectedTags={selectedTags}
            onClearSelectedTags={() => setSelectedTags([])}
          />

          <FinalCTA
            title={marketingCopy.finalCta.title}
            body={marketingCopy.finalCta.body}
            primary={marketingCopy.finalCta.primary}
            secondary={marketingCopy.finalCta.secondary}
          />

          <Faq title={marketingCopy.faq.title} items={marketingCopy.faq.items} />

          <CreatorSection />

          <Contact title={marketingCopy.contact.title} body={marketingCopy.contact.body} links={marketingCopy.contact.links} />
        </div>
      </PageShell>
    </ThemeProvider>
  )
}
