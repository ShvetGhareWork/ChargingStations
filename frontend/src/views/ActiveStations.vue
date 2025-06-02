<template>
  <Sidebar />
  <div class="station-wrapper"></div>

  <div class="stations-wrapper">
    <h2 class="page-title">Active Stations</h2>

    <!-- Show loader while loading -->
    <Loader v-if="loading" />

    <div v-if="!loading && stations.length > 0" class="stations-grid">
      <StationCard
        v-for="station in stations"
        :key="station._id"
        :station="station"
        @edit="openEditForm"
        @delete="deleteStation"
      />
    </div>

    <div v-else-if="!loading && stations.length === 0" class="no-stations">
      <p>No active stations now.</p>
      <button @click="goToAdd" class="create-button">Create One</button>
    </div>

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
import { useRouter } from "vue-router";
import api from "../services/api";
import StationCard from "../components/StationCard.vue";
import StationForm from "../components/StationForm.vue";
import Sidebar from "../components/Sidebar.vue";
import Loader from "../components/Loader.vue"; // Import loader

const stations = ref([]);
const editingStation = ref(null);
const loading = ref(false); // loading state
const router = useRouter();

const fetchStations = async () => {
  loading.value = true;
  try {
    const res = await api.get("/stations");
    stations.value = res.data;
  } catch (err) {
    console.error("Failed to fetch stations", err);
    stations.value = [];
  } finally {
    loading.value = false;
  }
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
  try {
    await api.delete(`/stations/${id}`);
    fetchStations();
  } catch (err) {
    console.error("Delete failed", err);
    alert("Delete failed.");
  }
};

const goToAdd = () => {
  router.push("/add");
};
</script>
