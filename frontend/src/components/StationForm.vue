<template>
  <div class="p-4 border rounded bg-gray-50">
    <h3 class="text-lg font-bold mb-2">
      {{ isEdit ? "Edit" : "Add" }} Station
    </h3>
    <form @submit.prevent="submitForm">
      <input v-model="station.name" placeholder="Name" class="input" />

      <input v-model="station.latitude" placeholder="Latitude" class="input" />
      <input
        v-model="station.longitude"
        placeholder="Longitude"
        class="input"
      />

      <input
        v-model="station.powerOutput"
        placeholder="Power Output (kW)"
        class="input"
      />

      <input
        v-model="station.connectorType"
        placeholder="Connector Type"
        class="input"
      />

      <select v-model="station.status" class="input">
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button type="submit" class="btn mt-2">
        {{ isEdit ? "Update" : "Add" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

// Props
const props = defineProps({
  stationData: Object, // optional for Add, filled for Edit
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

// Watch for stationData prop changes to populate the form in edit mode
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
      // Clear form for Add mode
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

// Form submission handler
const submitForm = () => {
  const lat = parseFloat(station.latitude);
  const lng = parseFloat(station.longitude);

  // Basic validation
  if (!station.name) return alert("Name is required");
  if (isNaN(lat) || isNaN(lng))
    return alert("Valid latitude and longitude required");
  if (!station.powerOutput || isNaN(Number(station.powerOutput)))
    return alert("Valid power output required");
  if (!station.connectorType) return alert("Connector type required");

  // Build final payload
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

  // Emit to parent
  emit("submit", payload);
};
</script>

<style scoped>
.input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.btn {
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
