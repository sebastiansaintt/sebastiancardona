import { createI18n } from 'vue-i18n'
import previewCarInspection from './assets/preview.png'

const messages = {
  en: {
    name: 'Sebastián Cardona',
    fullName: 'SEBASTIAN JOSE CARDONA RAMIREZ',
    role: 'Backend Engineer & Developer',
    subtitle: 'Software Engineer | Backend Engineer & Developer',
    tagline: 'Software Engineer with a solid focus on backend engineering and development for web, mobile, and IoT environments. A well-rounded professional focused on process optimization, scalable solutions, and pre-code planning.',
    bio: 'Software Engineer with a solid focus on backend engineering and development for web, mobile, and IoT environments. Proven experience developing multi-tenant AI platforms, offline PWAs, and real-time IoT pipelines with Docker.',
    statusBadge: 'Research Assistant (Mobile Development) @ UAN',
    statusBadgeDetail: 'Research Assistant in Mobile Development (React Native)',
    locationText: 'Santa Marta, Colombia · Remote & Relocation',
    email: 'scarrdona@gmail.com',
    copyEmail: 'Copy Email',
    emailCopied: 'Email copied to clipboard!',

    // Navigation & Command Palette keys
    navHome: 'Home',
    navAbout: 'About',
    navExperience: 'Experience & Education',
    navStack: 'Stack',
    navProjects: 'Projects',
    navActivity: 'Activity',
    navContact: 'Contact',
    techStackHeading: 'Tech Stack (By Layers)',
    layersCount: 'layers',
    openGithub: 'View Repository on GitHub',

    // Stack Layers
    layerFrontend: 'Frontend & Mobile',
    layerBackend: 'Backend & APIs',
    layerData: 'Databases & Cache',
    layerCloud: 'Cloud & DevOps',
    layerQuality: 'Testing & Observability',

    catBackend: 'Backend & APIs',
    catData: 'Databases & Cache',
    catAuth: 'Security & Auth',
    catInfra: 'Cloud & DevOps',
    catAI: 'Frontend & Mobile',
    cmdTitle: 'Command Palette',
    cmdPlaceholder: 'Type a command or search...',
    cmdNoResults: 'No matching commands found.',
    cmdNavigation: 'Navigation',
    cmdActions: 'Quick Actions',
    cmdDownloadCV_EN: 'Download CV (English PDF)',
    cmdDownloadCV_ES: 'Download CV (Spanish PDF)',
    cmdCopyEmail: 'Copy Email (scarrdona@gmail.com)',
    cmdOpenGitHub: 'Open GitHub (@sebastiansaintt)',
    cmdOpenLinkedIn: 'Open LinkedIn',
    cmdSwitchLang: 'Switch Language (ES / EN)',
    cmdSelect: 'Select',
    cmdClose: 'Close',

    // About Section (Aligned directly with CV)
    aboutP1: 'Software Engineer with a solid focus on backend engineering and development for web, mobile, and IoT environments. A well-rounded professional who focuses on process optimization, building scalable solutions, and pre-code planning.',
    aboutP2: 'Proven experience developing multi-tenant platforms with AI and commercial channel integration, offline-ready PWAs for field operations, and real-time IoT telemetry pipelines, encompassing secure API construction, database design with ORMs, and automated Docker deployments.',
    aboutP3: 'Currently working as a Mobile Development Research Assistant (React Native) at Universidad Antonio Nariño, teaching live coding sessions and promoting interface usability principles alongside clean, modular code.',

    // Technical Approach & Best Practices
    principlesTitle: 'Technical Approach & Best Practices',
    principlesP1: 'Pre-code planning: in-depth requirements analysis before implementation, applying clear layered architectures (routers, business logic, persistence) to ensure modular, maintainable code.',
    principlesP2: 'Applied engineering standards: secure REST APIs, relational database modeling with ORMs, rate limiting with Redis, structured logging, and reproducible environments using Docker.',

    // Experience Items (Direct from CV)
    experience: [
      {
        period: 'Aug 2026 — Present',
        title: 'Research Assistant, Mobile Development',
        company: 'Universidad Antonio Nariño (UAN)',
        companyUrl: 'https://www.uan.edu.co/',
        description: 'Teach React Native and JavaScript in practical live-coding sessions to groups of 8 to 12 students. Review user interfaces based on usability principles (Apple HIG, Don Norman, Gestalt) and promote clean, modular code in research projects.',
        technologies: ['React Native', 'JavaScript', 'Apple HIG', 'Don Norman', 'Gestalt', 'Clean Code']
      },
      {
        period: 'Feb 2022 — Jul 2026',
        title: 'B.S. in Software Engineering',
        company: 'Universidad Cooperativa de Colombia (UCC)',
        companyUrl: 'https://www.ucc.edu.co/',
        description: 'Software Engineering undergraduate degree in Santa Marta, Colombia. Academic focus on backend development, databases, distributed systems, IoT, and web & mobile development.',
        technologies: ['Backend Development', 'PostgreSQL', 'FastAPI', 'Distributed Systems', 'IoT', 'Docker']
      }
    ],

    viewResume: 'View Full Résumé (PDF)',
    downloadCV: 'Download CV',

    // Projects (Direct from CV)
    projectsHeading: 'Featured Projects',
    viewGithub: 'GitHub',
    livePreview: 'Architecture & Details',
    watchDemo: 'Watch Demo',
    viewDemoVideo: 'Watch Video Demo',
    demoAvailable: 'Video Walkthrough Available',
    backToPortfolio: 'Back to Portfolio',
    projectOverview: 'Project Overview',
    systemCapabilities: 'System Architecture & Capabilities',
    interactiveChapters: 'Interactive Chapters & Highlights',
    jumpToChapter: 'Click to jump to this moment in video',
    demoComingSoonTitle: 'System Architecture & Repository Available',
    demoComingSoonDesc: 'Explore the project details below or inspect the source code and test suites on GitHub. You can also watch the full interactive video walkthrough of VEYRA.',
    exploreOtherProjects: 'Other Projects',
    shareDemo: 'Share Project',
    demoLinkCopied: 'Project link copied to clipboard!',

    projects: [
      {
        id: 1,
        slug: 'maestro',
        hasDemo: false,
        num: '01',
        badge: 'WhatsApp AI Sales Assistant + Web CRM',
        title: 'Maestro — AI Sales Assistant for WhatsApp + Web CRM',
        subtitle: 'Python · FastAPI · SQLite · React · Gemini API · Docker · pytest (2026)',
        description: 'Automated customer service and quoting for travelers via WhatsApp for multiple tourism agencies, featuring fast response times and a web CRM for human oversight or intervention. Debounces message bursts to significantly reduce AI token usage, transcribes voice notes, and isolates agency data with built-in security and automated tests.',
        bullet_points: [
          'Automated customer service and quoting for travelers via WhatsApp for multiple tourism agencies, with fast response times and a CRM for human takeover or monitoring.',
          'Significantly reduced AI consumption by grouping consecutive messages before processing, adding voice note transcription.',
          'Isolated data per agency, protected the bot with defensive security layers, and validated the system with automated testing.'
        ],
        github_link: 'https://github.com/sebastiansaintt/maestro',
        technologies: ['Python', 'FastAPI', 'SQLite', 'React', 'Gemini API', 'Docker', 'pytest'],
        preview: '/maestro.png'
      },
      {
        id: 2,
        slug: 'car-inspection',
        hasDemo: true,
        demoBadge: 'Full PWA Walkthrough',
        videoKey: 'car-inspection',
        num: '02',
        badge: 'Offline-First PWA for Fleet Inspection',
        title: 'VEYRA — Offline-First PWA for Vehicle Fleet Inspection',
        subtitle: 'Python · FastAPI · PostgreSQL · Redis · React · TypeScript · Gemini AI · Docker (2026)',
        description: 'Digitalized paper-based vehicle fleet technical inspections with automated Excel exports and Gmail alerts. Operates offline and synchronizes reliably upon reconnection without duplicate data; the audit history is strictly immutable and never overwritten, with AI voice dictation to fill forms by speaking.',
        bullet_points: [
          'Digitalized paper-based technical vehicle inspections with automated Excel exports and Gmail alerts.',
          'Works offline and synchronizes reliably upon reconnection without data duplication; audit history is immutable and never overwritten.',
          'Integrated AI voice dictation to fill inspection forms by speaking, protected by role-based access control.'
        ],
        github_link: 'https://github.com/sebastiansaintt/car_checking',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Gemini AI', 'Docker'],
        preview: previewCarInspection,
        demoDescription: 'In-depth walkthrough of VEYRA (Vehicle Inspection PWA): authentication with HttpOnly cookies and role-based access control, technical checklist, AI voice dictation, immutable history, and Excel report export.',
        chapters: [
          { time: '00:00', seconds: 0, title: 'Auth & Role-Based Access', desc: 'Secure login flow with JWT HttpOnly cookies and role permissions.' },
          { time: '00:45', seconds: 45, title: 'Fleet & Vehicle Record Lookup', desc: 'Real-time license plate lookup and record verification.' },
          { time: '01:30', seconds: 90, title: 'Technical Checklist & AI Voice Dictation', desc: 'Step-by-step automotive evaluation and structured voice extraction.' },
          { time: '02:40', seconds: 160, title: 'Immutable Sub-records & History', desc: 'Recording findings without overwriting prior inspection data.' },
          { time: '03:45', seconds: 225, title: 'Audit Trail & Document Export', desc: 'Reviewing change history and automated Excel document generation.' }
        ]
      },
      {
        id: 3,
        slug: 'risk-follower',
        hasDemo: false,
        num: '03',
        badge: 'Real-Time IoT Telemetry Pipeline',
        title: 'Risk Follower — Real-Time Environmental IoT Telemetry Pipeline',
        subtitle: 'Python · FastAPI · MQTT · WebSockets · PostgreSQL (Supabase) · ESP32 · Docker (2025)',
        description: 'Continuous monitoring pipeline for CO2, temperature, and humidity during craft fermentation, transmitting telemetry from ESP32 sensors to a real-time dashboard. Features dynamic alert classification, automated email notifications, and secure role-based access.',
        bullet_points: [
          'Built an end-to-end data pipeline: ESP32 sensors measure CO2, temperature, and humidity in craft fermentation → database → live dashboard and export.',
          'Created an alert engine (normal / warning / danger) that opens incidents and sends automated emails, with real-time data and role-based access.'
        ],
        github_link: 'https://github.com/realprodigium/risk_follower',
        technologies: ['Python', 'FastAPI', 'MQTT', 'WebSockets', 'PostgreSQL', 'ESP32', 'Docker'],
        preview: '/co2bien.png'
      },
      {
        id: 4,
        slug: 'lawsim-pymes',
        hasDemo: false,
        num: '04',
        badge: 'Regulatory Simulation Platform',
        title: 'LawSim Pymes — Regulatory Simulation Platform',
        subtitle: 'FastAPI · Vue.js · OWL 2 / Protégé · SWRL · NLP · Redis (2025)',
        description: 'Preliminary legal compliance platform for Colombian SMEs, decoupling web business operations from legal reasoning and rules inference.',
        bullet_points: [
          'Structured modular services decoupling UI, query handling, and rule-based logic.',
          'Caching with Redis and secure JWT authentication for rapid query execution.'
        ],
        github_link: 'https://github.com/sebastiansaintt/WebDesign',
        technologies: ['FastAPI', 'Vue.js', 'Redis', 'JWT', 'REST APIs'],
        preview: '/lawsim.png'
      }
    ],

    // Activity
    githubActivityHeading: 'Activity',
    githubContributions: 'contributions in 2025–2026',
    githubLess: 'Less',
    githubMore: 'More',
    githubProfileLink: '@sebastiansaintt',

    // Footer
    footerColophon: 'Inspired by Brittany Chiang. Built with Vue 3, Vite, and Tailwind CSS.',
    copyright: '© 2026 Sebastián José Cardona Ramírez'
  },
  es: {
    name: 'Sebastián Cardona',
    fullName: 'SEBASTIAN JOSE CARDONA RAMIREZ',
    role: 'Ingeniero y Desarrollador Backend',
    subtitle: 'Ingeniero de Software | Ingeniero y Desarrollador Backend',
    tagline: 'Ingeniero de Software con enfoque sólido en ingeniería y desarrollo Backend para entornos web/móvil e IoT. Profesional integral centrado en la optimización de procesos, construcción de soluciones escalables y planificación pre-código.',
    bio: 'Ingeniero de Software con enfoque sólido en ingeniería y desarrollo Backend para entornos web/móvil e IoT. Experiencia comprobada desarrollando plataformas multi-tenant con IA, PWA offline y pipelines IoT en tiempo real.',
    statusBadge: 'Auxiliar de Investigación (Desarrollo Móvil) @ UAN',
    statusBadgeDetail: 'Auxiliar de Investigación en Desarrollo Móvil (React Native)',
    locationText: 'Santa Marta, Colombia · Remoto y Relocalización',
    email: 'scarrdona@gmail.com',
    copyEmail: 'Copiar Correo',
    emailCopied: '¡Correo copiado al portapapeles!',

    // Navegación y Command Palette
    navHome: 'Inicio',
    navAbout: 'Perfil',
    navExperience: 'Experiencia y Formación',
    navStack: 'Stack',
    navProjects: 'Proyectos',
    navActivity: 'Actividad',
    navContact: 'Contacto',
    techStackHeading: 'Stack de Tecnologías (Por Capas)',
    layersCount: 'capas',
    openGithub: 'Ver Repositorio en GitHub',

    // Capas de Stack
    layerFrontend: 'Frontend & Móvil',
    layerBackend: 'Backend & APIs',
    layerData: 'Bases de Datos & Caché',
    layerCloud: 'Cloud & DevOps',
    layerQuality: 'Testing & Observabilidad',

    catBackend: 'Backend & APIs',
    catData: 'Bases de Datos & Caché',
    catAuth: 'Seguridad y Autenticación',
    catInfra: 'Cloud & DevOps',
    catAI: 'Frontend & Móvil',
    cmdTitle: 'Paleta de Comandos',
    cmdPlaceholder: 'Escribe un comando o busca...',
    cmdNoResults: 'No se encontraron comandos.',
    cmdNavigation: 'Navegación',
    cmdActions: 'Acciones Rápidas',
    cmdDownloadCV_EN: 'Descargar CV (PDF Inglés)',
    cmdDownloadCV_ES: 'Descargar CV (PDF Español)',
    cmdCopyEmail: 'Copiar Correo (scarrdona@gmail.com)',
    cmdOpenGitHub: 'Abrir GitHub (@sebastiansaintt)',
    cmdOpenLinkedIn: 'Abrir LinkedIn',
    cmdSwitchLang: 'Cambiar Idioma (ES / EN)',
    cmdSelect: 'Seleccionar',
    cmdClose: 'Cerrar',

    // Sección Sobre Mí (Alineada exactamente con el CV)
    aboutP1: 'Ingeniero de Software con enfoque sólido en ingeniería y desarrollo Backend para entornos web/móvil e IoT. Profesional integral que se enfoca en la optimización de procesos, construcción de soluciones escalables y planificación pre-código.',
    aboutP2: 'Experiencia comprobada desarrollando plataformas multi-tenant con IA e integración de canales comerciales, PWA con funciones offline para operación en campo y pipelines de telemetría IoT en tiempo real, que incluyen construcción de APIs seguras, diseño de bases de datos con ORM y despliegues automatizados mediante Docker.',
    aboutP3: 'Actualmente me desempeño como Auxiliar de Investigación en desarrollo móvil (React Native) en la Universidad Antonio Nariño, enseñando React Native y JavaScript en sesiones de live coding y revisando interfaces bajo principios de usabilidad.',

    // Principios y Buenas Prácticas
    principlesTitle: 'Enfoque Técnico y Buenas Prácticas',
    principlesP1: 'Planificación pre-código: análisis riguroso de requerimientos antes de implementar, adoptando una arquitectura por capas clara (rutas, lógica de negocio y persistencia) para garantizar código modular y limpio.',
    principlesP2: 'Estándares aplicados: construcción de APIs seguras, diseño y modelado de bases de datos relacionales con ORM, control de peticiones con Redis y despliegues automatizados con Docker Compose.',

    // Experiencia y Formación (Alineadas textualmente con el CV)
    experience: [
      {
        period: 'Ago. 2026 — Actualidad',
        title: 'Auxiliar de Investigación, Desarrollo Móvil',
        company: 'Universidad Antonio Nariño (UAN)',
        companyUrl: 'https://www.uan.edu.co/',
        description: 'Enseño React Native y JavaScript en sesiones prácticas de live coding a grupos de 8 a 12 estudiantes. Reviso interfaces con principios de usabilidad (Apple HIG, Don Norman, Gestalt) y promuevo código limpio y modular en los proyectos de investigación.',
        technologies: ['React Native', 'JavaScript', 'Apple HIG', 'Don Norman', 'Gestalt', 'Código Limpio & Modular']
      },
      {
        period: 'Feb. 2022 — Jul. 2026',
        title: 'Ingeniería de Software (Pregrado)',
        company: 'Universidad Cooperativa de Colombia (UCC)',
        companyUrl: 'https://www.ucc.edu.co/',
        description: 'Formación profesional en Ingeniería de Software en Santa Marta, Colombia. Énfasis en desarrollo backend, bases de datos, sistemas distribuidos, IoT y desarrollo web y móvil.',
        technologies: ['Backend', 'PostgreSQL', 'FastAPI', 'Sistemas Distribuidos', 'IoT', 'Docker']
      }
    ],

    viewResume: 'Ver CV Completo (PDF)',
    downloadCV: 'Descargar CV',

    // Proyectos (Alineados textualmente con el CV)
    projectsHeading: 'Proyectos Destacados',
    viewGithub: 'GitHub',
    livePreview: 'Arquitectura y Detalles',
    watchDemo: 'Ver Demo',
    viewDemoVideo: 'Ver Video Demo',
    demoAvailable: 'Video Demo Disponible',
    backToPortfolio: 'Volver al Portafolio',
    projectOverview: 'Descripción General',
    systemCapabilities: 'Arquitectura y Capacidades',
    interactiveChapters: 'Capítulos Interactivos y Puntos Clave',
    jumpToChapter: 'Clic para saltar a este momento del video',
    demoComingSoonTitle: 'Arquitectura del Sistema y Repositorio Disponibles',
    demoComingSoonDesc: 'Explora abajo los detalles del proyecto o revisa el código fuente y las pruebas en GitHub. También puedes ver la demostración en video interactiva de VEYRA.',
    exploreOtherProjects: 'Otros Proyectos',
    shareDemo: 'Compartir Proyecto',
    demoLinkCopied: '¡Enlace del proyecto copiado al portapapeles!',

    projects: [
      {
        id: 1,
        slug: 'maestro',
        hasDemo: false,
        num: '01',
        badge: 'Asistente con IA por WhatsApp + CRM Web',
        title: 'Maestro — Asistente de ventas con IA por WhatsApp + CRM web',
        subtitle: 'Python · FastAPI · SQLite · React · Gemini API · Docker · pytest (2026)',
        description: 'Automaticé la atención y cotización de viajeros por WhatsApp para varias agencias de turismo, con respuestas en corto tiempo y un CRM para que una persona tome el control cuando haga falta, o monitoree una acción. Reduce de forma importante el consumo de IA agrupando mensajes seguidos antes de procesarlos, suma transcripción de notas de voz y aísla los datos de cada agencia con pruebas automatizadas.',
        bullet_points: [
          'Automaticé la atención y cotización de viajeros por WhatsApp para varias agencias de turismo, con respuestas en corto tiempo y un CRM para que una persona tome el control cuando haga falta, o monitoree una acción.',
          'Reduje de forma importante el consumo de IA agrupando mensajes seguidos antes de procesarlos, y sumé transcripción de notas de voz.',
          'Aislé los datos de cada agencia, protegí al bot con varias capas de seguridad y validé el sistema con pruebas automatizadas.'
        ],
        github_link: 'https://github.com/sebastiansaintt/maestro',
        technologies: ['Python', 'FastAPI', 'SQLite', 'React', 'Gemini API', 'Docker', 'pytest'],
        preview: '/maestro.png'
      },
      {
        id: 2,
        slug: 'car-inspection',
        hasDemo: true,
        demoBadge: 'Recorrido Completo PWA',
        videoKey: 'car-inspection',
        num: '02',
        badge: 'App Web (PWA) Offline para Inspección Vehicular',
        title: 'VEYRA — App web (PWA) offline para inspección vehicular',
        subtitle: 'Python · FastAPI · PostgreSQL · Redis · React · TypeScript · Gemini AI · Docker (2026)',
        description: 'Digitalicé una inspección técnica que se hacía en papel, con exportación automática a Excel y alertas por Gmail. Funciona sin internet y sincroniza al reconectar sin duplicar datos; el historial queda auditado y nunca se sobrescribe. Agregué dictado por voz con IA que llena el formulario hablando, con acceso seguro por roles.',
        bullet_points: [
          'Digitalicé una inspección técnica que se hacía en papel, con exportación automática a Excel y alertas por Gmail.',
          'Funciona sin internet y sincroniza al reconectar sin duplicar datos; el historial queda auditado y nunca se sobrescribe.',
          'Agregué dictado por voz con IA que llena el formulario hablando, con acceso seguro por roles.'
        ],
        github_link: 'https://github.com/sebastiansaintt/car_checking',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Gemini AI', 'Docker'],
        preview: previewCarInspection,
        demoDescription: 'Demostración de VEYRA (PWA de Inspección Vehicular): autenticación con cookies HttpOnly y control de acceso por roles, checklist técnico paso a paso, dictado por voz con IA, historial inmutable y exportación a Excel.',
        chapters: [
          { time: '00:00', seconds: 0, title: 'Autenticación & Acceso por Roles', desc: 'Acceso seguro con cookies JWT HttpOnly y permisos por rol.' },
          { time: '00:45', seconds: 45, title: 'Búsqueda de Placa y Vehículo', desc: 'Validación de placa colombiana y consulta de registro.' },
          { time: '01:30', seconds: 90, title: 'Checklist Técnico & Dictado con IA', desc: 'Evaluación técnica y llenado por voz mediante Gemini.' },
          { time: '02:40', seconds: 160, title: 'Historial Inmutable & Hallazgos', desc: 'Registro de hallazgos sin sobrescribir inspecciones previas.' },
          { time: '03:45', seconds: 225, title: 'Auditoría & Exportación de Reportes', desc: 'Revisión del registro de cambios y exportación a Excel.' }
        ]
      },
      {
        id: 3,
        slug: 'risk-follower',
        hasDemo: false,
        num: '03',
        badge: 'Pipeline IoT de Monitoreo Ambiental',
        title: 'Risk Follower — Pipeline IoT de monitoreo ambiental en tiempo real',
        subtitle: 'Python · FastAPI · MQTT · WebSockets · PostgreSQL (Supabase) · ESP32 · Docker (2025)',
        description: 'Construí un pipeline de datos completo: sensores ESP32 miden CO₂, temperatura y humedad en fermentación artesanal → base de datos → panel en vivo y exportación. Creé un motor de alertas (normal / advertencia / peligro) que abre incidentes y envía correos automáticos, con datos en vivo y acceso por roles.',
        bullet_points: [
          'Construí un pipeline de datos completo: sensores ESP32 miden CO₂, temperatura y humedad en fermentación artesanal → base de datos → panel en vivo y exportación.',
          'Creé un motor de alertas (normal / advertencia / peligro) que abre incidentes y envía correos automáticos, con datos en vivo y acceso por roles.'
        ],
        github_link: 'https://github.com/realprodigium/risk_follower',
        technologies: ['Python', 'FastAPI', 'MQTT', 'WebSockets', 'PostgreSQL', 'ESP32', 'Docker'],
        preview: '/co2bien.png'
      },
      {
        id: 4,
        slug: 'lawsim-pymes',
        hasDemo: false,
        num: '04',
        badge: 'Simulación Regulatoria',
        title: 'LawSim Pymes — Plataforma de Simulación Regulatoria',
        subtitle: 'FastAPI · Vue.js · OWL 2 / Protégé · SWRL · NLP · Redis (2025)',
        description: 'Plataforma de asesoría jurídica preliminar para PyMEs colombianas. Desacopla la lógica de negocio y las consultas web del motor de reglas e inferencia normativa.',
        bullet_points: [
          'Estructuración modular de servicios separando la interfaz de usuario, las consultas y el razonamiento lógico normativo.',
          'Caché con Redis y autenticación segura con JWT para consultas rápidas.'
        ],
        github_link: 'https://github.com/sebastiansaintt/WebDesign',
        technologies: ['FastAPI', 'Vue.js', 'Redis', 'JWT', 'APIs REST'],
        preview: '/lawsim.png'
      }
    ],

    // Actividad
    githubActivityHeading: 'Actividad',
    githubContributions: 'contribuciones en 2025–2026',
    githubLess: 'Menos',
    githubMore: 'Más',
    githubProfileLink: '@sebastiansaintt',

    // Pie
    footerColophon: 'Inspirado por Brittany Chiang. Construido con Vue 3, Vite y Tailwind CSS.',
    copyright: '© 2026 Sebastián José Cardona Ramírez'
  }
}

const userLang = typeof navigator !== 'undefined' ? (navigator.language || navigator.userLanguage) : 'es'
const defaultLocale = userLang && userLang.startsWith('es') ? 'es' : 'en'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
