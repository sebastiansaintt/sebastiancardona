<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const emit = defineEmits(['open-command-palette'])

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

// Language Switcher Logic
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  localStorage.setItem('user-lang', locale.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }

  const savedLang = localStorage.getItem('user-lang')
  if (savedLang) {
    locale.value = savedLang
  }
})
</script>

<template>
  <header class="sticky top-0 z-50 w-full glass-header" role="banner">
    <div class="container mx-auto grid h-14 max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
      <!-- macOS Window Control Buttons -->
      <div class="flex items-center gap-2 justify-self-start" aria-label="macOS Controls">
        <span class="size-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 shadow-sm transition-transform hover:scale-110 cursor-pointer" title="Close"></span>
        <span class="size-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 shadow-sm transition-transform hover:scale-110 cursor-pointer" title="Minimize"></span>
        <span class="size-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 shadow-sm transition-transform hover:scale-110 cursor-pointer" title="Maximize"></span>
      </div>

      <!-- Center Navigation -->
      <nav class="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
        <a href="/#hero" class="rounded-md px-2 py-1.5 sm:px-3 text-secondary transition-colors hover:bg-muted/60 hover:text-foreground">
          {{ t('navHome') }}
        </a>
        <a href="/#stack" class="rounded-md px-2 py-1.5 sm:px-3 text-secondary transition-colors hover:bg-muted/60 hover:text-foreground">
          {{ t('navStack') }}
        </a>
        <a href="/#projects" class="rounded-md px-2 py-1.5 sm:px-3 text-secondary transition-colors hover:bg-muted/60 hover:text-foreground">
          {{ t('navProjects') }}
        </a>
        <a href="/#activity" class="rounded-md px-2 py-1.5 sm:px-3 text-secondary transition-colors hover:bg-muted/60 hover:text-foreground">
          {{ t('navActivity') }}
        </a>
      </nav>

      <!-- Right Controls: Language & Theme Switcher -->
      <div class="flex items-center gap-2 justify-self-end">
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
          <!-- Moon Icon (Dark Mode Active) -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
            <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-21.12,104.75,104.75,0,0,0,37-52.92A8,8,0,0,0,233.54,142.23Z"/>
          </svg>
          <!-- Sun Icon (Light Mode Active) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
            <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66a8,8,0,0,0,11.32-11.32l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM197.66,58.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32Zm-11.32,128a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM136,216a8,8,0,0,0-16,0v24a8,8,0,0,0,16,0Zm-96-88a8,8,0,0,0-8-8H8a8,8,0,0,0,0,16H32A8,8,0,0,0,40,128Zm208-8H224a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
