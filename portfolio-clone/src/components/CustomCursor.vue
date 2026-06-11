<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const x = ref(0);
const y = ref(0);

const updateMousePosition = (e) => {
  x.value = e.clientX;
  y.value = e.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
});
</script>

<template>
  <div 
    class="cursor-glow" 
    :style="{ background: `radial-gradient(400px at ${x}px ${y}px, rgba(70, 105, 225, 0.07), transparent 60%)` }"
  ></div>
</template>

<style scoped>
.cursor-glow {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  transition: opacity 0.3s ease;
}
</style>
