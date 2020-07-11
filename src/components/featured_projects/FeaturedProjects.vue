<template>
  <v-sheet color="#09192F">
    <v-container id="featured-projects-container">
      <v-row class="content-wrapper">
        <featured-project></featured-project>
      </v-row>
      <v-row class="content-wrapper">
        <featured-project></featured-project>
      </v-row>
      <v-row class="content-wrapper">
        <featured-project></featured-project>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import FeaturedProject from "./child/FeaturedProject";
export default {
  components: {
    FeaturedProject
  }
};
</script>

<style lang="scss">
#featured-projects-container {
  @include fullHeight();
}
</style>