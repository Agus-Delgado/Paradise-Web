import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Container } from '../ui/Container'
import { Link } from '../ui/Link'
import { cn } from '../ui/cn'

type NavItem = {
  label: string
  href: string
}

type PageShellProps = {
  children: ReactNode
  navItems?: NavItem[]
  className?: string
}

export function PageShell({ children, navItems = [], className }: PageShellProps) {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? '')

  useEffect(() => {
    if (typeof document === 'undefined' || navItems.length === 0) return

    const sectionIds = navItems
      .map((item) => item.href.replace('#', ''))
      .filter((id) => Boolean(id))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  return (
    <div className={cn('relative min-h-screen text-slate-100', className)}>
      <div className="pointer-events-none fixed inset-0 noise-overlay opacity-60" aria-hidden />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-night-950/70 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-white/10 text-sm font-semibold">
              PE
            </div>
            <div>
              <p className="font-display text-base font-semibold">Paradise Ecosystem</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">AI native system</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 md:flex">
            {navItems.map((item) => {
              const isActive = item.href === activeHref
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  muted
                  className={cn('relative', isActive && 'text-white')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        'absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[rgb(var(--accent-1)/0.9)] opacity-0 transition',
                        isActive && 'opacity-100',
                      )}
                    />
                  </span>
                </Link>
              )
            })}
          </nav>
        </Container>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 py-10">
        <Container className="flex flex-col items-start justify-between gap-6 text-xs text-slate-400 md:flex-row md:items-center">
          <div>
            <p className="font-semibold text-slate-200">Paradise Ecosystem</p>
            <p className="mt-2 max-w-md text-xs text-slate-400">
              AI native coordination layer for modules, teams, and trustable workflows.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#modules" muted>
              Catalogo
            </Link>
            <Link href="#showcase" muted>
              Showcase
            </Link>
            <Link href="#roadmap" muted>
              Roadmap
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  )
}
