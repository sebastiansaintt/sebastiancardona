<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, locale } = useI18n()

const cvHref = computed(() => {
  return locale.value === 'es' ? '/CV_Sebastian_Cardona_Colombia.pdf' : '/CV_Sebastian_Cardona_EN.pdf'
})
</script>

<template>
  <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
    <!-- Mobile Sticky Header -->
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {{ t('navExperience') }}
      </h2>
    </div>

    <div>
      <ol class="group/list">
        <li v-for="(item, idx) in tm('experience')" :key="idx" class="mb-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <!-- Background Glow on hover -->
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <!-- Date / Period Header -->
            <header class="z-10 mb-2 mt-1 font-mono text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" :aria-label="item.period">
              {{ item.period }}
            </header>

            <!-- Experience Details -->
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <a 
                    v-if="item.companyUrl && item.companyUrl !== '#'"
                    :href="item.companyUrl" 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base hover:text-teal-300 focus-visible:text-teal-300"
                    :aria-label="`${item.title} at ${item.company}`"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {{ item.title }} · 
                      <span class="inline-block">
                        {{ item.company }}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                  <span v-else class="text-base font-medium text-slate-200">
                    {{ item.title }} · {{ item.company }}
                  </span>
                </div>
              </h3>

              <p class="mt-2 text-sm leading-normal text-slate-400">
                {{ item.description }}
              </p>

              <!-- Tech Pills -->
              <ul v-if="item.technologies?.length" class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li v-for="(tech, tIdx) in item.technologies" :key="tIdx" class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 font-mono text-xs font-medium leading-5 text-teal-300">
                    {{ tech }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>

      <!-- View Full Resume Link -->
      <div class="mt-8">
        <a 
          :href="cvHref" 
          target="_blank" 
          rel="noreferrer noopener" 
          class="inline-flex items-baseline font-semibold leading-tight text-slate-200 group/link text-base hover:text-teal-300 focus-visible:text-teal-300"
          aria-label="View Full Résumé"
        >
          <span>
            {{ t('viewResume') }}
            <span class="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
