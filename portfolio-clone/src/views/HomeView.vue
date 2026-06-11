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
  padding: 2rem;
  position: relative;
}

.top-right-bar {
  position: fixed;
  top: 10px;
  right: 1rem;
  z-index: 1000;
}

.layout {
  width: 100%;
  display: flex;
  gap: 6%;
  align-items: flex-start;
}

.sidebar {
  width: 44%;
  flex-shrink: 0;
  position: sticky;
  top: 5rem;
}

.sidebar-inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.name {
  font-family: 'Poppins', sans-serif;
  font-size: 57px;
  font-weight: 700;
  color: var(--text-color);
  letter-spacing: -3px;
  line-height: 1.1;
  margin-bottom: 0.3rem;
}

.role {
  font-size: 25px;
  font-weight: 500;
  color: var(--text-light);
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.bio {
  font-size: 20px;
  line-height: 1.7;
  color: var(--text-light);
  max-width: 95%;
    letter-spacing: -1px;

}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-light);
  text-decoration: none;
  transition: color 200ms ease;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-link::before {
  content: '';
  display: block;
  width: 30px;
  height: 1px;
  background-color: var(--text-light);
  transition: width 0.3s, background-color 0.3s;
}

.nav-link:hover { color: var(--text-color); }
.nav-link:hover::before {
  width: 50px;
  background-color: var(--text-color);
}

.social { display: flex; flex-direction: column; gap: 0.5rem; }

.social-link {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-light);
  text-decoration: none;
  transition: color 200ms ease;
}
.social-link:hover { color: var(--text-color); }

.content {
  width: 50%;
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-top: 3rem;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}


.body-text {
  font-size: 20px;
  line-height: 1.5;
  color: var(--text-light);
  letter-spacing: -0.5px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.footer {
  padding-bottom: 2rem;
  font-size: 0.75rem;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .page { padding: 1.5rem 1rem; }
  .layout {
    flex-direction: column;
    gap: 2.5rem;
  }
  .sidebar {
    width: 100%;
    position: static;
  }
  .nav { flex-direction: row; flex-wrap: wrap; gap: 1rem; }
}
</style>