import { ParadiseMark } from '../branding/ParadiseMark'
import { Container } from '../ui/Container'
import { Link } from '../ui/Link'
import { getSiteCopy, type Locale } from '../../content/localization'

export function LegalFooter({ locale = 'es' }: { locale?: Locale }) {
  const year = new Date().getFullYear()
  const c = getSiteCopy(locale).footer
  return <footer className="border-t border-[var(--p-border)] bg-[rgba(10,12,16,0.55)] py-8 text-slate-300 sm:py-10"><Container><div className="grid gap-6 sm:gap-8 md:grid-cols-[1.1fr_1fr_1fr]"><div className="space-y-3 text-xs sm:text-sm"><ParadiseMark variant="onDark" decorative heightClass="h-7 sm:h-8" maxWidthClass="max-w-[120px] sm:max-w-[132px]" className="object-left opacity-95" /><p className="text-sm font-semibold text-white">{c.legal}</p><p className="p-text-muted">{c.legalBody.replace('{year}', String(year))}</p><p className="p-text-muted">{c.createdBy}</p><div className="flex flex-wrap gap-2.5 pt-1.5 text-xs sm:gap-3 sm:pt-2"><Link href="#aviso-legal" muted className="hover:text-white">{c.legalLink}</Link><Link href="#privacidad" muted className="hover:text-white">{c.privacyLink}</Link><Link href="#contacto" muted className="hover:text-white">{c.contactLink}</Link></div></div><div id="aviso-legal" className="space-y-2 text-xs sm:text-sm"><p className="text-sm font-semibold text-white">{c.legalTitle}</p><p className="p-text-muted">{c.legalP1}</p><p className="p-text-muted">{c.legalP2}</p><p className="p-text-muted">{c.legalP3}</p></div><div id="privacidad" className="space-y-2 text-xs sm:text-sm"><p className="text-sm font-semibold text-white">{c.privacyTitle}</p><p className="p-text-muted">{c.privacyP1}</p><p className="p-text-muted">{c.privacyP2}</p><p className="p-text-muted">{c.privacyP3}</p></div></div><div className="mt-6 border-t border-[var(--p-border)] pt-4 text-xs sm:mt-8 sm:text-sm"><p className="p-text-muted">{c.trademarks}</p></div></Container></footer>
}
