<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const mouseX = ref(-1000);
const mouseY = ref(-1000);
const glowX = ref(-1000);
const glowY = ref(-1000);
const isHovered = ref(false);
const isHidden = ref(true);

const ease = 0.15; // Smooth follow factor
let animationFrameId = null;

const updateMousePosition = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
  isHidden.value = false;
};

const handleMouseLeave = () => { isHidden.value = true; };
const handleMouseEnter = () => { isHidden.value = false; };

// Slightly intensify the glow over interactive elements
const handleMouseOver = (e) => {
  const target = e.target;
  isHovered.value = !!(
    target.closest &&
    target.closest('a, button, .interactive, .magnetic')
  );
};

const tick = () => {
  glowX.value += (mouseX.value - glowX.value) * ease;
  glowY.value += (mouseY.value - glowY.value) * ease;
  animationFrameId = requestAnimationFrame(tick);
};

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
  document.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('mouseenter', handleMouseEnter);
  window.addEventListener('mouseover', handleMouseOver);
  tick();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
  document.removeEventListener('mouseleave', handleMouseLeave);
  document.removeEventListener('mouseenter', handleMouseEnter);
  window.removeEventListener('mouseover', handleMouseOver);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <div class="cursor-glow-container" :class="{ 'is-hidden': isHidden }" aria-hidden="true">
    <div
      class="cursor-glow"
      :class="{ 'is-hovered': isHovered }"
      :style="{ transform: `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)` }"
    ></div>
  </div>
</template>

<style scoped>
.cursor-glow-container {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  transition: opacity 0.6s ease;
}

.is-hidden {
  opacity: 0;
}

.cursor-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(29, 78, 216, 0.15) 0%,
    rgba(94, 234, 212, 0.06) 35%,
    transparent 70%
  );
  opacity: 0.9;
  transition: opacity 0.4s ease, width 0.4s ease, height 0.4s ease;
  will-change: transform;
}

.cursor-glow.is-hovered {
  opacity: 1;
  width: 680px;
  height: 680px;
}

:global(html.light) .cursor-glow {
  background: radial-gradient(
    circle at center,
    rgba(13, 148, 136, 0.10) 0%,
    rgba(59, 130, 246, 0.05) 35%,
    transparent 70%
  );
}

@media (max-width: 768px), (hover: none) {
  .cursor-glow-container {
    display: none;
  }
}
</style>
