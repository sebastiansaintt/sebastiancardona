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
  // Offset the image from the cursor slightly
  const targetX = mouseX.value + 25
  const targetY = mouseY.value + 25
  
  const dx = targetX - hoverImgX.value
  const dy = targetY - hoverImgY.value
  
  // Spring math: acceleration + friction damping
  hoverImgVelocityX = (hoverImgVelocityX + dx * 0.12) * 0.72
  hoverImgVelocityY = (hoverImgVelocityY + dy * 0.12) * 0.72
  
  hoverImgX.value += hoverImgVelocityX
  hoverImgY.value += hoverImgVelocityY
  
  imgFrameId = requestAnimationFrame(updateHoverImgPos)
}

// Scroll to section smoothly
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
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

// Vue directive to handle custom magnetic button effect
const vMagnetic = {
  mounted(el) {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      // Pull element 35% toward cursor
      const pull = 0.35
      el.style.transform = `translate3d(${x * pull}px, ${y * pull}px, 0)`
      el.style.transition = 'transform 0.08s ease-out'
    })
    
    el.addEventListener('mouseleave', () => {
      // Spring back to center
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

// Re-observe scroll reveals when layout updates due to language toggle
watch(locale, () => {
  nextTick(() => {
    initScrollReveal()
  })
})
</script>

<template>
  <div class="page-wrapper">
    <!-- Grid Overlay (Editorial Guide Lines) -->
    <div class="grid-overlay">
      <div class="grid-line"></div>
      <div class="grid-line"></div>
      <div class="grid-line"></div>
      <div class="grid-line"></div>
    </div>

    <!-- Fluid Morphing Decorative Blobs -->
    <div class="morphing-blob blob-one"></div>
    <div class="morphing-blob blob-two"></div>

    <!-- Floating Project Image Follower (Desktop only) -->
    <div 
      class="hover-image-follower" 
      :class="{ active: activeHoverImg }"
      :style="{ transform: `translate3d(${hoverImgX}px, ${hoverImgY}px, 0)` }"
    >
      <img v-if="activeHoverImg" :src="activeHoverImg" alt="Project Preview" />
    </div>

    <!-- Header Navigation -->
    <nav class="navbar">
      <div class="nav-left">
        <a href="#" class="nav-logo interactive" @click.prevent="scrollTo('hero')">
          SEBASTIÁN CARDONA
        </a>
      </div>
      <div class="nav-center">
        <div class="nav-menu">
          <a @click.prevent="scrollTo('about')" href="#about" class="menu-item interactive">{{ t('aboutTitle') }}</a>
          <a @click.prevent="scrollTo('projects')" href="#projects" class="menu-item interactive">{{ t('projectsTitle') }}</a>
          <a @click.prevent="scrollTo('contact')" href="#contact" class="menu-item interactive">{{ t('contactTitle') }}</a>
        </div>
      </div>
      <div class="nav-right">
        <LanguageSwitcher />
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="hero-container">
        
        <!-- Left Side: Roles & Badges -->
        <div class="hero-text-side">
          <div class="status-badge blur-reveal">
            <span class="pulse-dot"></span>
            <span class="status-text font-inter">{{ t('role') }}</span>
          </div>

          <h1 class="hero-heading blur-reveal" style="transition-delay: 0.1s;">
            <span class="title-line">SOFTWARE</span>
            <span class="title-line font-serif italic">ENGINEER</span>
          </h1>

          <p class="hero-bio blur-reveal font-inter" style="transition-delay: 0.2s;">
            {{ t('bio') }}
          </p>

          <div class="hero-scroll-btn blur-reveal" style="transition-delay: 0.3s;">
            <button 
              @click="scrollTo('about')" 
              class="scroll-arrow-btn magnetic interactive"
              aria-label="Scroll to About"
              v-magnetic
            >
              <ArrowDown stroke-width="2.5" size="20" />
            </button>
            <span class="scroll-btn-text font-inter">{{ t('scrollDown') }}</span>
          </div>
        </div>

        <!-- Right Side: Parallax Developer Frame -->
        <div class="hero-image-side">
          <div 
            class="image-frame-wrapper scroll-reveal"
            :style="{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }"
          >
            <img src="/IMG_0247.jpeg" alt="Sebastián Cardona portrait" class="hero-profile-pic" />
            <div class="frame-caption font-inter">
              <span>[ PORTFOLIO / 2026 ]</span>
              <span>{{ t('locationText') }}</span>
            </div>
          </div>
          
          <div 
            class="hero-bottom-name blur-reveal" 
            style="transition-delay: 0.15s;"
            :style="{ transform: `translate3d(0, ${scrollY * -0.03}px, 0)` }"
          >
            <div class="subtitle-role font-inter">{{ t('subtitleRole') }}</div>
            <div class="large-name">SEBASTIÁN CARDONA</div>
          </div>
        </div>

      </div>
    </section>

    <!-- Main Sections Wrapper -->
    <div class="main-content">
      
      <!-- About Section -->
      <section id="about" class="section about-section">
        <h2 class="section-num blur-reveal font-inter">01/</h2>
        <div class="section-header-block">
          <h3 class="section-title blur-reveal">{{ t('aboutTitle') }}</h3>
        </div>
        
        <div class="about-grid">
          <!-- Text Biography -->
          <div class="about-summary-col scroll-reveal">
            <p class="summary-paragraph font-inter">{{ t('aboutP1') }}</p>
            <p class="summary-paragraph font-inter">{{ t('aboutP2') }}</p>
            <p class="summary-paragraph font-inter">{{ t('aboutP3') }}</p>

            <div class="education-block scroll-reveal">
              <h4 class="sub-block-title font-inter">{{ t('educationTitle') }}</h4>
              <p class="education-text font-inter">{{ t('educationText') }}</p>
            </div>
          </div>

          <!-- Professional Skills Matrix -->
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

      <!-- Projects Section -->
      <section id="projects" class="section projects-section">
        <h2 class="section-num blur-reveal font-inter">02/</h2>
        <div class="section-header-block">
          <h3 class="section-title blur-reveal">{{ t('projectsTitle') }}</h3>
        </div>

        <div class="projects-list">
          <div 
            v-for="project in tm('projects')" 
            :key="project.id" 
            class="project-row-item scroll-reveal"
            @mouseenter="project.preview ? showHoverImage(project.preview) : null"
            @mouseleave="hideHoverImage"
          >
            <!-- Project Header -->
            <div class="project-row-header">
              <span class="proj-num font-inter">{{ project.num }}</span>
              <h4 class="proj-title">{{ project.title }}</h4>
            </div>

            <!-- Project Body -->
            <div class="project-row-body">
              <div class="project-row-body-inner">
                <p class="proj-description font-inter">{{ project.description }}</p>
                
                <ul class="proj-bullet-list font-inter">
                  <li 
                    v-for="(bullet, bIdx) in project.bullet_points" 
                    :key="bIdx"
                  >
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

                <!-- In-place visual fallback for mobile or when not hovering -->
                <div v-if="project.preview" class="proj-embed-preview">
                  <img :src="project.preview" :alt="project.title" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section contact-section">
        <h2 class="section-num blur-reveal font-inter">03/</h2>
        <div class="section-header-block">
          <h3 class="section-title blur-reveal">{{ t('contactTitle') }}</h3>
        </div>

        <div class="contact-content-grid">
          <!-- Big Email Link and PDF Button -->
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

          <!-- Social Handles and Phone -->
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
        <p>© 2026 Sebastián Cardona. {{ t('footer') }}</p>
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

/* Base typography enforcement */
.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}

/* Navbar styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 4rem;
  border-bottom: 1px solid var(--border-color);
  background-color: rgba(236, 235, 233, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.nav-logo {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  letter-spacing: -0.04em;
  font-size: 0.95rem;
  color: var(--text-color);
}

.nav-menu {
  display: flex;
  gap: 2.5rem;
}

.menu-item {
  font-size: 0.72rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-light);
}

.menu-item:hover {
  color: var(--text-color);
}

/* Morphing decorative blobs settings */
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

/* Hero layout */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 4rem 4rem 4rem;
  position: relative;
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  z-index: 2;
}

.hero-text-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--border-color-dark);
  border-radius: 30px;
  padding: 0.4rem 0.9rem;
  margin-bottom: 2rem;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: var(--text-color);
  border-radius: 50%;
  animation: pulseKey 2s infinite;
}

@keyframes pulseKey {
  0% { transform: scale(0.85); opacity: 0.5; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(0.85); opacity: 0.5; }
}

.status-text {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero-heading {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(3.2rem, 6.2vw, 6.2rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 2.2rem;
  color: var(--text-color);
}

.title-line {
  display: block;
}

.font-serif {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400;
}

.hero-bio {
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 520px;
  margin-bottom: 3.5rem;
  font-weight: 400;
  line-height: 1.7;
}

.hero-scroll-btn {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.scroll-arrow-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid var(--border-color-dark);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  transition: background 0.4s var(--spring-easing), color 0.4s var(--spring-easing);
  will-change: transform;
}

.scroll-arrow-btn:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.scroll-btn-text {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.7;
}

/* Hero Profile image frame side */
.hero-image-side {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.image-frame-wrapper {
  width: 100%;
  max-width: 380px;
  border: 1px solid var(--border-color-dark);
  padding: 1.25rem;
  background-color: var(--bg-color);
  border-radius: 6px;
  box-shadow: var(--glass-shadow);
  transition: transform 0.1s ease-out;
  will-change: transform;
}

.hero-profile-pic {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 2px;
}

.frame-caption {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-light);
}

.hero-bottom-name {
  margin-top: 2rem;
  text-align: right;
  width: 100%;
  max-width: 380px;
  transition: transform 0.1s ease-out;
  will-change: transform;
}

.subtitle-role {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 0.3rem;
}

.large-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1;
}

/* Main Content elements */
.main-content {
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 12rem;
  position: relative;
  z-index: 2;
}

.section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 4rem;
  border-top: 1px solid var(--border-color);
  padding-top: 6rem;
}

.section-num {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-light);
  opacity: 0.5;
}

.section-header-block {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1.5rem;
  margin-bottom: 4rem;
  grid-column: 2;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.4rem); /* Reduced size per feedback */
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-transform: uppercase;
}

/* About Layout */
.about-grid {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6rem;
}

.summary-paragraph {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 1.75rem;
}

.sub-block-title {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.8rem;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  color: var(--text-color);
}

.education-text {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.7;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.skill-category-card {
  padding: 1.25rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.25);
  transition: border-color 0.4s var(--spring-easing), background-color 0.4s var(--spring-easing);
}

.skill-category-card:hover {
  border-color: rgba(17, 17, 17, 0.4);
  background-color: rgba(255, 255, 255, 0.6);
}

.skill-cat-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.skill-cat-items {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.6;
}

/* Projects Layout */
.projects-section {
  /* section grid rules apply */
}

.projects-list {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.project-row-item {
  border-bottom: 1px solid var(--border-color);
  padding: 3rem 0;
  position: relative;
}

.project-row-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.proj-num {
  font-variant-numeric: tabular-nums;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-light);
  min-width: 2rem;
}

.proj-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.3rem, 2.6vw, 1.8rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  flex: 1;
  text-transform: uppercase;
}

.project-row-body-inner {
  overflow: hidden;
}

.proj-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-light);
  max-width: 800px;
  margin-bottom: 1.5rem;
}

.proj-bullet-list {
  list-style-type: square;
  margin-left: 1.25rem;
  margin-bottom: 2rem;
  color: var(--text-light);
  font-size: 0.92rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 800px;
}

.proj-meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
  margin-bottom: 1rem;
}

.proj-tech-stack {
  font-size: 0.85rem;
  color: var(--text-light);
}

.proj-github-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-color);
  border-bottom: 1.5px solid var(--text-color);
  padding-bottom: 0.2rem;
  will-change: transform;
}

.proj-embed-preview {
  width: 100%;
  max-width: 800px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-top: 2rem;
  margin-bottom: 1rem;
  box-shadow: var(--glass-shadow);
}

.proj-embed-preview img {
  width: 100%;
  height: auto;
  display: block;
  filter: contrast(102%) brightness(98%);
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
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(17, 17, 17, 0.1);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.85);
  transform-origin: center center;
  transition: opacity 0.4s var(--spring-easing), transform 0.4s var(--spring-bounce);
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
.contact-section {
  /* section grid rules apply */
}

.contact-content-grid {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 4rem;
}

.contact-sub-text {
  font-size: 1.15rem;
  color: var(--text-light);
  margin-bottom: 3rem;
  line-height: 1.7;
}

.huge-email-wrapper {
  margin-bottom: 4rem;
}

.huge-email-link {
  font-size: clamp(1.4rem, 3.5vw, 2.4rem); /* Reduced size per feedback */
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-color);
  display: inline-block;
  border-bottom: 2px solid var(--text-color);
  padding-bottom: 0.5rem;
  transition: transform 0.3s var(--spring-bounce);
  will-change: transform;
}

.huge-email-link:hover {
  transform: skewX(-6deg) scale(1.02);
}

.cv-download-wrapper {
  display: inline-block;
}

.cv-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  border: 1.5px solid var(--text-color);
  background: transparent;
  color: var(--text-color);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: background-color 0.4s var(--spring-easing), color 0.4s var(--spring-easing);
  will-change: transform;
}

.cv-btn:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.social-links-list {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  border-left: 1px solid var(--border-color);
  padding-left: 3.5rem;
}

.social-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.social-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-light);
  opacity: 0.6;
}

.social-link {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-color);
  border-bottom: 1px solid transparent;
  width: fit-content;
  transition: border-color 0.3s;
}

.social-link:hover {
  border-color: var(--text-color);
}

/* Footer layout */
.footer {
  border-top: 1px solid var(--border-color);
  padding: 4rem 0;
  margin-top: 8rem;
  position: relative;
  z-index: 2;
}

.footer-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  color: var(--text-light);
  font-weight: 600;
}

/* Responsive queries */
@media (max-width: 991px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero-text-side {
    order: 2;
  }
  .hero-image-side {
    order: 1;
    align-items: center;
  }
  .hero-bottom-name {
    text-align: center;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .contact-content-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .social-links-list {
    border-left: none;
    padding-left: 0;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 1.5rem;
  }
  .nav-menu {
    display: none; /* Hide middle menu on mobile */
  }
  .hero-section {
    padding: 6rem 1.5rem 3rem 1.5rem;
  }
  .main-content {
    padding: 0 1.5rem;
    gap: 7rem;
  }
  .section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 4rem;
  }
  .section-num {
    display: none;
  }
  .section-header-block {
    grid-column: 1;
    margin-bottom: 2.5rem;
  }
  .about-grid {
    grid-column: 1;
  }
  .projects-list {
    grid-column: 1;
  }
  .hover-image-follower {
    display: none; /* Disable mouse follower image on touch screens */
  }
  .contact-content-grid {
    grid-column: 1;
  }
  .huge-email-link {
    font-size: 1.4rem;
  }
  .footer-inner {
    padding: 0 1.5rem;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>