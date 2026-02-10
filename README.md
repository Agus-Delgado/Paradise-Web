# Paradise Web

Landing **informativa** del ecosistema **Paradise**: un catalogo modular AI-first para construir herramientas de **Decision Intelligence** y **Knowledge** con foco en **claridad, velocidad y costo minimo**.

Esta web esta pensada para:
- explicar que es Paradise (Core + modulos)
- mostrar pilares, principios y roadmap
- ofrecer un recorrido guiado (tour / router mode)
- mantener estetica "AI-native" sin depender de APIs externas

> Nota: por ahora el objetivo es **informar**. A futuro se puede evolucionar a una landing mas comercial sin rehacer la base.

---

## Features

### UI / Experiencia
- **Landing informativa** con secciones: Hero, Core, Principles, Pillars, Modules, Showcase, Roadmap.
- **AI-native aesthetic**: aurora + grid + glow controlado, tipografia y jerarquia cuidada.
- **Promptable Theme (deterministico)**: input para "describir el vibe" y presets (sin IA real).
- **Router Mode**: panel de exploracion por intencion/pillar (guia el recorrido).
- **Catalogo de modulos** con filtros (pillar/status) + busqueda por texto/tags.
- **Accesibilidad**: focus states, soporte `prefers-reduced-motion`, contraste solido.

### Contenido (data-driven)
- Catalogo renderizado desde un registry local (TypeScript):
	- nombre, pillar, estado, one-liner, highlights, tags, links (repo/demo/docs)

---

## Stack

- **Vite** + **React** + **TypeScript**
- **TailwindCSS** (tokens + layers + utilities)
- (Opcional) **framer-motion** para micro-animaciones (respetando reduced motion)
- Deploy: **Vercel** (static SPA)

---

## Estructura del proyecto

src/
	components/
		layout/        # Header, Footer, PageShell, (CommandPalette opcional)
		sections/      # Hero, Principles, Pillars, Modules, Showcase, Roadmap
		ui/            # Card, Button, Badge, Pill, PromptBlock, etc.
	content/
		copy.ts        # textos centralizados (informativos)
	data/
		modules.ts     # registry local (modulos)
	styles/
		global.css     # tailwind directives + layers + tokens visuales
	theme/
		themeEngine.ts # promptable theme deterministico
		useThemeEngine.ts
public/
	og.png           # imagen OG (placeholder)
	favicon.svg
index.html         # meta tags + OG

---

## Requisitos

- Node.js **18+** (recomendado 18 o 20)
- npm (o pnpm/yarn si lo preferis, pero el repo asume npm)

---

## Ejecutar en local

Instalar dependencias:

npm install

Levantar entorno dev:

npm run dev

Vite te mostrara una URL tipo:
- http://localhost:5173

Build de produccion:

npm run build

Preview del build (modo produccion local):

npm run preview

---

## Deploy en Vercel

### Opcion 1: Import desde GitHub (recomendado)
1. Subi este repo a GitHub.
2. En Vercel: Add New -> Project -> Import Git Repository
3. Configuracion (Vite):
	 - Build Command: npm run build
	 - Output Directory: dist
	 - Install Command: npm install
4. Deploy.

### Opcion 2: Redeploy automatico
Cada push a main dispara un deploy automatico (preview en PRs, produccion al merge).

---

## Configuracion de Tailwind (nota importante)

Este proyecto usa @layer base/components/utilities, por lo que el CSS principal **debe incluir**:

@tailwind base;
@tailwind components;
@tailwind utilities;

Si ves errores tipo:
"@layer base is used but no matching @tailwind base directive is present"

revisa que:
- global.css tenga esas directivas al inicio
- main.tsx importe **un solo entry CSS** (ej: index.css o global.css, pero no ambos)

---

## Como editar contenido (sin tocar componentes)

### Textos
Editar:
- src/content/copy.ts

Ahi esta el copy del Hero, explicacion del Core, principles, roadmap, etc.

### Modulos
Editar:
- src/data/modules.ts

Cada modulo tiene este shape:

{
	id: string,
	name: string,
	pillar: "Operations Intelligence" | "Anomaly Detection" | ...,
	status: "active" | "mvp" | "idea" | "demo",
	oneLiner: string,
	highlights: string[],
	tags: string[],
	repoUrl: string,
	demoUrl?: string,
	docsUrl?: string
}

---

## Roadmap (Web)

- Mejorar el "tour" guiado del Showcase (narrativa en 2 minutos)
- Anadir "docs view" embebida (render markdown local)
- Command Palette (Ctrl/Cmd+K) para navegacion rapida
- (Futuro) Integracion BYOK para modulos que lo requieran (sin romper modo offline)

---

## Licencia

MIT (o la que defina el ecosistema / repos madre).

---

## Autor / Ecosistema

Paradise es un ecosistema modular AI-first.
Este repositorio es la **landing informativa** que centraliza narrativa y acceso a modulos.
