<script setup>
import { ref } from 'vue'

defineProps({
  num: String,
  title: String,
  description: String,
  github: String,
  tags: Array,
  preview: String
})

const open = ref(false)
</script>

<template>
  <div class="project" :class="{ open }" @click="open = !open">
    <div class="project-top">
      <span class="project-num">{{ num }}</span>
      <span class="project-title">{{ title }}</span>
      <i class="project-arrow">+</i>
    </div>
    <div class="project-body">
      <div class="project-body-inner">
        <div class="project-expand">
          <div class="project-preview">
            <img v-if="preview" :src="preview" :alt="title" />
            <div v-else class="project-preview-empty"></div>
          </div>
          <div class="project-right">
            <p class="project-desc">{{ description }}</p>
            <div v-if="tags?.length" class="project-tags">
              <span v-for="(tag, i) in tags" :key="i" class="project-tag">{{ tag }}</span>
            </div>
            <div class="project-footer">
              <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer"
                class="project-link" @click.stop>
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  position: relative;
  padding: 1.75rem 0;
  cursor: pointer;
}
.project::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: .5px;
  background: rgba(26, 26, 26, 0.08);
  transition: background .3s;
}
.project:hover::after { background: rgba(26, 26, 26, 0.15); }

.project-top {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}
.project-num {
  font-size: 11px;
  font-weight: 400;
  color: var(--text-light);
  font-variant-numeric: tabular-nums;
  min-width: 1.5rem;
  transition: color .3s;
}
.project-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-color);
  letter-spacing: -.03em;
  flex: 1;
}
.project-arrow {
  font-size: 18px;
  font-style: normal;
  color: var(--text-light);
  opacity: 0;
  transition: opacity .3s, transform .3s;
  line-height: 1;
}
.project:hover .project-arrow { opacity: 1; }
.project.open .project-arrow { opacity: 1; transform: rotate(45deg); }

.project-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .35s cubic-bezier(.4, 0, .2, 1);
}
.project.open .project-body { grid-template-rows: 1fr; }
.project-body-inner { overflow: hidden; }

.project-expand {
  display: flex;
  gap: 1.25rem;
  padding-top: 1.1rem;
  align-items: flex-start;
}
.project-preview {
  width: 88px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 6px;
  border: .5px solid rgba(26, 26, 26, 0.1);
  overflow: hidden;
  background: rgba(26, 26, 26, 0.03);
}
.project-preview img {
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: .85;
}
.project-preview-empty { width: 100%; height: 100%; }

.project-right { flex: 1; }
.project-desc {
  font-size: .82rem;
  line-height: 1.7;
  color: var(--text-light);
  max-width: 480px;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .35rem;
  padding-top: .75rem;
}
.project-tag {
  font-size: .7rem;
  color: var(--text-light);
  padding: .2rem .55rem;
  border: .5px solid rgba(26, 26, 26, 0.12);
  border-radius: 99px;
}
.project-footer { padding-top: 1rem; }
.project-link {
  font-size: .75rem;
  font-weight: 500;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--text-light);
  text-decoration: none;
  transition: color .2s;
}
.project-link:hover { color: var(--text-color); }
</style>
