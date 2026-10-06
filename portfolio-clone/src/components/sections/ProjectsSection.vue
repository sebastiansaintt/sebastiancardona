<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t, tm } = useI18n()

const goToProject = (project) => {
  router.push(`/projects/${project.slug || project.id}`)
}
</script>

<template>
  <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
    <!-- Mobile Sticky Header -->
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {{ t('navProjects') }}
      </h2>
    </div>

    <div>
      <ul class="group/list">
        <li v-for="project in tm('projects')" :key="project.id" class="mb-12">
          <div 
            class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
            @click="goToProject(project)"
          >
            <!-- Background Glow on hover -->
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <!-- Project Details (Desktop: right side) -->
            <div class="z-10 sm:order-2 sm:col-span-6">
              <!-- Domain Badge -->
              <span class="font-mono text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                {{ project.badge }}
              </span>

              <!-- Project Title & Link to Deep Dive / Demo -->
              <h3>
                <router-link 
                  :to="`/projects/${project.slug || project.id}`"
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base hover:text-teal-300 focus-visible:text-teal-300"
                  :aria-label="`${project.title} detailed walkthrough`"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {{ project.title }}
                    <span class="inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </span>
                </router-link>
              </h3>

              <!-- Video Demo Live Pill -->
              <div v-if="project.hasDemo" class="mt-1.5 flex items-center gap-1.5 font-mono text-[11px] text-teal-400">
                <span class="size-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span class="font-semibold">{{ t('demoAvailable') }}</span>
              </div>

              <!-- Summary Description -->
              <p class="mt-2 text-sm leading-normal text-slate-400">
                {{ project.description }}
              </p>

              <!-- GitHub Repo Link & Actions -->
              <div class="mt-3 flex items-center gap-3">
                <a 
                  v-if="project.github_link" 
                  :href="project.github_link" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  class="relative z-10 inline-flex items-center gap-1 font-mono text-xs text-slate-400 transition-colors hover:text-teal-300"
                  :aria-label="`${project.title} GitHub repository`"
                  @click.stop
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3.5" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  <span>{{ t('viewGithub') }}</span>
                  <span class="text-[10px]">↗</span>
                </a>
              </div>

              <!-- Tech Tag Pills -->
              <ul v-if="project.technologies?.length" class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li v-for="(tech, tIdx) in project.technologies" :key="tIdx" class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 font-mono text-xs font-medium leading-5 text-teal-300">
                    {{ tech }}
                  </div>
                </li>
              </ul>
            </div>

            <!-- Thumbnail Image (Desktop: left side, Mobile: above) -->
            <div class="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
              <img 
                :src="project.preview" 
                :alt="project.title" 
                loading="lazy" 
                class="aspect-video w-full rounded border-2 border-slate-200/10 object-cover object-top transition group-hover:border-slate-200/30"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
