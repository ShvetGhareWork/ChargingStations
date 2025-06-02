<template>
  <Sidebar />

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
          :disabled="loading"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Enter password"
          class="input"
          :disabled="loading"
        />
        <button type="submit" class="btn" :disabled="loading">
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </button>
      </form>
    </div>

    <!-- Loader overlay -->
    <Loader v-if="loading" />

    <Notification v-if="visible" message="Login successful!" type="success" />
    <Notification
      v-if="showErrorNotification"
      message="Login failed. Please try again."
      type="error"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router";
import { isLoggedIn } from "../services/state.js";
import Notification from "../components/Notification.vue";
import Sidebar from "../components/Sidebar.vue";
import Loader from "../components/Loader.vue";

const email = ref("");
const password = ref("");
const router = useRouter();

const loading = ref(false);
const visible = ref(false);
const showErrorNotification = ref(false);

const loginUser = async () => {
  loading.value = true;
  showErrorNotification.value = false;
  visible.value = false;

  try {
    const res = await api.post("/auth/login", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("token", res.data.token);
    isLoggedIn.value = true;
    visible.value = true;
    router.push("/active");
  } catch (err) {
    showErrorNotification.value = true;
    alert("Login failed.");
  } finally {
    loading.value = false;
  }
};
</script>
