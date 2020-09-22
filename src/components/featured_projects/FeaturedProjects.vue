<template>
  <v-sheet>
    <v-container class="content-wrapper flex-column mt-sm-15" id="featured-projects-container">
      <v-row class="pb-sm-4">
        <v-col class="pb-0 pb-sm-3">
          <section-title class="mb-0 mb-sm-8 text-center text-sm-left px-1 px-sm-0">
            <span>
              <span class="z-index-priority">Some</span>&nbsp;
              <underline>
                <span>projects</span>
              </underline>&nbsp;
              <span class="z-index-priority">I have built</span>
            </span>
          </section-title>
        </v-col>
      </v-row>
      <!-- PROJECT 1 -->
      <v-row class="mb-5 mb-sm-15">
        <v-col>
          <featured-project :projectNumber="1">
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: 'rgb(22, 82, 46)' }"></div>
              <div class="side-title-container">
                <span>V</span>
                <span>U</span>
                <span class="mb-4">E</span>
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>L</span>
                <span>D</span>
              </div>
            </template>
            <slot>
              <v-img height="100%" src="/images/projects/vueworld/landing.jpg"></v-img>
            </slot>
            <template v-slot:project-title>
              <span>{{ projectNames[0] }}</span>
            </template>
            <template v-slot:project-description>
              <project-desc-1></project-desc-1>
            </template>
            <template v-slot:languages-used>
              <span
                :class="{'mr-4': n !== techsProject1.length}"
                v-for="n in techsProject1.length"
                :key="n"
              >{{techsProject1[n-1]}}</span>
            </template>
            <template v-slot:web-links>
              <a target="_blank" :href="linksProject1.github">
                <v-btn class="ml-n2 mr-4" icon @mouseover="cursorHover" @mouseleave="cursorLeave">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </a>
              <a target="_blank" :href="linksProject1.host">
                <v-btn class="mr-4" icon @mouseover="cursorHover" @mouseleave="cursorLeave">
                  <v-icon>mdi-web</v-icon>
                </v-btn>
              </a>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <!-- PROJECT 2 -->
      <v-row class="mb-5 mb-sm-15">
        <v-col>
          <featured-project reverse :projectNumber="2">
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: '#454976' }"></div>
              <div class="side-title-container">
                <span>U</span>
                <span>J</span>
                <span class="mb-4">I</span>
                <span>R</span>
                <span>E</span>
                <span>P</span>
                <span>O</span>
              </div>
            </template>
            <slot>
              <v-img height="100%" src="/images/projects/uji/3.png"></v-img>
            </slot>
            <template v-slot:project-title>
              <span>{{ projectNames[1] }}</span>
            </template>
            <template v-slot:project-description>
              <project-desc-2></project-desc-2>
            </template>
            <template v-slot:languages-used>
              <span
                :class="{'google-maps': n === techsProject2[0], 'ml-4': n !== 1 }"
                v-for="n in techsProject2.length"
                :key="n"
              >{{techsProject2[n-1]}}</span>
            </template>
            <template v-slot:web-links>
              <a target="_blank" :href="linksProject2.host">
                <v-btn
                  class="mr-4 mr-sm-0 ml-sm-4"
                  icon
                  @mouseover="cursorHover"
                  @mouseleave="cursorLeave"
                >
                  <v-icon>mdi-web</v-icon>
                </v-btn>
              </a>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <!-- PROJECT 3 -->
      <v-row class="mb-5 mb-sm-15">
        <v-col>
          <featured-project :projectNumber="3">
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: '#1E2337' }"></div>
              <div class="side-title-container">
                <span>A</span>
                <span>P</span>
                <span>E</span>
                <span class="mb-4">X</span>
                <span>T</span>
                <span>R</span>
                <span>A</span>
                <span>C</span>
                <span>K</span>
                <span>E</span>
                <span>R</span>
              </div>
            </template>
            <slot>
              <v-img height="100%" src="/images/projects/apex/apex.jpg"></v-img>
            </slot>
            <template v-slot:project-title>
              <span>{{ projectNames[2] }}</span>
            </template>
            <template v-slot:project-description>
              <project-desc-3></project-desc-3>
            </template>
            <template v-slot:languages-used>
              <span
                :class="{'mr-4': n !== techsProject3.length}"
                v-for="n in techsProject3.length"
                :key="n"
              >{{techsProject3[n-1]}}</span>
            </template>
            <template v-slot:web-links>
              <a target="_blank" :href="linksProject3.github">
                <v-btn class="ml-n2 mr-4" icon @mouseover="cursorHover" @mouseleave="cursorLeave">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </a>
              <a target="_blank" :href="linksProject3.host">
                <v-btn class="mr-4" icon @mouseover="cursorHover" @mouseleave="cursorLeave">
                  <v-icon>mdi-web</v-icon>
                </v-btn>
              </a>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <!-- PROJECT 4 -->
      <v-row class="mb-5 mb-sm-15">
        <v-col>
          <featured-project reverse :projectNumber="4">
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: '#274f62' }"></div>
              <div class="side-title-container">
                <span>C</span>
                <span>L</span>
                <span>O</span>
                <span>U</span>
                <span class="mb-4">D</span>
                <span>R</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
              </div>
            </template>
            <slot>
              <v-img height="100%" src="/images/projects/cloudroad/dark/mapa.png"></v-img>
            </slot>
            <template v-slot:project-title>
              <span>{{ projectNames[1] }}</span>
            </template>
            <template v-slot:project-description>
              <project-desc-4></project-desc-4>
            </template>
            <template v-slot:languages-used>
              <span
                :class="{'google-maps': n === techsProject4[0], 'ml-4': n !== 1 }"
                v-for="n in techsProject4.length"
                :key="n"
              >{{techsProject4[n-1]}}</span>
            </template>
            <template v-slot:web-links>
              <a target="_blank" :href="linksProject4.github">
                <v-btn
                  class="mr-4 mr-sm-0 ml-n2 ml-sm-4"
                  icon
                  @mouseover="cursorHover"
                  @mouseleave="cursorLeave"
                >
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </a>
              <a target="_blank" :href="linksProject4.host">
                <v-btn
                  class="mr-4 mr-sm-0 ml-sm-4"
                  icon
                  @mouseover="cursorHover"
                  @mouseleave="cursorLeave"
                >
                  <v-icon>mdi-web</v-icon>
                </v-btn>
              </a>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <!-- PROJECT 5 -->
      <v-row class="mb-5 mb-sm-15">
        <v-col>
          <featured-project :projectNumber="5">
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: '#4D728F' }"></div>
              <div class="side-title-container">
                <span>C</span>
                <span>I</span>
                <span>T</span>
                <span>I</span>
                <span>E</span>
                <span>S</span>
              </div>
            </template>
            <slot>
              <v-img height="100%" src="/images/projects/manhattan/landing.jpg"></v-img>
            </slot>
            <template v-slot:project-title>
              <span>{{ projectNames[4] }}</span>
            </template>
            <template v-slot:project-description>
              <project-desc-5></project-desc-5>
            </template>
            <template v-slot:languages-used>
              <span
                :class="{'mr-4': n !== techsProject5.length}"
                v-for="n in techsProject5.length"
                :key="n"
              >{{techsProject5[n-1]}}</span>
            </template>
          </featured-project>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import FeaturedProject from "./child/FeaturedProject";
import technologiesUsed from "./../../shared/mixins/projects/technologiesUsed";
import projectNames from "./../../shared/mixins/projects/projectNames";
import webLinks from "./../../shared/mixins/projects/webLinks";

export default {
  mixins: [technologiesUsed, projectNames, webLinks],
  components: {
    FeaturedProject,
  },
};
</script>

<style lang="scss" scoped>
#featured-projects-container {
  @include fullHeight();
}
::v-deep .underline-container {
  .text {
    &::after {
      content: "projects";
      left: -131px;
    }
  }
}
.shadow,
.side-title-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
}
.shadow {
  opacity: 0.7;
  border-radius: 4px;
}
.side-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 16px 0;
  span {
    font-family: $title-font;
    font-size: 18px;
    font-weight: $thin;
    color: white;
  }
}
.main-title {
  font-family: $title-font;
  font-weight: $thin;
  font-size: 50px;
  position: relative;
  .decoration-line {
    position: absolute;
    height: 2px;
    width: 50%;
    top: 50%;
    left: 50%;
  }
}

@media (max-width: 1264px) {
  .main-title {
    .decoration-line {
      width: 35%;
      left: 65%;
    }
  }
}
@media (max-width: 960px) {
  ::v-deep .underline-container {
    .text {
      &::after {
        left: -168px;
      }
    }
  }
}
@media (max-width: 600px) {
  h4 {
    font-size: 30px;
  }
  .google-maps {
    width: min-content;
  }
}
</style>