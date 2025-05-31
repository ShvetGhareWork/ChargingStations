import { createRouter, createWebHistory } from "vue-router";
import ActiveStations from "../views/ActiveStations.vue";
import AddStation from "../views/AddStation.vue";
import Login from "../views/Login.vue"; // ⬅️ import your Login view
import Register from "../views/Register.vue";
import MapPage from "../views/MapPage.vue";

const routes = [
  { path: "/register", name: "Register", component: Register }, // start at login page
  { path: "/login", name: "Login", component: Login }, // ⬅️ add this route
  { path: "/active", name: "ActiveStations", component: ActiveStations },
  { path: "/add", name: "AddStation", component: AddStation },
  { path: "/map", name: "MapView", component: MapPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
