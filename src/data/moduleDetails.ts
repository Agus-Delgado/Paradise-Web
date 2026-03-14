export type ModuleDetail = {
  problem: string
  forWho: string
  howItWorks: string[]
  outputs: string[]
  differentiator: string
  statusNote: string
}

export const moduleDetails: Record<string, ModuleDetail> = {
  'paradise-ai': {
    problem: 'Cuando el ecosistema crece, encontrar el módulo correcto y bajar una necesidad a un plan ejecutable se vuelve confuso.',
    forWho: 'Equipos que necesitan orientación, descubrimiento de módulos y una forma clara de transformar preguntas en acción.',
    howItWorks: [
      'Recibe una consulta en lenguaje natural y contexto opcional de objetivo, restricciones y tags.',
      'Rutea la necesidad con reglas y scoring para recomendar los módulos con mejor fit.',
      'Devuelve una respuesta guiada con runbook, rationale y artefactos exportables en markdown.',
    ],
    outputs: ['recomendación explicable', 'runbook estructurado', 'export de diálogo y brief'],
    differentiator: 'No se comporta como un chatbot genérico: actúa como voz del ecosistema y puente hacia módulos concretos.',
    statusNote: 'MVP en desarrollo activo, mock-first y preparado para crecer hacia respuestas generativas con BYOK.',
  },
  'paradise-nimbus': {
    problem: 'Sin una capa transversal, cada app resuelve por su cuenta descubrimiento, eventos, artifacts y jobs.',
    forWho: 'Equipos que quieren sumar módulos sin convertir Paradise en un monolito opaco.',
    howItWorks: [
      'Centraliza registro de módulos, event log, artifacts y jobs operativos en una API mock-first.',
      'Expone contratos y endpoints unificados para que cada app publique estado, outputs y eventos.',
      'Sirve como base de control plane para observabilidad, coordinación y evolución cloud-first.',
    ],
    outputs: ['module registry', 'event log', 'artifacts versionados', 'health snapshots y jobs'],
    differentiator: 'Hace visible la coordinación transversal sin forzar acoplamiento duro entre módulos.',
    statusNote: 'Idea fuerte y bien definida; hoy funciona como dirección estructural del ecosistema.',
  },
  'paradise-clubnet': {
    problem: 'En clubes y comunidades deportivas, salud, asistencia, entrenamientos y organización suelen vivir separados.',
    forWho: 'Clubes de base y organizaciones deportivas que necesitan una consola clara para gestionar comunidad y operación.',
    howItWorks: [
      'Reúne dashboard, directorio, salud, entrenamientos, asistencia y lineup en una sola experiencia.',
      'Permite personalizar layout y vistas según el contexto del club con editor tipo Canva.',
      'Mantiene restricciones por rol para que admin, miembro y viewer vean lo que corresponde.',
    ],
    outputs: ['estado del club', 'seguimiento de asistencia', 'riesgos de salud', 'exports y reportes compartibles'],
    differentiator: 'Convierte un dominio social y deportivo complejo en una consola modular entendible y adaptable.',
    statusNote: 'MVP activo, demo-first y listo para mostrar una vertical completa dentro de Paradise.',
  },
  'paradise-aulora': {
    problem: 'Escuelas y cursos suelen repartir agenda, comunicación, notas y seguimiento en demasiadas pantallas y roles.',
    forWho: 'Instituciones educativas que necesitan orden por escuela, rol y curso sin perder claridad.',
    howItWorks: [
      'Ofrece vistas distintas para admin y parent con permisos claros y navegación adaptada.',
      'Centraliza notas, asistencia, comunicaciones y calendario dentro de un mismo contexto escolar.',
      'Permite cambiar de escuela y personalizar layout sin rehacer la experiencia.',
    ],
    outputs: ['seguimiento académico', 'comunicaciones', 'agenda escolar', 'estado por rol y escuela'],
    differentiator: 'Demuestra cómo una misma base Paradise se adapta a educación sin perder identidad de plataforma.',
    statusNote: 'MVP sólido para demo de vertical educativa, multi-rol y multi-escuela.',
  },
  atlasops: {
    problem: 'Cuando KPIs, alertas y decisiones operativas viven desconectados, reaccionar rápido se vuelve difícil.',
    forWho: 'Operaciones de retail y e-commerce que necesitan monitoreo, alertas y playbooks en una misma capa.',
    howItWorks: [
      'Monitorea métricas operativas y detecta anomalías o desvíos por umbrales y severidad.',
      'Organiza una cola de alertas con contexto para escalación y respuesta.',
      'Sugiere playbooks y reportes ejecutivos listos para compartir o guardar como artifact.',
    ],
    outputs: ['dashboards ejecutivos', 'alert queue', 'recomendaciones de acción', 'reportes operativos'],
    differentiator: 'No se queda en observabilidad: empuja hacia decisión rápida y respuesta guiada.',
    statusNote: 'Activo como módulo de operaciones con foco en inteligencia accionable.',
  },
  'paradise-routeops': {
    problem: 'En logística, rutas, SLA y dispatch se vuelven opacos apenas el volumen sube o aparece un desvío crítico.',
    forWho: 'Equipos de logística y operación que necesitan priorizar incidentes y sostener handoffs claros.',
    howItWorks: [
      'Consolida cola de alertas, desvíos de ruta y estado de dispatch en una sola consola.',
      'Clasifica eventos con triage P1/P2/P3 y detalle operativo para actuar rápido.',
      'Prepara acciones, ownership y handoff para que la operación siga sin perder contexto.',
    ],
    outputs: ['dispatch priorizado', 'cola operativa', 'detalle por incidente', 'handoffs accionables'],
    differentiator: 'Hace que logística se lea como flujo operativo, no como lista caótica de excepciones.',
    statusNote: 'MVP listo para demo con foco fuerte en triage y operación visible.',
  },
  pulse: {
    problem: 'Las anomalías suelen detectarse tarde o sin contexto suficiente para decidir qué importa de verdad.',
    forWho: 'Equipos que monitorean series temporales de operaciones, ventas o performance y necesitan señal útil.',
    howItWorks: [
      'Procesa series temporales localmente y marca outliers con métodos estadísticos configurables.',
      'Asigna severidad y contexto para no tratar toda anomalía como ruido equivalente.',
      'Genera reportes y playbooks para convertir detección en acción comunicable.',
    ],
    outputs: ['anomaly reports', 'alertas estructuradas', 'playbooks por anomalía'],
    differentiator: 'Combina análisis local, reportes y criterio operativo sin depender de backend externo.',
    statusNote: 'MVP activo y muy útil como motor de señales dentro del ecosistema.',
  },
  'paradise-qc-sentinel': {
    problem: 'En control de calidad, intake, checks y auditoría se rompen rápido si no hay trazabilidad clara.',
    forWho: 'Operaciones de laboratorio o calidad que necesitan validación, audit trail y reportes listos para compliance.',
    howItWorks: [
      'Registra batches y muestras con metadata crítica para evaluación.',
      'Ejecuta checks automáticos contra umbrales y deja Pass/Fail inmediatamente visible.',
      'Mantiene log auditable y exporta reportes listos para documentación y seguimiento.',
    ],
    outputs: ['QC report', 'audit trail', 'flags de calidad', 'markdown export compliance-ready'],
    differentiator: 'Traduce un dominio regulado y sensible en una workbench clara, demo-first y trazable.',
    statusNote: 'MVP activo con foco en auditabilidad y decisiones de lote.',
  },
  'paradise-vault': {
    problem: 'Cuando schemas, contratos y documentación quedan dispersos, entender el sistema se vuelve lento y frágil.',
    forWho: 'Equipos técnicos y de plataforma que necesitan un data room simple para navegar documentación estructurada.',
    howItWorks: [
      'Explora archivos desde un manifest generado en build y los filtra en tiempo real.',
      'Renderiza JSON y Markdown según tipo de documento sin depender de backend.',
      'Sirve como repositorio visible para contratos, esquemas y referencias del ecosistema.',
    ],
    outputs: ['browser documental', 'viewer JSON/Markdown', 'quick links a contratos y schemas'],
    differentiator: 'Hace tangible la capa documental de Paradise sin perder simplicidad ni portabilidad.',
    statusNote: 'MVP usable como data room técnico y soporte de demos más profundas.',
  },
  'the-velvet': {
    problem: 'En nightlife, puerta, seguridad, staff y cierre operativo suelen resolverse con demasiada fragmentación.',
    forWho: 'Equipos de venues y eventos en vivo que necesitan una consola operativa unificada para la noche en curso.',
    howItWorks: [
      'Centraliza control room, check-ins, incidentes y asistencia de staff en una misma experiencia.',
      'Permite registrar eventos operativos clave y mantener estado vivo por área.',
      'Genera un nightly close report exportable para dejar trazabilidad del cierre.',
    ],
    outputs: ['estado de evento activo', 'incidentes', 'staff por turno', 'nightly close report'],
    differentiator: 'Lleva Paradise a una vertical muy concreta y demuestra que el ecosistema puede bajar a operación real de terreno.',
    statusNote: 'MVP demo-first con contratos listos para futura integración con Nimbus.',
  },
  'paradise-orbit': {
    problem: 'A medida que crecen apps y módulos, descubrir qué existe y cómo se relaciona deja de ser trivial.',
    forWho: 'Quien necesite una vista meta del ecosistema: catálogo, estado, tags y eventos recientes.',
    howItWorks: [
      'Carga metadata de módulos desde un inventario generado en build con fallback local.',
      'Permite filtrar por estado, tags, tipo y nombre para entender el ecosistema rápidamente.',
      'Muestra estadísticas y stream de eventos para dar contexto de adopción y actividad.',
    ],
    outputs: ['registry table', 'stats del ecosistema', 'event stream'],
    differentiator: 'Es el módulo que vuelve visible al propio ecosistema; una especie de mapa vivo de Paradise.',
    statusNote: 'Secundario pero muy valioso para mostrar escala y discoverability.',
  },
  'paradise-relay': {
    problem: 'Sin un hub de integraciones, los eventos quedan encerrados y la entrega a webhooks, email o Slack se vuelve artesanal.',
    forWho: 'Equipos que necesitan conectar señales y eventos Paradise con destinos externos.',
    howItWorks: [
      'Configura integraciones mock por tenant y permite activar o desactivar destinos.',
      'Muestra stream de eventos recientes y permite replay de entregas para probar flujos.',
      'Registra entregas con estado y timestamps para entender qué salió bien y qué falló.',
    ],
    outputs: ['event stream', 'deliveries log', 'configuración de webhooks por tenant'],
    differentiator: 'Convierte la capa de integración en una experiencia visible y demo-first, sin depender de infraestructura real.',
    statusNote: 'Secundario, ideal para mostrar conectividad y testing operativo del ecosistema.',
  },
  'paradise-meter': {
    problem: 'Cuando una plataforma crece, usage y límites de plan dejan de ser invisibles y pasan a ser parte del producto.',
    forWho: 'Escenarios multi-tenant donde conviene entender consumo, adopción y plan vigente por cliente.',
    howItWorks: [
      'Cuenta eventos por tenant desde el event log y calcula métricas de uso clave.',
      'Compara consumo contra límites de plan y hace visible el riesgo de sobreuso.',
      'Resume breakdown por tipo de evento para leer actividad y valor generado.',
    ],
    outputs: ['usage gauge', 'métricas por tenant', 'breakdown de eventos', 'estado de plan'],
    differentiator: 'Hace visible la capa de billing/usage sin convertirla en backoffice gris y olvidable.',
    statusNote: 'Secundario, pero útil para mostrar madurez de plataforma SaaS.',
  },
  'delivery-copilot': {
    problem: 'Un brief desordenado suele terminar en entregables inconsistentes, backlog flojo y handoffs poco claros.',
    forWho: 'Delivery leads, PMs y equipos que necesitan convertir contexto difuso en artefactos de ejecución.',
    howItWorks: [
      'Recibe un project brief sin estructurar y lo transforma en PRD, backlog, QA pack o risk report.',
      'Valida outputs con schema y repair loops para sostener consistencia.',
      'Permite demo mode local para mostrar valor sin depender de credenciales ni backend.',
    ],
    outputs: ['PRD', 'backlog', 'QA pack', 'risk matrix', 'executive summary'],
    differentiator: 'Baja la promesa de IA a entregables concretos y exportables para trabajo real.',
    statusNote: 'Secundario en la landing, pero muy fuerte como pieza de demostración de artifacts.',
  },
}
