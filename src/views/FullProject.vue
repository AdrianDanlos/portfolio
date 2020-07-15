<template>
  <v-sheet>
    <main>
      <v-row>
        <v-col class="col-8"></v-col>
        <v-col class="col-4">
          <v-navigation-drawer absolute permanent right width="100%" class="drawer pa-10">
            <div class="d-flex justify-space-between mb-8">
              <router-link :to="{ name: 'Home'}">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-arrow-left</v-icon>
                  </template>
                  <span>Go back home</span>
                </v-tooltip>
              </router-link>
              <div>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-arrow-left</v-icon>
                  </template>
                  <span>Previous</span>
                </v-tooltip>
                <v-icon>mdi-slash-forward</v-icon>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-arrow-right</v-icon>
                  </template>
                  <span>Next</span>
                </v-tooltip>
              </div>
            </div>
            <p>Featured project</p>
            <span>{{projectNames[currentProject - 1]}}</span>
            <component :is="projectDescComponent"></component>
            <div class="d-flex">
              <span
                class="mr-4"
                v-for="n in projectTechnologies.length"
                :key="n"
              >{{projectTechnologies[n-1]}}</span>
            </div>
            <a v-if="('github' in project1)" target="_blank" :href="project1.github">
              <v-icon class="mr-4">mdi-github</v-icon>
            </a>
            <a v-if="('host' in project1)" target="_blank" :href="project1.host">
              <v-icon class="mr-4">mdi-web</v-icon>
            </a>

            <!-- <v-divider></v-divider> -->
          </v-navigation-drawer>
        </v-col>
      </v-row>
    </main>
  </v-sheet>
</template>

<script>
import technologiesUsed from "./../shared/mixins/projects/technologiesUsed";
import projectNames from "./../shared/mixins/projects/projectNames";
import webLinks from "./../shared/mixins/projects/webLinks";

export default {
  mixins: [technologiesUsed, projectNames, webLinks],
  data() {
    return {
      currentProject: this.$route.params.id,
      projectTechnologies: null,
      //We get the description of the current component as a string to render it in the template as a component
      projectDescComponent: "ProjectDesc" + this.$route.params.id
    };
  },
  created() {
    //We get the current project
    this.projectTechnologies = "project" + this.currentProject;
    //We get our project object from the string. "project1" -> project1
    this.projectTechnologies = this[this.projectTechnologies];
  }
};
</script>

<style scoped lang="scss">
main {
  @include fullScreen();
  border: 1px solid blue;
}
.row {
  height: 100%;
  .drawer {
    max-width: 33.33% !important;
    .v-icon {
      font-size: 20px;
    }
  }
}
.col {
  border: 1px solid red;
}
</style>