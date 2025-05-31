<template>
  <div class="map-page">
    <h2>Charger Map</h2>
    <div class="map-wrapper">
      <MapView :stations="stations" />
    </div>
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
