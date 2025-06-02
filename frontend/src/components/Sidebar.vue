<template>
  <div class="navbar">
    <!-- Logo -->
    <div class="nav-logo">⚡ <span class="nav-name">ChargeMe</span></div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <NavLinks />
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="menuOpen = !menuOpen" class="mobile-menu-button">☰</button>
  </div>

  <!-- Mobile Dropdown Menu -->
  <div v-if="menuOpen" class="mobile-menu">
    <NavLinks @link-clicked="menuOpen = false" />
  </div>
</template>

<script setup>
import { ref, defineComponent, h } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);

// Reusable NavLinks component
const NavLinks = defineComponent({
  emits: ["link-clicked"],
  setup(props, { emit }) {
    const handleClick = () => emit("link-clicked");
    return () =>
      h("div", { class: "nav-links" }, [
        h(
          RouterLink,
          {
            to: "/active",
            class: "nav-link",
            onClick: handleClick,
          },
          "Active Stations"
        ),
        h(
          RouterLink,
          {
            to: "/add",
            class: "nav-link",
            onClick: handleClick,
          },
          "Add Station"
        ),
        h(
          RouterLink,
          {
            to: "/map",
            class: "nav-link",
            onClick: handleClick,
          },
          "Map View"
        ),
        h(
          RouterLink,
          {
            to: "/login",
            class: "nav-link",
            onClick: handleClick,
          },
          "Login"
        ),
        h(
          RouterLink,
          {
            to: "/register",
            class: "nav-link",
            onClick: handleClick,
          },
          "Register"
        ),
      ]);
  },
});
</script>
