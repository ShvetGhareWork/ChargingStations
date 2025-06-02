<template>
  <div>
    <div v-if="loading" class="loader-container">
      <div class="loader"></div>
    </div>
    <div v-else>
      <p>API Data Loaded!</p>
      <pre>{{ apiData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      apiData: null,
    };
  },
  async mounted() {
    try {
      // Simulate API call with timeout, replace with actual fetch/axios call
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: "API response data here" }), 3000)
      );
      this.apiData = response.data;
    } catch (error) {
      console.error("API error:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
