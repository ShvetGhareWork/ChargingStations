<template>
  <div class="station-form-container">
    <h3 class="station-form-title">{{ isEdit ? "Edit" : "Add" }} Station</h3>
    <form @submit.prevent="submitForm">
      <input
        v-model="station.name"
        placeholder="Name"
        class="station-form-input"
      />

      <input
        v-model="station.latitude"
        placeholder="Latitude"
        class="station-form-input"
      />
      <input
        v-model="station.longitude"
        placeholder="Longitude"
        class="station-form-input"
      />

      <input
        v-model="station.powerOutput"
        placeholder="Power Output (kW)"
        class="station-form-input"
      />

      <input
        v-model="station.connectorType"
        placeholder="Connector Type"
        class="station-form-input"
      />

      <select v-model="station.status" class="station-form-input">
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button type="submit" class="station-form-button mt-2">
        {{ isEdit ? "Update" : "Add" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

// Props
const props = defineProps({
  stationData: Object,
  isEdit: Boolean,
});

// Events
const emit = defineEmits(["submit"]);

// Reactive form model
const station = reactive({
  name: "",
  latitude: "",
  longitude: "",
  status: "Active",
  powerOutput: "",
  connectorType: "",
});

// Watch for prop changes
watch(
  () => props.stationData,
  (newVal) => {
    if (newVal) {
      station.name = newVal.name || "";
      station.latitude = newVal.location?.latitude?.toString() || "";
      station.longitude = newVal.location?.longitude?.toString() || "";
      station.status = newVal.status || "Active";
      station.powerOutput = newVal.powerOutput?.toString() || "";
      station.connectorType = newVal.connectorType || "";
    } else {
      station.name = "";
      station.latitude = "";
      station.longitude = "";
      station.status = "Active";
      station.powerOutput = "";
      station.connectorType = "";
    }
  },
  { immediate: true }
);

// Submit handler
const submitForm = () => {
  const lat = parseFloat(station.latitude);
  const lng = parseFloat(station.longitude);

  if (!station.name) return alert("Name is required");
  if (isNaN(lat) || isNaN(lng))
    return alert("Valid latitude and longitude required");
  if (!station.powerOutput || isNaN(Number(station.powerOutput)))
    return alert("Valid power output required");
  if (!station.connectorType) return alert("Connector type required");

  const payload = {
    name: station.name,
    location: {
      latitude: lat,
      longitude: lng,
    },
    status: station.status,
    powerOutput: Number(station.powerOutput),
    connectorType: station.connectorType,
  };

  emit("submit", payload);
};
</script>
