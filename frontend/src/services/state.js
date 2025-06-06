// src/state.js
import { ref } from "vue";

export const isLoggedIn = ref(!!localStorage.getItem("token"));
