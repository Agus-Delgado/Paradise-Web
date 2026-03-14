export type UseCaseKey = 'ops' | 'community' | 'education' | 'logistics' | 'nimbus'

export const marketingCopy = {
  nav: [
    { label: 'Solución', href: '#solucion' },
    { label: 'Demo', href: '#demo' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Ecosistema', href: '#ecosistema' },
    { label: 'Módulos', href: '#modulos' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    kicker: 'Ecosistema evolutivo',
    title: 'Paradise ordena señales, activa módulos y evoluciona con cada dominio.',
    description:
      'Una capa visual para coordinar operaciones, comunidad, educación y nuevos verticales sin perder claridad. Paradise muestra qué entra, cómo se adapta y qué resultado queda listo para mover trabajo real.',
    ctas: {
      primary: { label: 'Ver demo', href: '#demo' },
      secondary: { label: 'Explorar módulos', href: '#modulos' },
    },
    proof: ['visual', 'modular', 'evolutivo', 'listo para demo'],
    heroSignals: ['alerta SLA rota', 'brief de club', 'agenda de curso', 'cola operativa'],
    heroModules: ['Paradise-AI', 'Nimbus', 'ClubNet', 'RouteOps'],
    heroArtifact: 'Artifact listo · brief ejecutivo / export / documentación',
  },
  trustStrip: ['modular', 'demo-first', 'evolutivo', 'adaptable por dominio'],
  demo: {
    title: 'Ver Paradise en acción',
    subtitle:
      'La demo muestra el corazón del ecosistema: entran señales, Paradise decide qué capa participa y deja un artifact listo para usar, compartir o explicar.',
    scenarios: [
      {
        key: 'ops',
        label: 'Operaciones',
        intro: 'Triage operativo con prioridad, contexto y entregable ejecutable.',
        signals: ['cola de alertas P1/P2', 'desvío de SLA', 'handoff incompleto'],
        modules: ['Paradise-AI', 'AtlasOps', 'AI Delivery Copilot'],
        artifactType: 'brief operativo',
        artifactTitle: 'Resumen accionable del turno',
        artifactBody: ['impacto: alto', 'prioridad: resolver incidentes P1', 'siguiente paso: asignar owner + enviar handoff'],
      },
      {
        key: 'community',
        label: 'Club / Comunidad',
        intro: 'Una experiencia clara para coordinar club, agenda, recursos y comunicación.',
        signals: ['asistencia irregular', 'mensaje de coordinación', 'recurso pendiente'],
        modules: ['Paradise-AI', 'ClubNet', 'Nexus'],
        artifactType: 'brief de comunidad',
        artifactTitle: 'Estado del club + próximos movimientos',
        artifactBody: ['foco: asistencia y comunicación', 'riesgo: baja participación en dos grupos', 'salida: brief compartible + export simple'],
      },
      {
        key: 'education',
        label: 'Educación',
        intro: 'Ordena curso, comunicación y seguimiento sin perder contexto.',
        signals: ['agenda de curso', 'novedad de alumnos', 'material pendiente'],
        modules: ['Paradise-AI', 'Aulora', 'Nexus'],
        artifactType: 'resumen académico',
        artifactTitle: 'Vista de curso lista para compartir',
        artifactBody: ['estado: seguimiento semanal claro', 'bloqueo: recursos dispersos', 'salida: agenda + alertas + resumen exportable'],
      },
      {
        key: 'logistics',
        label: 'Logística',
        intro: 'Rutas, dispatch y eventos operativos convertidos en un flujo legible.',
        signals: ['desvío de ruta', 'cola de dispatch', 'entrega en riesgo'],
        modules: ['RouteOps', 'AI Delivery Copilot', 'Paradise Nimbus'],
        artifactType: 'dispatch pack',
        artifactTitle: 'Pack operativo de handoff',
        artifactBody: ['desvío crítico: ruta 3', 'acción: reassign + notify', 'artifact: export con prioridad y ownership'],
      },
      {
        key: 'nimbus',
        label: 'Nimbus',
        intro: 'La capa transversal que conecta módulos sin volver el sistema una sopa monolítica.',
        signals: ['module event', 'artifact publish', 'health snapshot'],
        modules: ['Paradise Nimbus', 'Paradise-AI', 'Showcase'],
        artifactType: 'artifact versionado',
        artifactTitle: 'Snapshot del ecosistema',
        artifactBody: ['registry actualizado', 'event log: 3 señales nuevas', 'salida: snapshot listo para inspección'],
      },
    ],
  },
  how: {
    title: 'Cómo funciona Paradise',
    steps: [
      { title: 'Entrás por una señal clara', body: 'Puede venir de operaciones, comunidad, un curso, una ruta o un flujo mockeado para demo.' },
      { title: 'Paradise decide qué capa toca', body: 'La orquestación hace visible qué módulo entra, por qué entra y cuál es el siguiente paso razonable.' },
      { title: 'El resultado no queda en el aire', body: 'Sale un artifact concreto: brief, export, resumen, handoff o documentación lista para circular.' },
    ],
    technicalToggle: {
      title: 'También tiene lectura técnica',
      body: 'Si querés bajar una capa más, Paradise se apoya en contratos, módulos desacoplados, artifacts y eventos para crecer sin volverse un monstruo ilegible.',
      cta: 'Ver vista técnica',
    },
  },
  ecosystem: {
    title: 'Un ecosistema modular con centro y capas',
    subtitle:
      'Paradise se piensa como un sistema con un núcleo visible, una capa transversal y verticales que pueden crecer sin perder identidad.',
    categories: [
      {
        id: 'core',
        title: 'Core / IA',
        description: 'La interfaz que traduce señales en decisión, narrativa y artifacts listos para mover trabajo.',
        modules: ['Paradise-AI', 'Paradise Nexus'],
      },
      {
        id: 'control',
        title: 'Control Plane',
        description: 'Nimbus coordina registry, eventos y artifacts para conectar módulos sin acoplarlos a martillazos.',
        modules: ['Paradise Nimbus', 'Paradise Showcase'],
      },
      {
        id: 'operations',
        title: 'Operaciones',
        description: 'Consolas, triage, handoffs y decisiones operativas con contexto visible.',
        modules: ['Paradise AtlasOps', 'Paradise RouteOps', 'Paradise QC Sentinel'],
      },
      {
        id: 'community',
        title: 'Comunidad / Experiencia',
        description: 'Espacios donde la coordinación también es relación, agenda y experiencia.',
        modules: ['Paradise ClubNet', 'AI Delivery Copilot'],
      },
      {
        id: 'education',
        title: 'Conocimiento / Educación',
        description: 'Paradise también baja la complejidad cuando hay cursos, recursos, memoria y seguimiento.',
        modules: ['Paradise Aulora', 'Paradise ModelArc'],
      },
      {
        id: 'verticals',
        title: 'Verticales en evolución',
        description: 'Módulos y experiencias que pueden crecer por dominio sin romper la lógica transversal del ecosistema.',
        modules: ['The Velvet', 'Paradise Halo', 'nuevos verticales'],
      },
    ],
  },
  useCases: {
    title: 'Soluciones destacadas',
    subtitle: 'Elegí un frente y Paradise actualiza la vista del módulo sugerido para mostrar cómo bajaría ese caso a producto.',
    cases: [
      {
        key: 'ops' as const,
        label: 'Operaciones',
        problem: 'Muchas señales, poca claridad sobre impacto, ownership y siguiente movimiento.',
        outcome: 'Triage, prioridad visible, artifact accionable y handoff claro.',
        tags: ['ops', 'alerts', 'triage', 'routing', 'signals'],
      },
      {
        key: 'community' as const,
        label: 'Comunidad',
        problem: 'Clubes y espacios comunitarios se vuelven caóticos cuando agenda, seguimiento y comunicación viven separados.',
        outcome: 'Experiencia más clara para coordinar comunidad, agenda y recursos.',
        tags: ['sports', 'community', 'operations', 'demo'],
      },
      {
        key: 'education' as const,
        label: 'Educación',
        problem: 'Cursos, seguimiento y comunicación suelen quedar dispersos entre demasiadas herramientas.',
        outcome: 'Una consola más legible para cursos, novedades y materiales.',
        tags: ['education', 'community', 'knowledge', 'coordination'],
      },
      {
        key: 'logistics' as const,
        label: 'Logística',
        problem: 'Rutas, colas y handoffs se vuelven opacos muy rápido cuando el volumen sube.',
        outcome: 'Flujo operativo y dispatch con prioridad, detalle y ownership visible.',
        tags: ['logistics', 'delivery', 'routing', 'ops'],
      },
      {
        key: 'nimbus' as const,
        label: 'Nimbus',
        problem: 'Querés conectar módulos sin reventar la arquitectura cada vez que aparece un caso nuevo.',
        outcome: 'Registry, eventos y artifacts como base evolutiva.',
        tags: ['cloud', 'registry', 'events', 'artifacts'],
      },
    ],
  },
  featured: {
    title: 'Módulos que ya muestran la dirección',
    subtitle: 'La selección de abajo se adapta al caso elegido arriba y amplía el módulo más relevante con una lectura más comercial y concreta.',
  },
  roadmap: {
    title: 'Base real hoy, evolución clara mañana',
    subtitle:
      'Paradise no se presenta como imperio terminado. Se presenta como un ecosistema serio: ya demostrable, todavía creciendo y con dirección concreta.',
    columns: [
      {
        title: 'Disponible hoy',
        description: 'Landing, demos locales, módulos visibles y narrativa de coordinación ya navegable.',
        items: ['Experiencia comercial clara', 'Módulos navegables', 'Demos mock-first y flujos guiados'],
      },
      {
        title: 'En evolución',
        description: 'Conexión más rica entre módulos, mejores artifacts y capas de coordinación más profundas.',
        items: ['Más interacciones entre módulos', 'UX más inmersiva por vertical', 'Artifacts más ricos y consistentes'],
      },
      {
        title: 'Próximo paso',
        description: 'Nimbus más sólido, IA central más fuerte y crecimiento de verticales sin perder legibilidad.',
        items: ['Control plane cloud-first', 'Paradise AI como voz transversal', 'Más verticales listas para demo'],
      },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: '¿Paradise ya es un producto cerrado?',
        a: 'No. Hoy es un ecosistema modular demostrable y evolutivo. La web muestra la dirección, la lógica y la experiencia que ya se puede recorrer.',
      },
      {
        q: '¿Necesito ser técnico para entenderlo?',
        a: 'No. Justamente la landing busca mostrar Paradise de forma comprensible para negocio, operación y técnica sin esconder la complejidad detrás de humo marketinero.',
      },
      {
        q: '¿Nimbus ya está totalmente implementado?',
        a: 'No. Nimbus aparece como la capa estructural en evolución para registry, eventos y artifacts, no como una promesa inflada que ya resuelve todo mágicamente.',
      },
      {
        q: '¿Qué valor muestra hoy la demo?',
        a: 'Muestra cómo una señal entra, cómo Paradise la enruta y qué artifact deja listo. Ese es el corazón del sistema.',
      },
      {
        q: '¿Paradise puede crecer por dominio sin rehacerse entero?',
        a: 'Esa es la idea. El ecosistema está pensado para sumar verticales y módulos sin perder la lógica transversal ni reventar la identidad del producto.',
      },
      {
        q: '¿Esto está pensado solo como portfolio?',
        a: 'No. La landing también funciona como prueba de dirección de producto: deja ver cómo se podría presentar, vender y evolucionar Paradise frente a clientes, partners o recruiters.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    body: 'Si querés revisar Paradise, recorrer la demo o conversar sobre cómo aterrizar una vertical, este es el punto de entrada.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agustin-delgado-data98615190/' },
      { label: 'Email', href: 'mailto:augusto.delgado00@hotmail.com' },
    ],
  },
} as const
