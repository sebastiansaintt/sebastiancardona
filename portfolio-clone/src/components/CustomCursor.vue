<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const x = ref(0);
const y = ref(0);
const dotX = ref(0);
const dotY = ref(0);

const isHovering = ref(false);

const updateMousePosition = (e) => {
  x.value = e.clientX;
  y.value = e.clientY;
};

// Smooth following effect
const animate = () => {
  dotX.value += (x.value - dotX.value) * 0.15;
  dotY.value += (y.value - dotY.value) * 0.15;
  requestAnimationFrame(animate);
};

const handleMouseOver = (e) => {
  if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
    isHovering.value = true;
  }
};

const handleMouseOut = () => {
  isHovering.value = false;
};

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
  document.addEventListener('mouseover', handleMouseOver);
  document.addEventListener('mouseout', handleMouseOut);
  requestAnimationFrame(animate);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
  document.removeEventListener('mouseover', handleMouseOver);
  document.removeEventListener('mouseout', handleMouseOut);
});
</script>

<template>
  <div class="cursor-dot" :style="{ left: x + 'px', top: y + 'px' }"></div>
  <div class="cursor-outline" :class="{ 'is-hovering': isHovering }" :style="{ left: dotX + 'px', top: dotY + 'px' }"></div>
</template>

<style scoped>
.cursor-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent-color);
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
}

.cursor-outline {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(65, 105, 225, 0.5); /* Soft royal blue */
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
  transition: width 0.3s, height 0.3s, background-color 0.3s;
}

.cursor-outline.is-hovering {
  width: 60px;
  height: 60px;
  background-color: rgba(65, 105, 225, 0.1);
  border-color: transparent;
}
</style>
