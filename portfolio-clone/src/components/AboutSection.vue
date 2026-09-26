<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, locale } = useI18n()

// Disclosures open state
const isEducationOpen = ref(true)
const isCertificationsOpen = ref(true)
const isPrinciplesOpen = ref(false)
</script>

<template>
  <section id="principles" class="animate-in-up-on-view container mx-auto max-w-4xl px-5 sm:px-6 py-6" aria-labelledby="experience-heading">
    <!-- Education & Credentials Accordion Group -->
    <div class="mb-5">
      <h2 id="experience-heading" class="font-bold text-xs uppercase tracking-[0.2em] text-secondary">
        {{ t('educationHeading') }}
      </h2>
    </div>

    <div class="flex flex-col gap-4">
      <!-- Degree Item -->
      <div class="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-border">
        <div class="flex flex-row flex-nowrap items-start justify-between gap-4">
          <div class="flex min-w-0 flex-1 flex-col">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-bold sm:text-xl text-foreground">
                {{ t('educationTitle') }}
              </h3>
              <span class="rounded-md border border-border/60 bg-muted px-2 py-0.5 font-mono text-[11px] text-secondary">
                B.S. Degree
              </span>
            </div>
            <p class="mt-1 text-sm text-secondary">
              {{ t('educationSchool') }}
            </p>
          </div>
          <div class="flex min-w-[96px] shrink-0 flex-col text-right text-xs font-mono text-secondary md:min-w-[130px]">
            <p class="font-medium text-foreground">2026</p>
            <p>Santa Marta, CO</p>
          </div>
        </div>
      </div>

      <!-- Certifications Card -->
      <div class="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-border">
        <div class="flex flex-row flex-nowrap items-start justify-between gap-4 cursor-pointer" @click="isCertificationsOpen = !isCertificationsOpen">
          <div class="flex min-w-0 flex-1 flex-col">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-bold sm:text-xl text-foreground">
                {{ t('certificationsTitle') }}
              </h3>
              <button 
                type="button" 
                class="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-secondary transition-all hover:bg-muted hover:text-foreground"
                aria-label="Toggle certifications"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 256 256" 
                  class="size-3.5 transition-transform duration-200" 
                  :class="{ 'rotate-90': isCertificationsOpen }"
                  fill="currentColor"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/>
                </svg>
              </button>
            </div>
            <p class="mt-1 text-sm text-secondary">
              {{ locale === 'es' ? 'Desarrollo profesional y competencias técnicas' : 'Professional development & verified skills' }}
            </p>
          </div>
        </div>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 -translate-y-2 max-h-0"
          enter-to-class="opacity-100 translate-y-0 max-h-96"
          leave-from-class="opacity-100 translate-y-0 max-h-96"
          leave-to-class="opacity-0 -translate-y-2 max-h-0"
        >
          <div v-if="isCertificationsOpen" class="mt-4 space-y-2 border-t border-border/50 pt-3 text-sm text-secondary overflow-hidden">
            <div 
              v-for="(cert, idx) in tm('certifications')" 
              :key="idx" 
              class="flex items-center gap-2"
            >
              <span class="size-1.5 rounded-full bg-secondary/60 shrink-0"></span>
              <span>{{ cert }}</span>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Core Architecture Principles Accordion -->
      <div class="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-border">
        <div class="flex flex-row flex-nowrap items-start justify-between gap-4 cursor-pointer" @click="isPrinciplesOpen = !isPrinciplesOpen">
          <div class="flex min-w-0 flex-1 flex-col">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-bold sm:text-xl text-foreground">
                {{ t('aboutHeading') }}
              </h3>
              <button 
                type="button" 
                class="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-secondary transition-all hover:bg-muted hover:text-foreground"
                aria-label="Toggle principles details"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 256 256" 
                  class="size-3.5 transition-transform duration-200" 
                  :class="{ 'rotate-90': isPrinciplesOpen }"
                  fill="currentColor"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/>
                </svg>
              </button>
            </div>
            <p class="mt-1 text-sm text-secondary">
              SOLID · ACID · CAP · OWASP · Docker · JWT & RBAC
            </p>
          </div>
        </div>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 -translate-y-2 max-h-0"
          enter-to-class="opacity-100 translate-y-0 max-h-[800px]"
          leave-from-class="opacity-100 translate-y-0 max-h-[800px]"
          leave-to-class="opacity-0 -translate-y-2 max-h-0"
        >
          <div v-if="isPrinciplesOpen" class="mt-4 space-y-3 border-t border-border/50 pt-4 text-sm leading-relaxed text-secondary overflow-hidden">
            <p>{{ t('aboutP1') }}</p>
            <p>{{ t('aboutP2') }}</p>
            <p>{{ t('aboutP3') }}</p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
