<template>
  <v-sheet color="#09192F">
    <v-container class="content-wrapper flex-column" id="featured-projects-container">
      <h3 class="gray100-text pl-6">Featured projects</h3>
      <v-row>
        <v-col>
          <featured-project>
            <template v-slot:project-title>
              <span>Yujuuuu</span>
            </template>
            <template v-slot:project-description>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis atque natus optio quasi nesciunt, tempora est, expedita voluptas explicabo ab maiores veritatis quisquam odit et numquam, cupiditate quaerat autem.</span>
            </template>
            <template v-slot:languages-used>
              <span>VueJS</span>
              <span>JS</span>
              <span>LARAVEL</span>
            </template>
            <template v-slot:links>
              <v-icon>mdi-github</v-icon>
              <v-icon>mdi-github</v-icon>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <featured-project :reverse="true">
            <template v-slot:project-title>
              <span>Yujuuuu</span>
            </template>
            <template v-slot:project-description>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis atque natus optio quasi nesciunt, tempora est, expedita voluptas explicabo ab maiores veritatis quisquam odit et numquam, cupiditate quaerat autem.</span>
            </template>
            <template v-slot:languages-used>
              <span>VueJS</span>
              <span>JS</span>
              <span>LARAVEL</span>
            </template>
            <template v-slot:links>
              <v-icon>mdi-github</v-icon>
              <v-icon>mdi-github</v-icon>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <featured-project>
            <template v-slot:project-title>
              <span>Yujuuuu</span>
            </template>
            <template v-slot:project-description>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis atque natus optio quasi nesciunt, tempora est, expedita voluptas explicabo ab maiores veritatis quisquam odit et numquam, cupiditate quaerat autem.</span>
            </template>
            <template v-slot:languages-used>
              <span>VueJS</span>
              <span>JS</span>
              <span>LARAVEL</span>
            </template>
            <template v-slot:links>
              <v-icon>mdi-github</v-icon>
              <v-icon>mdi-github</v-icon>
            </template>
          </featured-project>
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