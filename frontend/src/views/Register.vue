<template>
  <div class="login-page">
    <!-- Left Half (Image) -->
    <div class="login-image">
      <img src="" alt="" />
    </div>

    <!-- Right Half (Register Form) -->
    <div class="login-form">
      <form @submit.prevent="registerUser" class="form-container">
        <h2 class="title">Register</h2>
        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="input"
        />
        <input v-model="email" type="email" placeholder="Email" class="input" />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="input"
        />
        <button type="submit" class="btn">Register</button>
      </form>
    </div>
  </div>
  <Notification
    v-if="showNotification"
    message="Registration successful! Please login."
    type="success"
  />
  <Notification
    v-if="showErrorNotification"
    message="Registration failed. Please try again."
    type="error"
  />
</template>

<script setup>
import { ref } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router";
import Notification from "../components/Notification.vue";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

const registerUser = async () => {
  try {
    await api.post("/auth/register", {
      name: name.value,
      email: email.value,
      password: password.value,
    });
    alert("Registration successful! Please login.");
    router.push("/login");
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed.");
  }
};
</script>
