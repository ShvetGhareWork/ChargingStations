<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 bg-gray-50 pt-16">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>
