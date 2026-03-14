import { useMemo, useState } from 'react'
import { ThemeProvider } from './theme/useThemeEngine'
import { PageShell } from './components/layout/PageShell'
import { modules, Status, type ModuleItem } from './data/modules'
import { marketingCopy } from './content/marketingCopy'
import {
  Contact,
  CreatorSection,
  EcosystemMap,
  Faq,
  FeaturedModules,
  HeroCommercial,
  HonestRoadmap,
  HowItWorks,
  LegalFooter,
  ParadiseDemo,
  TrustStrip,
  UseCaseTabs,
} from './components/marketing'

function pickFeatured(all: ModuleItem[], max = 5) {
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

  const featured = useMemo(() => pickFeatured(modules, 5), [])
  const navItems = marketingCopy.nav

  return (
    <ThemeProvider>
      <PageShell navItems={navItems} enableCommandPalette={false} brand={{ title: 'Paradise', subtitle: 'Ecosistema evolutivo' }}>
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
            heroSignals={marketingCopy.hero.heroSignals}
            heroModules={marketingCopy.hero.heroModules}
            heroArtifact={marketingCopy.hero.heroArtifact}
          />

          <TrustStrip items={marketingCopy.trustStrip} />

          <ParadiseDemo
            title={marketingCopy.demo.title}
            subtitle={marketingCopy.demo.subtitle}
            scenarios={marketingCopy.demo.scenarios}
          />

          <HowItWorks
            title={marketingCopy.how.title}
            steps={marketingCopy.how.steps}
            technicalToggle={marketingCopy.how.technicalToggle}
          />

          <EcosystemMap
            title={marketingCopy.ecosystem.title}
            subtitle={marketingCopy.ecosystem.subtitle}
            categories={marketingCopy.ecosystem.categories}
          />

          <UseCaseTabs
            title={marketingCopy.useCases.title}
            subtitle={marketingCopy.useCases.subtitle}
            cases={marketingCopy.useCases.cases}
            modules={modules}
            onSelectTags={(tags) => setSelectedTags([...tags])}
          />

          <FeaturedModules
            title={marketingCopy.featured.title}
            subtitle={marketingCopy.featured.subtitle}
            items={featured}
            allModules={modules}
            highlightTags={selectedTags}
          />

          <HonestRoadmap
            title={marketingCopy.roadmap.title}
            subtitle={marketingCopy.roadmap.subtitle}
            columns={marketingCopy.roadmap.columns}
          />

          <CreatorSection />

          <Faq title={marketingCopy.faq.title} items={marketingCopy.faq.items} />

          <Contact title={marketingCopy.contact.title} body={marketingCopy.contact.body} links={marketingCopy.contact.links} />

          <LegalFooter />
        </div>
      </PageShell>
    </ThemeProvider>
  )
}
