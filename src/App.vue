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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;700;900&family=Nunito+Sans:wght@400;900&family=Fira+Code:wght@100;400;700;900&display=swap");
.section-push-up{
  padding-bottom: 50px;
}
.no-scroll {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}
.light-text {
  color: lightgray;
}
.dark-text {
  color: #263238;
}
.dark-lighten-text {
  color: #5e7682;
}
.container.content-wrapper {
  max-width: 1200px;
}

/* #F44336 */
/* #ff9e00 */
</style>
