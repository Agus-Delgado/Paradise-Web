import { useEffect, useState } from 'react'

type UseActiveSectionOptions = {
  rootMargin?: string
  threshold?: number | number[]
}

export function useActiveSection(hrefs: string[], options: UseActiveSectionOptions = {}) {
  const [activeHref, setActiveHref] = useState(hrefs[0] ?? '')
  const rootMargin = options.rootMargin ?? '-20% 0px -60% 0px'
  const threshold = options.threshold ?? 0.1

  useEffect(() => {
    if (typeof document === 'undefined' || hrefs.length === 0) return

    const sectionIds = hrefs.map((item) => item.replace('#', '')).filter(Boolean)
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
      { rootMargin, threshold },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [hrefs, rootMargin, threshold])

  return activeHref
}
