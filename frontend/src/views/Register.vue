<template>
  <div class="p-4 max-w-sm mx-auto mt-10">
    <h2 class="text-2xl mb-4">Register</h2>
    <form @submit.prevent="registerUser">
      <input v-model="name" placeholder="Name" class="input" />
      <input v-model="email" placeholder="Email" class="input" />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="input"
      />
      <button type="submit" class="btn w-full">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../services/api";
import { useRouter } from "vue-router";

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
