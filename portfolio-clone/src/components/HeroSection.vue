<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const emit = defineEmits(['copied-email'])

const copied = ref(false)

// Role switcher carousel
const roles = computed(() => {
  return locale.value === 'es'
    ? ['Ingeniero Backend', 'Pipelines de Datos', 'Automatización con IA', 'Cloud & DevOps', 'Arquitectura de Software']
    : ['Backend Engineer', 'Data Pipelines', 'AI Automation', 'Cloud & DevOps', 'Software Architecture']
})

const activeRoleIndex = ref(0)
let roleInterval = null

onMounted(() => {
  roleInterval = setInterval(() => {
    activeRoleIndex.value = (activeRoleIndex.value + 1) % roles.value.length
  }, 2800)
})

onUnmounted(() => {
  if (roleInterval) clearInterval(roleInterval)
})

const cvLink = computed(() => {
  return locale.value === 'es'
    ? { href: '/CV_Sebastian_Cardona_Colombia.pdf', download: 'CV_Sebastian_Cardona_Colombia.pdf' }
    : { href: '/CV_Sebastian_Cardona_EN.pdf', download: 'CV_Sebastian_Cardona_EN.pdf' }
})

const copyEmail = () => {
  navigator.clipboard.writeText('scarrdona@gmail.com')
  copied.value = true
  emit('copied-email', locale.value === 'es' ? '¡Correo copiado al portapapeles!' : 'Email copied to clipboard!')
  setTimeout(() => {
    copied.value = false
  }, 2400)
}
</script>

<template>
  <section id="hero" class="container mx-auto max-w-4xl px-5 sm:px-6 pt-6 pb-2" aria-label="Introduction">
    <div class="animate-in-up-on-view flex flex-col gap-6">
      <!-- Profile Header Row -->
      <div class="flex items-start gap-5">
        <!-- Dual Avatar with Smooth Hover Swap -->
        <div class="group relative size-24 sm:size-28 shrink-0 cursor-pointer overflow-hidden rounded-full ring-2 ring-border/60 bg-muted">
          <!-- Default Image -->
          <img 
            src="/profile.jpeg" 
            alt="Sebastián Cardona Profile" 
            class="size-full rounded-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <!-- Hover Swap Image -->
          <img 
            src="/IMG_0247.jpeg" 
            alt="Sebastián Cardona Alternate" 
            class="absolute inset-0 size-full rounded-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <!-- Name & Rotating Role -->
        <div class="min-w-0 flex-1">
          <h1 class="flex items-center gap-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            <span>{{ t('name') }}</span>
            <!-- Twitter/X style Blue Verified Checkmark -->
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 256 256" 
              class="size-6 shrink-0 text-[#1D9BF0] sm:size-7 md:size-8 fill-current" 
              aria-label="Verified Software Engineer"
            >
              <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57-9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
            </svg>
          </h1>

          <!-- Role Carousel with Blur & Slide -->
          <div class="relative h-7 overflow-hidden mt-1">
            <p 
              v-for="(roleItem, rIndex) in roles" 
              :key="rIndex"
              class="absolute inset-0 text-base font-semibold tracking-wide text-secondary transition-all duration-700 ease-in-out sm:text-lg"
              :style="{
                opacity: activeRoleIndex === rIndex ? 1 : 0,
                transform: activeRoleIndex === rIndex ? 'translateY(0)' : 'translateY(14px)',
                filter: activeRoleIndex === rIndex ? 'blur(0)' : 'blur(6px)'
              }"
            >
              {{ roleItem }}
            </p>
          </div>

          <!-- Email Copy Chip -->
          <p class="mt-2.5 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm sm:text-base">
            <button 
              type="button" 
              class="group inline-flex cursor-pointer items-center gap-1.5 text-secondary transition-colors hover:text-foreground font-mono text-xs sm:text-sm"
              @click="copyEmail"
              aria-label="Copy email"
            >
              <span>scarrdona@gmail.com</span>
              <span class="relative inline-flex size-4 shrink-0 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-3.5 transition-transform group-hover:scale-110">
                  <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"/>
                </svg>
              </span>
            </button>
          </p>
        </div>
      </div>

      <!-- Bio Tagline -->
      <p class="max-w-2xl text-base sm:text-lg leading-relaxed text-secondary">
        {{ t('bio') }}
      </p>

      <!-- Social & Direct Contact Links -->
      <div class="flex flex-wrap items-center gap-1">
        <!-- X / Twitter -->
        <a 
          href="https://x.com/sebastiansaintt" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="X / Twitter" 
          class="flex size-9 items-center justify-center rounded-lg border border-border/70 text-secondary transition-colors hover:bg-muted hover:text-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
            <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"/>
          </svg>
        </a>

        <!-- LinkedIn -->
        <a 
          href="https://linkedin.com/in/sebastiansaintt" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn" 
          class="flex size-9 items-center justify-center rounded-lg border border-border/70 text-secondary transition-colors hover:bg-muted hover:text-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/>
          </svg>
        </a>

        <!-- GitHub -->
        <a 
          href="https://github.com/sebastiansaintt" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub" 
          class="flex size-9 items-center justify-center rounded-lg border border-border/70 text-secondary transition-colors hover:bg-muted hover:text-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
            <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"/>
          </svg>
        </a>

        <!-- Mail -->
        <a 
          href="mailto:scarrdona@gmail.com" 
          aria-label="Mail" 
          class="flex size-9 items-center justify-center rounded-lg border border-border/70 text-secondary transition-colors hover:bg-muted hover:text-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-4">
            <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/>
          </svg>
        </a>

        <!-- Resume CV -->
        <a 
          :href="cvLink.href" 
          :download="cvLink.download"
          aria-label="Resume PDF" 
          class="flex h-9 items-center gap-1.5 rounded-lg border border-border/70 px-3 text-xs font-mono font-medium text-secondary transition-colors hover:bg-muted hover:text-foreground"
          :title="`${t('downloadCV')} (${locale.toUpperCase()})`"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="size-3.5">
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"/>
          </svg>
          <span>CV</span>
        </a>
      </div>
    </div>
  </section>
</template>
