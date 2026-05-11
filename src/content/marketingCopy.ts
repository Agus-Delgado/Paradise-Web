export type UseCaseKey =
  | 'ops'
  | 'community'
  | 'education'
  | 'logistics'
  | 'nimbus'
  | 'health'
  | 'pulse'
  | 'qc-sentinel'
  | 'vault'
  | 'velvet'
  | 'orbit'
  | 'relay'
  | 'meter'

export const marketingCopy = {
  nav: [
    { label: 'Solución', href: '#solucion' },
    { label: 'Manifiesto', href: '#manifiesto' },
    { label: 'Comunidad', href: '#comunidad' },
    { label: 'Demo', href: '#demo' },
    { label: 'Cómo piensa', href: '#como-piensa' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Ecosistema', href: '#ecosistema' },
    { label: 'Casos', href: '#casos' },
    { label: 'Módulos', href: '#modulos' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    kicker: 'Paradise Web',
    title: '¿Creés en el paraíso?',
    description:
      'Paradise es un ecosistema evolutivo diseñado para conectar visión, inteligencia y construcción.',
    ctas: {
      primary: { label: 'Explorar Paradise', href: '#ecosistema' },
      secondary: { label: 'Ver manifiesto', href: '#manifiesto' },
    },
    proof: ['visual', 'modular', 'evolutivo', 'listo para demo'],
    heroSignals: ['alerta SLA rota', 'brief de club', 'agenda de curso', 'cola operativa'],
    heroModules: ['Paradise-AI', 'Nimbus', 'ClubNet', 'RouteOps'],
    heroArtifact: 'Artifact listo · brief ejecutivo / export / documentación',
  },
  trustStrip: ['modular', 'demo-first', 'evolutivo', 'adaptable por dominio'],
  manifesto: {
    kicker: 'Manifiesto',
    title: 'Un ecosistema vivo',
    videoAriaLabel: 'Video manifiesto de Paradise en YouTube',
    highlights: [
      { name: 'Paradise AI', role: 'La mente del sistema' },
      { name: 'Nimbus', role: 'Sistema nervioso' },
      { name: 'Módulos', role: 'Cuerpo especializado' },
      { name: 'Artifacts', role: 'Resultados concretos' },
    ],
    paragraphs: [
      'Paradise no nace como una herramienta aislada.',
      'Nace como un ecosistema vivo: una forma de conectar ideas, datos, procesos y decisiones dentro de una misma inteligencia.',
      'Paradise AI funciona como la mente del sistema: interpreta contexto, entiende necesidades y ayuda a pensar el próximo paso.',
      'Nimbus actúa como su sistema nervioso: conecta señales, módulos, artifacts y resultados para que cada parte pueda trabajar en conjunto.',
      'Y cada módulo se comporta como una parte especializada de ese cuerpo: preparado para resolver necesidades concretas en distintos mundos de trabajo.',
      'Paradise no es un destino terminado. Es algo que se construye, se adapta y evoluciona con cada persona, equipo o empresa.',
    ],
  },
  community: {
    kicker: 'Comunidad Paradise',
    title: 'Primeras señales',
    intro:
      'Paradise no busca ser un chatbot común ni un producto comercial cerrado: es un ecosistema vivo que necesita señales humanas para evolucionar con criterio. Este espacio es una invitación a participar sin backend ni promesas mágicas: podés dejar una huella y responder una encuesta breve para ayudar a orientar el rumbo.',
    signalsHeading: 'Señales en la página',
    signalsEmptyTitle: 'Sin señales publicadas todavía',
    signalsEmptyBody:
      'Cuando haya aportes aprobados, van a aparecer acá. Todo lo que se muestra en esta sección pasa antes por una revisión manual.',
    formsNotConfiguredNotice:
      'Los envíos a Google Forms todavía no están configurados en el código. Completá las URLs y los entry.* en src/constants/communityGoogleForms.ts para habilitar el envío.',
    footprint: {
      title: 'Dejá tu huella',
      body:
        'Paradise no se construye solamente con código. También se construye con ideas, preguntas, experiencias y miradas humanas. Este espacio existe para que cualquier persona pueda dejar una señal, una reflexión o una idea para que Paradise siga creciendo.',
      submit: 'Enviar señal',
      aliasLabel: 'Nombre o alias',
      aliasPlaceholder: 'Cómo querés que te leamos',
      areaLabel: 'Área de interés',
      areaPlaceholder: 'Ej.: educación, salud, comunidad, producto…',
      messageLabel: 'Comentario / aporte',
      messagePlaceholder: 'Una idea, una pregunta o una experiencia que quieras compartir',
      emailLabel: 'Email (opcional)',
      emailHint: 'Solo si querés que podamos responderte por fuera de la página.',
      emailPlaceholder: 'tu@email.com',
      consentLabel:
        'Acepto que mi comentario pueda ser revisado y publicado en la página de Paradise.',
    },
    survey: {
      title: 'Alimentá Paradise',
      body:
        'Paradise no busca ser un chatbot más. La idea es construir una inteligencia con propósito, una presencia digital que pueda aprender de las personas, comprender problemas reales y evolucionar con una mirada más humana.',
      submit: 'Enviar encuesta',
      q1: {
        legend: '¿Creés en el paraíso?',
        options: ['Sí', 'No', 'No lo sé', 'Creo que puede construirse'],
      },
      q2: {
        legend: 'Cuando pensás en “paraíso”, ¿qué imagen o idea aparece primero?',
        placeholder: 'Escribí libremente…',
      },
      q3: {
        legend: '¿Qué sistema sentís que hace años no funciona como debería?',
        options: [
          'Educación',
          'Salud',
          'Trabajo',
          'Política',
          'Justicia',
          'Tecnología',
          'Comunidad y vínculos humanos',
          'Medio ambiente',
          'Otro',
        ],
      },
      q4: {
        legend: 'Si pudieras mejorar un solo problema de la sociedad usando tecnología, ¿cuál sería?',
        placeholder: 'Una idea concreta…',
      },
      q5: {
        legend: '¿Qué debería tener una inteligencia artificial para sentirse más humana?',
        options: [
          'Escuchar mejor',
          'Entender contexto',
          'Tener memoria',
          'Ser transparente',
          'Ayudar sin manipular',
          'Adaptarse a cada persona',
          'Reconocer límites',
          'Tener propósito',
        ],
      },
      q6: {
        legend: '¿Qué te preocupa más sobre el futuro de la inteligencia artificial?',
        options: [
          'Pérdida de empleos',
          'Manipulación de información',
          'Falta de humanidad',
          'Dependencia tecnológica',
          'Privacidad',
          'Desigualdad',
          'Que solo beneficie a grandes empresas',
          'Otro',
        ],
      },
      q7: {
        legend: '¿Te gustaría que Paradise evolucione con aportes de una comunidad?',
        options: ['Sí', 'No', 'Depende de cómo se gestione', 'Me interesa, pero con límites claros'],
      },
      q8: {
        legend: '¿Qué te gustaría aportarle a Paradise?',
        options: [
          'Ideas',
          'Conocimiento técnico',
          'Experiencias personales',
          'Diseño',
          'Datos',
          'Investigación',
          'Crítica constructiva',
          'Difusión',
          'Nada por ahora, solo observar',
        ],
      },
      q9: {
        legend: 'Opcional: ¿querés dejar una frase, idea o mensaje para Paradise?',
        placeholder: 'Podés dejarlo en blanco si preferís no escribir nada acá.',
      },
    },
  },
  demo: {
    title: 'Ver Paradise en acción',
    subtitle:
      'La demo muestra el corazón del ecosistema: entran señales, Paradise decide qué capa participa y deja un artifact listo para usar, compartir o explicar.',
    scenarios: [
      {
        key: 'health',
        label: 'Salud',
        intro: 'Operación clínica: agenda, turnos, cancelaciones y experiencia del paciente en una consola.',
        signals: ['turno cancelado', 'paciente reprogramado', 'agenda del consultorio'],
        modules: ['Paradise-AI', 'Paradise Atria', 'Nexus'],
        artifactType: 'resumen clínico',
        artifactTitle: 'Estado de agenda y próximas acciones',
        artifactBody: ['cancelaciones: 2 pendientes de reasignar', 'agenda: mañana con 3 slots disponibles', 'siguiente paso: notificar pacientes + optimizar slots'],
      },
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
        modules: ['Paradise ClubNet', 'Paradise Atria', 'AI Delivery Copilot'],
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
        modules: ['The Velvet', 'Paradise Atria', 'nuevos verticales'],
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
        recommendedModuleId: 'atlasops',
      },
      {
        key: 'community' as const,
        label: 'Comunidad',
        problem: 'Clubes y espacios comunitarios se vuelven caóticos cuando agenda, seguimiento y comunicación viven separados.',
        outcome: 'Experiencia más clara para coordinar comunidad, agenda y recursos.',
        tags: ['sports', 'community', 'operations', 'demo'],
        recommendedModuleId: 'paradise-clubnet',
      },
      {
        key: 'education' as const,
        label: 'Educación',
        problem: 'Cursos, seguimiento y comunicación suelen quedar dispersos entre demasiadas herramientas.',
        outcome: 'Una consola más legible para cursos, novedades y materiales.',
        tags: ['education', 'community', 'knowledge', 'coordination'],
        recommendedModuleId: 'paradise-aulora',
      },
      {
        key: 'logistics' as const,
        label: 'Logística',
        problem: 'Rutas, colas y handoffs se vuelven opacos muy rápido cuando el volumen sube.',
        outcome: 'Flujo operativo y dispatch con prioridad, detalle y ownership visible.',
        tags: ['logistics', 'delivery', 'routing', 'ops'],
        recommendedModuleId: 'paradise-routeops',
      },
      {
        key: 'nimbus' as const,
        label: 'Nimbus',
        problem: 'Querés conectar módulos sin reventar la arquitectura cada vez que aparece un caso nuevo.',
        outcome: 'Registry, eventos y artifacts como base evolutiva.',
        tags: ['cloud', 'registry', 'events', 'artifacts'],
        recommendedModuleId: 'paradise-nimbus',
      },
      {
        key: 'health' as const,
        label: 'Salud',
        problem: 'Agenda, turnos, cancelaciones y experiencia del paciente se dispersan entre sistemas que no conversan.',
        outcome: 'Consola clara para operación clínica, seguimiento de turnos y experiencia del consultorio.',
        tags: ['health', 'clinical', 'scheduling', 'patient-experience', 'operations'],
        recommendedModuleId: 'paradise-atria',
      },
      {
        key: 'pulse' as const,
        label: 'Pulse',
        problem: 'Las señales operativas se pierden en el ruido: falta visibilidad rápida del estado general y del monitoreo de actividad.',
        outcome: 'Detección de anomalías con priorización por impacto y contexto antes/después para decidir qué importa.',
        tags: ['anomalies', 'detection', 'risk', 'signals'],
        recommendedModuleId: 'pulse',
      },
      {
        key: 'qc-sentinel' as const,
        label: 'QC Sentinel',
        problem: 'Control de calidad sin validaciones claras: desvíos que se detectan tarde y alertas que no llegan a tiempo.',
        outcome: 'Workbench de calidad con trazabilidad, checks automáticos y decisiones de lote listas para compliance.',
        tags: ['labs', 'quality', 'audit', 'compliance'],
        recommendedModuleId: 'paradise-qc-sentinel',
      },
      {
        key: 'vault' as const,
        label: 'Vault',
        problem: 'Schemas, contratos y definiciones dispersos: sin trazabilidad ni gobierno de datos visible para el equipo.',
        outcome: 'Data room para documentación técnica, contratos y schemas navegables en un solo lugar.',
        tags: ['knowledge', 'contracts', 'artifacts', 'docs'],
        recommendedModuleId: 'paradise-vault',
      },
      {
        key: 'velvet' as const,
        label: 'The Velvet',
        problem: 'Operación de nightlife fragmentada: reservas, staff y experiencia del cliente viven en sistemas que no conversan.',
        outcome: 'Consola operativa unificada para puerta, seguridad, staff y cierre de la noche en curso.',
        tags: ['community', 'operations', 'events', 'nightlife'],
        recommendedModuleId: 'the-velvet',
      },
      {
        key: 'orbit' as const,
        label: 'Orbit',
        problem: 'Coordinación transversal opaca: seguimiento multi-frente y orquestación operativa sin visibilidad central.',
        outcome: 'Registry y discovery para explorar módulos, estado y actividad del ecosistema en tiempo real.',
        tags: ['ecosystem', 'registry', 'discovery', 'events'],
        recommendedModuleId: 'paradise-orbit',
      },
      {
        key: 'relay' as const,
        label: 'Relay',
        problem: 'Integraciones y automatizaciones que se configuran a mano: eventos y conexiones entre sistemas frágiles.',
        outcome: 'Hub de integraciones para webhooks, email, Slack y replay de eventos con trazabilidad de entregas.',
        tags: ['integrations', 'events', 'webhooks', 'delivery'],
        recommendedModuleId: 'paradise-relay',
      },
      {
        key: 'meter' as const,
        label: 'Meter',
        problem: 'Medición de uso y actividad invisible: sin visibilidad del comportamiento del sistema ni de los límites de plan.',
        outcome: 'Billing y usage analytics para entender consumo, adopción y plan vigente por tenant.',
        tags: ['billing', 'usage', 'events', 'saas'],
        recommendedModuleId: 'paradise-meter',
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

export type CommunityMarketingCopy = {
  kicker: string
  title: string
  intro: string
  signalsHeading: string
  signalsEmptyTitle: string
  signalsEmptyBody: string
  formsNotConfiguredNotice: string
  footprint: {
    title: string
    body: string
    submit: string
    aliasLabel: string
    aliasPlaceholder: string
    areaLabel: string
    areaPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    emailLabel: string
    emailHint: string
    emailPlaceholder: string
    consentLabel: string
  }
  survey: {
    title: string
    body: string
    submit: string
    q1: { legend: string; options: readonly string[] }
    q2: { legend: string; placeholder: string }
    q3: { legend: string; options: readonly string[] }
    q4: { legend: string; placeholder: string }
    q5: { legend: string; options: readonly string[] }
    q6: { legend: string; options: readonly string[] }
    q7: { legend: string; options: readonly string[] }
    q8: { legend: string; options: readonly string[] }
    q9: { legend: string; placeholder: string }
  }
}
