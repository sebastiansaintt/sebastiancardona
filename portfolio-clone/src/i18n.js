import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    name: 'Sebastián Cardona',
    role: 'Software Engineer',
    subtitleRole: 'Backend & Data | AI Automation',
    locationText: 'Colombia | Remote & Relocation',
    bio: 'I design and build backend systems, APIs, data-driven applications, and intelligent automation workflows using open-source technologies.',
    aboutTitle: 'About Me',
    aboutP1: 'Software Engineer focused on Backend Development, Data Engineering and AI-driven Automation.',
    aboutP2: 'My experience includes developing real-time monitoring systems, designing secure REST APIs, integrating IoT devices through MQTT communication and managing relational databases for data persistence and analytics.',
    aboutP3: 'I enjoy solving problems involving distributed systems, data pipelines, automation workflows and intelligent applications that combine software engineering with artificial intelligence.',
    skillsTitle: 'Technical Skills',
    educationTitle: 'Education',
    educationText: 'Software Engineering — Universidad Cooperativa de Colombia (2022 - 2026)',
    skills: {
      languages: 'Python, JavaScript, SQL, C#',
      backend: 'FastAPI, Django, Express.js, ASP.NET',
      databases: 'PostgreSQL, MySQL, Supabase',
      apis: 'REST APIs, JWT, Argon2, Access Control',
      data: 'Data Modeling, ETL Concepts, Data Processing, SQL Analytics',
      iot: 'MQTT, HiveMQ, Arduino IDE',
      devops: 'Docker, Git, GitHub, Render, Vercel',
      ai: 'Workflow Automation, API Integrations, LLM Applications'
    },
    skillCategories: {
      languages: 'Languages',
      backend: 'Backend Frameworks',
      databases: 'Databases',
      apis: 'APIs & Security',
      data: 'Data Engineering',
      iot: 'IoT & Messaging',
      devops: 'DevOps & Cloud',
      ai: 'AI & Automation'
    },
    projectsTitle: 'Featured Projects',
    github: 'GitHub',
    footer: 'Designed with a minimalist aesthetic in mind. Built with Vue.js.',
    contactTitle: 'Get in Touch',
    contactSub: "Looking for a backend, data, or AI engineer? Let's build something exceptional together.",
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    downloadCV: 'Download CV (PDF)',
    scrollDown: 'Scroll to explore',
    projects: [
      {
        id: 1,
        num: '01/',
        title: 'Real-Time CO2 Monitoring Platform',
        description: 'A real-time CO2 monitoring platform integrated with IoT devices via MQTT, featuring secure authentication, data persistence, and visualization dashboards for remote environmental monitoring.',
        bullet_points: [
          'Developed backend services for sensor data ingestion, validation, and persistence.',
          'Designed and implemented secure REST APIs using FastAPI.',
          'Integrated MQTT communication between IoT devices and backend services.',
          'Implemented JWT authentication and Argon2 password hashing.',
          'Designed PostgreSQL database structures for telemetry storage and historical analysis.'
        ],
        github_link: 'https://github.com/realprodigium/risk_follower',
        technologies: 'Python (FastAPI), MQTT, PostgreSQL (Supabase), Docker, Render, JWT, Argon2',
        preview: '/co2bien.png'
      }
    ]
  },
  es: {
    name: 'Sebastián Cardona',
    role: 'Ingeniero de Software',
    subtitleRole: 'Backend y Datos | Automatización con IA',
    locationText: 'Colombia | Remoto y Relocalización',
    bio: 'Diseño y construyo sistemas backend, APIs, aplicaciones basadas en datos y flujos de automatización inteligentes utilizando tecnologías de código abierto.',
    aboutTitle: 'Sobre Mí',
    aboutP1: 'Ingeniero de Software enfocado en Desarrollo Backend, Ingeniería de Datos y Automatización impulsada por IA.',
    aboutP2: 'Mi experiencia incluye el desarrollo de sistemas de monitoreo en tiempo real, diseño de APIs REST seguras, integración de dispositivos IoT mediante comunicación MQTT y la administración de bases de datos relacionales para la persistencia de datos y análisis.',
    aboutP3: 'Disfruto resolver problemas que involucran sistemas distribuidos, pipelines de datos, flujos de automatización y aplicaciones inteligentes que combinan la ingeniería de software con la inteligencia artificial.',
    skillsTitle: 'Habilidades Técnicas',
    educationTitle: 'Educación',
    educationText: 'Ingeniería de Software - Universidad Cooperativa de Colombia (2022 - 2026)',
    skills: {
      languages: 'Python, JavaScript, SQL, C#',
      backend: 'FastAPI, Django, Express.js, ASP.NET',
      databases: 'PostgreSQL, MySQL, Supabase',
      apis: 'APIs REST, JWT, Argon2, Control de Accesos',
      data: 'Modelado de Datos, Conceptos ETL, Procesamiento de Datos, Análisis SQL',
      iot: 'MQTT, HiveMQ, Arduino IDE',
      devops: 'Docker, Git, GitHub, Render, Vercel',
      ai: 'Automatización de Flujos, Integración de APIs, Aplicaciones LLM'
    },
    skillCategories: {
      languages: 'Lenguajes',
      backend: 'Frameworks Backend',
      databases: 'Bases de Datos',
      apis: 'APIs y Seguridad',
      data: 'Ingeniería de Datos',
      iot: 'IoT y Mensajería',
      devops: 'DevOps y Cloud',
      ai: 'IA y Automatización'
    },
    projectsTitle: 'Proyectos Destacados',
    github: 'GitHub',
    footer: 'Construido con Vue.js.',
    contactTitle: 'Contacto',
    contactSub: '¿Buscas un ingeniero backend, de datos o de IA? Construyamos juntos.',
    emailLabel: 'Correo electrónico',
    phoneLabel: 'Teléfono',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    downloadCV: 'Descargar CV (PDF)',
    scrollDown: 'Desplaza para explorar',
    projects: [
      {
        id: 1,
        num: '01/',
        title: 'Plataforma de Monitoreo de CO2 en Tiempo Real',
        description: 'Una plataforma de monitoreo de CO2 en tiempo real integrada con dispositivos IoT a través de MQTT, con autenticación segura, persistencia de datos y paneles de visualización para monitoreo ambiental remoto.',
        bullet_points: [
          'Desarrollo de servicios backend para ingesta, validación y persistencia de datos de sensores.',
          'Diseño e implementación de APIs REST seguras con FastAPI.',
          'Integración de comunicación MQTT entre dispositivos IoT y servicios backend.',
          'Implementación de autenticación JWT y hashing de contraseñas con Argon2.',
          'Diseño de estructuras de base de datos PostgreSQL para almacenamiento de telemetría y análisis histórico.'
        ],
        github_link: 'https://github.com/realprodigium/risk_follower',
        technologies: 'Python (FastAPI), MQTT, PostgreSQL (Supabase), Docker, Render, JWT, Argon2',
        preview: '/co2bien.png'
      }
    ]
  }
}

const userLang = navigator.language || navigator.userLanguage;
const defaultLocale = userLang.startsWith('es') ? 'es' : 'en';

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
