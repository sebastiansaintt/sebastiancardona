<script setup>
import { useI18n } from 'vue-i18n'
import GlassCard from '../components/GlassCard.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const { t, tm } = useI18n()
</script>

<template>
  <div class="page">
    <div class="top-right-bar">
      <LanguageSwitcher />
    </div>
    <div class="layout">

      <aside class="sidebar">
        <div class="sidebar-inner">
          <div class="identity">
            <h1 class="name">{{ t('name') }}</h1>
            <p class="role">{{ t('role') }}</p>
            <p class="bio">{{ t('bio') }}</p>
          </div>

          <nav class="nav">
            <a href="#about" class="nav-link">{{ t('aboutTitle') }}</a>
            <a href="#projects" class="nav-link">{{ t('projectsTitle') }}</a>
          </nav>

          <div class="social">
            <a href="https://github.com/realprodigium" target="_blank" rel="noopener noreferrer" class="social-link">
              GitHub ↗
            </a>
          </div>
        </div>
      </aside>

      <main class="content">

        <section id="about" class="section">
          <p class="body-text">{{ t('aboutP1') }}</p>
          <p class="body-text">{{ t('aboutP2') }}</p>
          <p class="body-text">{{ t('aboutP3') }}</p>
        </section>

        <section id="projects" class="section">
          <div class="cards">
            <GlassCard
              v-for="project in tm('projects')"
              :key="project.id"
              :title="project.title"
              :description="project.description"
              :github="project.github_link"
              :tags="project.technologies?.split(',')"
            />
          </div>
        </section>

        <footer class="footer">
          <p>{{ t('footer') }}</p>
        </footer>

      </main>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 6rem 4rem;
  position: relative;
}

.top-right-bar {
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 1000;
}

.layout {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 8%;
  align-items: flex-start;
}

.sidebar {
  width: 42%;
  flex-shrink: 0;
  position: sticky;
  top: 6rem;
}

.sidebar-inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.name {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(40px, 4.5vw, 60px);
  font-weight: 700;
  color: var(--text-color);
  letter-spacing: -2px;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  white-space: nowrap;
}

.role {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
  opacity: 0.9;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-light);
  max-width: 95%;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-light);
  text-decoration: none;
  transition: color 200ms ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: max-content;
}

.nav-link::before {
  content: '';
  display: block;
  width: 35px;
  height: 1px;
  background-color: var(--text-light);
  transition: width 0.3s, background-color 0.3s;
}

.nav-link:hover { color: var(--text-color); }
.nav-link:hover::before {
  width: 60px;
  background-color: var(--text-color);
}

.social {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-link {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-light);
  text-decoration: none;
  transition: color 200ms ease;
  display: flex;
  align-items: center;
}
.social-link:hover { color: var(--text-color); }

.content {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding-top: 1rem;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.body-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-light);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
}

.footer {
  padding-bottom: 2rem;
  font-size: 0.85rem;
  color: var(--text-light);
}

@media (max-width: 1024px) {
  .page {
    padding: 5rem 3rem;
  }
  .layout {
    flex-direction: column;
    gap: 4rem;
  }
  .sidebar {
    width: 100%;
    position: static;
    top: auto;
  }
  .content {
    width: 100%;
    padding-top: 0;
    gap: 6rem;
  }
  .name {
    white-space: normal;
  }
}

@media (max-width: 768px) {
  .page {
    padding: 4rem 2rem;
  }
  .top-right-bar {
    position: static;
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-end;
  }
  .name {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
  }
  .role {
    font-size: 1.15rem;
  }
  .bio,
  .body-text {
    font-size: 1rem;
  }
  .content {
    gap: 5rem;
  }
  .nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .nav-link::before {
    display: none;
  }
  .nav-link {
    letter-spacing: 0.05em;
  }
}

@media (max-width: 480px) {
  .page {
    padding: 3rem 1.5rem;
  }
  .name {
    font-size: 2.25rem;
  }
  .role {
    font-size: 1.1rem;
  }
  .sidebar-inner {
    gap: 1.5rem;
  }
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>