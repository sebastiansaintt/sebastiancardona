<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import cachedData from '../assets/contributions.json'

const { t } = useI18n()

const totalContributions = ref(cachedData?.total?.lastYear ?? 247)
const contributionWeeks = ref([])

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const processContributions = (days) => {
  const weeks = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }
  return weeks
}

if (cachedData?.contributions?.length) {
  contributionWeeks.value = processContributions(cachedData.contributions)
}

const monthMarkers = computed(() => {
  const markers = []
  let lastMonth = -1
  let lastIdx = -10

  contributionWeeks.value.forEach((week, idx) => {
    if (!week[0]) return
    const date = new Date(week[0].date + 'T12:00:00Z')
    const month = date.getUTCMonth()

    if (month !== lastMonth && (idx - lastIdx) >= 3) {
      markers.push({
        weekIndex: idx,
        label: monthNames[month]
      })
      lastMonth = month
      lastIdx = idx
    }
  })
  return markers
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00Z')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const getTooltipText = (day) => {
  if (!day) return ''
  const formatted = formatDate(day.date)
  if (day.count === 0) return `No contributions on ${formatted}`
  if (day.count === 1) return `1 contribution on ${formatted}`
  return `${day.count} contributions on ${formatted}`
}

const fetchContributions = async () => {
  try {
    const res = await fetch('https://github-contributions-api.jogruber.de/v4/sebastiansaintt?y=last')
    if (res.ok) {
      const data = await res.json()
      if (data.total) {
        totalContributions.value = data.total.lastYear ?? (typeof data.total === 'object' ? Object.values(data.total).reduce((a, b) => a + b, 0) : data.total)
      }
      if (data.contributions?.length > 0) {
        contributionWeeks.value = processContributions(data.contributions)
      }
    }
  } catch (err) {
    // Keep cached data
  }
}

onMounted(() => {
  fetchContributions()
})
</script>

<template>
  <section id="activity" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="GitHub Activity">
    <!-- Mobile Sticky Header -->
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {{ t('navActivity') }}
      </h2>
    </div>

    <!-- GitHub Contribution Graph Card -->
    <div class="rounded-lg border border-slate-800 bg-slate-900/40 p-4 sm:p-5 backdrop-blur-sm transition-colors hover:border-slate-700">
      <div class="overflow-x-auto pb-2">
        <div class="inline-block min-w-[680px]">
          <!-- Month labels row -->
          <div class="flex items-center text-[10px] font-mono text-slate-400 mb-1.5 h-3.5 pl-6 relative">
            <span 
              v-for="marker in monthMarkers" 
              :key="marker.weekIndex"
              class="absolute select-none uppercase tracking-wider"
              :style="{ left: `calc(24px + ${marker.weekIndex * 13}px)` }"
            >
              {{ marker.label }}
            </span>
          </div>

          <!-- Calendar Graph with Days-of-Week labels -->
          <div class="flex items-start gap-1.5">
            <!-- Day of week column (Mon, Wed, Fri) -->
            <div class="flex flex-col gap-[3px] text-[9px] font-mono text-slate-400 pt-[13px] select-none w-5 leading-[10px]">
              <span class="h-[10px]">Mon</span>
              <span class="h-[10px] mt-[10px]">Wed</span>
              <span class="h-[10px] mt-[10px]">Fri</span>
            </div>

            <!-- Weeks columns -->
            <div class="flex gap-[3px]">
              <div 
                v-for="(week, wIdx) in contributionWeeks" 
                :key="wIdx" 
                class="flex flex-col gap-[3px]"
              >
                <div 
                  v-for="(day, dIdx) in week" 
                  :key="dIdx" 
                  class="size-[10px] rounded-[2px] cursor-pointer transition-transform hover:scale-125 hover:z-10"
                  :class="`gh-day-${day.level}`"
                  :title="getTooltipText(day)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Graph Footer Summary & Legend -->
      <div class="mt-3 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] font-medium tracking-wider text-slate-400 border-t border-slate-800/60 pt-3">
        <p class="uppercase">
          <span class="text-slate-200 font-semibold">{{ totalContributions }}</span>
          {{ t('githubContributions') }}
        </p>

        <!-- Intensity Scale matching GitHub Green -->
        <div class="flex items-center gap-1.5 select-none">
          <span class="uppercase text-[10px] text-slate-500">{{ t('githubLess') }}</span>
          <div class="size-[10px] rounded-[2px] gh-day-0" title="0 contributions" />
          <div class="size-[10px] rounded-[2px] gh-day-1" title="1-3 contributions" />
          <div class="size-[10px] rounded-[2px] gh-day-2" title="4-6 contributions" />
          <div class="size-[10px] rounded-[2px] gh-day-3" title="7-9 contributions" />
          <div class="size-[10px] rounded-[2px] gh-day-4" title="10+ contributions" />
          <span class="uppercase text-[10px] text-slate-500">{{ t('githubMore') }}</span>
        </div>
      </div>

      <!-- Profile Link -->
      <a 
        href="https://github.com/sebastiansaintt" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="mt-2.5 inline-block font-mono text-xs text-slate-400 transition-colors hover:text-teal-300 hover:underline"
      >
        {{ t('githubProfileLink') }} ↗
      </a>
    </div>
  </section>
</template>
