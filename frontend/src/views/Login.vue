<template>
  <div class="login-page">
    <!-- Left Half (Image) -->
    <div class="login-image">
      <img src="" alt="" />
    </div>

    <!-- Right Half (Login Form) -->
    <div class="login-form">
      <form @submit.prevent="loginUser" class="form-container">
        <h2 class="title">Login</h2>
        <input
          v-model="email"
          type="email"
          placeholder="Enter email"
          class="input"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Enter password"
          class="input"
        />
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router";
import { isLoggedIn } from "../state.js";
// import "/evcharing"; // Ensure you have the correct path to your CSS

const email = ref("");
const password = ref("");
const router = useRouter();

const loginUser = async () => {
  try {
    const res = await api.post("/auth/login", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("token", res.data.token);
    isLoggedIn.value = true; // ✅ Update reactive state
    router.push("/active");
  } catch (err) {
    alert("Login failed.");
  }
};
</script>
