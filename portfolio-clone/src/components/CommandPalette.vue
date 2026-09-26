<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  Search, 
  CornerDownLeft, 
  FileText, 
  Mail, 
  ExternalLink, 
  Languages, 
  FolderGit2, 
  Layers, 
  User, 
  Home, 
  Activity,
  Check
} from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:isOpen', 'copied-email'])

const { t, locale } = useI18n()
const searchQuery = ref('')
const selectedIndex = ref(0)
const searchInput = ref(null)

const cvLinks = {
  en: { href: '/CV_Sebastian_Cardona_EN.pdf', download: 'CV_Sebastian_Cardona_EN.pdf' },
  es: { href: '/CV_Sebastian_Cardona_Colombia.pdf', download: 'CV_Sebastian_Cardona_Colombia.pdf' }
}

const allCommands = computed(() => [
  {
    category: t('cmdNavigation'),
    items: [
      { id: 'nav-home', label: t('navHome'), icon: Home, action: () => scrollTo('#hero') },
      { id: 'nav-stack', label: t('navStack'), icon: Layers, action: () => scrollTo('#stack') },
      { id: 'nav-projects', label: t('navProjects'), icon: FolderGit2, action: () => scrollTo('#projects') },
      { id: 'nav-activity', label: t('navActivity'), icon: Activity, action: () => scrollTo('#activity') },
      { id: 'nav-contact', label: t('navContact'), icon: Mail, action: () => scrollTo('#contact') }
    ]
  },
  {
    category: t('cmdActions'),
    items: [
      {
        id: 'act-download-cv-en',
        label: t('cmdDownloadCV_EN'),
        icon: FileText,
        action: () => downloadFile(cvLinks.en.href, cvLinks.en.download)
      },
      {
        id: 'act-download-cv-es',
        label: t('cmdDownloadCV_ES'),
        icon: FileText,
        action: () => downloadFile(cvLinks.es.href, cvLinks.es.download)
      },
      {
        id: 'act-copy-email',
        label: t('cmdCopyEmail'),
        icon: Mail,
        action: () => copyEmailToClipboard()
      },
      {
        id: 'act-github',
        label: t('cmdOpenGitHub'),
        icon: ExternalLink,
        action: () => window.open('https://github.com/sebastiansaintt', '_blank')
      },
      {
        id: 'act-linkedin',
        label: t('cmdOpenLinkedIn'),
        icon: ExternalLink,
        action: () => window.open('https://linkedin.com/in/sebastiansaintt', '_blank')
      },
      {
        id: 'act-lang',
        label: t('cmdSwitchLang'),
        icon: Languages,
        action: () => toggleLanguage()
      }
    ]
  }
])

const filteredGroups = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return allCommands.value

  return allCommands.value.map(group => ({
    category: group.category,
    items: group.items.filter(item => 
      item.label.toLowerCase().includes(query) || 
      item.id.toLowerCase().includes(query)
    )
  })).filter(group => group.items.length > 0)
})

const flatItems = computed(() => {
  return filteredGroups.value.flatMap(group => group.items)
})

const close = () => {
  emit('update:isOpen', false)
  searchQuery.value = ''
  selectedIndex.value = 0
}

const scrollTo = (selector) => {
  close()
  nextTick(() => {
    const el = document.querySelector(selector)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

const downloadFile = (href, downloadName) => {
  close()
  const link = document.createElement('a')
  link.href = href
  link.download = downloadName
  link.click()
}

const copyEmailToClipboard = () => {
  close()
  navigator.clipboard.writeText('scarrdona@gmail.com')
  emit('copied-email')
}

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  close()
}

const executeCurrent = () => {
  const items = flatItems.value
  if (items.length > 0 && selectedIndex.value >= 0 && selectedIndex.value < items.length) {
    items[selectedIndex.value].action()
  }
}

const handleKeyDown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    emit('update:isOpen', !props.isOpen)
    return
  }

  if (!props.isOpen) return

  if (e.key === 'Escape') {
    e.preventDefault()
    close()
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (flatItems.value.length > 0) {
      selectedIndex.value = (selectedIndex.value + 1) % flatItems.value.length
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (flatItems.value.length > 0) {
      selectedIndex.value = (selectedIndex.value - 1 + flatItems.value.length) % flatItems.value.length
    }
  } else if (e.key === 'Enter') {
    e.preventDefault()
    executeCurrent()
  }
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    selectedIndex.value = 0
    searchQuery.value = ''
    nextTick(() => {
      searchInput.value?.focus()
    })
  }
})

watch(searchQuery, () => {
  selectedIndex.value = 0
})

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="cmd-fade">
      <div 
        v-if="isOpen" 
        class="cmd-backdrop" 
        @click.self="close" 
        role="dialog" 
        aria-modal="true" 
        :aria-label="t('cmdTitle')"
      >
        <div class="cmd-dialog">
          <!-- Search input bar -->
          <div class="cmd-input-wrapper">
            <Search size="16" class="cmd-search-icon" aria-hidden="true" />
            <input 
              ref="searchInput"
              v-model="searchQuery" 
              type="text" 
              class="cmd-input" 
              :placeholder="t('cmdPlaceholder')" 
              autocomplete="off"
              spellcheck="false"
            />
            <kbd class="cmd-kbd-esc" @click="close">ESC</kbd>
          </div>

          <!-- List of results -->
          <div class="cmd-body">
            <div v-if="filteredGroups.length === 0" class="cmd-empty">
              {{ t('cmdNoResults') }}
            </div>

            <div v-for="(group, gIdx) in filteredGroups" :key="gIdx" class="cmd-group">
              <div class="cmd-group-label">{{ group.category }}</div>
              <div class="cmd-items-list">
                <button
                  v-for="item in group.items"
                  :key="item.id"
                  class="cmd-item"
                  :class="{ selected: flatItems[selectedIndex]?.id === item.id }"
                  @click="item.action()"
                  @mouseenter="selectedIndex = flatItems.findIndex(i => i.id === item.id)"
                >
                  <div class="cmd-item-left">
                    <component :is="item.icon" size="15" class="cmd-item-icon" />
                    <span class="cmd-item-label">{{ item.label }}</span>
                  </div>
                  <CornerDownLeft size="13" class="cmd-item-enter" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <!-- Footer shortcuts -->
          <div class="cmd-footer">
            <div class="cmd-footer-hints">
              <span class="cmd-hint-item">
                <kbd>↑</kbd><kbd>↓</kbd> {{ t('cmdSelect') }}
              </span>
              <span class="cmd-hint-item">
                <kbd>↵</kbd> {{ t('cmdSelect') }}
              </span>
              <span class="cmd-hint-item">
                <kbd>ESC</kbd> {{ t('cmdClose') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.cmd-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(3rem, 12vh, 6rem) 1rem 1rem;
}

.cmd-dialog {
  width: 100%;
  max-width: 580px;
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: cmdSlideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes cmdSlideDown {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.cmd-input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.1rem;
  border-bottom: 1px solid var(--border-color);
}

.cmd-search-icon {
  color: var(--text-muted);
  flex-shrink: 0;
}

.cmd-input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 0.92rem;
  font-family: inherit;
  outline: none;
}

.cmd-input::placeholder {
  color: var(--text-dim);
}

.cmd-kbd-esc {
  font-size: 0.62rem;
  font-weight: 600;
  padding: 0.15rem 0.35rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
  cursor: pointer;
}

.cmd-body {
  max-height: 340px;
  overflow-y: auto;
  padding: 0.5rem;
}

.cmd-empty {
  padding: 2.5rem 1rem;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.cmd-group {
  margin-bottom: 0.5rem;
}

.cmd-group:last-child {
  margin-bottom: 0;
}

.cmd-group-label {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
  padding: 0.4rem 0.75rem 0.25rem;
}

.cmd-items-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cmd-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.75rem;
  border-radius: var(--radius-sm);
  color: var(--text-light);
  font-size: 0.84rem;
  transition: background-color 0.12s ease, color 0.12s ease;
  text-align: left;
}

.cmd-item:hover,
.cmd-item.selected {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.cmd-item-left {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.cmd-item-icon {
  color: var(--text-muted);
  flex-shrink: 0;
}

.cmd-item:hover .cmd-item-icon,
.cmd-item.selected .cmd-item-icon {
  color: #ffffff;
}

.cmd-item-enter {
  color: var(--text-dim);
  opacity: 0;
  transition: opacity 0.12s ease;
}

.cmd-item.selected .cmd-item-enter {
  opacity: 1;
  color: var(--text-muted);
}

.cmd-footer {
  padding: 0.6rem 1rem;
  border-top: 1px solid var(--border-color);
  background: rgba(10, 10, 10, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cmd-footer-hints {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cmd-hint-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.68rem;
  color: var(--text-dim);
}

.cmd-hint-item kbd {
  font-size: 0.62rem;
  padding: 0.1rem 0.3rem;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-muted);
}

/* Transitions */
.cmd-fade-enter-active,
.cmd-fade-leave-active {
  transition: opacity 0.18s ease;
}

.cmd-fade-enter-from,
.cmd-fade-leave-to {
  opacity: 0;
}
</style>
