<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import StatusBadge from '../StatusBadge.vue'

const props = defineProps({
  activeSection: {
    type: String,
    default: 'about'
  },
  isDark: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['toggle-theme', 'toggle-language', 'copied-email'])

const { t, locale } = useI18n()

const navLinks = computed(() => [
  { id: 'about', label: t('navAbout') },
  { id: 'experience', label: t('navExperience') },
  { id: 'projects', label: t('navProjects') },
  { id: 'activity', label: t('navActivity') }
])

const cvHref = computed(() => {
  return locale.value === 'es' ? '/CV_Sebastian_Cardona_Colombia.pdf' : '/CV_Sebastian_Cardona_EN.pdf'
})

const cvFileName = computed(() => {
  return locale.value === 'es' ? 'CV_Sebastian_Cardona_Colombia.pdf' : 'CV_Sebastian_Cardona_EN.pdf'
})

const copyEmail = () => {
  navigator.clipboard.writeText('scarrdona@gmail.com')
  emit('copied-email', t('emailCopied'))
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <!-- Name -->
      <h1 class="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
        <a href="#about" @click.prevent="scrollTo('about')">{{ t('name') }}</a>
      </h1>

      <!-- Main Role -->
      <h2 class="mt-3 text-lg font-medium tracking-tight text-[#5eead4] sm:text-xl">
        {{ t('role') }}
      </h2>

      <!-- Tagline -->
      <p class="mt-4 max-w-sm text-sm sm:text-base leading-normal text-slate-400 dark:text-slate-400">
        {{ t('tagline') }}
      </p>

      <!-- Compact Status Badge -->
      <div class="mt-5">
        <StatusBadge />
      </div>

      <!-- Brittany Chiang In-Page Jump Navigation (Desktop) -->
      <nav class="nav hidden lg:block" aria-label="In-page jump links">
        <ul class="mt-14 w-max space-y-1">
          <li v-for="link in navLinks" :key="link.id">
            <a 
              :href="`#${link.id}`" 
              class="group flex items-center py-3"
              @click.prevent="scrollTo(link.id)"
            >
              <span 
                class="nav-indicator mr-4 h-px transition-all motion-reduce:transition-none"
                :class="activeSection === link.id 
                  ? 'w-16 bg-slate-200' 
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200'"
              ></span>
              <span 
                class="nav-text text-xs font-bold uppercase tracking-widest transition-colors"
                :class="activeSection === link.id 
                  ? 'text-slate-200' 
                  : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'"
              >
                {{ link.label }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Bottom Social Media, Actions & Language Switcher -->
    <div class="mt-8 lg:mt-0 flex flex-col gap-4">
      <div class="flex items-center gap-4 text-slate-400">
        <!-- GitHub -->
        <a 
          href="https://github.com/sebastiansaintt" 
          target="_blank" 
          rel="noreferrer noopener" 
          class="transition-colors hover:text-slate-200" 
          title="GitHub"
          aria-label="GitHub profile"
        >
          <span class="sr-only">GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5 sm:size-6" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>

        <!-- LinkedIn -->
        <a 
          href="https://linkedin.com/in/sebastiansaintt" 
          target="_blank" 
          rel="noreferrer noopener" 
          class="transition-colors hover:text-slate-200" 
          title="LinkedIn"
          aria-label="LinkedIn profile"
        >
          <span class="sr-only">LinkedIn</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 sm:size-6" aria-hidden="true">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>

        <!-- X (Twitter) -->
        <a 
          href="https://x.com/sebastiansaintt" 
          target="_blank" 
          rel="noreferrer noopener" 
          class="transition-colors hover:text-slate-200" 
          title="X / Twitter"
          aria-label="X profile"
        >
          <span class="sr-only">X</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 sm:size-6" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>

        <!-- Copy Email -->
        <button 
          type="button" 
          class="transition-colors hover:text-slate-200 cursor-pointer" 
          @click="copyEmail"
          title="Copy email to clipboard"
          aria-label="Copy email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 sm:size-6" aria-hidden="true">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
          </svg>
        </button>

        <!-- CV Download -->
        <a 
          :href="cvHref" 
          :download="cvFileName"
          class="inline-flex items-center gap-1 text-xs font-mono font-medium transition-colors hover:text-slate-200"
          :title="t('downloadCV')"
          aria-label="Download Curriculum Vitae"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd"></path>
          </svg>
          <span>CV</span>
        </a>

        <div class="h-4 w-px bg-slate-700"></div>

        <!-- Language Switcher Pill -->
        <button 
          type="button" 
          class="rounded border border-slate-700 px-2 py-0.5 font-mono text-xs font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
          @click="emit('toggle-language')"
          :title="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
        >
          {{ locale.toUpperCase() }}
        </button>

        <!-- Theme Toggle -->
      </div>
    </div>
  </header>
</template>
