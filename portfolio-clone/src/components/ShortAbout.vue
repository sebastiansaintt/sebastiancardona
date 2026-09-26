<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<template>
  <section id="about" class="animate-in-up-on-view max-w-4xl mx-auto px-5 sm:px-6 pt-4 pb-2" aria-labelledby="about-short-heading">
    <div class="mb-5">
      <h2 id="about-short-heading" class="font-bold text-xs uppercase tracking-[0.2em] text-secondary">
        {{ t('shortAboutHeading') }}
      </h2>
    </div>

    <div class="space-y-6">
      <h3 class="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        {{ t('shortAboutTitle') }}
      </h3>

      <div class="space-y-4 text-sm leading-relaxed text-secondary sm:text-base">
        <p>
          {{ t('shortAboutP1') }}
        </p>
        <p>
          {{ t('shortAboutP2') }}
        </p>
      </div>

      <!-- Dijkstra Quote Callout -->
      <blockquote class="border-l-2 border-border pl-4 text-sm italic leading-relaxed text-secondary sm:text-base my-4">
        "{{ t('quoteText') }}"
        <span class="block text-xs font-mono font-normal uppercase tracking-wider text-secondary mt-1">— {{ t('quoteAuthor') }}</span>
      </blockquote>

      <!-- Characteristic Pill Badges -->
      <div class="relative flex flex-wrap items-center gap-2 py-1">
        <span class="rounded-full border px-3 py-1 text-xs font-medium border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300">
          {{ locale === 'es' ? 'Arquitectura' : 'Architect' }}
        </span>
        <span class="rounded-full border px-3 py-1 text-xs font-medium border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300">
          {{ locale === 'es' ? 'Constructor' : 'Builder' }}
        </span>
        <span class="rounded-full border px-3 py-1 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300">
          {{ locale === 'es' ? 'Seguridad Primero' : 'Security-First' }}
        </span>
        <span class="rounded-full border px-3 py-1 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300">
          {{ locale === 'es' ? 'Disciplinado' : 'Disciplined' }}
        </span>
      </div>

      <!-- Quick Details 3-Col Grid -->
      <div class="grid gap-4 border-t border-border/70 pt-6 sm:grid-cols-3">
        <div>
          <p class="text-xs uppercase tracking-wider text-secondary">
            {{ locale === 'es' ? 'Ubicación' : 'Location' }}
          </p>
          <p class="mt-1 text-sm font-medium text-foreground">
            Santa Marta, Colombia
          </p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-wider text-secondary">
            {{ locale === 'es' ? 'Estado' : 'Status' }}
          </p>
          <p class="mt-1 text-sm font-medium text-foreground">
            {{ locale === 'es' ? 'Abierto a oportunidades' : 'Open to opportunities' }}
          </p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-wider text-secondary">
            {{ locale === 'es' ? 'Especialidad' : 'Focus' }}
          </p>
          <p class="mt-1 text-sm font-medium text-foreground">
            Backend · Full Stack · Cloud
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
