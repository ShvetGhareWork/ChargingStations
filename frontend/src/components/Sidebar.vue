<template>
  <div class="navbar">
    <!-- Logo -->
    <div class="nav-logo">⚡ <span class="nav-name">ChargeMe</span></div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <NavLinks @logout="handleLogout" />
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="menuOpen = !menuOpen" class="mobile-menu-button nav-name">
      ☰
    </button>
    <Notification
      v-if="showLogoutMessage"
      message="Logged out successfully!"
      type="success"
    />
  </div>

  <!-- Mobile Dropdown Menu -->
  <div v-if="menuOpen" class="mobile-menu">
    <NavLinks @link-clicked="menuOpen = false" @logout="handleLogout" />
  </div>
</template>

<script setup>
import { ref, defineComponent, h, watch } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { isLoggedIn } from "../services/state.js"; // import reactive login state
import Notification from "../components/Notification.vue"; // Import Notification component

const menuOpen = ref(false);
const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem("token");
  isLoggedIn.value = false;
  router.push("/login");
};

const NavLinks = defineComponent({
  emits: ["link-clicked", "logout"],
  setup(props, { emit }) {
    const handleClick = () => emit("link-clicked");
    const handleLogout = () => emit("logout");

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
        !isLoggedIn.value &&
          h(
            RouterLink,
            {
              to: "/login",
              class: "nav-link",
              onClick: handleClick,
            },
            "Login"
          ),
        !isLoggedIn.value &&
          h(
            RouterLink,
            {
              to: "/register",
              class: "nav-link",
              onClick: handleClick,
            },
            "Register"
          ),
        isLoggedIn.value &&
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
                color: "#ef4444",
              },
            },
            "Logout"
          ),
      ]);
  },
});
</script>
