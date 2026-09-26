<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const techCategories = computed(() => [
  {
    key: 'backend',
    category: t('catBackend'),
    items: [
      { name: 'Python', slug: 'python' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'Express', slug: 'express' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'async/await', labelOnly: true },
      { name: 'REST', labelOnly: true },
      { name: 'WebSockets', slug: 'socketdotio' }
    ]
  },
  {
    key: 'data',
    category: t('catData'),
    items: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'SQLAlchemy', slug: 'sqlalchemy' },
      { name: 'Alembic', labelOnly: true },
      { name: 'Redis', slug: 'redis' },
      { name: 'MQTT', slug: 'eclipsemosquitto' }
    ]
  },
  {
    key: 'auth',
    category: t('catAuth'),
    items: [
      { name: 'JWT', slug: 'jsonwebtokens' },
      { name: 'OAuth', slug: 'auth0' },
      { name: 'RBAC', labelOnly: true },
      { name: 'Argon2id', labelOnly: true },
      { name: 'Token Bucket', labelOnly: true },
      { name: 'Hardening', labelOnly: true },
      { name: 'Blacklist', labelOnly: true }
    ]
  },
  {
    key: 'infra',
    category: t('catInfra'),
    items: [
      { name: 'Docker', slug: 'docker' },
      { name: 'Docker Compose', slug: 'docker' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { 
        name: 'AWS', 
        customIcon: 'aws'
      },
      { name: 'Render', slug: 'render' }
    ]
  },
  {
    key: 'ai',
    category: t('catAI'),
    items: [
      { name: 'OCR', labelOnly: true },
      { name: 'Multi-agent orchestration', labelOnly: true },
      { name: 'SDD', labelOnly: true },
      { name: 'SRS-first workflows', labelOnly: true }
    ]
  }
])
</script>

<template>
  <section id="stack" class="animate-in-up-on-view container mx-auto max-w-4xl px-5 sm:px-6 py-4" aria-labelledby="tech-stack-heading">
    <div class="mb-5">
      <h2 id="tech-stack-heading" class="font-bold text-xs uppercase tracking-[0.2em] text-secondary">
        {{ t('techStackHeading') }}
      </h2>
    </div>

    <!-- 2-Column Responsive Card Grid (fills rows automatically without overlapping) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">
      <div 
        v-for="group in techCategories" 
        :key="group.key"
        class="rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-5 backdrop-blur-sm shadow-sm transition-colors hover:border-border flex flex-col gap-3"
      >
        <div class="flex items-center gap-2">
          <span class="size-1.5 rounded-full bg-emerald-500"></span>
          <h3 class="font-mono text-xs font-bold tracking-wider uppercase text-secondary">
            {{ group.category }}
          </h3>
        </div>

        <div class="flex flex-wrap gap-2.5 sm:gap-3">
          <div
            v-for="tech in group.items"
            :key="tech.name"
            :title="`${tech.name} (${group.category})`"
            class="group relative flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-border/80 bg-background/90 shadow-sm transition-all duration-200 hover:border-foreground/50 hover:bg-card hover:scale-105 hover:shadow-md dark:border-border/60 dark:bg-neutral-900/80 dark:hover:bg-neutral-800"
            :class="tech.labelOnly ? 'px-3 py-2 min-h-[44px]' : 'size-[48px] sm:size-[52px]'"
          >
            <!-- Custom AWS Vector Icon with dark/light fill -->
            <svg 
              v-if="tech.customIcon === 'aws'" 
              role="img" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg" 
              class="size-6 shrink-0 transition-transform duration-200 group-hover:scale-110 fill-[#FF9900]"
              aria-label="AWS"
            >
              <path d="M12.003 18.868c-4.475 0-8.318-1.577-10.97-4.14-.383-.37-.058-.876.38-.616 3.018 1.777 6.786 2.846 10.748 2.846 3.963 0 7.73-1.07 10.748-2.846.438-.26.763.246.38.616-2.652 2.563-6.495 4.14-11.286 4.14v-.001zm11.954-2.825c-.244-.316-1.616-.15-2.228-.075-.183.022-.213-.12-.048-.236 1.07-.745 2.82-1.74 3.044-1.448.225.292-.596 2.247-1.61 3.064-.155.127-.3-.024-.233-.18.221-.527.755-1.55.932-2.022l.143.897zm-14.774-6.311c.214-.078.435-.119.658-.12.441 0 .822.181 1.037.498.243.357.243.897.003 1.547l-1.396 3.774c-.183.495-.444.743-.783.743-.223 0-.442-.041-.65-.123l-.134-.055c-.203-.082-.41-.122-.619-.122-.387 0-.71.144-.969.431l-.227.256c-.059.066-.134.1-.212.1-.16 0-.256-.14-.256-.37 0-.083.014-.168.041-.252l1.642-4.42c.183-.495.444-.743.783-.743.224 0 .443.041.652.122l.133.056c.203.082.411.122.619.122.387 0 .71-.144.97-.432l.226-.255c.06-.067.135-.101.213-.101.16 0 .256.14.256.37 0 .083-.014.168-.041.252l-.689 1.859c.287-.272.637-.48.995-.615v-.001zm6.04 0c.214-.078.435-.119.658-.12.441 0 .822.181 1.037.498.243.357.243.897.003 1.547l-1.396 3.774c-.183.495-.444.743-.783.743-.223 0-.442-.041-.65-.123l-.134-.055c-.203-.082-.41-.122-.619-.122-.387 0-.71.144-.969.431l-.227.256c-.059.066-.134.1-.212.1-.16 0-.256-.14-.256-.37 0-.083.014-.168.041-.252l1.642-4.42c.183-.495.444-.743.783-.743.224 0 .443.041.652.122l.133.056c.203.082.411.122.619.122.387 0 .71-.144.97-.432l.226-.255c.06-.067.135-.101.213-.101.16 0 .256.14.256.37 0 .083-.014.168-.041.252l-.689 1.859c.287-.272.637-.48.995-.615v-.001z"/>
            </svg>

            <!-- SimpleIcon if available -->
            <img 
              v-else-if="!tech.labelOnly && tech.slug"
              :src="`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tech.slug}.svg`" 
              :alt="tech.name" 
              loading="lazy" 
              class="size-5 sm:size-6 shrink-0 transition-transform duration-200 group-hover:scale-110 opacity-90 group-hover:opacity-100 dark:invert"
            />

            <!-- Label Badge for items without dedicated icon -->
            <span 
              v-else 
              class="font-mono text-[11px] sm:text-xs font-semibold text-foreground tracking-tight select-none"
            >
              {{ tech.name }}
            </span>
            
            <!-- Floating Tooltip on Hover for icon-only tiles -->
            <span 
              v-if="!tech.labelOnly"
              class="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground text-background px-1.5 py-0.5 font-mono text-[10px] font-medium opacity-0 transition-opacity group-hover:opacity-100 z-20 shadow-md"
            >
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
