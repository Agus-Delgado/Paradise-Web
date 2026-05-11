import { useCallback, useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ThemeProvider } from './theme/useThemeEngine'
import { cn } from './components/ui/cn'
import { PageShell } from './components/layout/PageShell'
import { Status, type ModuleItem } from './data/modules'
import {
  Contact,
  CommunitySection,
  CreatorSection,
  EcosystemMap,
  Faq,
  FeaturedModules,
  HeroCommercial,
  HonestRoadmap,
  HowItWorks,
  LegalFooter,
  ManifestoSection,
  ParadiseBrainShowcase,
  ParadiseDemo,
  ParadisePresentationModal,
  TrustStrip,
  UseCaseTabs,
} from './components/marketing'
import { ParadiseIntroGate } from './components/marketing/ParadiseIntroGate'
import {
  defaultLocale,
  getMarketingCopy,
  getModules,
  getShowcaseTraces,
  getSiteCopy,
  localeOptions,
  type Locale,
} from './content/localization'
import { communitySignals } from './data/communitySignals'

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

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  const saved = window.localStorage.getItem('paradise-locale')
  if (saved === 'es' || saved === 'en') return saved
  const browser = window.navigator.language.toLowerCase()
  return browser.startsWith('es') ? 'es' : 'en'
}

export default function App() {
  const reduceMotion = useReducedMotion() ?? false
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const [introOpen, setIntroOpen] = useState(true)
  const [landingReveal, setLandingReveal] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [presentationOpen, setPresentationOpen] = useState(false)

  const marketingCopy = useMemo(() => getMarketingCopy(locale), [locale])
  const siteCopy = useMemo(() => getSiteCopy(locale), [locale])
  const modules = useMemo(() => getModules(locale), [locale])
  const showcaseTraces = useMemo(() => getShowcaseTraces(locale), [locale])

  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(
    () => marketingCopy.useCases.cases[0]?.recommendedModuleId ?? null,
  )

  useEffect(() => {
    setSelectedModuleId(marketingCopy.useCases.cases[0]?.recommendedModuleId ?? null)
  }, [marketingCopy.useCases.cases])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('paradise-locale', locale)
    document.documentElement.lang = locale
  }, [locale])

  const openPresentation = useCallback(() => setPresentationOpen(true), [])
  const closePresentation = useCallback(() => setPresentationOpen(false), [])

  useEffect(() => {
    if (introOpen) {
      queueMicrotask(() => setLandingReveal(false))
      return
    }
    if (reduceMotion) {
      queueMicrotask(() => setLandingReveal(true))
      return
    }
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setLandingReveal(true))
    })
    return () => cancelAnimationFrame(id)
  }, [introOpen, reduceMotion])

  const mainVisible = reduceMotion ? !introOpen : !introOpen && landingReveal
  const featured = useMemo(() => pickFeatured(modules, 5), [modules])
  const navItems = marketingCopy.nav

  return (
    <ThemeProvider>
      {introOpen ? <ParadiseIntroGate key="paradise-intro" onDismissed={() => setIntroOpen(false)} locale={locale} /> : null}

      {presentationOpen ? (
        <ParadisePresentationModal
          open={presentationOpen}
          onClose={closePresentation}
          closeLabel={siteCopy.presentationCloseLabel}
          dialogLabel={siteCopy.presentationDialogLabel}
        />
      ) : null}

      <PageShell
        navItems={navItems}
        enableCommandPalette={false}
        brand={{ title: 'Paradise', subtitle: siteCopy.brandSubtitle }}
        onOpenPresentation={openPresentation}
        presentationNavLabel={siteCopy.presentationButton}
        presentationNavAriaLabel={`${siteCopy.presentationButton}. ${siteCopy.presentationDialogLabel}`}
        locale={locale}
        onLocaleChange={setLocale}
        localeOptions={localeOptions}
        languageLabel={siteCopy.languageLabel}
      >
        <a
          href="#solucion"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-night-950 shadow"
        >
          {siteCopy.skipToContent}
        </a>

        <div
          className={cn(
            'relative',
            !reduceMotion && 'transition-opacity duration-[450ms] ease-out',
            mainVisible ? 'opacity-100' : 'opacity-0',
            !mainVisible && 'pointer-events-none',
          )}
        >
          <HeroCommercial
            kicker={marketingCopy.hero.kicker}
            title={marketingCopy.hero.title}
            description={marketingCopy.hero.description}
            ctas={marketingCopy.hero.ctas}
            proof={marketingCopy.hero.proof}
            heroSignals={marketingCopy.hero.heroSignals}
            heroModules={marketingCopy.hero.heroModules}
            heroArtifact={marketingCopy.hero.heroArtifact}
            locale={locale}
            onOpenPresentation={openPresentation}
            presentationCta={siteCopy.presentationCta}
            presentationCtaAriaLabel={`${siteCopy.presentationCta}. ${siteCopy.presentationDialogLabel}`}
          />

          <ManifestoSection
            kicker={marketingCopy.manifesto.kicker}
            title={marketingCopy.manifesto.title}
            videoAriaLabel={marketingCopy.manifesto.videoAriaLabel}
            highlights={marketingCopy.manifesto.highlights}
            paragraphs={marketingCopy.manifesto.paragraphs}
          />

          <TrustStrip items={marketingCopy.trustStrip} />

          <ParadiseDemo title={marketingCopy.demo.title} subtitle={marketingCopy.demo.subtitle} scenarios={marketingCopy.demo.scenarios} locale={locale} />

          <ParadiseBrainShowcase traces={showcaseTraces} locale={locale} />

          <HowItWorks title={marketingCopy.how.title} steps={marketingCopy.how.steps} technicalToggle={marketingCopy.how.technicalToggle} locale={locale} />

          <EcosystemMap title={marketingCopy.ecosystem.title} subtitle={marketingCopy.ecosystem.subtitle} categories={marketingCopy.ecosystem.categories} locale={locale} />

          <UseCaseTabs
            title={marketingCopy.useCases.title}
            subtitle={marketingCopy.useCases.subtitle}
            cases={marketingCopy.useCases.cases}
            modules={modules}
            onSelectTags={(tags) => setSelectedTags([...tags])}
            onSelectModuleId={(id) => setSelectedModuleId(id)}
            locale={locale}
          />

          <FeaturedModules
            title={marketingCopy.featured.title}
            subtitle={marketingCopy.featured.subtitle}
            items={featured}
            allModules={modules}
            highlightTags={selectedTags}
            preferredModuleId={selectedModuleId ?? undefined}
            locale={locale}
          />

          <HonestRoadmap title={marketingCopy.roadmap.title} subtitle={marketingCopy.roadmap.subtitle} columns={marketingCopy.roadmap.columns} locale={locale} />

          <CreatorSection locale={locale} />

          <CommunitySection copy={marketingCopy.community} locale={locale} signals={communitySignals} />

          <Faq title={marketingCopy.faq.title} items={marketingCopy.faq.items} />

          <Contact title={marketingCopy.contact.title} body={marketingCopy.contact.body} links={marketingCopy.contact.links} />

          <LegalFooter locale={locale} />
        </div>
      </PageShell>
    </ThemeProvider>
  )
}
