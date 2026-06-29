<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const mouseX = ref(-100);
const mouseY = ref(-100);
const ringX = ref(-100);
const ringY = ref(-100);
const isHovered = ref(false);
const isHidden = ref(true);

let velocityX = 0;
let velocityY = 0;
const stiffness = 0.08; // Spring strength
const friction = 0.72;   // Spring damping/resistance
let animationFrameId = null;

const updateMousePosition = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
  isHidden.value = false;
};

const handleMouseLeave = () => {
  isHidden.value = true;
};

const handleMouseEnter = () => {
  isHidden.value = false;
};

// Check if hovered element is interactive
const handleMouseOver = (e) => {
  const target = e.target;
  if (
    target.tagName === 'A' ||
    target.tagName === 'BUTTON' ||
    target.closest('a') ||
    target.closest('button') ||
    target.closest('.interactive') ||
    target.closest('.magnetic') ||
    target.classList.contains('interactive') ||
    target.classList.contains('magnetic')
  ) {
    isHovered.value = true;
  } else {
    isHovered.value = false;
  }
};

const tick = () => {
  // Spring physics calculation
  const dx = mouseX.value - ringX.value;
  const dy = mouseY.value - ringY.value;
  
  const ax = dx * stiffness;
  const ay = dy * stiffness;
  
  velocityX = (velocityX + ax) * friction;
  velocityY = (velocityY + ay) * friction;
  
  ringX.value += velocityX;
  ringY.value += velocityY;
  
  animationFrameId = requestAnimationFrame(tick);
};

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
  document.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('mouseenter', handleMouseEnter);
  window.addEventListener('mouseover', handleMouseOver);
  
  // Set initial position
  ringX.value = window.innerWidth / 2;
  ringY.value = window.innerHeight / 2;
  
  tick();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
  document.removeEventListener('mouseleave', handleMouseLeave);
  document.removeEventListener('mouseenter', handleMouseEnter);
  window.removeEventListener('mouseover', handleMouseOver);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<template>
  <div class="custom-cursor-container" :class="{ 'is-hidden': isHidden }">
    <!-- Center Dot -->
    <div 
      class="cursor-dot" 
      :style="{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${isHovered ? 0 : 1})` }"
    ></div>
    <!-- Outer Lag Ring -->
    <div 
      class="cursor-ring" 
      :class="{ 'is-hovered': isHovered }"
      :style="{ transform: `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)` }"
    ></div>
  </div>
</template>

<style scoped>
.custom-cursor-container {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.is-hidden {
  opacity: 0;
}

.cursor-dot {
  position: absolute;
  top: -3px;
  left: -3px;
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25);
  will-change: transform;
}

.cursor-ring {
  position: absolute;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  pointer-events: none;
  transition: 
    width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25),
    height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25),
    border-color 0.3s ease,
    background-color 0.3s ease;
  will-change: transform, width, height;
}

.cursor-ring.is-hovered {
  width: 56px;
  height: 56px;
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 1);
  /* Adjust transform offset because size changed from 36px to 56px */
  margin-top: -10px;
  margin-left: -10px;
}

@media (max-width: 768px) {
  .custom-cursor-container {
    display: none;
  }
}
</style>
