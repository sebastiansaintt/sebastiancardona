<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-mono font-medium text-emerald-400 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/15">
    <span class="relative flex size-2">
      <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
      <span class="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
    </span>
    <span class="tracking-tight">{{ t('statusBadge') }}</span>
  </div>
</template>
