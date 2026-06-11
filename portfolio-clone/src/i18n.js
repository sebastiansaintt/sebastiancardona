import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    name: 'Sebastián Cardona',
    role: 'Software Engineer',
    bio: 'I design and build backend systems, APIs, data-driven applications and intelligent automation workflows using open-source technologies.',
    aboutTitle: 'About',
    aboutP1: 'Software Engineer focused on Backend Development, Data Engineering and AI Automation.',
    aboutP2: 'My experience includes developing real-time monitoring systems, designing secure REST APIs, integrating IoT devices through MQTT communication and managing relational databases for data persistence and analytics.',
    aboutP3: 'I enjoy solving problems involving distributed systems, data pipelines, automation workflows and intelligent applications that combine software engineering with artificial intelligence.',
    projectsTitle: 'Projects',
    github: 'GitHub',
    footer: 'Designed with a minimalist aesthetic in mind. Built with Vue.js.',
    projects: [
      {
        id: 1,
        title: 'Real-Time CO2 Monitoring Platform',
        description: 'A real-time CO2 monitoring platform integrated with IoT devices via MQTT, featuring secure authentication, data persistence, and visualization dashboards for remote environmental monitoring.',
        link: '',
        github_link: 'https://github.com/realprodigium/risk_follower',
        technologies: 'Python (FastAPI), MQTT, Postgresql (Supabase), Docker, Render, JWT, Argon2'
      }
    ]
  },
  es: {
    name: 'Sebastián Cardona',
    role: 'Ingeniero de Software',
    bio: 'Diseño y construyo sistemas backend, APIs, aplicaciones basadas en datos y flujos de automatización inteligentes utilizando tecnologías de código abierto.',
    aboutTitle: 'Sobre mí',
    aboutP1: 'Ingeniero de Software enfocado en Desarrollo Backend, Ingeniería de Datos y Automatización con IA.',
    aboutP2: 'Mi experiencia incluye el desarrollo de sistemas de monitoreo en tiempo real, diseño de APIs REST seguras, integración de dispositivos IoT mediante comunicación MQTT y la administración de bases de datos relacionales para la persistencia de datos y análisis.',
    aboutP3: 'Disfruto resolver problemas involucrando sistemas distribuidos, pipelines de datos, flujos de automatización y aplicaciones inteligentes que combinan la ingeniería de software con la inteligencia artificial.',
    projectsTitle: 'Proyectos',
    github: 'GitHub',
    footer: 'Diseñado con una estética minimalista en mente. Construido con Vue.js.',
    projects: [
      {
        id: 1,
        title: 'Plataforma de Monitoreo de CO2 en Tiempo Real',
        description: 'Una plataforma de monitoreo de CO2 en tiempo real integrada con dispositivos IoT a través de MQTT, con autenticación segura, persistencia de datos y paneles de visualización para monitoreo ambiental remoto.',
        link: '',
        github_link: 'https://github.com/realprodigium/risk_follower',
        technologies: 'Python (FastAPI), MQTT, Postgresql (Supabase), Docker, Render, JWT, Argon2',
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
