<template>
  <div class="map-wrapper">
    <div id="map"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";

const props = defineProps({
  stations: Array,
});

let map;
let markerCluster;

onMounted(() => {
  map = L.map("map").setView([28.6139, 77.209], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  markerCluster = L.markerClusterGroup();
  map.addLayer(markerCluster);

  renderMarkers();
});

watch(
  () => props.stations,
  () => {
    renderMarkers();
  },
  { immediate: true, deep: true }
);

const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function renderMarkers() {
  if (!map) return;

  markerCluster.clearLayers();

  props.stations.forEach((station) => {
    const { latitude, longitude } = station.location;

    const marker = L.marker([latitude, longitude], {
      icon: customIcon,
    });

    marker.bindPopup(`
      <b>${station.name}</b><br>
      Power: ${station.powerOutput} kW<br>
      Status: ${station.status}
    `);

    markerCluster.addLayer(marker);
  });
}
</script>
