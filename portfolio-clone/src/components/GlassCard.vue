<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  link: String,
  github: String,
  tags: Array
});
</script>

<template>
  <div class="card">
    <div class="card-inner">
      <a v-if="title" :href="link" target="_blank" rel="noopener noreferrer" class="card-title">
        {{ title }}
      </a>
      <div v-if="subtitle" class="card-subtitle">{{ subtitle }}</div>

      <p class="card-desc">{{ description }}</p>

      <div v-if="tags?.length" class="tags">
        <span v-for="(tag, i) in tags" :key="i" class="tag">{{ tag.trim() }}</span>
      </div>

      <div class="card-divider" />

      <div class="card-footer">
        <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer" class="link">
          {{ $t('github') }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h6v6M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M10 14 21 3"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: var(--glass-shadow);
  padding: 1.5rem;
  margin: 0;
  transition: background 0.2s ease, transform 0.2s ease;
}

.card:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
}

.card-divider {
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.08);
  margin: 1rem 0;
  border-radius: 999px;
}

/* ── Layout ── */
.card-inner {
  position: relative;
  z-index: 2;
}

/* ── Typography ── */
.card-title {
  display: inline-block;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: 0.2rem;
  transition: color 200ms ease;
}
.card-title:hover { color: var(--accent-color); }

.card-subtitle {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.card-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: 1.2rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.tag {
  background: rgba(65, 105, 225, 0.08);
  color: var(--accent-color);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  border: none;
}

.card-footer { display: flex; gap: 1rem; align-items: center; }

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--text-color);
  text-decoration: none;
  transition: color 180ms ease;
}
.link:hover { color: var(--accent-color); }

.link svg {
  width: 14px; height: 14px;
  transition: transform 180ms ease;
}
.link:hover svg { transform: translate(2px, -2px); }

@media (max-width: 768px) {
  .card { padding: 1rem; margin-left: 0; margin-right: 0; }
  .card:hover { transform: none; background: transparent; }
  .card-title { font-size: 1rem; }
  .card-desc  { font-size: 0.85rem; }
}

@media (prefers-reduced-motion: reduce) {
  .card, .link, .link svg { transition: none; }
}
</style>