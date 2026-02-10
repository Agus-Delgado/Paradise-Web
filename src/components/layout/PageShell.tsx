import { useMemo } from 'react'
import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Link } from '../ui/Link'
import { cn } from '../ui/cn'
import { useActiveSection } from '../../hooks/useActiveSection'
import { CommandPalette } from './CommandPalette'

type NavItem = {
  label: string
  href: string
}

type PageShellProps = {
  children: ReactNode
  navItems?: NavItem[]
  className?: string
  onClearFilters?: () => void
}

export function PageShell({ children, navItems = [], className, onClearFilters }: PageShellProps) {
  const reduceMotion = useReducedMotion() ?? false
  const navHrefs = useMemo(() => navItems.map((item) => item.href), [navItems])
  const activeHref = useActiveSection(navHrefs)

  return (
    <div className={cn('relative min-h-screen text-slate-100', className)}>
      <div className="pointer-events-none fixed inset-0 noise-overlay opacity-60" aria-hidden />
      <CommandPalette navItems={navItems} onClearFilters={onClearFilters} />
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
                  <span className="relative pb-2">
                    {item.label}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[rgb(var(--accent-1)/0.9)]',
                        !reduceMotion && 'transition-transform duration-200',
                        isActive && 'scale-x-100',
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
