<template>
  <div class="border p-4 rounded shadow bg-white">
    <h3 class="text-lg font-bold">{{ station.name }}</h3>
    <p>Status: {{ station.status }}</p>
    <p>Power Output: {{ station.powerOutput }} kW</p>
    <p>Connector: {{ station.connectorType }}</p>
    <div class="flex gap-2 mt-2">
      <button @click="$emit('edit', station)" class="text-blue-500">
        Edit
      </button>
      <button @click="$emit('delete', station._id)" class="text-red-500">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["station"]);
defineEmits(["edit", "delete"]);
</script>
