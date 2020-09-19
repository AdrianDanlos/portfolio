<template>
  <span>
    An enterprise web app designed to provide quicker
    <span
      class="special-text"
    >assistance to road incidents</span> by providing real-time data trough webcams, graphs, map visualization and
    <span
      class="special-text"
    >route algorithms</span> that allow technicians to solve incidents in a rapid and easy way.
    <div v-if="currentRouteName === 'FullProject'">
      <p class="mb-0 mt-4">User: operario1@operario1.com</p>
      <p>Password: 12345678</p>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      shortVersion: true,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>