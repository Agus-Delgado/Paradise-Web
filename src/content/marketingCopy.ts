export type UseCaseKey = 'ops' | 'anomalies' | 'logistics' | 'education' | 'nimbus'

export const marketingCopy = {
  nav: [
    { label: 'Solución', href: '#solucion' },
    { label: 'Casos de uso', href: '#casos' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Módulos', href: '#modulos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    kicker: 'De la señal a la acción',
    title: 'Paradise convierte información dispersa en decisiones claras.',
    description:
      'Suite modular para coordinación: ordena señales, propone próximos pasos y genera entregables listos para compartir (briefs, alertas, exports y documentación).',
    ctas: {
      primary: { label: 'Contactar', href: '#contacto' },
      secondary: { label: 'GitHub (Creador)', href: 'https://github.com/Agus-Delgado' },
    },
    proof: ['Open-source', 'Modular', 'Mock-first', 'Listo para POC'],
  },
  outcomes: {
    title: 'Resultados, sin humo',
    items: [
      {
        title: 'Menos ida y vuelta',
        body: 'Estructura y lenguaje común para que negocio y técnica se entiendan sin fricción.',
      },
      {
        title: 'Prioridad clara',
        body: 'Triage por impacto: qué importa hoy, por qué, y cuál es el siguiente paso.',
      },
      {
        title: 'Trazabilidad',
        body: 'Contexto y decisiones registradas para explicar el “por qué” a equipos y stakeholders.',
      },
      {
        title: 'Empezás chico, escalás',
        body: 'Módulos independientes: armás un POC rápido y evolucionás sin reescribir todo.',
      },
    ],
  },
  who: {
    title: 'Pensado para equipos que coordinan',
    items: ['Operaciones', 'Founders & PMs', 'Soporte y Calidad', 'Data / BI', 'Educación & Comunidad'],
  },
  useCases: {
    title: 'Casos de uso',
    subtitle: 'Elegí tu escenario. Te mostramos qué resuelve y qué módulos suelen encajar.',
    cases: [
      {
        key: 'ops' as const,
        label: 'Operaciones',
        problem: 'Muchas señales, poca claridad de prioridad.',
        outcome: 'KPIs + alertas accionables + playbooks.',
        tags: ['ops', 'alerts', 'triage', 'routing', 'signals'],
      },
      {
        key: 'anomalies' as const,
        label: 'Anomalías',
        problem: 'Caídas y desvíos aparecen tarde o sin contexto.',
        outcome: 'Detección + severidad + antes/después.',
        tags: ['anomalies', 'risk', 'detection'],
      },
      {
        key: 'logistics' as const,
        label: 'Logística',
        problem: 'Delivery y coordinación con cuellos de botella.',
        outcome: 'Ruteo operativo y flujos de handoff.',
        tags: ['logistics', 'delivery', 'routing', 'ops'],
      },
      {
        key: 'education' as const,
        label: 'Educación',
        problem: 'Comunicación y recursos dispersos.',
        outcome: 'Estructura de comunidad + recursos y seguimiento.',
        tags: ['education', 'community', 'knowledge'],
      },
      {
        key: 'nimbus' as const,
        label: 'Nimbus',
        problem: 'Necesitás conectar módulos sin acoplarlos.',
        outcome: 'Registry + eventos + artifacts con contratos.',
        tags: ['cloud', 'registry', 'events', 'artifacts'],
      },
    ],
  },
  how: {
    title: 'Cómo funciona',
    steps: [
      { title: 'Conectás señales (o mockeás)', body: 'Empezás con datos reales o simulados para validar rápido.' },
      { title: 'Paradise ordena y rutea', body: 'Normaliza, clasifica y sugiere el siguiente paso con contexto.' },
      { title: 'Sale un entregable', body: 'Brief, alerta, export o docs listos para compartir y ejecutar.' },
    ],
    technicalToggle: {
      title: '¿Querés ver lo técnico?',
      body: 'Paradise también está pensado para devs: módulos, contratos y piezas desacopladas.',
      cta: 'Ver detalles',
    },
  },
  featured: {
    title: 'Soluciones destacadas',
    subtitle: 'Una selección curada para arrancar rápido.',
  },
  fullCatalog: {
    title: 'Catálogo completo',
    subtitle: 'Buscá por nombre, tag o estado. (Opcional) filtros avanzados.',
    toggle: 'Ver todos los módulos',
    hide: 'Ocultar catálogo',
    searchPlaceholder: 'Buscar módulos…',
    filtersLabel: 'Filtros',
    clear: 'Limpiar',
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: '¿Es open-source?',
        a: 'Sí. La idea es que puedas revisar el código, correrlo local y adaptar módulos según tu contexto.',
      },
      {
        q: '¿Necesito cloud para usarlo?',
        a: 'No. El enfoque es mock-first/local-first. Nimbus aparece cuando querés persistencia y conexión entre módulos.',
      },
      {
        q: '¿Qué entrega concretamente?',
        a: 'Alertas, briefs operativos, exports y documentación: artefactos listos para compartir con tu equipo.',
      },
      {
        q: '¿Cómo empiezo?',
        a: 'Elegí un caso de uso, levantá la demo local y validá un flujo simple en 1–2 módulos. Después escalás.',
      },
    ],
  },
  finalCta: {
    title: '¿Querés ver Paradise en acción?',
    body: 'Podemos revisar un caso de uso y dejar un POC funcional con módulos curados.',
    primary: { label: 'Ir a módulos', href: '#modulos' },
    secondary: { label: 'Contactar', href: '#contacto' },
  },
  contact: {
    title: 'Contacto',
    body: 'Contactame para coordinar una charla breve o revisar tu caso de uso.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agustin-delgado-data98615190/' },
      { label: 'Email', href: 'mailto:augusto.delgado00@hotmail.com' },
    ],
  },
} as const
