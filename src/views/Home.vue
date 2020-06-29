<template>
  <div class="overflow-hidden">
    <v-row justify="end" class="ma-3">
      <v-icon v-if="!drawer" @click.stop="drawer = !drawer" style="z-index: 10">mdi-menu</v-icon>
      <v-icon v-if="drawer" @click.stop="drawer = !drawer" style="z-index: 10">mdi-close</v-icon>
    </v-row>

    <v-navigation-drawer v-model="drawer" absolute temporary width="100vw">
      <v-sheet height="100%" class="d-flex flex-column justify-center align-center purple menu">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PROJECTS</a>
        <a href="#">CONTACT</a>
      </v-sheet>
    </v-navigation-drawer>
  </div>
</template>



<script>
export default {
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped>
  .menu a{
    font-size: 60px;
    text-decoration: none;
    color: white;
    line-height: 80px;
  }
</style>
