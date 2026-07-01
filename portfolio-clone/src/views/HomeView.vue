<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { ArrowDown, ExternalLink, Download } from 'lucide-vue-next'

const { t, tm, locale } = useI18n()

// Track scroll for parallax
const scrollY = ref(0)
const onScroll = () => {
  scrollY.value = window.scrollY
}

// Track mouse position for hover image reveal in projects
const mouseX = ref(0)
const mouseY = ref(0)
const activeHoverImg = ref('')
const hoverImgX = ref(0)
const hoverImgY = ref(0)
let hoverImgVelocityX = 0
let hoverImgVelocityY = 0
let imgFrameId = null

const onMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

// Spring physics loop for the floating project image preview
const updateHoverImgPos = () => {
  const targetX = mouseX.value + 25
  const targetY = mouseY.value + 25
  
  const dx = targetX - hoverImgX.value
  const dy = targetY - hoverImgY.value
  
  hoverImgVelocityX = (hoverImgVelocityX + dx * 0.12) * 0.72
  hoverImgVelocityY = (hoverImgVelocityY + dy * 0.12) * 0.72
  
  hoverImgX.value += hoverImgVelocityX
  hoverImgY.value += hoverImgVelocityY
  
  imgFrameId = requestAnimationFrame(updateHoverImgPos)
}

// Directives & handlers for hover image trigger
const showHoverImage = (img) => {
  activeHoverImg.value = img
}
const hideHoverImage = () => {
  activeHoverImg.value = ''
}

// Unified scroll reveal initialization
let observer = null
const initScrollReveal = () => {
  if (observer) {
    observer.disconnect()
  }
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
      }
    })
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  })
  
  document.querySelectorAll('.blur-reveal, .scroll-reveal').forEach((el) => {
    observer.observe(el)
  })
}

const vMagnetic = {
  mounted(el) {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const pull = 0.35
      el.style.transform = `translate3d(${x * pull}px, ${y * pull}px, 0)`
      el.style.transition = 'transform 0.08s ease-out'
    })
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate3d(0, 0, 0)'
      el.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('mousemove', onMouseMove)
  updateHoverImgPos()
  initScrollReveal()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('mousemove', onMouseMove)
  if (imgFrameId) {
    cancelAnimationFrame(imgFrameId)
  }
  if (observer) {
    observer.disconnect()
  }
})

watch(locale, () => {
  nextTick(() => {
    initScrollReveal()
  })
})
</script>

<template>
  <div class="page-wrapper">
    <div class="morphing-blob blob-one"></div>
    <div class="morphing-blob blob-two"></div>

    <div 
      class="hover-image-follower" 
      :class="{ active: activeHoverImg }"
      :style="{ transform: `translate3d(${hoverImgX}px, ${hoverImgY}px, 0)` }"
    >
      <img v-if="activeHoverImg" :src="activeHoverImg" alt="Project Preview" />
    </div>

    <header class="top-header font-inter">
      <div class="header-col" style="text-align: right;">
        <LanguageSwitcher />
      </div>
    </header>

    <section id="hero" class="hero-section">
      <h1 class="hero-huge-text-top blur-reveal font-inter">
        SOFTWARE<br>ENGINEER
      </h1>

      <div class="hero-bottom-section">
        <div class="hero-bio-container blur-reveal">
          <ArrowDown stroke-width="2" size="48" class="hero-arrow" />
          <p class="hero-bio-text font-inter">{{ t('bio') }}</p>
        </div>
        
        <div class="hero-huge-text-bottom blur-reveal font-inter" :style="{ transform: `translate3d(0, ${scrollY * -0.03}px, 0)` }">
          SEBASTIÁN<br>CARDONA
        </div>
      </div>
    </section>

    <div class="main-content">
      
      <section id="about" class="section about-section">
        <div class="section-header-block">
          <h3 class="section-title blur-reveal font-inter">{{ t('aboutTitle') }}</h3>
        </div>
        
        <div class="about-grid">
          <div class="about-summary-col scroll-reveal">
            <p class="summary-paragraph font-inter">{{ t('aboutP1') }}</p>
            <p class="summary-paragraph font-inter">{{ t('aboutP2') }}</p>
            <p class="summary-paragraph font-inter">{{ t('aboutP3') }}</p>

            <div class="education-block scroll-reveal">
              <h4 class="sub-block-title font-inter">{{ t('educationTitle') }}</h4>
              <p class="education-text font-inter">{{ t('educationText') }}</p>
            </div>
          </div>

          <div class="skills-col scroll-reveal" style="transition-delay: 0.1s;">
            <h4 class="sub-block-title font-inter">{{ t('skillsTitle') }}</h4>
            <div class="skills-grid">
              <div 
                v-for="(catName, catKey) in tm('skillCategories')" 
                :key="catKey" 
                class="skill-category-card"
              >
                <h5 class="skill-cat-title font-inter">{{ catName }}</h5>
                <p class="skill-cat-items font-inter">{{ tm('skills')[catKey] }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section projects-section">
        <div class="section-header-block">
          <h3 class="section-title blur-reveal font-inter">{{ t('projectsTitle') }}</h3>
        </div>

        <div class="projects-list">
          <div 
            v-for="project in tm('projects')" 
            :key="project.id" 
            class="project-row-item scroll-reveal"
            @mouseenter="project.preview ? showHoverImage(project.preview) : null"
            @mouseleave="hideHoverImage"
          >
            <div class="project-row-header">
              <h4 class="proj-title font-inter">{{ project.title }}</h4>
            </div>

            <div class="project-row-body">
              <div class="project-row-body-inner">
                <p class="proj-description font-inter">{{ project.description }}</p>
                
                <ul class="proj-bullet-list font-inter">
                  <li v-for="(bullet, bIdx) in project.bullet_points" :key="bIdx">
                    {{ bullet }}
                  </li>
                </ul>

                <div class="proj-meta-info font-inter">
                  <div class="proj-tech-stack">
                    <strong>Tech:</strong> {{ project.technologies }}
                  </div>
                  <a 
                    v-if="project.github_link" 
                    :href="project.github_link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="proj-github-link magnetic interactive"
                    v-magnetic
                  >
                    {{ t('github') }} <ExternalLink size="14" style="margin-left: 0.25rem;" />
                  </a>
                </div>

                <div v-if="project.preview" class="proj-embed-preview">
                  <img :src="project.preview" :alt="project.title" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact-section">
        <div class="section-header-block">
          <h3 class="section-title blur-reveal font-inter">{{ t('contactTitle') }}</h3>
        </div>

        <div class="contact-content-grid">
          <div class="contact-info-col scroll-reveal">
            <p class="contact-sub-text font-inter">{{ t('contactSub') }}</p>
            
            <div class="huge-email-wrapper">
              <a 
                href="mailto:scarrdona@gmail.com" 
                class="huge-email-link interactive magnetic font-inter"
                v-magnetic
              >
                scarrdona@gmail.com
              </a>
            </div>

            <div class="cv-download-wrapper">
              <a 
                href="/CV_Sebastian_Cardona_Backend_Data_AI.pdf" 
                download="CV_Sebastian_Cardona_Backend_Data_AI.pdf" 
                class="cv-btn interactive magnetic font-inter"
                v-magnetic
              >
                {{ t('downloadCV') }}
                <Download size="18" stroke-width="2.5" style="margin-left: 0.5rem;" />
              </a>
            </div>
          </div>

          <div class="contact-socials-col scroll-reveal" style="transition-delay: 0.1s;">
            <div class="social-links-list font-inter">
              <div class="social-item">
                <span class="social-label">{{ t('phoneLabel') }}</span>
                <a href="tel:+573152052580" class="social-link interactive">+57 315 205 2580</a>
              </div>
              <div class="social-item">
                <span class="social-label">{{ t('linkedinLabel') }}</span>
                <a href="https://linkedin.com/in/franchisium" target="_blank" rel="noopener noreferrer" class="social-link interactive">linkedin.com/in/franchisium <ExternalLink size="14" style="display:inline; margin-left: 0.1rem; margin-bottom: 0.1rem;" /></a>
              </div>
              <div class="social-item">
                <span class="social-label">{{ t('githubLabel') }}</span>
                <a href="https://github.com/realprodigium" target="_blank" rel="noopener noreferrer" class="social-link interactive">github.com/realprodigium <ExternalLink size="14" style="display:inline; margin-left: 0.1rem; margin-bottom: 0.1rem;" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

    <!-- Page Footer -->
    <footer class="footer scroll-reveal">
      <div class="footer-inner font-inter">
        <p>© 2026 {{ t('footer') }}</p>
        <p style="opacity: 0.5; font-size: 0.65rem;">Colombia</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  min-height: 100vh;
  z-index: 1;
  background-color: var(--bg-color);
}

.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}

.top-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 1.9rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-color);
  z-index: 1000;
}

.header-col {
  padding: 0 0.5rem;
}

.blob-one {
  top: 15%;
  left: 5%;
  width: 500px;
  height: 500px;
}

.blob-two {
  top: 60%;
  right: 5%;
  width: 600px;
  height: 600px;
}

.hero-section {
  padding: 5.7rem 1.9rem 1.9rem 1.9rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 2;
}

.hero-huge-text-top {
  font-size: clamp(3.5rem, 9vw, 8rem);
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.hero-mid-section {
  width: 100%;
  max-width: 480px;
  margin-bottom: 1rem;
  padding-left: 2rem; 
}

.hero-image-container {
  width: 100%;
}

.hero-profile-pic {
  width: 100%;
  height: auto;
  display: block;
}

.hero-bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  width: 100%;
}

.hero-bio-container {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  max-width: 370px;
}

.hero-arrow {
  flex-shrink: 0;
}

.hero-bio-text {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.5px;
}

.hero-huge-text-bottom {
  text-align: right;
  font-size: clamp(3.5rem, 9vw, 8rem);
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--text-color);
}

/* Main Content elements */
.main-content {
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.8rem; /* Reduced gap by 5% */
  position: relative;
  z-index: 2;
}

.section {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.4rem; /* Reduced gap by 5% */
  padding-top: 2.85rem; /* Reduced padding by 5% */
}

.section-header-block {
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--bg-color);
  padding: 1rem 0;
}

.section-title {
  font-size: 45px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-transform: uppercase;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.85rem; /* Reduced gap by 5% */
}

.summary-paragraph {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: 1rem; /* Reduced margin */
}

.sub-block-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  margin-top: 2rem;
  color: var(--text-color);
}

.education-text {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.skill-category-card {
  padding: 1rem; /* Reduced padding */
  background-color: transparent; /* Remove background card look */
}

.skill-cat-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-color);
  margin-bottom: 0.3rem;
}

.skill-cat-items {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.5;
}

/* Projects Layout */
.projects-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.9rem;
}

.project-row-item {
  padding: 1rem 0; /* Reduced padding */
  position: relative;
}

.project-row-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.proj-title {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.proj-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-light);
  max-width: 800px;
  margin-bottom: 1rem;
}

.proj-bullet-list {
  list-style-type: square;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  max-width: 800px;
}

.proj-meta-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.proj-tech-stack {
  font-size: 0.8rem;
  color: var(--text-light);
}

.proj-github-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-color);
}

.proj-embed-preview {
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
}

.proj-embed-preview img {
  width: 100%;
  height: auto;
  display: block;
}

/* Hover project preview card */
.hover-image-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 200px;
  pointer-events: none;
  z-index: 999;
  border-radius: 4px;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.85);
  transform-origin: center center;
  transition: opacity 0.3s var(--spring-easing), transform 0.3s var(--spring-bounce);
  will-change: transform;
}

.hover-image-follower.active {
  opacity: 1;
  transform: scale(1);
}

.hover-image-follower img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contact layout */
.contact-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.9rem;
}

.contact-sub-text {
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.huge-email-wrapper {
  margin-bottom: 2rem;
}

.huge-email-link {
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text-color);
  display: inline-block;
  transition: transform 0.3s var(--spring-bounce);
  will-change: transform;
}

.huge-email-link:hover {
  transform: skewX(-4deg) scale(1.02);
}

.cv-download-wrapper {
  display: inline-block;
}

.cv-btn {
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-color);
  background: transparent;
  padding: 0;
  border: none;
  transition: opacity 0.3s ease;
}

.cv-btn:hover {
  opacity: 0.6;
}

.social-links-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.social-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.social-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-light);
}

.social-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
}

/* Footer layout */
.footer {
  padding: 1.9rem 0;
  margin-top: 3.8rem;
  position: relative;
  z-index: 2;
}

.footer-inner {
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  color: var(--text-light);
  font-weight: 500;
}

/* Responsive queries */
@media (max-width: 991px) {
  .top-header {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .header-col:nth-child(3), .header-col:nth-child(4) {
    display: none;
  }
  .hero-huge-text-top, .hero-huge-text-bottom {
    font-size: clamp(3rem, 12vw, 6rem);
  }
  .about-grid, .contact-content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .top-header {
    grid-template-columns: 1fr;
  }
  .header-col:nth-child(2) {
    display: none;
  }
  .hero-section {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
  .hero-bottom-section {
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
  }
  .hero-huge-text-bottom {
    text-align: right;
  }
  .main-content {
    padding: 0 1.5rem;
  }
  .hover-image-follower {
    display: none;
  }
}

@media (max-width: 640px) {
  .top-header {
    justify-content: flex-end;
    padding: 1.1rem 1.25rem;
  }

  .hero-section {
    padding: 4.8rem 1.1rem 1.25rem;
  }

  .hero-huge-text-top {
    font-size: clamp(2.5rem, 11vw, 3.4rem);
    text-align: left;
    width: 100%;
  }

  .hero-huge-text-bottom {
    font-size: clamp(2.5rem, 11vw, 3.4rem);
    text-align: right;
    width: 100%;
  }

  .hero-bottom-section {
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
  }

  .hero-bio-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
    max-width: 100%;
  }

  .hero-arrow {
    display: none;
  }

  .main-content {
    padding: 0 1rem;
    gap: 2.2rem;
  }

  .section {
    padding-top: 1.5rem;
    gap: 1rem;
  }

  .section-title {
    font-size: clamp(1.7rem, 5vw, 2.1rem);
  }

  .about-grid,
  .contact-content-grid {
    gap: 1.25rem;
  }

  .summary-paragraph {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 0.8rem;
  }

  .education-text,
  .proj-description,
  .contact-sub-text {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .sub-block-title {
    margin-top: 1.2rem;
    font-size: 0.7rem;
  }

  .proj-title {
    font-size: 1.2rem;
  }

  .proj-bullet-list {
    font-size: 0.85rem;
    gap: 0.3rem;
  }

  .skills-grid {
    width: 100%;
  }

  .huge-email-link {
    font-size: clamp(1.1rem, 4.5vw, 1.45rem);
  }

  .cv-btn {
    width: 100%;
    justify-content: flex-start;
  }

  .footer-inner {
    flex-direction: column;
    gap: 0.4rem;
    text-align: left;
    align-items: flex-start;
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 4.3rem 0.9rem 1rem;
  }

  .hero-huge-text-top,
  .hero-huge-text-bottom {
    font-size: clamp(2.2rem, 10vw, 2.8rem);
  }

  .main-content {
    padding: 0 0.8rem;
  }

  .section-title {
    font-size: 1.55rem;
  }

  .proj-title {
    font-size: 1.05rem;
  }

  .project-row-item {
    padding: 0.8rem 0;
  }
}
</style>