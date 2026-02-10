# Paradise Ecosystem Web

Web informativa para Paradise Ecosystem. AI-first en estetica e interaccion, sin llamadas externas y con contenido local determinista.

## Contenido

- Modulos tipados: `src/data/modules.ts`
- Texto base: `src/data/content.ts`
- Copy centralizado: `src/content/copy.ts`
- Lentes promptables: `src/data/lenses.ts`
- Theme engine: `src/theme/themeEngine.ts`
- Hook/Provider: `src/theme/useThemeEngine.tsx`
- UI promptable: `src/components/theme`

## Scripts

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

- SPA sin React Router: no requiere `vercel.json`.
- El build genera `dist/` con `npm run build`.
- No hay variables de entorno requeridas.

## Notas

- Reemplaza los links placeholder en `src/data/content.ts` cuando tengas URLs reales.
- La UI usa Tailwind CSS y soporta reduced motion via `prefers-reduced-motion`.
- El sistema "Promptable UI" persiste el prompt en `localStorage` y actualiza tokens via CSS variables.
