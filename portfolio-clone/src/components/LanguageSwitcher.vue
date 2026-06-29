<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>

<template>
  <button 
    @click="toggleLanguage" 
    class="lang-btn magnetic interactive" 
    aria-label="Toggle language"
  >
    <span :class="{ active: locale === 'en' }">EN</span>
    <span class="divider">/</span>
    <span :class="{ active: locale === 'es' }">ES</span>
  </button>
</template>

<style scoped>
.lang-btn {
  background: transparent;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 30px;
  padding: 0.4rem 1rem;
  color: #555555;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: border-color 0.4s ease, color 0.4s ease;
  will-change: transform;
}

.lang-btn:hover {
  border-color: rgba(17, 17, 17, 0.8);
  color: #111111;
}

.active {
  color: #111111;
  font-weight: 700;
}

.divider {
  opacity: 0.3;
  font-weight: 400;
}
</style>
