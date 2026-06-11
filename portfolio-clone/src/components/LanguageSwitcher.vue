<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>

<template>
  <button @click="toggleLanguage" class="lang-btn" aria-label="Toggle language">
    <span :class="{ active: locale === 'en' }">EN</span>
    <span class="divider">/</span>
    <span :class="{ active: locale === 'es' }">ES</span>
  </button>
</template>

<style scoped>
.lang-btn {
  background: transparent;
  border: 1px solid var(--text-light);
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  color: var(--text-light);
  cursor: pointer;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s;
}

.lang-btn:hover {
  border-color: var(--text-color);
  color: var(--text-color);
}

.active {
  color: var(--text-color);
}

.divider {
  opacity: 0.5;
}
</style>
