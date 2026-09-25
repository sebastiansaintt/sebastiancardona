<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import veyraVideo from '../assets/veyra.mp4'

const route = useRoute()
const router = useRouter()
const { t, tm, locale } = useI18n()

// Video registry mapping slugs and IDs to media assets
const videoRegistry = {
  'car-inspection': veyraVideo,
  'car_checking': veyraVideo,
  '2': veyraVideo
}

// Find current project by id or slug
const project = computed(() => {
  const param = route.params.id
  const projects = tm('projects') || []
  return projects.find(p => String(p.id) === String(param) || p.slug === String(param)) || projects[1] || projects[0]
})

// Current video source
const currentVideoSrc = computed(() => {
  if (!project.value) return null
  return videoRegistry[project.value.slug] || videoRegistry[String(project.value.id)] || null
})

// Video element reference & playback state
const videoRef = ref(null)
const isPlaying = ref(false)
const isMuted = ref(false)
const playbackSpeed = ref(1)
const toastMessage = ref('')
let toastTimeout = null

const showToast = (msg) => {
  toastMessage.value = msg
  if (toastTimeout) clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    toastMessage.value = ''
  }, 2500)
}

// Jump video to chapter seconds
const jumpToTime = (seconds) => {
  if (!videoRef.value) return
  videoRef.value.currentTime = seconds
  videoRef.value.play().then(() => {
    isPlaying.value = true
  }).catch(() => {})
  showToast(`${t('jumpToChapter')}: ${formatTime(seconds)}`)
}

const formatTime = (sec) => {
  const mins = Math.floor(sec / 60)
  const secs = Math.floor(sec % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const togglePlay = () => {
  if (!videoRef.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}

const toggleFullscreen = () => {
  if (!videoRef.value) return
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    videoRef.value.requestFullscreen?.() || videoRef.value.webkitRequestFullscreen?.()
  }
}

const setSpeed = (spd) => {
  playbackSpeed.value = spd
  if (videoRef.value) {
    videoRef.value.playbackRate = spd
  }
  showToast(`Velocidad: ${spd}x`)
}

// Copy URL
const copyShareLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    showToast(t('demoLinkCopied'))
  } catch (err) {
    showToast(window.location.href)
  }
}

// Language Switcher Logic
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  localStorage.setItem('user-lang', locale.value)
}

// Theme Switcher Logic
const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Keyboard shortcuts for video player
const handleKeydown = (e) => {
  // Only trigger if not typing in an input
  if (['input', 'textarea'].includes(document.activeElement?.tagName?.toLowerCase())) return

  if (e.code === 'Space' && videoRef.value) {
    e.preventDefault()
    togglePlay()
  } else if (e.code === 'KeyF' && videoRef.value) {
    toggleFullscreen()
  } else if (e.code === 'KeyM' && videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted
    isMuted.value = videoRef.value.muted
  }
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  window.addEventListener('keydown', handleKeydown)

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || document.documentElement.classList.contains('dark')) {
    isDark.value = true
  }

  const savedLang = localStorage.getItem('user-lang')
  if (savedLang) {
    locale.value = savedLang
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (toastTimeout) clearTimeout(toastTimeout)
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
    <!-- Sticky Glass Top Navigation Bar -->
    <header class="sticky top-0 z-50 w-full glass-header" role="banner">
      <div class="container mx-auto flex h-13 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <!-- Back to Home Link with macOS styled breadcrumb -->
        <router-link 
          to="/" 
          class="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-secondary transition-colors hover:text-foreground"
          :title="t('backToPortfolio')"
        >
          <div class="flex items-center justify-center size-7 rounded-lg border border-border/80 bg-card/60 transition-transform group-hover:-translate-x-0.5 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-3.5" fill="currentColor">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"/>
            </svg>
          </div>
          <span>{{ t('backToPortfolio') }}</span>
        </router-link>

        <!-- Center Mini Breadcrumb / Project Identifier -->
        <div class="hidden md:flex items-center gap-2 font-mono text-xs text-secondary/80">
          <span class="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          <span class="truncate max-w-[240px] font-medium text-foreground">{{ project?.title }}</span>
          <span class="opacity-50">/</span>
          <span class="text-emerald-500 font-semibold uppercase tracking-wider text-[10px]">Demo</span>
        </div>

        <!-- Right Controls: Language & Theme Switcher -->
        <div class="flex items-center gap-2 sm:gap-2.5">
          <!-- Share Button -->
          <button 
            type="button" 
            class="inline-flex size-8 items-center justify-center rounded-lg border border-border/70 text-secondary transition-colors hover:bg-muted hover:text-foreground"
            @click="copyShareLink"
            :title="t('shareDemo')"
            aria-label="Share demo link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
              <path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM90.34,69.66,120,40V152a8,8,0,0,0,16,0V40l29.66,29.66a8,8,0,0,0,11.32-11.32l-43.32-43.32a8.5,8.5,0,0,0-11.32,0L79,58.34A8,8,0,0,0,90.34,69.66Z"/>
            </svg>
          </button>

          <!-- Language Switcher Pill Button -->
          <button 
            type="button" 
            class="inline-flex h-8 items-center justify-center rounded-lg border border-border/70 bg-card/70 px-2 font-mono text-xs font-semibold text-secondary transition-colors hover:bg-muted hover:text-foreground"
            @click="toggleLanguage"
            :title="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
          >
            {{ locale.toUpperCase() }}
          </button>

          <!-- Theme Toggle (Dark / Light) -->
          <button 
            type="button" 
            class="inline-flex size-8 items-center justify-center rounded-lg border border-border/70 text-secondary transition-colors hover:bg-muted hover:text-foreground"
            @click="toggleTheme"
            aria-label="Toggle dark/light mode"
          >
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
              <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-21.12,104.75,104.75,0,0,0,37-52.92A8,8,0,0,0,233.54,142.23Z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
              <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66a8,8,0,0,0,11.32-11.32l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM197.66,58.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32Zm-11.32,128a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM136,216a8,8,0,0,0-16,0v24a8,8,0,0,0,16,0Zm-96-88a8,8,0,0,0-8-8H8a8,8,0,0,0,0,16H32A8,8,0,0,0,40,128Zm208-8H224a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Container -->
    <main class="flex-1 w-full container mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      
      <!-- Project Hero Header -->
      <section class="animate-in-up-on-view space-y-4">
        <!-- Top Status Tags -->
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs font-semibold text-emerald-500 uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center gap-1.5">
              <span class="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {{ project?.hasDemo ? t('demoAvailable') : 'System Architecture' }}
            </span>
            <span class="font-mono text-xs text-secondary tracking-wider">
              {{ project?.num }}
            </span>
          </div>

          <!-- GitHub repo action button -->
          <a 
            v-if="project?.github_link" 
            :href="project.github_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-card/80 px-3 py-1.5 text-xs font-mono text-secondary transition-all hover:bg-muted hover:text-foreground shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-3.5">
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"/>
            </svg>
            <span>{{ t('viewGithub') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-3" fill="currentColor">
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"/>
            </svg>
          </a>
        </div>

        <div>
          <span class="font-mono text-xs font-semibold text-secondary uppercase tracking-widest block mb-1">
            {{ project?.badge }}
          </span>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            {{ project?.title }}
          </h1>
          <p v-if="project?.subtitle" class="mt-1 font-mono text-xs sm:text-sm text-secondary">
            {{ project.subtitle }}
          </p>
        </div>

        <p class="text-sm sm:text-base leading-relaxed text-secondary max-w-3xl">
          {{ project?.demoDescription || project?.description }}
        </p>
      </section>

      <!-- VIDEO PLAYER SECTION (macOS Window Style) -->
      <section v-if="currentVideoSrc" class="animate-in-up-on-view space-y-4">
        <div class="overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-md">
          <!-- macOS Window Titlebar -->
          <div class="flex items-center justify-between border-b border-border/70 bg-muted/40 px-4 py-2.5 select-none">
            <div class="flex items-center gap-2">
              <span class="size-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 shadow-sm"></span>
              <span class="size-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 shadow-sm"></span>
              <span class="size-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 shadow-sm"></span>
            </div>

            <div class="font-mono text-[11px] sm:text-xs text-secondary truncate max-w-xs sm:max-w-md font-medium flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-3.5 text-emerald-500">
                <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200Z"/>
              </svg>
              <span>{{ project?.slug || 'demo' }}-walkthrough.mp4</span>
            </div>

            <!-- Video Player Controls / Speed Quick Selector -->
            <div class="flex items-center gap-1.5 font-mono text-[11px]">
              <button 
                v-for="spd in [1, 1.25, 1.5]" 
                :key="spd" 
                type="button" 
                class="px-1.5 py-0.5 rounded transition-colors"
                :class="playbackSpeed === spd ? 'bg-primary text-primary-foreground font-semibold' : 'text-secondary hover:text-foreground hover:bg-muted'"
                @click="setSpeed(spd)"
              >
                {{ spd }}x
              </button>
            </div>
          </div>

          <!-- Video Element Wrapper -->
          <div class="relative aspect-video w-full bg-black/95 flex items-center justify-center overflow-hidden">
            <video 
              ref="videoRef"
              :src="currentVideoSrc"
              :poster="project?.preview"
              class="size-full object-contain"
              controls
              playsinline
              preload="metadata"
              @play="isPlaying = true"
              @pause="isPlaying = false"
            >
              Your browser does not support HTML5 video streaming.
            </video>
          </div>

          <!-- Bottom Player Subbar -->
          <div class="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 bg-muted/20 px-4 py-2 text-xs font-mono text-secondary">
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1">
                <span class="size-1.5 rounded-full bg-emerald-500"></span>
                <span>1080p FHD</span>
              </span>
              <span>•</span>
              <span>MP4 H.264 / AAC</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[11px] text-secondary/80">
                <kbd class="px-1 py-0.5 rounded border border-border/70 bg-card text-[10px]">Space</kbd> Play/Pause
                <kbd class="ml-1.5 px-1 py-0.5 rounded border border-border/70 bg-card text-[10px]">F</kbd> Fullscreen
              </span>
            </div>
          </div>
        </div>

        <!-- Interactive Chapters / Walkthrough Timeline -->
        <div v-if="project?.chapters?.length" class="space-y-3 pt-2">
          <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-4 text-emerald-500" fill="currentColor">
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM152,88a8,8,0,0,1,8,8v64a8,8,0,0,1-16,0V96A8,8,0,0,1,152,88Zm-48,0a8,8,0,0,1,8,8v64a8,8,0,0,1-16,0V96A8,8,0,0,1,104,88Z"/>
            </svg>
            <span>{{ t('interactiveChapters') }}</span>
          </h3>

          <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <button 
              v-for="(chapter, idx) in project.chapters" 
              :key="idx"
              type="button"
              class="group flex flex-col text-left p-3 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-emerald-500/50 transition-all shadow-sm"
              @click="jumpToTime(chapter.seconds)"
            >
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="font-mono text-xs font-bold text-emerald-500 flex items-center gap-1 group-hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-3">
                    <path d="M240,128a15.79,15.79,0,0,1-7.78,13.68l-136,80A15.77,15.77,0,0,1,72,208V48a15.77,15.77,0,0,1,24.22-13.68l136,80A15.79,15.79,0,0,1,240,128Z"/>
                  </svg>
                  <span>{{ chapter.time }}</span>
                </span>
                <span class="font-mono text-[10px] text-secondary">
                  0{{ idx + 1 }}
                </span>
              </div>
              <h4 class="text-xs font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                {{ chapter.title }}
              </h4>
              <p class="mt-1 text-[11px] leading-relaxed text-secondary line-clamp-2">
                {{ chapter.desc }}
              </p>
            </button>
          </div>
        </div>
      </section>

      <!-- FALLBACK FOR PROJECTS WITHOUT A VIDEO YET -->
      <section v-else class="animate-in-up-on-view overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-8 text-center space-y-4 backdrop-blur-sm">
        <div class="mx-auto flex size-14 items-center justify-center rounded-2xl border border-border/80 bg-muted/60 text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-7">
            <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z"/>
          </svg>
        </div>
        <div class="space-y-1">
          <h3 class="text-lg font-bold text-foreground">{{ t('demoComingSoonTitle') }}</h3>
          <p class="text-xs sm:text-sm text-secondary max-w-lg mx-auto leading-relaxed">
            {{ t('demoComingSoonDesc') }}
          </p>
        </div>
        <div class="flex items-center justify-center gap-3 pt-2">
          <router-link 
            to="/projects/2" 
            class="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            <span>Ver Demo de Car Inspection</span>
            <span>→</span>
          </router-link>
        </div>
      </section>

      <!-- Technical Deep-Dive Cards (Architecture & Technologies) -->
      <section class="grid gap-6 md:grid-cols-2 animate-in-up-on-view">
        <!-- Architecture Principles / Bullet Points -->
        <div class="flex flex-col rounded-2xl border border-border/80 bg-card/70 p-5 backdrop-blur-sm shadow-sm">
          <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-4 text-emerald-500" fill="currentColor">
              <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"/>
            </svg>
            <span>{{ t('systemCapabilities') }}</span>
          </h3>

          <ul class="space-y-2.5 text-xs sm:text-sm text-secondary leading-relaxed flex-1">
            <li 
              v-for="(bullet, bIdx) in project?.bullet_points" 
              :key="bIdx" 
              class="flex items-start gap-2.5"
            >
              <span class="mt-1 size-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </div>

        <!-- Tech Stack Tags & Environment -->
        <div class="flex flex-col rounded-2xl border border-border/80 bg-card/70 p-5 backdrop-blur-sm shadow-sm justify-between">
          <div>
            <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-4 text-emerald-500" fill="currentColor">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.43a16,16,0,0,1,21.66,0l80,75.43A16,16,0,0,1,224,115.55Z"/>
              </svg>
              <span>{{ t('techStackHeading') }}</span>
            </h3>

            <div class="flex flex-wrap gap-2 pt-1">
              <span 
                v-for="(tech, tIdx) in project?.technologies" 
                :key="tIdx"
                class="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground font-medium shadow-xs"
              >
                <span class="size-1.5 rounded-full bg-emerald-500"></span>
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
            <a 
              v-if="project?.github_link" 
              :href="project.github_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-xs font-mono font-medium text-secondary hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>{{ t('openGithub') }}</span>
              <span>↗</span>
            </a>
            <router-link 
              to="/" 
              class="text-xs font-mono font-medium text-emerald-500 hover:underline inline-flex items-center gap-1"
            >
              <span>{{ t('backToPortfolio') }}</span>
              <span>←</span>
            </router-link>
          </div>
        </div>
      </section>

      <!-- Other Projects Switcher -->
      <section class="animate-in-up-on-view space-y-3 pt-4">
        <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-secondary">
          {{ t('exploreOtherProjects') }}
        </h3>

        <div class="grid gap-3 sm:grid-cols-3">
          <router-link
            v-for="p in tm('projects')"
            :key="p.id"
            :to="`/projects/${p.slug || p.id}`"
            class="group flex flex-col justify-between p-3.5 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-foreground/30 transition-all shadow-sm"
            :class="{ 'ring-1 ring-emerald-500/50': p.id === project?.id }"
          >
            <div>
              <div class="flex items-center justify-between gap-1 mb-1 font-mono text-[10px] text-secondary">
                <span>{{ p.num }}</span>
                <span v-if="p.hasDemo" class="text-emerald-500 font-semibold flex items-center gap-1">
                  <span class="size-1 rounded-full bg-emerald-500"></span>
                  Demo
                </span>
              </div>
              <h4 class="text-xs font-bold text-foreground group-hover:text-emerald-400 transition-colors line-clamp-1">
                {{ p.title }}
              </h4>
            </div>
            <div class="mt-2 flex items-center justify-between font-mono text-[10px] text-secondary group-hover:text-foreground">
              <span>{{ p.badge }}</span>
              <span>→</span>
            </div>
          </router-link>
        </div>
      </section>
    </main>

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
        class="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-border/80 bg-card/95 px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground shadow-xl backdrop-blur-md"
        role="status"
      >
        <span class="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
        <span>{{ toastMessage }}</span>
      </div>
    </Transition>
  </div>
</template>
