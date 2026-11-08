import { createI18n } from 'vue-i18n'
import previewCarInspection from './assets/preview.png'

const messages = {
  en: {
    name: 'Sebastián Cardona',
    fullName: 'Sebastián José Cardona Ramírez',
    role: 'Software Engineer | Backend Developer',
    subtitle: 'Backend Development, Web/Mobile/IoT Systems & AI Solutions',
    tagline: 'Software Engineer focused on backend development for web, mobile, and IoT environments. I prioritize pre-code planning, process optimization, and building clear, scalable solutions.',
    bio: 'Software Engineer with a solid focus on backend engineering (Python/FastAPI, Node.js). Proven experience building multi-tenant AI platforms, offline-ready PWAs, and real-time IoT pipelines with Docker.',
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
    navStack: 'Tech Stack',
    navProjects: 'Projects',
    navActivity: 'Activity',
    navContact: 'Contact',
    techStackHeading: 'Technical Skills & Stack',
    openGithub: 'View Repository on GitHub',
    catBackend: 'Backend & APIs',
    catData: 'Databases',
    catAuth: 'Security & Auth',
    catInfra: 'DevOps & Quality',
    catAI: 'Frontend, Mobile & AI',
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
    aboutP1: 'Software Engineer with a solid focus on backend engineering and development for web, mobile, and IoT environments. I am a well-rounded professional who prioritizes process optimization, pre-code planning, and building reliable, scalable solutions.',
    aboutP2: 'I have hands-on experience developing complete systems: a multi-tenant AI and CRM platform for tourism agencies (Maestro), an offline-first PWA for field vehicle inspections (VEYRA), and a real-time IoT telemetry pipeline for craft fermentation (Risk Follower).',
    aboutP3: 'My day-to-day work spans building secure REST APIs, database design with ORMs, automated testing with pytest, and containerized deployments with Docker. Currently, I serve as a Mobile Development Research Assistant (React Native) at Universidad Antonio Nariño.',

    // Technical Approach & Best Practices
    principlesTitle: 'Technical Approach & Best Practices',
    principlesP1: 'Planning before coding: I thoroughly analyze business requirements to structure clean layered architectures (routers, services, and persistence), writing clear, modular, and maintainable code.',
    principlesP2: 'Applied standards: JWT authentication with HttpOnly cookies, role-based access control (RBAC), rate limiting with Redis, structured logging, and reproducible environments using Docker Compose.',

    // Experience Items
    experience: [
      {
        period: 'Aug 2026 — Present',
        title: 'Research Assistant, Mobile Development',
        company: 'Universidad Antonio Nariño (UAN)',
        companyUrl: 'https://www.uan.edu.co/',
        description: 'Teach React Native and JavaScript in hands-on live coding sessions to groups of 8 to 12 students. Review interfaces following usability principles (Apple HIG, Don Norman, Gestalt) and promote clean, modular code in research projects.',
        technologies: ['React Native', 'JavaScript', 'TypeScript', 'Apple HIG & Usability', 'Clean & Modular Code']
      },
      {
        period: 'Feb 2022 — Jul 2026',
        title: 'B.S. in Software Engineering',
        company: 'Universidad Cooperativa de Colombia (UCC)',
        companyUrl: 'https://www.ucc.edu.co/',
        description: 'Software Engineering degree in Santa Marta, Colombia. Core coursework covering backend development, databases, distributed systems, IoT, and web & mobile development.',
        technologies: ['Backend Development', 'Databases', 'Distributed Systems', 'IoT', 'Web & Mobile Development']
      }
    ],

    viewResume: 'View Full Résumé (PDF)',
    downloadCV: 'Download CV',

    // Projects
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
        badge: 'WhatsApp AI Assistant + Web CRM',
        title: 'Maestro — AI Sales Assistant for WhatsApp + Web CRM',
        subtitle: 'Python · FastAPI · SQLite · React · Gemini API · Docker · pytest (2026)',
        description: 'Automated 24/7 customer service and quoting on WhatsApp for multiple travel agencies with fast response times and a web CRM for human handover and monitoring. Cuts AI costs by debouncing message bursts, transcribes voice notes, and isolates agency data with built-in security and automated tests.',
        bullet_points: [
          'Automated customer service and quoting on WhatsApp for multiple travel agencies with fast response times and a CRM for human handover and monitoring.',
          'Significantly reduced AI usage and token consumption by grouping consecutive messages before processing, adding native voice note transcription.',
          'Isolated data per agency in multi-tenant storage, implemented defensive security layers, and validated the system with automated tests.'
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
        description: 'Digitalized paper-based vehicle fleet technical inspections with automated Excel exports and Gmail alerts. Operates offline and synchronizes upon reconnection without duplicate data; the audit history is immutable and never overwritten, with AI voice dictation to fill forms by speaking.',
        bullet_points: [
          'Digitalized paper-based technical inspections with automated Excel exports and Gmail alerts.',
          'Works offline and synchronizes reliably upon reconnection without data duplication; inspection history is fully audited and immutable.',
          'Integrated multimodal AI voice dictation to fill checklist forms by speaking, protected by role-based access control.'
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
          'Built an end-to-end telemetry pipeline: ESP32 sensors capture CO2, temperature, and humidity in craft fermentation → database → live dashboard and data export.',
          'Developed an alert engine (normal / warning / danger) that logs hardware incidents and dispatches automated email alerts with real-time updates and role-based access.'
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
    fullName: 'Sebastián José Cardona Ramírez',
    role: 'Ingeniero de Software | Ingeniero y Desarrollador Backend',
    subtitle: 'Desarrollo Backend, Sistemas Web/Móvil/IoT y Soluciones con IA',
    tagline: 'Ingeniero de Software enfocado en desarrollo backend para entornos web, móvil e IoT. Priorizo la planificación pre-código, la optimización de procesos y la construcción de soluciones escalables.',
    bio: 'Ingeniero de Software con enfoque sólido en backend (Python/FastAPI, Node.js). Experiencia comprobada desarrollando plataformas multi-tenant con IA, PWAs con soporte offline y pipelines IoT en tiempo real con Docker.',
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
    navStack: 'Habilidades',
    navProjects: 'Proyectos',
    navActivity: 'Actividad',
    navContact: 'Contacto',
    techStackHeading: 'Habilidades Técnicas y Stack',
    openGithub: 'Ver Repositorio en GitHub',
    catBackend: 'Backend y APIs',
    catData: 'Bases de Datos',
    catAuth: 'Seguridad y Autenticación',
    catInfra: 'DevOps y Calidad',
    catAI: 'Frontend, Móvil e IA',
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
    aboutP1: 'Ingeniero de Software con enfoque sólido en ingeniería y desarrollo Backend para entornos web, móvil e IoT. Me caracterizo por ser un profesional integral centrado en la optimización de procesos, la construcción de soluciones escalables y la planificación pre-código.',
    aboutP2: 'Cuento con experiencia comprobada desarrollando plataformas multi-tenant con IA e integración de canales comerciales (Maestro), PWAs con funciones offline para operación en campo (VEYRA) y pipelines de telemetría IoT en tiempo real (Risk Follower).',
    aboutP3: 'Mi trabajo técnico incluye la construcción de APIs seguras, diseño de bases de datos con ORM, pruebas automatizadas con pytest y despliegues con Docker. Actualmente me desempeño como Auxiliar de Investigación en desarrollo móvil (React Native) en la Universidad Antonio Nariño.',

    // Principios y Buenas Prácticas
    principlesTitle: 'Enfoque Técnico y Buenas Prácticas',
    principlesP1: 'Planificación antes de codificar: analizo a fondo las necesidades del negocio para estructurar arquitecturas en capas claras (rutas, servicios y persistencia), garantizando código limpio, modular y fácil de mantener.',
    principlesP2: 'Estándares aplicados: autenticación con JWT y cookies HttpOnly, control de acceso por roles (RBAC), control de peticiones con Redis, registro estructurado de eventos y entornos reproducibles con Docker Compose.',

    // Experiencia y Formación (Alineadas con el CV)
    experience: [
      {
        period: 'Ago. 2026 — Actualidad',
        title: 'Auxiliar de Investigación, Desarrollo Móvil',
        company: 'Universidad Antonio Nariño (UAN)',
        companyUrl: 'https://www.uan.edu.co/',
        description: 'Enseño React Native y JavaScript en sesiones prácticas de live coding a grupos de 8 a 12 estudiantes. Reviso interfaces con principios de usabilidad (Apple HIG, Don Norman, Gestalt) y promuevo código limpio y modular en los proyectos de investigación.',
        technologies: ['React Native', 'JavaScript', 'TypeScript', 'Apple HIG & Usabilidad', 'Código Limpio & Modular']
      },
      {
        period: 'Feb. 2022 — Jul. 2026',
        title: 'Ingeniería de Software (Pregrado)',
        company: 'Universidad Cooperativa de Colombia (UCC)',
        companyUrl: 'https://www.ucc.edu.co/',
        description: 'Formación profesional en Ingeniería de Software en Santa Marta, Colombia. Énfasis en desarrollo backend, bases de datos, sistemas distribuidos, IoT y desarrollo web y móvil.',
        technologies: ['Ingeniería de Software', 'Backend', 'Bases de Datos', 'Sistemas Distribuidos', 'IoT', 'Desarrollo Web & Móvil']
      }
    ],

    viewResume: 'Ver CV Completo (PDF)',
    downloadCV: 'Descargar CV',

    // Proyectos
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
        description: 'Automaticé la atención y cotización de viajeros por WhatsApp para varias agencias de turismo, con respuestas en corto tiempo y un CRM web para que una persona tome el control cuando haga falta o monitoree la operación. Reduce de forma importante el consumo de IA agrupando mensajes seguidos, transcribe notas de voz y aísla los datos por agencia con seguridad y pruebas automatizadas.',
        bullet_points: [
          'Automaticé la atención y cotización de viajeros por WhatsApp para varias agencias de turismo, con respuestas en corto tiempo y un CRM para que una persona tome el control cuando haga falta o monitoree una acción.',
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
