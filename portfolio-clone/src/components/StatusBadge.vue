<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="container mx-auto max-w-4xl px-5 sm:px-6 pt-1 pb-1">
    <div class="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/90 px-3.5 py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm backdrop-blur-md">
      <span class="relative flex size-2">
        <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
        <span class="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
      </span>
      <span><strong>{{ t('workingOnLabel') }}</strong> {{ t('workingOnText') }}</span>
    </div>
  </div>
</template>
