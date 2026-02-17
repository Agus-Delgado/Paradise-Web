import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Link } from '../ui/Link'
import { cn } from '../ui/cn'
import { CommandPalette } from './CommandPalette'

type NavItem = {
  label: string
  href: string
}

type PageShellProps = {
  children: ReactNode
  navItems?: ReadonlyArray<NavItem>
  className?: string
  onClearFilters?: () => void
  enableCommandPalette?: boolean
  brand?: { title: string; subtitle: string }
}

export function PageShell({
  children,
  navItems = [],
  className,
  onClearFilters,
  enableCommandPalette = false,
  brand = { title: 'Paradise', subtitle: 'Ecosistema evolutivo' },
}: PageShellProps) {
  const reduceMotion = useReducedMotion() ?? false
  const navHrefs = useMemo(() => navItems.map((item) => item.href), [navItems])
  const navIds = useMemo(() => navHrefs.map((href) => href.replace('#', '')).filter(Boolean), [navHrefs])
  const [activeSection, setActiveSection] = useState(navIds[0] ?? 'solucion')
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const mainRef = useRef<HTMLElement | null>(null)
  const ioLastUpdateRef = useRef(0)
  const fallbackEnabledRef = useRef(false)

  useEffect(() => {
    if (!activeSection && navIds.length) {
      setActiveSection(navIds[0])
    }
  }, [activeSection, navIds])

  const handleNavClick = useCallback(
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      const id = href.replace('#', '')
      setActiveSection(id)
      setMenuOpen(false)

      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      }
    },
    [reduceMotion],
  )

  const getHeaderOffset = useCallback(() => {
    if (!headerRef.current) return 0
    return headerRef.current.getBoundingClientRect().height
  }, [])

  const getScrollRoot = useCallback(() => {
    const marked = document.querySelector<HTMLElement>('[data-scroll-container="true"]')
    if (marked) return marked
    if (mainRef.current) {
      const styles = window.getComputedStyle(mainRef.current)
      if (styles.overflowY === 'auto' || styles.overflowY === 'scroll') {
        return mainRef.current
      }
    }
    return null
  }, [])

  const runFallback = useCallback(() => {
    const sections = navIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    const headerOffset = getHeaderOffset()
    const offsetTarget = headerOffset + 24
    const root = getScrollRoot()
    const rootRect = root ? root.getBoundingClientRect() : null

    let bestId = sections[0]?.id ?? ''
    let bestDistance = Number.POSITIVE_INFINITY

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const top = rootRect ? rect.top - rootRect.top : rect.top
      const distance = Math.abs(top - offsetTarget)
      if (distance < bestDistance) {
        bestDistance = distance
        bestId = section.id
      }
    })

    if (bestId) {
      setActiveSection(bestId)
    }
  }, [getHeaderOffset, getScrollRoot, navIds])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (typeof document === 'undefined' || navIds.length === 0) return

    const sections = navIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) {
      fallbackEnabledRef.current = true
      return
    }

    const root = getScrollRoot()
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          const nextId = visible[0].target.id
          // console.debug('active via IO', nextId, visible[0].intersectionRatio)
          ioLastUpdateRef.current = Date.now()
          setActiveSection(nextId)
        }
      },
      {
        root,
        rootMargin: '-15% 0px -70% 0px',
        threshold: [0.2, 0.35, 0.5, 0.65],
      },
    )

    sections.forEach((section) => observer.observe(section))

    const fallbackTimer = window.setTimeout(() => {
      if (!ioLastUpdateRef.current) {
        fallbackEnabledRef.current = true
        runFallback()
      }
    }, 1200)

    return () => {
      window.clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [getScrollRoot, navIds, runFallback])

  useEffect(() => {
    if (typeof window === 'undefined') return

    let frame = 0
    const root = getScrollRoot()
    const target = root ?? window

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const timeSinceIo = Date.now() - ioLastUpdateRef.current
        if (fallbackEnabledRef.current || timeSinceIo > 1200) {
          fallbackEnabledRef.current = true
          runFallback()
        }
      })
    }

    target.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      target.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [getScrollRoot, runFallback])


  return (
    <div className={cn('relative min-h-screen text-slate-100', className)}>
      <div className="pointer-events-none fixed inset-0 noise-overlay opacity-60" aria-hidden />
      {enableCommandPalette ? <CommandPalette navItems={navItems} onClearFilters={onClearFilters} /> : null}

      <header
        ref={headerRef}
        className="sticky top-0 z-40 border-b border-[var(--p-border)] bg-[rgba(10,12,16,0.55)] backdrop-blur-xl"
      >
        <Container className="flex items-center justify-start gap-8 py-3.5">
          <div className="flex w-[230px] items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] border border-white/10 bg-white/5 text-sm font-semibold">
              <span className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-1)/0.35)] via-transparent to-transparent" />
              <span className="relative">P</span>
            </div>
            <div>
              <p className="font-display text-base font-semibold">{brand.title}</p>
              <p className="max-w-[22ch] text-[0.7rem] leading-tight text-slate-400 sm:text-xs">
                {brand.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">
            <nav className="relative hidden items-center gap-2 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => {
              const isActive = item.href.replace('#', '') === activeSection
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-nav={item.href}
                  muted
                  className={cn(
                    'rounded-full px-3 py-1.5 text-sm text-slate-200 transition-colors duration-200 ease-out hover:bg-white/5 hover:text-white',
                    !reduceMotion && 'transition-transform hover:-translate-y-0.5',
                    isActive &&
                      'bg-gradient-to-r from-[rgb(var(--p-accent-rgb)/0.28)] to-[rgb(var(--p-accent2-rgb)/0.28)] text-white border border-[var(--p-border-strong)]',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              )
            })}
            </nav>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--p-border)] bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-[var(--p-border-strong)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--p-accent-rgb)/0.8)] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
            </button>
          </div>
        </Container>

        {menuOpen ? (
          <div className="border-t border-[var(--p-border)] bg-[rgba(10,12,16,0.75)] backdrop-blur-xl md:hidden">
            <Container className="flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  muted
                  className={cn(
                    'rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--p-accent-rgb)/0.8)]',
                      item.href.replace('#', '') === activeSection &&
                      'bg-gradient-to-r from-[rgb(var(--p-accent-rgb)/0.2)] to-[rgb(var(--p-accent2-rgb)/0.2)] text-white border border-[var(--p-border-strong)]',
                  )}
                  onClick={handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </Container>
          </div>
        ) : null}
      </header>

      <main ref={mainRef}>{children}</main>

    </div>
  )
}
