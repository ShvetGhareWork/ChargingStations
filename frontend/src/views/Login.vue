<template>
  <div class="p-4 max-w-sm mx-auto mt-10">
    <h2 class="text-2xl mb-4">Login</h2>
    <form @submit.prevent="loginUser">
      <input v-model="email" placeholder="Email" class="input" />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="input"
      />
      <button type="submit" class="btn w-full">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router";

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
    router.push("/active");
  } catch (err) {
    alert("Login failed.");
  }
};
</script>

<style scoped>
.input {
  display: block;
  margin-bottom: 12px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.btn {
  background: #2563eb;
  color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>
