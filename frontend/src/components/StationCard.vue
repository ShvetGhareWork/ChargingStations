<template>
  <div
    class="border p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
  >
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ station.name }}</h3>
    <div class="space-y-1 text-gray-600">
      <p>
        <span class="font-medium text-gray-700">Status:</span>
        {{ station.status }}
      </p>
      <p>
        <span class="font-medium text-gray-700">Power Output:</span>
        {{ station.powerOutput }} kW
      </p>
      <p>
        <span class="font-medium text-gray-700">Connector:</span>
        {{ station.connectorType }}
      </p>
    </div>

    <div class="flex gap-3 mt-4">
      <button
        @click="$emit('edit', station)"
        class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
      >
        Edit
      </button>
      <button
        @click="$emit('delete', station._id)"
        class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-200 ease-in-out transform hover:scale-105"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["station"]);
defineEmits(["edit", "delete"]);
</script>
