export type ShowcaseTrace = {
  key: string
  label: string
  request: string
  executiveConclusion: string
  determinantSignals: { label: string; value: string }[]
  routing: {
    primary: string
    secondary?: string
    reasons: string[]
  }
  context: {
    goals?: string[]
    priorities?: string[]
    repeatedProblems?: string[]
    workflows?: string[]
    matches?: string[]
  }
  knowledge: {
    summary: string
    rules: string[]
    metrics: string[]
  }
  response: {
    summary: string
    why: string[]
    nextSteps: string[]
    followUp: string
  }
}

export const showcaseTraces: ShowcaseTrace[] = [
  {
    key: 'health',
    label: 'Salud / Paradise Atria',
    request: 'Necesito ver el estado de la agenda de mañana. Hubo cancelaciones y quiero saber qué slots quedan para reprogramar.',
    executiveConclusion: 'Pedido de visibilidad sobre agenda clínica, cancelaciones y disponibilidad de slots. Dominio: operación de consultorio y experiencia del paciente.',
    determinantSignals: [
      { label: 'dominio', value: 'salud / clínica' },
      { label: 'entidad principal', value: 'agenda y turnos' },
      { label: 'acción', value: 'reprogramar + visualizar disponibilidad' },
      { label: 'contexto', value: 'cancelaciones, slots' },
    ],
    routing: {
      primary: 'Paradise Atria',
      secondary: 'Paradise Nexus',
      reasons: [
        'Atria está especializado en operación clínica, agenda y turnos.',
        'Las cancelaciones y la gestión de slots son núcleo del módulo.',
        'Nexus aporta contexto histórico y memoria de decisiones similares.',
      ],
    },
    context: {
      goals: ['Visibilidad de agenda', 'Optimizar slots vacíos', 'Reducir no-shows'],
      priorities: ['Estado del día siguiente', 'Reasignación rápida'],
      repeatedProblems: ['Cancelaciones sin reasignar', 'Slots que quedan vacíos'],
      workflows: ['Consulta de agenda', 'Reprogramación', 'Notificación a pacientes'],
    },
    knowledge: {
      summary: 'Atria maneja agenda clínica, turnos, cancelaciones y flujo del paciente. Integra visibilidad operativa con experiencia del consultorio.',
      rules: [
        'Agenda centralizada por consultorio y profesional.',
        'Cancelaciones generan slots liberados automáticamente.',
        'Reprogramación prioriza urgencia y disponibilidad.',
      ],
      metrics: ['slots disponibles', 'cancelaciones pendientes', 'ocupación por día'],
    },
    response: {
      summary: 'Te recomiendo abrir Paradise Atria para ver el estado de la agenda de mañana. Ahí vas a tener la vista de cancelaciones, slots liberados y disponibilidad por consultorio.',
      why: [
        'Atria está diseñado para exactamente este caso: agenda + cancelaciones + slots.',
        'La consola te muestra qué está libre y qué necesita reasignación.',
        'Podés exportar un resumen para compartir con recepción o médicos.',
      ],
      nextSteps: [
        'Abrir Atria y filtrar por mañana.',
        'Revisar la cola de cancelaciones y slots liberados.',
        'Reprogramar o notificar según prioridad.',
      ],
      followUp: 'Si querés, puedo preparar un brief con el resumen de agenda y las acciones sugeridas para el turno.',
    },
  },
  {
    key: 'community',
    label: 'Comunidad / Paradise ClubNet',
    request: 'El club tiene problemas de coordinación: asistencia irregular, mensajes que se pierden y no sabemos bien el estado de los grupos. ¿Qué podemos usar?',
    executiveConclusion: 'Pedido de coordinación para un club o comunidad: asistencia, comunicación y estado de grupos. Dominio: comunidad / deporte.',
    determinantSignals: [
      { label: 'dominio', value: 'club / comunidad' },
      { label: 'entidad principal', value: 'grupos y miembros' },
      { label: 'problemas', value: 'asistencia irregular, comunicación dispersa' },
      { label: 'necesidad', value: 'visibilidad y coordinación' },
    ],
    routing: {
      primary: 'Paradise ClubNet',
      secondary: 'Paradise Nexus',
      reasons: [
        'ClubNet está diseñado para clubes y comunidades deportivas.',
        'Centraliza asistencia, comunicaciones y estado de grupos.',
        'Nexus aporta memoria de coordinación y contexto de decisiones.',
      ],
    },
    context: {
      goals: ['Mejorar asistencia', 'Centralizar comunicación', 'Estado visible de grupos'],
      priorities: ['No perder mensajes', 'Ver quién participa', 'Alertas tempranas'],
      repeatedProblems: ['Asistencia baja en algunos grupos', 'Mensajes en múltiples canales'],
      workflows: ['Seguimiento de asistencia', 'Coordinación', 'Exports para compartir'],
    },
    knowledge: {
      summary: 'ClubNet reúne dashboard del club, directorio, salud, entrenamientos, asistencia y lineup. Permite personalizar vistas según rol y contexto.',
      rules: [
        'Dashboard unificado para admin, miembros y viewers.',
        'Asistencia y riesgos visibles por grupo.',
        'Exports y reportes compartibles.',
      ],
      metrics: ['asistencia por grupo', 'participación', 'riesgos de baja participación'],
    },
    response: {
      summary: 'Paradise ClubNet encaja directo: centraliza asistencia, comunicación y estado de los grupos en una sola consola. Evitás la dispersión de mensajes y tenés visibilidad clara.',
      why: [
        'ClubNet está hecho para clubes y comunidades deportivas.',
        'Reúne asistencia irregular, comunicaciones y estado de grupos.',
        'Podés exportar un brief para compartir con la comisión o entrenadores.',
      ],
      nextSteps: [
        'Configurar ClubNet con los grupos del club.',
        'Centralizar comunicaciones y asistencia.',
        'Revisar el dashboard y actuar sobre grupos con baja participación.',
      ],
      followUp: '¿Querés que arme un brief de estado del club con los grupos en riesgo y las próximas acciones sugeridas?',
    },
  },
  {
    key: 'ops',
    label: 'Operaciones / AtlasOps',
    request: 'Tenemos cola de alertas, un desvío de SLA crítico y handoffs que se pierden. Necesitamos triage y algo accionable.',
    executiveConclusion: 'Pedido de triage operativo: alertas, SLA y handoffs. Dominio: operaciones, priorización y respuesta guiada.',
    determinantSignals: [
      { label: 'dominio', value: 'operaciones' },
      { label: 'entidad principal', value: 'alertas y SLA' },
      { label: 'problema', value: 'handoffs incompletos, desvíos críticos' },
      { label: 'necesidad', value: 'triage + acción' },
    ],
    routing: {
      primary: 'Paradise AtlasOps',
      secondary: 'AI Delivery Copilot',
      reasons: [
        'AtlasOps maneja KPIs, alertas y playbooks operativos.',
        'La cola de alertas y el triage P1/P2/P3 son su núcleo.',
        'Delivery Copilot genera handoffs estructurados y exportables.',
      ],
    },
    context: {
      goals: ['Triage claro', 'Responder a desvíos de SLA', 'Handoffs que no se pierdan'],
      priorities: ['P1 primero', 'Contexto por alerta', 'Ownership visible'],
      repeatedProblems: ['Alertas sin owner', 'Handoffs incompletos', 'Desvíos que escalan tarde'],
      workflows: ['Cola de alertas', 'Triage por severidad', 'Handoff estructurado'],
    },
    knowledge: {
      summary: 'AtlasOps monitorea métricas operativas, detecta anomalías y organiza cola de alertas con contexto. Sugiere playbooks y reportes ejecutivos.',
      rules: [
        'Alertas clasificadas por severidad y impacto.',
        'Playbooks sugeridos según tipo de incidente.',
        'Reportes exportables para briefings.',
      ],
      metrics: ['alertas abiertas', 'SLA en riesgo', 'handoffs pendientes'],
    },
    response: {
      summary: 'AtlasOps es el módulo indicado: cola de alertas con triage, contexto por incidente y playbooks. Delivery Copilot te arma el handoff estructurado para que no se pierda.',
      why: [
        'AtlasOps está diseñado para triage operativo y desvíos de SLA.',
        'La cola priorizada y el contexto evitan que las alertas se pierdan.',
        'Delivery Copilot genera handoffs claros y exportables.',
      ],
      nextSteps: [
        'Abrir AtlasOps y revisar la cola P1/P2/P3.',
        'Asignar owner a cada alerta crítica.',
        'Generar handoff con Delivery Copilot y circular.',
      ],
      followUp: '¿Querés un brief operativo del turno con prioridades y siguiente paso para el equipo?',
    },
  },
]
