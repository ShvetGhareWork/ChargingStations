<template>
  <div class="p-4">
    <h2 class="text-2xl mb-4 font-bold">Charger Map</h2>
    <MapView :stations="stations" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";
import MapView from "../components/MapView.vue";

const stations = ref([]);

const fetchStations = async () => {
  try {
    const res = await api.get("/stations");
    stations.value = res.data;
  } catch (err) {
    console.error("Error fetching stations:", err);
  }
};

onMounted(() => {
  fetchStations();
});
</script>
