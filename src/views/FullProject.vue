<template>
  <v-sheet>
    <main>
      <v-row class="ma-0">
        <!-- GALLERY -->
        <v-col class="order-1 order-lg-0 col-12 col-lg-8 pa-0 py-lg-0">
          <devices-3-d v-if="currentProject == 1" class="d-none d-lg-block"></devices-3-d>
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
          <router-link :to="{ name: 'FullProject', params: { id: getPrevOrNextId('next') }}">
            <next-project></next-project>
          </router-link>
        </v-col>
        <!-- GALLERY END -->
        <v-col class="col-12 col-lg-4 pa-0 pa-lg-3">
          <v-navigation-drawer
            absolute
            touchless
            permanent
            right
            width="100%"
            class="drawer pa-5 pa-sm-10"
          >
            <aside class="d-flex flex-column justify-space-between">
              <section class="h100 d-flex flex-column justify-space-between justify-sm-start">
                <div>
                  <div class="d-flex justify-space-between mb-8">
                    <router-link
                      :to="{ name: 'Home'}"
                      @click.native="scrollFix('#featured-projects-container')"
                    >
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            color="white"
                            class="back-home-icon"
                            v-bind="attrs"
                            v-on="on"
                            @mouseover="cursorHover"
                            @mouseleave="cursorLeave"
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
                            <v-icon
                              class="gray300-text"
                              v-bind="attrs"
                              v-on="on"
                              @mouseover="cursorHover"
                              @mouseleave="cursorLeave"
                            >mdi-arrow-left</v-icon>
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
                            <v-icon
                              class="gray300-text"
                              v-bind="attrs"
                              v-on="on"
                              @mouseover="cursorHover"
                              @mouseleave="cursorLeave"
                            >mdi-arrow-right</v-icon>
                          </template>
                          <span>Next</span>
                        </v-tooltip>
                      </router-link>
                    </div>
                  </div>
                  <div>
                    <p class="featured-text light-purple-text serif-font mb-1">Featured project</p>
                    <h2 class="mb-4 gray100-text regular">{{projectNames[currentProject - 1]}}</h2>
                    <v-divider></v-divider>
                    <component
                      class="project-description gray100-text thin d-block mt-5"
                      :is="projectDescComponent"
                    ></component>
                    <div class="d-flex align-center mt-5 flex-wrap">
                      <span
                        class="mr-4 light-purple-text"
                        v-for="n in technologiesUsed.length"
                        :key="n"
                      >{{technologiesUsed[n-1]}}</span>
                      <a v-if="('github' in webLinks)" target="_blank" :href="webLinks.github">
                        <v-btn class="mr-4" icon>
                          <v-icon
                            class="light-purple-text"
                            @mouseover="cursorHover"
                            @mouseleave="cursorLeave"
                          >mdi-github</v-icon>
                        </v-btn>
                      </a>
                    </div>
                  </div>
                </div>
                <div v-if="('host' in webLinks)" class="d-flex my-6">
                  <a
                    target="_blank"
                    :href="webLinks.host"
                    @mouseover="cursorHover(); setCursorContrast()"
                    @mouseleave="cursorLeave(); removeCursorContrast()"
                  >
                    <liquid-button bgcolor="purple-bg">
                      <span>visit</span>
                    </liquid-button>
                  </a>
                  <v-btn
                    depressed
                    outlined
                    :color="darkMode ? 'white' : '#98a2db'"
                    class="theme-btn ml-4"
                    :class="darkMode ? 'gray-200-text': 'light-purple-text'"
                    v-if="'dark' in imageURLs"
                    @click="switchColorMode()"
                    @mouseover="cursorHover"
                    @mouseleave="cursorLeave"
                  >{{ darkMode ? 'Light' : 'Dark' }}</v-btn>
                </div>
              </section>
              <scroll-icon class="d-none d-sm-block d-lg-none"></scroll-icon>
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
import Devices3D from "./../components/full_projects/Devices3D";
import NextProject from "./../components/full_projects/NextProject";

export default {
  mixins: [technologiesUsed, projectNames, webLinks, imageURLs],
  components: {
    VideoProject1,
    VideoProject5,
    Devices3D,
    NextProject,
  },
  data() {
    return {
      currentProject: this.$route.params.id,
      technologiesUsed: null,
      webLinks: null,
      imageURLs: null,
      projectDescComponent: "ProjectDesc" + this.$route.params.id,
      darkMode: false,
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
      this.avoidScrollRestoration();
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
    },
    avoidScrollRestoration() {
      // This prevents the page from scrolling down to where it was previously.
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
      window.scrollTo(0, 0);
    },
    //Implementation to be able to go to a specific anchor when redirecting to another router view
    scrollFix(hashbang) {
      location.hash = hashbang;
    },
  },
  computed: {
    getColorMode() {
      return this.darkMode ? this.imageURLs.dark : this.imageURLs.light;
    },
  },
  created() {
    this.updateComponent();
  },
  mounted() {
    //Implementation to be able to go to a specific anchor when redirecting to another router view
    // From testing, without a brief timeout, it won't work.
    setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.updateComponent();
      }
    },
  },
};
</script>

<style scoped lang="scss">
main {
  @include fullScreen();
  .row {
    ::v-deep video {
      width: 100%;
    }
    .theme-btn {
      font-family: Montserrat;
      font-weight: $bold;
      height: auto;
      font-size: 16px;
      max-width: 152px;
      flex: 1 1 auto;
      letter-spacing: 8px;
      ::v-deep span {
        margin-right: -8px; //Same value as letter spacing
      }
    }
    .drawer {
      max-width: 33.33%;
      height: 100vh !important;
      position: fixed;
      background-color: #0e0c16;
      aside {
        height: 100%;
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
        .btn-github {
          justify-content: inherit;
          color: $purple;
        }
        hr {
          border-color: $light-purple;
        }
        .divider-project-number {
          width: 95%;
          border-color: $gray-100;
        }
        ::v-deep .scroll-to-icon {
          box-shadow: inset 0 0 0 2px $gray-300;
          &::after {
            background: $gray-300;
          }
        }
      }
    }
  }
}
@media (max-width: 1264px) {
  main {
    .row {
      .drawer {
        max-width: 100%;
        position: initial;
      }
    }
  }
}
</style>