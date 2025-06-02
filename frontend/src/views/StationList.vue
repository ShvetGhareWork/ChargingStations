<template>
  <Sidebar />
  <div class="p-4">
    <h2 class="text-2xl mb-4">Charging Stations</h2>
    <button @click="showAddForm = true" class="btn mb-4">Add Station</button>

    <StationForm
      v-if="showAddForm"
      :isEdit="isEdit"
      :stationData="formStation"
      @submit="handleSubmit"
    />

    <div class="grid grid-cols-3 gap-4">
      <StationCard
        v-for="station in stations"
        :key="station._id"
        :station="station"
        @edit="editStation"
        @delete="deleteStation"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";
import StationCard from "../components/StationCard.vue";
import StationForm from "../components/StationForm.vue";
import Sidebar from "../components/Sidebar.vue";

const stations = ref([]);
const showAddForm = ref(false);
const formStation = ref({});
const isEdit = ref(false);

const fetchStations = async () => {
  const res = await api.get("/stations");
  stations.value = res.data;
};

const deleteStation = async (id) => {
  await api.delete(`/stations/${id}`);
  fetchStations();
};

const editStation = (station) => {
  formStation.value = { ...station };
  isEdit.value = true;
  showAddForm.value = true;
};

const handleSubmit = async (station) => {
  if (isEdit.value) {
    await api.put(`/stations/${station._id}`, station);
  } else {
    await api.post("/stations", station);
  }
  fetchStations();
  showAddForm.value = false;
};

onMounted(() => {
  fetchStations();
});
</script>
