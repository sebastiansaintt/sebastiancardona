<script setup>
import { useI18n } from 'vue-i18n'
import GlassCard from '../components/GlassCard.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const { t, tm } = useI18n()
</script>

<template>
  <div class="page">
    <div class="layout">

      <!-- LEFT: sticky sidebar -->
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

          <LanguageSwitcher />
        </div>
      </aside>

      <!-- RIGHT: scrollable content -->
      <main class="content">

        <section id="about" class="section">
          <h2 class="section-title">{{ t('aboutTitle') }}</h2>
          <p class="body-text">{{ t('aboutP1') }}</p>
          <p class="body-text">{{ t('aboutP2') }}</p>
          <p class="body-text">{{ t('aboutP3') }}</p>
        </section>

        <section id="projects" class="section">
          <h2 class="section-title">{{ t('projectsTitle') }}</h2>
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
}

.layout {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

/* ── Sidebar ── */
.sidebar {
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 2rem;
}

.sidebar-inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.name {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 0.3rem;
}

.role {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255,255,255,0.75);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.bio {
  font-size: 0.82rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.60);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.nav-link {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.50);
  text-decoration: none;
  transition: color 200ms ease;
}
.nav-link:hover { color: #fff; }

.social { display: flex; flex-direction: column; gap: 0.5rem; }

.social-link {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 200ms ease;
}
.social-link:hover { color: #fff; }

/* ── Main content ── */
.content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 0.5rem;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section-title {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
}

.body-text {
  font-size: 0.88rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.70);
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* ── Footer ── */
.footer {
  padding-bottom: 2rem;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.30);
}

/* ── Mobile ── */
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