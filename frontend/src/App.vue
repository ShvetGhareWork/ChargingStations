<template>
  <div class="flex">
    <Sidebar />
    <div
      class="ml-64 w-[calc(100%-16rem)] h-screen overflow-auto bg-gray-50 p-6"
    >
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>
