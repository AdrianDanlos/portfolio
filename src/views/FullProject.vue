<template>
  <v-sheet>
    <main>
      <v-row>
        <v-col class="col-8 py-0 pr-1">
          <div v-if="currentProject == 5">
            <video-project-5></video-project-5>
          </div>
          <v-img
            v-for="n in getColorMode.length"
            :key="n"
            width="100%"
            :src="'/images/projects' + (getColorMode[n-1])"
            alt="image"
          />
          <div v-if="currentProject == 1">
            <video-project-1></video-project-1>
          </div>
        </v-col>
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
                <router-link :to="{ name: 'FullProject', params: { id: getPrevOrNextId('prev') }}">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on">mdi-arrow-left</v-icon>
                    </template>
                    <span>Previous</span>
                  </v-tooltip>
                </router-link>
                <v-icon>mdi-slash-forward</v-icon>
                <router-link :to="{ name: 'FullProject', params: { id: getPrevOrNextId('next') }}">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on">mdi-arrow-right</v-icon>
                    </template>
                    <span>Next</span>
                  </v-tooltip>
                </router-link>
              </div>
            </div>
            <p>Featured project</p>
            <span>{{projectNames[currentProject - 1]}}</span>
            <component :is="projectDescComponent"></component>
            <div class="d-flex">
              <span
                class="mr-4"
                v-for="n in technologiesUsed.length"
                :key="n"
              >{{technologiesUsed[n-1]}}</span>
            </div>
            <a v-if="('github' in webLinks)" target="_blank" :href="webLinks.github">
              <v-icon class="mr-4">mdi-github</v-icon>
            </a>
            <a v-if="('host' in webLinks)" target="_blank" :href="webLinks.host">
              <v-icon class="mr-4">mdi-web</v-icon>
            </a>
            <v-btn v-if="'dark' in imageURLs" @click="switchColorMode()">Dark Mode</v-btn>
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
import imageURLs from "./../shared/mixins/projects/imageURLs";
import VideoProject1 from "./../components/full_projects/video_components/VideoProject1";
import VideoProject5 from "./../components/full_projects/video_components/VideoProject5";

export default {
  mixins: [technologiesUsed, projectNames, webLinks, imageURLs],
  components:{
    VideoProject1,
    VideoProject5
  },
  data() {
    return {
      currentProject: this.$route.params.id,
      technologiesUsed: null,
      webLinks: null,
      imageURLs: null,
      projectDescComponent: "ProjectDesc" + this.$route.params.id,
      darkMode: false
    };
  },
  methods: {
    updateComponent() {
      this.currentProject = this.$route.params.id;
      //1.We get the techs of the current project
      //2.We get our project object from the string. "techsProject1" -> techsProject1
      this.technologiesUsed = "techsProject" + this.currentProject;
      this.technologiesUsed = this[this.technologiesUsed];
      this.webLinks = "linksProject" + this.currentProject;
      this.webLinks = this[this.webLinks];
      this.imageURLs = "imgsProject" + this.currentProject;
      this.imageURLs = this[this.imageURLs];
      //We get the description of the current component as a string to render it in the template as a component
      this.projectDescComponent = "ProjectDesc" + this.$route.params.id;
      this.darkMode = false;
    },
    getPrevOrNextId(direction) {
      switch (direction) {
        case "prev":
          return this.currentProject == 1
            ? this.projectNames.length
            : parseInt(this.currentProject) - 1;

        case "next":
          return this.currentProject == this.projectNames.length
            ? 1
            : parseInt(this.currentProject) + 1;
      }
    },
    switchColorMode() {
      this.darkMode = !this.darkMode;
    }
  },
  computed: {
    getColorMode() {
      return this.darkMode ? this.imageURLs.dark : this.imageURLs.light;
    }
  },
  created() {
    this.updateComponent();
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.updateComponent();
      }
    }
  }
};
</script>

<style scoped lang="scss">
main {
  @include fullScreen();
  ::v-deep video {
    width: 100%;
  }
}
.row {
  height: 100%;
  .drawer {
    max-width: 33.33% !important;
    position: fixed;
    .v-icon {
      font-size: 20px;
    }
  }
}
</style>