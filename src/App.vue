<template>
  <v-app>
    <!-- header -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- footer -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;900&family=Nunito+Sans:wght@400;900&family=Saira+Condensed:wght@100;400;700;900&display=swap');

.light-text {
  color: lightgray;
}
.dark-text {
  color: rgb(101, 101, 203);
}
</style>