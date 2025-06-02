<template>
  <div class="background-wrapper"></div>
  <div class="station-card">
    <h3 class="station-title">{{ station.name }}</h3>
    <div class="station-info">
      <p><span>Status:</span> {{ station.status }}</p>
      <p><span>Power Output:</span> {{ station.powerOutput }} kW</p>
      <p><span>Connector:</span> {{ station.connectorType }}</p>
    </div>

    <div class="button-group">
      <button @click="$emit('edit', station)" class="button button-edit">
        Edit
      </button>
      <button
        @click="$emit('delete', station._id)"
        class="button button-delete"
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
