<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Stack ordered by architectural layers as requested:
// 1. react - tailwind | react native (Frontend & Mobile)
// 2. fastapi - node/express (Backend & APIs)
// 3. postgresqlORM / redis (Databases & Cache)
// 4. gcp docker supabase git (Cloud & DevOps)
// 5. pytest grafana (Testing & Observability)
const techLayers = computed(() => [
  {
    key: 'frontend',
    layerNum: '01',
    layerName: t('layerFrontend'),
    items: [
      { name: 'React', slug: 'react' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
      { name: 'React Native', slug: 'react' }
    ]
  },
  {
    key: 'backend',
    layerNum: '02',
    layerName: t('layerBackend'),
    items: [
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Express', slug: 'express' }
    ]
  },
  {
    key: 'data',
    layerNum: '03',
    layerName: t('layerData'),
    items: [
      { name: 'PostgreSQL (ORM)', slug: 'postgresql' },
      { name: 'Redis', slug: 'redis' }
    ]
  },
  {
    key: 'cloud',
    layerNum: '04',
    layerName: t('layerCloud'),
    items: [
      { name: 'GCP', slug: 'googlecloud' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Supabase', slug: 'supabase' },
      { name: 'Git', slug: 'git' }
    ]
  },
  {
    key: 'quality',
    layerNum: '05',
    layerName: t('layerQuality'),
    items: [
      { name: 'Pytest', slug: 'pytest' },
      { name: 'Grafana', slug: 'grafana' }
    ]
  }
])
</script>

<template>
  <section id="stack" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Tech Stack">
    <!-- Mobile Sticky Header -->
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {{ t('navStack') }}
      </h2>
    </div>

    <!-- Section Heading -->
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
        {{ t('techStackHeading') }}
      </h2>
      <span class="text-[11px] font-mono text-teal-400/80">
        {{ techLayers.length }} {{ t('layersCount') }}
      </span>
    </div>

    <!-- Stack Layers Flow -->
    <div class="space-y-4">
      <div 
        v-for="layer in techLayers" 
        :key="layer.key"
        class="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/40"
      >
        <!-- Layer Header -->
        <div class="mb-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="font-mono text-[11px] font-semibold text-teal-400">
              {{ layer.layerNum }}
            </span>
            <span class="h-3 w-px bg-slate-700"></span>
            <h3 class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              {{ layer.layerName }}
            </h3>
          </div>
        </div>

        <!-- Layer Tech Pills -->
        <div class="flex flex-wrap gap-2">
          <div
            v-for="tech in layer.items"
            :key="tech.name"
            class="inline-flex items-center gap-2 rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 transition-colors group-hover:border-slate-700 hover:!border-teal-400/50 hover:!text-teal-300 hover:!bg-slate-900"
          >
            <img 
              v-if="tech.slug"
              :src="`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tech.slug}.svg`" 
              :alt="tech.name" 
              loading="lazy" 
              class="size-3.5 shrink-0 opacity-80 invert transition-opacity hover:opacity-100"
            />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
