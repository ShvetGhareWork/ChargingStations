<template>
  <div
    class="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-6 py-3 z-50"
  >
    <!-- Logo -->
    <div class="text-2xl font-bold flex items-center space-x-2">
      ⚡ <span>ChargeBase</span>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-6">
      <router-link
        to="/active"
        class="text-gray-700 font-medium hover:text-blue-600"
        active-class="text-blue-600 font-semibold"
      >
        🔌 Active Stations
      </router-link>
      <router-link
        to="/add"
        class="text-gray-700 font-medium hover:text-blue-600"
        active-class="text-blue-600 font-semibold"
      >
        ➕ Add Station
      </router-link>
      <router-link
        to="/map"
        class="text-gray-700 font-medium hover:text-blue-600"
        active-class="text-blue-600 font-semibold"
      >
        🗺️ Map View
      </router-link>
      <router-link
        to="/login"
        class="text-gray-700 font-medium hover:text-blue-600"
        active-class="text-blue-600 font-semibold"
      >
        🔐 Login
      </router-link>
      <router-link
        to="/register"
        class="text-gray-700 font-medium hover:text-blue-600"
        active-class="text-blue-600 font-semibold"
      >
        📝 Register
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>
