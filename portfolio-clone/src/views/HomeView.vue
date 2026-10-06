<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LeftPanel from '../components/layout/LeftPanel.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import GithubActivity from '../components/GithubActivity.vue'

const { t, locale } = useI18n()

const mouseX = ref(0)
const mouseY = ref(0)
const activeSection = ref('about')
const toastMessage = ref('')
let toastTimeout = null

const showToast = (msg) => {
  toastMessage.value = msg || t('emailCopied')
  if (toastTimeout) clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    toastMessage.value = ''
  }, 2400)
}

// Mouse spotlight tracking
const onMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

// Theme management
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.remove('light')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
}

// Language toggle
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  localStorage.setItem('user-lang', locale.value)
  showToast(locale.value === 'es' ? 'Idioma: Español' : 'Language: English')
}

// Active section observer
let observer = null

const setupSectionObserver = () => {
  const sections = document.querySelectorAll('section[id]')
  if (!sections.length) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0
    }
  )

  sections.forEach((s) => observer.observe(s))
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.add('light')
  } else {
    isDark.value = true
    document.documentElement.classList.remove('light')
  }

  const savedLang = localStorage.getItem('user-lang')
  if (savedLang) {
    locale.value = savedLang
  }

  // Allow DOM to settle before observing
  setTimeout(setupSectionObserver, 150)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  if (observer) observer.disconnect()
  if (toastTimeout) clearTimeout(toastTimeout)
})
</script>

<template>
  <div class="relative bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900 min-h-screen">
    <!-- Cursor Spotlight Background Gradient Layer -->
    <div 
      class="pointer-events-none fixed inset-0 z-30 transition duration-300"
      :style="{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }"
    ></div>

    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <!-- Accessible Skip to Content Link -->
      <a 
        href="#content" 
        class="absolute left-0 top-0 block -translate-x-full rounded bg-teal-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0 focus-visible:text-slate-900 z-50 transition-transform"
      >
        Skip to Content
      </a>

      <!-- 2-Column Split: Fixed Left, Scrollable Right -->
      <div class="lg:flex lg:justify-between lg:gap-4">
        <!-- Left Panel: Name, Title, Tagline, In-page Nav, Socials -->
        <LeftPanel 
          :active-section="activeSection"
          :is-dark="isDark"
          @toggle-theme="toggleTheme"
          @toggle-language="toggleLanguage"
          @copied-email="showToast"
        />

        <!-- Right Column: Editorial Flow -->
        <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
          <!-- About Section -->
          <AboutSection />

          <!-- Experience Section -->
          <ExperienceSection />

          <!-- Selected Projects Section -->
          <ProjectsSection />

          <!-- GitHub Activity Section -->
          <GithubActivity />

          <!-- Editorial Colophon / Footer -->
          <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p class="leading-relaxed">
              {{ t('footerColophon') }}
            </p>
            <p class="mt-2 text-xs text-slate-600">
              {{ t('copyright') }}
            </p>
          </footer>
        </main>
      </div>
    </div>

    <!-- Global Toast Feedback -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-4 opacity-0 scale-95"
    >
      <div 
        v-if="toastMessage" 
        class="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/95 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-100 shadow-xl backdrop-blur-md"
        role="status"
      >
        <span class="size-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(94,234,212,0.8)]"></span>
        <span>{{ toastMessage }}</span>
      </div>
    </Transition>
  </div>
</template>
