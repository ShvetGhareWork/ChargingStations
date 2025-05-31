<template>
  <div>
    <StationCard
      v-for="station in stations"
      :key="station._id"
      :station="station"
      @edit="openEditForm"
      @delete="deleteStation"
    />
    <StationForm
      v-if="editingStation"
      :isEdit="true"
      :stationData="editingStation"
      @submit="updateStation"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";
import StationCard from "../components/StationCard.vue";
import StationForm from "../components/StationForm.vue";

const stations = ref([]);
const editingStation = ref(null);

const fetchStations = async () => {
  const res = await api.get("/stations");
  stations.value = res.data;
};

onMounted(fetchStations);

const openEditForm = (station) => {
  editingStation.value = station;
};

const updateStation = async (updatedData) => {
  try {
    await api.put(`/stations/${editingStation.value._id}`, updatedData);
    editingStation.value = null;
    fetchStations();
  } catch (err) {
    console.error("Update failed", err);
    alert("Update failed.");
  }
};

const deleteStation = async (id) => {
  await api.delete(`/stations/${id}`);
  fetchStations();
};
</script>
