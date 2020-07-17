<template>
  <v-sheet>
    <main>
      <v-row>
        <v-col class="col-8 py-0 pr-1">
          <v-btn
            :color="darkMode ? 'indigo lighten-4' : '#251f3d'"
            fixed
            class="theme-btn"
            :class="darkMode ? 'black--text': 'white--text'"
            v-if="'dark' in imageURLs"
            @click="switchColorMode()"
          >{{ darkMode ? 'Light Theme' : 'Dark Theme' }}</v-btn>
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
            <aside class="d-flex flex-column justify-space-between">
              <section>
                <div class="d-flex justify-space-between mb-8">
                  <router-link :to="{ name: 'Home'}">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          color="white"
                          class="back-home-icon"
                          v-bind="attrs"
                          v-on="on"
                        >mdi-arrow-left</v-icon>
                      </template>
                      <span>Go back home</span>
                    </v-tooltip>
                  </router-link>
                  <div>
                    <router-link
                      :to="{ name: 'FullProject', params: { id: getPrevOrNextId('prev') }}"
                    >
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon class="gray300-text" v-bind="attrs" v-on="on">mdi-arrow-left</v-icon>
                        </template>
                        <span>Previous</span>
                      </v-tooltip>
                    </router-link>
                    <v-icon class="gray300-text">mdi-slash-forward</v-icon>
                    <router-link
                      :to="{ name: 'FullProject', params: { id: getPrevOrNextId('next') }}"
                    >
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon class="gray300-text" v-bind="attrs" v-on="on">mdi-arrow-right</v-icon>
                        </template>
                        <span>Next</span>
                      </v-tooltip>
                    </router-link>
                  </div>
                </div>
                <div>
                  <p class="featured-text serif-font mb-1">Featured project</p>
                  <h2 class="mb-4 gray100-text regular">{{projectNames[currentProject - 1]}}</h2>
                  <v-divider></v-divider>
                  <component
                    class="project-description gray100-text thin d-block mt-5"
                    :is="projectDescComponent"
                  ></component>
                  <div class="d-flex align-center mt-5">
                    <span
                      class="mr-4 gray400-text"
                      v-for="n in technologiesUsed.length"
                      :key="n"
                    >{{technologiesUsed[n-1]}}</span>
                    <a v-if="('github' in webLinks)" target="_blank" :href="webLinks.github">
                      <v-btn class="mr-4" icon color="#3F51B5">
                        <v-icon class="gray400-text">mdi-github</v-icon>
                      </v-btn>
                    </a>
                  </div>
                  <div class="d-flex mt-6">
                    <a v-if="('host' in webLinks)" target="_blank" :href="webLinks.host">
                      <liquid-button>
                        <span>visit</span>
                      </liquid-button>
                    </a>
                  </div>
                </div>
              </section>
              <div class="d-flex align-center">
                <hr class="divider-project-number" />
                <span class="ml-4 gray100-text">{{ '0' + currentProject }}</span>
              </div>
            </aside>
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
  components: {
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
  .row {
    height: 100%;
    ::v-deep video {
      width: 100%;
    }
    .theme-btn {
      z-index: 100;
      top: 7px;
      right: 33.9%;
    }
    .drawer {
      max-width: 33.33%;
      position: fixed;
      background-color: #0e0c16;
      aside {
        height: 100%;
        .featured-text {
          color: lighten($purple, 25%);
        }
        .back-home-icon {
          padding: 5px;
          border-radius: 50%;
          background-color: $purple;
        }
        .project-description {
          font-size: 17px;
        }
        .v-icon {
          font-size: 20px;
        }
        hr {
          border-color: lighten($purple, 25%);
        }
        .divider-project-number {
          width: 95%;
          border-color: $gray-100;
        }
      }
    }
  }
}
</style>