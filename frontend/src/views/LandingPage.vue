<template>
  <div class="background">
    <nav class="navbar">EV Charging Station</nav>

    <div class="container">
      <h1 class="title">EV Charging Station Info</h1>

      <p class="subtitle">
        Find, track, and manage your charging stations easily
      </p>

      <p class="more-info">
        Access real-time status, location details, and pricing information for
        EV charging stations near you. Join our community to contribute and
        share reviews.
      </p>

      <div class="buttons">
        <router-link to="/login" class="button button-primary"
          >Login</router-link
        >
        <router-link to="/register" class="button button-outline"
          >Register</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic required
</script>
