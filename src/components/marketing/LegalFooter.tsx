import { ParadiseMark } from '../branding/ParadiseMark'
import { Container } from '../ui/Container'
import { Link } from '../ui/Link'

export function LegalFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--p-border)] bg-[rgba(10,12,16,0.55)] py-8 sm:py-10 text-slate-300">
      <Container>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[1.1fr_1fr_1fr]">
          <div className="space-y-3 text-xs sm:text-sm">
            <ParadiseMark
              variant="onDark"
              decorative
              heightClass="h-7 sm:h-8"
              maxWidthClass="max-w-[120px] sm:max-w-[132px]"
              className="object-left opacity-95"
            />
            <p className="text-sm font-semibold text-white">Legal</p>
            <p className="p-text-muted">© {year} Paradise — Licenciado bajo MIT para el código. Marca y contenido reservados.</p>
            <p className="p-text-muted">Creado por Agustín Delgado.</p>
            <div className="flex flex-wrap gap-2.5 pt-1.5 text-xs sm:gap-3 sm:pt-2">
              <Link href="#aviso-legal" muted className="hover:text-white">
                Aviso legal
              </Link>
              <Link href="#privacidad" muted className="hover:text-white">
                Privacidad
              </Link>
              <Link href="#contacto" muted className="hover:text-white">
                Contacto
              </Link>
            </div>
          </div>

          <div id="aviso-legal" className="space-y-2 text-xs sm:text-sm">
            <p className="text-sm font-semibold text-white">Aviso legal</p>
            <p className="p-text-muted">
              El contenido, diseño, textos y componentes visuales de este sitio son propiedad de Paradise y/o su
              creador y están protegidos por derechos de autor.
            </p>
            <p className="p-text-muted">Queda prohibida su reproducción total o parcial sin autorización expresa.</p>
            <p className="p-text-muted">
              Paradise es un proyecto en evolución; las funcionalidades y módulos pueden cambiar sin previo aviso.
            </p>
          </div>

          <div id="privacidad" className="space-y-2 text-xs sm:text-sm">
            <p className="text-sm font-semibold text-white">Privacidad</p>
            <p className="p-text-muted">Este sitio no recolecta datos personales de forma directa.</p>
            <p className="p-text-muted">Si se incluyen métricas/analytics en el futuro, se informará aquí.</p>
            <p className="p-text-muted">Para contacto: augusto.delgado00@hotmail.com.</p>
          </div>
        </div>

        <div className="mt-6 border-t border-[var(--p-border)] pt-4 text-xs sm:mt-8 sm:text-sm">
          <p className="p-text-muted">
            Los nombres 'Paradise' y los nombres de sus módulos pueden considerarse marcas o identificadores del
            proyecto.
          </p>
        </div>
      </Container>
    </footer>
  )
}
