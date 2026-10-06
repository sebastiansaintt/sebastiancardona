<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isPrinciplesOpen = ref(false)
</script>

<template>
  <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
    <!-- Mobile Sticky Header -->
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {{ t('navAbout') }}
      </h2>
    </div>

    <!-- Editorial Narrative (Recruiter Pitch) -->
    <div class="space-y-4 text-sm sm:text-base leading-relaxed text-slate-400">
      <p>
        <span class="font-medium text-slate-200">{{ t('aboutP1') }}</span>
      </p>

      <p>
        {{ t('aboutP2') }}
      </p>

      <p>
        {{ t('aboutP3') }}
      </p>

      <!-- Architecture Principles & Standards Collapsible / Card -->
      <div class="mt-6 pt-4 border-t border-slate-800">
        <button 
          type="button" 
          class="group flex w-full items-center justify-between py-2 text-left text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 transition-colors hover:text-teal-300"
          @click="isPrinciplesOpen = !isPrinciplesOpen"
          aria-expanded="isPrinciplesOpen"
        >
          <span class="flex items-center gap-2">
            <span class="size-1.5 rounded-full bg-teal-400"></span>
            <span>{{ t('principlesTitle') }}</span>
          </span>
          <span class="font-mono text-slate-500 transition-transform group-hover:text-teal-300" :class="{ 'rotate-90': isPrinciplesOpen }">
            →
          </span>
        </button>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 -translate-y-2 max-h-0"
          enter-to-class="opacity-100 translate-y-0 max-h-96"
          leave-from-class="opacity-100 translate-y-0 max-h-96"
          leave-to-class="opacity-0 -translate-y-2 max-h-0"
        >
          <div v-if="isPrinciplesOpen" class="mt-3 space-y-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-xs sm:text-sm leading-relaxed text-slate-400 overflow-hidden">
            <p>{{ t('principlesP1') }}</p>
            <p>{{ t('principlesP2') }}</p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
