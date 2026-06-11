<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import GlassCard from '../components/GlassCard.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const { tm } = useI18n()

const projects = computed(() => tm('projects'))

const getTags = (techString) => {
  if (!techString) return []
  return techString.split(',').map(t => t.trim())
}
</script>

<template>
  <div class="portfolio-layout">
    <div class="language">
            <LanguageSwitcher />
    </div>
    <header class="header-section">
      <div class="header-content">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <h1 style="margin: 0;"><a href="/">{{ $t('name') }}</a></h1>
        </div>
        <h2>{{ $t('role') }}</h2>
        <p class="bio">
          {{ $t('bio') }}
        </p>
        
        <nav class="nav-links">
          <a href="#about">{{ $t('aboutTitle') }}</a>
          <a href="#projects">{{ $t('projectsTitle') }}</a>
        </nav>
      </div>
      
      <div class="social-links">
        <a href="https://github.com/realprodigium" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
      </div>
    </header>

    <main class="main-content">
      <section id="about" class="section">
        <h2 class="mobile-heading">{{ $t('aboutTitle') }}</h2>
        <p>{{ $t('aboutP1') }}</p>
        <p>{{ $t('aboutP2') }}</p>
        <p>{{ $t('aboutP3') }}</p>
      </section>
<!-- 
      <section id="experience" class="section">
        <h2 class="mobile-heading">Experience</h2>
        <div v-if="loading" class="loading">Loading experience...</div>
        <div v-else>
          <GlassCard 
            v-for="exp in experiences" 
            :key="exp.id"
            :title="exp.role"
            :subtitle="exp.period + ' · ' + exp.company"
            :description="exp.description"
          />
          <div v-if="experiences.length === 0" class="empty">No experience data available.</div>
        </div>
      </section> -->

      <section id="projects" class="section">
        <h2 class="mobile-heading">{{ $t('projectsTitle') }}</h2>
        <div>
          <GlassCard 
            v-for="project in projects" 
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :link="project.link"
            :github="project.github_link"
            :tags="getTags(project.technologies)"
          />
          <div v-if="!projects || projects.length === 0" class="empty">No projects data available.</div>
        </div>
      </section>
      
      <footer class="footer">
        <p>{{ $t('footer') }}</p>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.portfolio-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 1024px) {
  .portfolio-layout {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
  }
}

.header-section {
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 1024px) {
  .header-section {
    position: sticky;
    top: 0;
    max-height: 100vh;
    width: 58%;
    padding: 4rem 0;
  }
}

.header-content h1 {
  font-size: 3rem;
  letter-spacing: -3.8px;
  color: var(--text-color);
}

.header-content h2 {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-light);
  margin-bottom: 1rem;
  letter-spacing: -2px;
}

.bio {
  max-width: 90%;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.nav-links {
  display: none;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
}

@media (min-width: 1024px) {
  .nav-links {
    display: flex;
  }
}

.nav-links a {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links a::before {
  content: '';
  display: block;
  width: 30px;
  height: 1px;
  background-color: var(--text-light);
  transition: width 0.3s, background-color 0.3s;
}

.nav-links a:hover,
.nav-links a:active {
  color: var(--text-color);
}

.nav-links a:hover::before,
.nav-links a:active::before {
  width: 50px;
  background-color: var(--text-color);
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-links a {
  color: var(--text-light);
  transition: color 0.3s;
}

.social-links a:hover {
  color: var(--text-color);
}

.main-content {
  padding: 3rem 0;
}

@media (min-width: 1024px) {
  .main-content {
    width: 50%;
    padding: 5rem 0;
  }
}

.section {
  margin-bottom: 6rem;
}

.mobile-heading {
  display: block;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  background: rgba(245, 245, 247, 0.9);
  backdrop-filter: blur(8px);
  padding: 1rem 0;
  z-index: 10;
}

@media (min-width: 1024px) {
  .mobile-heading {
    display: none;
  }
}

.section p {
  margin-bottom: 1rem;
  color: var(--text-light);
  letter-spacing: -0.6px;
}

.footer {
  text-align: center;
  color: var(--text-light);
  font-size: 0.85rem;
  margin-top: 4rem;
  padding-bottom: 2rem;
}

.loading, .empty {
  color: var(--text-light);
  font-style: italic;
}
</style>
