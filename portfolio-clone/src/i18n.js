import { createI18n } from 'vue-i18n'
import previewCarInspection from './assets/preview.png'

const messages = {
  en: {
    name: 'Sebastián Cardona',
    fullName: 'Sebastián José Cardona Ramírez',
    role: 'Backend & Data Engineer',
    subtitle: 'Scalable APIs, Resilient Data Pipelines & E2E System Security',
    tagline: 'I build high-performance APIs, resilient data pipelines, and security-first architectures with an end-to-end perspective across IoT, Web, and Mobile ecosystems.',
    statusBadge: 'Open to Backend & Data roles',
    statusBadgeDetail: 'Research Assistant & Teaching React Native',
    locationText: 'Santa Marta, Colombia · Remote & Relocation',
    email: 'scarrdona@gmail.com',
    copyEmail: 'Copy Email',
    emailCopied: 'Email copied to clipboard!',
    
    // In-page navigation jump links (Brittany Chiang style)
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navActivity: 'Activity',

    // About Section (Recruiter Narrative)
    aboutP1: 'Backend & Data Engineer focused on architecting resilient APIs, high-throughput data pipelines, and automated workflows. My engineering philosophy revolves around rigorous system fundamentals, security-first design patterns, and sustainable software quality.',
    aboutP2: 'With hands-on experience spanning IoT, Web, and Mobile environments, I possess a deep understanding of the full End-to-End (E2E) lifecycle: from telemetry and edge/client data collection to scalable backend processing, distributed workflows, and reliable data storage.',
    aboutP3: 'I am actively integrating advanced Data Engineering practices into my core backend skillset—building scalable ETL/ELT flows, structured ingestion layers, and maintainable services designed to handle critical data workloads seamlessly.',
    
    // Core Architecture Principles toggle/card
    principlesTitle: 'Architecture Principles & Standards',
    principlesP1: 'I select architectures, patterns, and technologies based on functional and non-functional requirements, prioritizing strong engineering fundamentals over transient tools. I apply core principles including SOLID, ACID, and CAP, secure development best practices aligned with OWASP, ISO, and IEEE standards, and agile methodologies such as Scrum.',
    principlesP2: 'Experienced in implementing JWT (RS256/HS256), rotating access & refresh tokens, HttpOnly Cookies, RBAC, Redis token revocation, rate limiting, Argon2id hashing, input sanitization, XSS mitigation, and containerization with Docker to deliver secure, maintainable, high-performance, scalable, and resilient software.',

    // Experience Items (Brittany Chiang Card Style)
    experience: [
      {
        period: '2024 — Present',
        title: 'Research Assistant & Mobile Systems Lead',
        company: 'Universidad Cooperativa de Colombia',
        companyUrl: 'https://www.ucc.edu.co/',
        description: 'Lead technical sessions and instructional workshops for React Native and backend mobile integration. Coordinate research prototypes bridging microcontrollers, edge sensors, and cloud endpoints.',
        technologies: ['React Native', 'TypeScript', 'FastAPI', 'IoT Telemetry', 'Research Methodologies']
      },
      {
        period: '2022 — 2026',
        title: 'Software Engineering Degree (B.S.)',
        company: 'Universidad Cooperativa de Colombia',
        companyUrl: 'https://www.ucc.edu.co/',
        description: 'Comprehensive software engineering education with primary specialization in distributed systems, software architecture (SOLID, Clean Architecture, MVC, Microservices), database modeling (ACID, relational & NoSQL), and cybersecurity foundations.',
        technologies: ['Software Architecture', 'PostgreSQL', 'Python', 'Algorithms', 'Distributed Systems']
      },
      {
        period: '2024',
        title: 'HCL SoftSkills Strengthening Certification',
        company: 'HabComLearn',
        companyUrl: '#',
        description: 'Advanced communication, technical leadership, cross-functional engineering collaboration, and agile project delivery standards.',
        technologies: ['Leadership', 'Communication', 'Scrum', 'Team Delivery']
      }
    ],

    viewResume: 'View Full Résumé',
    downloadCV: 'Download CV',
    
    // Projects
    projectsHeading: 'Projects',
    viewGithub: 'GitHub',
    livePreview: 'Live Preview',
    watchDemo: 'Watch Demo',
    viewDemoVideo: 'Watch Video Demo',
    demoAvailable: 'Video Walkthrough Available',
    backToPortfolio: 'Back to Portfolio',
    projectOverview: 'Project Overview',
    systemCapabilities: 'System Architecture & Capabilities',
    interactiveChapters: 'Interactive Chapters & Highlights',
    jumpToChapter: 'Click to jump to this moment in video',
    demoComingSoonTitle: 'Video Demo in Production',
    demoComingSoonDesc: 'A dedicated technical video walkthrough for this system is currently being recorded. In the meantime, you can explore the Car Inspection PWA demo or review the complete architecture on GitHub.',
    exploreOtherProjects: 'Other Engineered Systems',
    shareDemo: 'Share Demo',
    demoLinkCopied: 'Demo link copied to clipboard!',

    projects: [
      {
        id: 1,
        slug: 'risk-follower',
        hasDemo: false,
        num: '01',
        badge: 'Data Engineering & Real-Time Pipeline',
        title: 'Real-Time Fermentation Monitoring Pipeline',
        subtitle: 'Craft Breweries Telemetry (2025 - 2026)',
        description: 'Ingests live sensor data (temperature, humidity, CO2) from ESP32 microcontrollers via MQTT (HiveMQ Cloud) into PostgreSQL for historical analysis. Authenticated REST API with role-based filtering, live WebSocket dashboard, and JWT auth with 3 role tiers. Monolith + background worker architecture deployed on Render with Supabase PostgreSQL.',
        bullet_points: [
          'Ingestion and validation backend for telemetry (temperature, humidity, CO2) from ESP32 microcontrollers.',
          'High-throughput REST APIs and WebSocket feeds with FastAPI and PostgreSQL persistence.',
          'JWT authentication, Argon2 hashing, and granular RBAC permissions.'
        ],
        github_link: 'https://github.com/realprodigium/risk_follower',
        technologies: ['FastAPI', 'MQTT', 'WebSockets', 'PostgreSQL', 'Supabase', 'Docker', 'ESP32'],
        preview: '/co2bien.png'
      },
      {
        id: 2,
        slug: 'car-inspection',
        hasDemo: true,
        demoBadge: 'Full PWA Walkthrough',
        videoKey: 'car-inspection',
        num: '02',
        badge: 'Full Stack & Mobile PWA',
        title: 'Car Inspection | Vehicle Fleet PWA',
        subtitle: 'Special Vehicle Inspection Sector (2026)',
        description: 'Replaced paper-based fleet inspections with a full digital workflow: inspection history, maintenance tracking, and real-time fleet availability. Modular monolith (FastAPI + MVC) built security-first: RBAC, Argon2id hashing, HTTPS cookies, and server-side validation on every input payload.',
        bullet_points: [
          'Modular Layered + MVC architecture with FastAPI, React, TypeScript, PostgreSQL, and SQLAlchemy.',
          'Secure auth with JWT, HttpOnly cookies, RBAC, Argon2id, and Redis token revocation under OWASP.',
          'Containerized environment with Docker Compose for local orchestration and deployment.'
        ],
        github_link: 'https://github.com/sebastiansaintt/car_checking',
        technologies: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker Compose', 'PWA', 'OWASP'],
        preview: previewCarInspection,
        demoDescription: 'In-depth product demonstration of the Car Inspection PWA: from cryptographic authentication, role handling, responsive checklist workflows, real-time photo evidence capture, to automated cryptographic report generation.',
        chapters: [
          { time: '00:00', seconds: 0, title: 'Auth & RBAC Access', desc: 'Secure login flow with JWT, Argon2id, and granular permissions.' },
          { time: '00:45', seconds: 45, title: 'Vehicle Fleet & Inspection Init', desc: 'Selecting vehicle unit and starting real-time inspection log.' },
          { time: '01:30', seconds: 90, title: 'Interactive Technical Checklist', desc: 'Step-by-step automotive inspection with instant form validation.' },
          { time: '02:40', seconds: 160, title: 'Photo Evidence & Logging', desc: 'Attaching photo logs and anomaly details with compression.' },
          { time: '03:45', seconds: 225, title: 'Audit Trail & PDF Report', desc: 'Digital closure, state freezing, and report compilation.' }
        ]
      },
      {
        id: 3,
        slug: 'lawsim-pymes',
        hasDemo: false,
        num: '03',
        badge: 'Enterprise Architecture & NLP',
        title: 'LawSim Pymes | Regulatory Simulation Platform',
        subtitle: 'Enterprise System Architecture & Rule Reasoning (2025)',
        description: 'Enterprise hybrid architecture combining Layered, Microservices, and MVC patterns to decouple CRUD operations from computational reasoning pipelines. Integrates OWL 2 domain ontologies, SWRL rules, and LEGAL-BETO NLP.',
        bullet_points: [
          'Modeled domain ontologies in OWL 2 (Protégé) with HermiT reasoner, SWRL rules, and LEGAL-BETO NLP.',
          'Defined SOAP/WSDL microservices, Redis distributed caching, and asymmetric JWT (RS256) security.',
          'Applied UWE and OOHDM methodologies for user-centric interaction and navigation flows.'
        ],
        github_link: 'https://github.com/sebastiansaintt/WebDesign',
        technologies: ['Software Architecture', 'FastAPI', 'Vue.js', 'OWL 2 / Protégé', 'NLP (LEGAL-BETO)', 'SOAP / WSDL', 'Redis'],
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
    footerColophon: 'Loosely designed in Figma and coded in Cursor. Built with Vue 3, Vite, and Tailwind CSS. Deployed on Vercel.',
    copyright: '© 2026 Sebastián Cardona. All rights reserved.'
  },
  es: {
    name: 'Sebastián Cardona',
    fullName: 'Sebastián José Cardona Ramírez',
    role: 'Backend & Data Engineer',
    subtitle: 'APIs Escalables, Pipelines de Datos Resilientes & Seguridad E2E',
    tagline: 'Construyo APIs de alto rendimiento, flujos de datos resilientes y arquitecturas seguras con una perspectiva integral de extremo a extremo en entornos IoT, Web y Mobile.',
    statusBadge: 'Disponible para roles de Backend y Datos',
    statusBadgeDetail: 'Auxiliar de investigación & Docencia en React Native',
    locationText: 'Santa Marta, Colombia · Remoto y Relocalización',
    email: 'scarrdona@gmail.com',
    copyEmail: 'Copiar Correo',
    emailCopied: '¡Correo copiado al portapapeles!',

    // Enlaces de navegación con indicador
    navAbout: 'Sobre Mí',
    navExperience: 'Experiencia',
    navProjects: 'Proyectos',
    navActivity: 'Actividad',

    // Sección About (Narrativa para Reclutadores)
    aboutP1: 'Ingeniero de Software especializado en Backend y Data Engineering. Mi enfoque se centra en el diseño e implementación de APIs robustas, pipelines de datos confiables y workflows automatizados, priorizando siempre la seguridad, los principios de arquitectura limpia y la calidad del software.',
    aboutP2: 'Habiendo trabajado en ecosistemas que abarcan IoT, Web y plataformas móviles, entiendo a profundidad el ciclo de vida End-to-End (E2E) de un producto digital: desde la captura y telemetría de datos en el borde o cliente, pasando por el procesamiento distribuido, hasta la persistencia y entrega eficiente a través de servicios escalables.',
    aboutP3: 'Actualmente expando y aplico mis capacidades en Data Engineering, diseñando flujos de ingesta, transformación y modelado de datos que permiten a los sistemas operar con alta disponibilidad, trazabilidad y bajo acoplamiento.',

    // Principios de Arquitectura
    principlesTitle: 'Principios de Arquitectura & Estándares',
    principlesP1: 'Selecciono arquitecturas, patrones y tecnologías según los requisitos funcionales y no funcionales del problema, priorizando fundamentos de ingeniería sobre herramientas específicas. Aplico principios como SOLID, ACID y CAP, prácticas de diseño y desarrollo seguro alineadas con estándares OWASP, ISO e IEEE, y metodologías ágiles como Scrum.',
    principlesP2: 'He implementado mecanismos como JWT (RS256/HS256), access y refresh tokens rotativos, HttpOnly Cookies, RBAC, rate limiting, Argon2id, sanitización y validación de entradas, protección frente a XSS y contenerización con Docker, buscando construir software seguro, mantenible, escalable y preparado para evolucionar.',

    // Experiencia
    experience: [
      {
        period: '2024 — Presente',
        title: 'Auxiliar de Investigación & Liderazgo en Sistemas Móviles',
        company: 'Universidad Cooperativa de Colombia',
        companyUrl: 'https://www.ucc.edu.co/',
        description: 'Lidero talleres técnicos e instrucción práctica en desarrollo con React Native y conectividad backend. Coordino prototipos de investigación que enlazan microcontroladores, sensores en el borde y endpoints cloud.',
        technologies: ['React Native', 'TypeScript', 'FastAPI', 'Telemetría IoT', 'Metodología Científica']
      },
      {
        period: '2022 — 2026',
        title: 'Ingeniería de Software (Pregrado)',
        company: 'Universidad Cooperativa de Colombia',
        companyUrl: 'https://www.ucc.edu.co/',
        description: 'Formación rigurosa en ingeniería de software con énfasis en sistemas distribuidos, arquitectura de software (SOLID, Clean Architecture, MVC, Microservicios), modelado de bases de datos (ACID, relacionales y NoSQL) y seguridad informática.',
        technologies: ['Arquitectura de Software', 'PostgreSQL', 'Python', 'Algoritmos', 'Sistemas Distribuidos']
      },
      {
        period: '2024',
        title: 'Certificación de Fortalecimiento en SoftSkills HCL',
        company: 'HabComLearn',
        companyUrl: '#',
        description: 'Habilidades avanzadas en comunicación asertiva, liderazgo técnico, resolución de problemas interfuncionales y gestión ágil.',
        technologies: ['Liderazgo', 'Comunicación', 'Scrum', 'Entrega Ágil']
      }
    ],

    viewResume: 'Ver Résumé Completo',
    downloadCV: 'Descargar CV',

    // Proyectos
    projectsHeading: 'Proyectos',
    viewGithub: 'GitHub',
    livePreview: 'Vista Previa',
    watchDemo: 'Ver Demo',
    viewDemoVideo: 'Ver Video Demo',
    demoAvailable: 'Video Demo Disponible',
    backToPortfolio: 'Volver al Portafolio',
    projectOverview: 'Descripción General',
    systemCapabilities: 'Arquitectura y Capacidades del Sistema',
    interactiveChapters: 'Capítulos Interactivos & Puntos Clave',
    jumpToChapter: 'Clic para saltar a este momento del video',
    demoComingSoonTitle: 'Video Demo en Producción',
    demoComingSoonDesc: 'El recorrido técnico en video de este sistema se encuentra actualmente en grabación. Mientras tanto, puedes explorar la demostración interactiva de Car Inspection o revisar la arquitectura completa en GitHub.',
    exploreOtherProjects: 'Otros Sistemas Desarrollados',
    shareDemo: 'Compartir Demo',
    demoLinkCopied: '¡Enlace del demo copiado al portapapeles!',

    projects: [
      {
        id: 1,
        slug: 'risk-follower',
        hasDemo: false,
        num: '01',
        badge: 'Ingeniería de Datos & Pipeline en Tiempo Real',
        title: 'Real-Time Fermentation Monitoring Pipeline',
        subtitle: 'Telemetría para Procesos de Fermentación (2025 - 2026)',
        description: 'Ingesta de datos de sensores en vivo (temperatura, humedad, CO2) desde microcontroladores ESP32 vía MQTT (HiveMQ Cloud) hacia PostgreSQL para análisis histórico. API REST autenticada con filtrado basado en roles, dashboard en vivo con WebSockets y autenticación JWT con 3 niveles de roles. Desplegado como monolito + background worker en Render con Postgres en Supabase.',
        bullet_points: [
          'Backend de ingesta y validación de telemetría (temperatura, humedad, CO2) desde microcontroladores ESP32.',
          'APIs REST y WebSockets de alto rendimiento con FastAPI y PostgreSQL.',
          'Autenticación JWT, cifrado con Argon2 y control de accesos RBAC.'
        ],
        github_link: 'https://github.com/realprodigium/risk_follower',
        technologies: ['FastAPI', 'MQTT', 'WebSockets', 'PostgreSQL', 'Supabase', 'Docker', 'ESP32'],
        preview: '/co2bien.png'
      },
      {
        id: 2,
        slug: 'car-inspection',
        hasDemo: true,
        demoBadge: 'Recorrido Completo PWA',
        videoKey: 'car-inspection',
        num: '02',
        badge: 'Full Stack & Mobile PWA',
        title: 'Car Inspection | Sistema PWA de Inspección Vehicular',
        subtitle: 'Interventoría y Mantenimiento de Vehículos Especiales (2026)',
        description: 'Reemplazo de inspecciones de flota en papel por un flujo 100% digital: trazabilidad de revisiones, control de averías y disponibilidad de flota en tiempo real. Monolito modular (FastAPI + MVC) con seguridad de primer nivel: RBAC, Argon2id, cookies HTTPS y validación estricta de esquemas en el servidor.',
        bullet_points: [
          'Arquitectura modular por capas + MVC con FastAPI, React, TypeScript, PostgreSQL y SQLAlchemy.',
          'Autenticación segura con JWT, cookies HttpOnly/Secure, RBAC, Argon2id y Redis bajo OWASP.',
          'Contenerización completa con Docker Compose para desarrollo y despliegue.'
        ],
        github_link: 'https://github.com/sebastiansaintt/car_checking',
        technologies: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker Compose', 'PWA', 'OWASP'],
        preview: previewCarInspection,
        demoDescription: 'Demostración detallada de la PWA Car Inspection: desde el acceso seguro criptográfico, gestión de roles, flujo de checklist dinámico, captura de evidencias en tiempo real, hasta la generación automatizada de reportes con auditoría.',
        chapters: [
          { time: '00:00', seconds: 0, title: 'Autenticación & Roles RBAC', desc: 'Flujo de acceso seguro con JWT, hashing Argon2id y permisos por rol.' },
          { time: '00:45', seconds: 45, title: 'Flota Vehicular & Inicio de Inspección', desc: 'Selección de la unidad vehicular y apertura del registro en tiempo real.' },
          { time: '01:30', seconds: 90, title: 'Checklist Técnico Dinámico', desc: 'Inspección técnica paso a paso con validaciones en caliente.' },
          { time: '02:40', seconds: 160, title: 'Evidencias Fotográficas & Novedades', desc: 'Carga de capturas y registro de fallas mecánicas con compresión.' },
          { time: '03:45', seconds: 225, title: 'Auditoría & Generación de Reporte PDF', desc: 'Cierre del proceso, congelamiento de datos y exportación de reporte.' }
        ]
      },
      {
        id: 3,
        slug: 'lawsim-pymes',
        hasDemo: false,
        num: '03',
        badge: 'Arquitectura Empresarial & NLP',
        title: 'LawSim Pymes | Plataforma de Simulación Regulatoria',
        subtitle: 'Arquitectura de Sistemas & Motor de Inferencia Normativa (2025)',
        description: 'Blueprint arquitectónico híbrido de nivel empresarial que combina Arquitectura por Capas, Microservicios y MVC para desacoplar operaciones CRUD de pipelines de inferencia lógica. Integra ontologías OWL 2, reglas SWRL y NLP con LEGAL-BETO.',
        bullet_points: [
          'Modelado ontológico en OWL 2 (Protégé) con razonador HermiT, reglas SWRL y NLP con LEGAL-BETO.',
          'Interfaces SOAP/WSDL, caché distribuida con Redis y seguridad criptográfica con JWT RS256.',
          'Metodologías UWE y OOHDM para modelado de interacción orientada al usuario.'
        ],
        github_link: 'https://github.com/sebastiansaintt/WebDesign',
        technologies: ['Software Architecture', 'FastAPI', 'Vue.js', 'OWL 2 / Protégé', 'NLP (LEGAL-BETO)', 'SOAP / WSDL', 'Redis'],
        preview: '/lawsim.png'
      }
    ],

    // Actividad
    githubActivityHeading: 'Actividad',
    githubContributions: 'contribuciones en 2025–2026',
    githubLess: 'Menos',
    githubMore: 'Más',
    githubProfileLink: '{\'@\'}sebastiansaintt',

    // Pie
    footerColophon: 'Diseñado con inspiración minimalista en Figma y codificado en Cursor. Construido con Vue 3, Vite y Tailwind CSS.',
    copyright: '© 2026 Sebastián Cardona. Todos los derechos reservados.'
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
