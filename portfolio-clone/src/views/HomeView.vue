<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import CommandPalette from '../components/CommandPalette.vue'
import HeroSection from '../components/HeroSection.vue'
import StatusBadge from '../components/StatusBadge.vue'
import TechStack from '../components/TechStack.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import GithubActivity from '../components/GithubActivity.vue'
import FooterSection from '../components/FooterSection.vue'

const isCmdOpen = ref(false)
const toastMessage = ref('')
let toastTimeout = null

const showToast = (msg) => {
  toastMessage.value = msg || 'Email copied to clipboard!'
  if (toastTimeout) clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    toastMessage.value = ''
  }, 2400)
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
    <!-- Sticky Glass Top Navigation Bar -->
    <Navbar @open-command-palette="isCmdOpen = true" />

    <!-- Command Palette (⌘ K) Modal -->
    <CommandPalette 
      v-model:isOpen="isCmdOpen" 
      @copied-email="showToast"
    />

    <!-- Main Editorial Single-Column Content Flow (max-w-4xl) -->
    <main class="flex-1 w-full space-y-5 pb-20 pt-4">
      <!-- Hero Section (Avatar Swap, Role Blur Carousel, Copy Email) -->
      <HeroSection @copied-email="showToast" />

      <!-- Current Status Badge (Separated from TechStack to reduce vertical gap) -->
      <StatusBadge />

      <!-- Tech Stack 2-Column Responsive Grid -->
      <TechStack />

      <!-- Featured Projects (2-Column Aspect-Ratio Cards) -->
      <ProjectsSection />

      <!-- Experience / Education & Architecture Principles Accordions -->
      <AboutSection />

      <!-- GitHub Activity Calendar Heatmap -->
      <GithubActivity />

      <!-- Footer with Copyright & Links -->
      <FooterSection />
    </main>

    <!-- Bottom Fade Screen Mask -->
    <div class="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-[50px] bg-gradient-to-t from-background/90 to-transparent bottom-screen-mask"></div>

    <!-- Global Toast Feedback -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-4 opacity-0 scale-95"
    >
      <div 
        v-if="toastMessage" 
        class="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-border/80 bg-card/95 px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground shadow-xl backdrop-blur-md"
        role="status"
      >
        <span class="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
        <span>{{ toastMessage }}</span>
      </div>
    </Transition>
  </div>
</template>
