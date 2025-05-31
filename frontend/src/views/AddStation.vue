<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Add New Charge Base</h1>
    <StationForm :isEdit="false" @submit="createStation" />
  </div>
</template>

<script setup>
import api from "../services/api";
import StationForm from "../components/StationForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const createStation = async (station) => {
  await api.post("/stations", station);
  router.push("/active");
};
</script>
