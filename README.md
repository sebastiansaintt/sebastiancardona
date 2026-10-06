<div align="center">

# Sebastián Cardona
### **Backend & Data Engineer**
**APIs de Alto Rendimiento · Pipelines de Datos Resilientes · Arquitectura & Seguridad E2E**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sebastiansaintt)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sebastiansaintt)
[![Email](https://img.shields.io/badge/Email-scarrdona%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:scarrdona@gmail.com)
[![Location](https://img.shields.io/badge/Ubicación-Santa_Marta,_CO_·_Remoto_/_Relocation-00B4D8?style=for-the-badge)](mailto:scarrdona@gmail.com)

</div>

---

## Por qué trabajar conmigo (Propuesta de Valor)

No me limito a programar endpoints o escribir consultas SQL; **diseño sistemas tolerantes a fallos, seguros desde el día cero y optimizados para escalar**. 

Cuento con una visión integral de ciclo de vida completo (**End-to-End**): desde la captura de telemetría en el borde (IoT / microcontroladores) y consumo en clientes web/móviles, hasta la ingesta masiva, procesamiento distribuido, caché y persistencia transaccional en la nube.

* **Seguridad por diseño (OWASP First):** Implementación de esquemas de autenticación robustos (JWT RS256/HS256, rotación de tokens, cookies HttpOnly, RBAC estricto, hashing con Argon2id y revocación con Redis).
* **Arquitectura sólida y desacoplada:** Aplicación rigurosa de principios SOLID, Clean Architecture (aprendiendo progresivamente), patrones cliente-servidor y garantías ACID/CAP.
* **Mentalidad de Data Engineering:** Construcción de pipelines de ingesta (MQTT, WebSockets, background workers) con validación estricta de esquemas y tiempos de respuesta mínimos.
* **Liderazgo técnico y comunicación:** Auxiliar de investigación en docencia universitaria (React Native & Mobile Backends) y certificación en habilidades blandas aplicadas a equipos ágiles.

---

## Stack Tecnológico

| Dominio | Tecnologías y Herramientas |
| :--- | :--- |
| **Backend & APIs** | `Python` (FastAPI, SQLAlchemy), `Node.js`, `RESTful APIs`, `WebSockets`, `SOAP/WSDL` |
| **Data & Telemetría** | `PostgreSQL`, `Supabase`, `Redis`, `MQTT (HiveMQ)`, `Pipelines ETL/ELT`, `ESP32 / Edge Telemetry` |
| **Arquitectura & Seguridad** | `OWASP Top 10`, `RBAC`, `Argon2id`, `JWT (RS256/HS256)`, `Rate Limiting`, `Clean Architecture` |
| **Cloud & DevOps** | `Docker`, `Docker Compose`, `Linux`, `Git / GitHub Actions`, `Render` |
| **Frontend & Mobile** | `React`, `React Native`, `TypeScript`, `Vue.js 3`, `Vite`, `Tailwind CSS`, `PWAs` |

---

## Proyectos y Sistemas Destacados

### 1. [Real-Time Fermentation Monitoring Pipeline](https://github.com/realprodigium/risk_follower)
> **Data Pipeline & Telemetría IoT en Tiempo Real**  
> *Stack:* FastAPI · MQTT · WebSockets · PostgreSQL · Supabase · Docker · ESP32

* **El Reto:** Ingestar, validar y persistir telemetría crítica de fermentación (temperatura, humedad, $CO_2$) emitida por microcontroladores ESP32 en microcervecerías, sin pérdida de paquetes ni cuellos de botella.
* **La Solución:** Arquitectura de monolito modular con background worker que ingesta transmisiones vía broker MQTT en la nube (HiveMQ), procesa los datos en FastAPI y los distribuye en vivo a dashboards vía WebSockets y a PostgreSQL para reportería histórica.
* **Aspectos Clave:** Autenticación JWT con hashing Argon2 y control granular de accesos (RBAC de 3 niveles).

---

### 2. [Car Inspection (VEYRA) — Flota Vehicular PWA](https://github.com/sebastiansaintt/car_checking)
> **Full Stack PWA & Arquitectura de Alta Seguridad**  
> *Stack:* FastAPI · React · TypeScript · PostgreSQL · Redis · Docker Compose · PWA

* **El Reto:** Reemplazar procesos de inspección física en papel por una plataforma digital sin fricciones, con validaciones estrictas y capacidad de operar en campo.
* **La Solución:** PWA de grado de producción con validación server-side de esquemas, captura y compresión de evidencias fotográficas en tiempo real y congelamiento criptográfico de auditorías en reportes PDF.
* **Aspectos Clave:** Sesiones reforzadas con cookies HttpOnly/Secure, prevención activa de vulnerabilidades OWASP, lista negra de tokens revocados en Redis y orquestación con Docker Compose.

---

## Experiencia & Trayectoria

* **Auxiliar de Investigación: React Native** — *Universidad Antonio Nariño* `(2026 — Presente)`  
  * Capacitación e instrucción a desarrolladores en arquitectura móvil, componentes declarativos y consumo seguro de APIs backend.  
  * Coordinación de prototipos de investigación conectando hardware perimetral con la nube.
* **Ingeniería de Software (B.S.)** — *Universidad Cooperativa de Colombia* `(2022 — 2026)`  
  * Especialización en sistemas distribuidos, patrones arquitectónicos y bases de datos relacionales/NoSQL.
* **Certificación de Fortalecimiento en Soft Skills** — *HabComLearn (HCL)* `(2024)`  
  * Liderazgo técnico, comunicación asertiva y marcos ágiles (Scrum).

---

## ¿Tienes un proyecto o vacante en mente? Conectemos

Busco oportunidades como **Backend Engineer**, **Data Engineer** o **Full Stack Engineer** (remoto global o con disponibilidad de relocalización).

* Correo: [scarrdona@gmail.com](mailto:scarrdona@gmail.com)
* LinkedIn: [linkedin.com/in/sebastiansaintt](https://linkedin.com/in/sebastiansaintt)
* GitHub: [@sebastiansaintt](https://github.com/sebastiansaintt)

<div align="center">
  <sub>Construido con rigor de ingeniería · © 2026 Sebastián Cardona</sub>
</div>
