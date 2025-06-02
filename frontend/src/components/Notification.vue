<template>
  <div v-if="visible" class="notification" :class="type">
    {{ message }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: "success", // 'success' | 'error'
  },
});

const visible = ref(true);

setTimeout(() => {
  visible.value = false;
}, 3000);
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.8rem 1.25rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  z-index: 9999;
  animation: fade-in 0.3s ease-out, fade-out 0.3s ease-in 2.7s forwards;
}

.success {
  background-color: #22c55e;
}

.error {
  background-color: #ef4444;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
