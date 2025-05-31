<template>
  <div class="add-charge-base-container">
    <h1 class="add-charge-base-title">Add New Charge Base</h1>
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
