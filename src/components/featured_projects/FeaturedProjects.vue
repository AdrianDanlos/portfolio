<template>
  <v-sheet color="#09192F">
    <v-container class="flex-column" id="featured-projects-container">

          <h3 class="content-wrapper gray100-text pl-6">Featured projects</h3>
 

      <v-row class="content-wrapper">
        <v-col>
          <featured-project></featured-project>
        </v-col>
      </v-row>
      <v-row class="content-wrapper">
        <v-col>
          <featured-project></featured-project>
        </v-col>
      </v-row>
      <v-row class="content-wrapper">
        <v-col>
          <featured-project></featured-project>
        </v-col>
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