<template>
  <div class="navbar">
    <!-- Logo -->
    <div class="nav-logo">⚡ <span class="nav-name">ChargeMe</span></div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <NavLinks />
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="menuOpen = !menuOpen" class="mobile-menu-button nav-name">
      ☰
    </button>
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
  emits: ["link-clicked", "logout"],
  setup(props, { emit }) {
    const handleClick = () => emit("link-clicked");
    const handleLogout = () => emit("logout");

    // Check if user is logged in by presence of token
    const loggedIn = !!localStorage.getItem("token");

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
        !loggedIn &&
          h(
            RouterLink,
            {
              to: "/login",
              class: "nav-link",
              onClick: handleClick,
            },
            "Login"
          ),
        !loggedIn &&
          h(
            RouterLink,
            {
              to: "/register",
              class: "nav-link",
              onClick: handleClick,
            },
            "Register"
          ),

        // Add logout button only if logged in
        loggedIn &&
          h(
            "button",
            {
              class: "nav-link logout-button",
              onClick: () => {
                handleLogout();
                handleClick();
              },
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontWeight: "500",
                color: "#ef4444", // red color for logout
              },
            },
            "Logout"
          ),
      ]);
  },
});
</script>
