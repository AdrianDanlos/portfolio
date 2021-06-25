<template>
  <v-sheet>
    <v-container
      class="content-wrapper flex-column my-sm-16"
      id="experience-container"
    >
      <v-row>
        <v-col class="col-12">
          <section-title class="mb-sm-16">
            <span>
              <span class="z-index-priority">My</span>&nbsp;
              <underline class="main-title"> <span>work</span> </underline
              >&nbsp;
              <span class="z-index-priority">experience</span>
            </span>
          </section-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-12 col-sm-8">
          <v-row>
            <v-col class="col-sm-2 pt-1 z-index-priority">
              <div class="d-flex">
                <div id="job-border-out">
                  <div
                    id="job-border-in"
                    class="w100 absolute"
                    :class="tabSelected"
                  ></div>
                </div>
                <div @mouseover="cursorHover" @mouseleave="cursorLeave">
                  <p @click="currentJob = 1" class="jobs-item">2019 - 2020</p>
                  <p @click="currentJob = 2" class="jobs-item">2020 - 2021</p>
                  <p
                    @click="goAnimation(), (currentJob = null)"
                    class="jobs-item"
                  >
                    Present
                  </p>
                </div>
              </div>
            </v-col>
            <v-col v-if="currentJob === 1" class="col-12 col-sm-10">
              <h4 class="mb-2">
                FullStack Developer
                <a
                  href="https://ibaiscanbit.com/en/"
                  target="_blank"
                  @mouseover="cursorHover"
                  @mouseleave="cursorLeave"
                >
                  <span class="company">@IbaiScanbit</span>
                </a>
              </h4>
              <h5 class="mb-5">1 year, June 2019 - June 2020</h5>
              <ul>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Developed multiple Web Apps
                  for scholarly and published digital content using Dspace open
                  source package.
                </li>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Contributed to over 10 Web
                  Apps that serve as digital repositories for public
                  institutions and big companies.
                </li>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Test and implementation of
                  performant and responsive code to ensure cross-browser
                  compatibility and responsiveness in all devices.
                </li>
              </ul>
            </v-col>
            <v-col v-if="currentJob === 2" class="col-12 col-sm-10">
              <h4 class="mb-2">
                Frontend Developer
                <a
                  href="https://www.linkedin.com/company/benocs"
                  target="_blank"
                  @mouseover="cursorHover"
                  @mouseleave="cursorLeave"
                >
                  <span class="company">@Benocs - Deutsche Telekom</span>
                </a>
              </h4>
              <h5 class="mb-5">November 2020 - Present</h5>
              <ul>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Architected and implemented
                  the frontend of the the first ever ISP/CDN cooperative
                  application to provide ISPs and CDNs with next-generation
                  network telemetry and analytics.
                </li>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Performing on a variety
                  of different languages, platforms and frameworks such as
                  React, MobX, TypeScript, Django, Cypress, Sass, Docker, Internal and
                  3rd party APIs...
                </li>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Working under a startup mindset, utilizing modern technologies and methodologies (scrum) to ensure efficiency and high quality code. 
                </li>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Currently developing our software for some the most well known ISP/Internet brands worldwide.
                </li>
              </ul>
            </v-col>
            <v-col v-if="!currentJob" class="col-12 col-sm-10 px-0 px-sm-3">
              <h4 class="mb-2 ml-3 ml-sm-0">
                Frontend Developer
                <span class="light-violet-text">@YourCompany</span>
              </h4>
              <h1 class="ml4">
                <span class="letters letters-1">Don't be</span>
                <span class="letters letters-2">A stranger</span>
                <span
                  class="letters letters-3"
                  @mouseover="cursorHover"
                  @mouseleave="cursorLeave"
                  @click="redirect(5)"
                  >Contact me</span
                >
              </h1>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-sm-4">
          <v-img src="/images/nomad.svg"></v-img>
        </v-col>
      </v-row>
      <!-- Recomendation quotes -->
      <v-row class="mt-16 recomendations">
        <v-col
          class="
            col-10
            offset-1
            col-sm-6
            offset-sm-0
            pl-sm-11 pl-md-0
            pr-sm-9 pr-md-12
          "
        >
          <quotes>
            <template v-slot:text>
              <p class="ma-0 text-container">
                <strong
                  >...Implemented and developed on his own for the
                  clients...</strong
                >
                <span class="text"
                  >We must indicate that his integration in the work team has
                  been totally satisfactory, as well as his attitude and
                  participation in the projects, being active and
                  cooperative.</span
                >
              </p>
            </template>
            <template v-slot:author>
              <div class="author flex-column flex-sm-row">
                <div class="dash d-none d-sm-block"></div>
                <span class="name">Izaskun Ucar,&nbsp;</span>
                <span class="light-violet-text"
                  >Project Manager @IbaiScanbit</span
                >
              </div>
            </template>
          </quotes>
        </v-col>
        <v-col
          class="
            col-10
            offset-1
            col-sm-6
            offset-sm-0
            pl-sm-11 pl-md-0
            pr-sm-9 pr-md-12
            mt-16 mt-sm-0
          "
        >
          <quotes>
            <template v-slot:text>
              <p class="ma-0 text-container">
                <strong
                  >His participation in the different projects developed has
                  been remarkable...</strong
                >
                <span class="text"
                  >...contributing to their high level. Not only has he
                  contributed academically but he has also been able to lead the
                  work team.</span
                >
              </p>
            </template>
            <template v-slot:author>
              <div class="author flex-column flex-sm-row">
                <div class="dash d-none d-sm-block"></div>
                <span class="name">Nieves Ruiz Nogueras,&nbsp;</span>
                <span class="light-violet-text"
                  >Computer Science Professor</span
                >
              </div>
            </template>
          </quotes>
        </v-col>
      </v-row>
      <v-row class="mt-16 mb-10">
        <v-col class="col-12 pl-5">
          <section-title>
            <underline> <span>Clients</span> </underline>&nbsp; I worked for
            @IbaiScanbit
          </section-title>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col
          v-for="n in clients.length"
          :key="n"
          class="d-flex d-sm-block justify-center col-6 col-sm-3 pb-8"
        >
          <img
            class="w100"
            :src="'/images/clients/' + clients[n - 1]"
            alt="clients"
            :style="[
              n === clients.length ? { width: '40%' } : { width: '65%' },
            ]"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import clientsImagesURLs from "./../../shared/mixins/clients/clientsImagesURLs";
import redirects from "./../../shared/mixins/redirects";
import Quotes from "./../experience/child/Quotes";

export default {
  mixins: [clientsImagesURLs, redirects],
  components: { Quotes },
  data() {
    return {
      currentJob: 2,
    };
  },
  methods: {
    goAnimation() {
      if (this.currentJob) {
        setTimeout(() => {
          var ml4 = {};
          ml4.opacityIn = [0, 1];
          ml4.scaleIn = [0.2, 1];
          ml4.scaleOut = 3;
          ml4.durationIn = 800;
          ml4.durationOut = 600;
          ml4.delay = 500;

          this.$anime
            .timeline({ loop: false })
            .add({
              targets: ".ml4 .letters-1",
              opacity: ml4.opacityIn,
              scale: ml4.scaleIn,
              duration: ml4.durationIn,
            })
            .add({
              targets: ".ml4 .letters-1",
              opacity: 0,
              scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
              delay: ml4.delay,
            })
            .add({
              targets: ".ml4 .letters-2",
              opacity: ml4.opacityIn,
              scale: ml4.scaleIn,
              duration: ml4.durationIn,
            })
            .add({
              targets: ".ml4 .letters-2",
              opacity: 0,
              scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
              delay: ml4.delay,
            })
            .add({
              targets: ".ml4 .letters-3",
              opacity: ml4.opacityIn,
              scale: ml4.scaleIn,
              duration: ml4.durationIn,
            })
            .add({
              targets: ".ml4 .letters-3",
              easing: "easeInExpo",
            });
          // .add({
          //   targets: ".ml4",
          //   opacity: 0,
          //   duration: 500,
          //   delay: 500,
          // });
        }, 10);
      }
    },
  },
  computed: {
    // a computed getter
    tabSelected: function () {
      // `this` points to the vm instance
      return this.currentJob ? "tab" + this.currentJob : "tab3";
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .main-title.underline-container {
  .text {
    &::after {
      content: "work";
      left: -73px;
    }
  }
}
.tab1 {
  top: 0;
}
.tab2 {
  top: 33%;
}
.tab3 {
  top: 66.6%;
}
h4,
h5,
.ml4 {
  color: $gray-500;
}
#job-border-out {
  width: 2px;
  background: $gray-300;
  position: relative;
  #job-border-in {
    height: 33%;
    transition: all 0.3s;
    background-color: $light-violet;
  }
}
.jobs-item {
  padding: 10px;
  margin-bottom: 0;
  font-size: 15px;
  color: $gray-400;
}
h4 {
  font-family: $title-font;
}
.company {
  color: $light-violet;
}
ul {
  padding: 0;
  li {
    display: flex;
    align-items: flex-start;
    list-style: none;
    margin-bottom: 15px;
    color: $gray-400;
    i {
      margin-right: 20px;
      font-size: 15px;
      color: $light-violet !important;
    }
  }
}
.ml4 {
  position: relative;
  font-weight: 700;
  font-size: 4.5em;
  .letters {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0.3em;
    right: 0;
    opacity: 0;
    width: fit-content;
    font-family: Montserrat;
  }
}
.recomendations {
  strong {
    color: $light-violet;
    font-size: 25px;
    margin-bottom: 25px;
    display: block;
  }
  .text {
    color: $gray-400;
  }
  .author {
    display: flex;
    align-items: center;
    margin-top: 25px;
    color: $gray-500;
    font-family: $title-font;
    font-size: 15px;
    .dash {
      width: 25px;
      height: 2px;
      background-color: $gray-400;
      margin-right: 10px;
    }
    .name {
      white-space: break-spaces;
    }
  }
}
@media (max-width: 600px) {
  .ml4 {
    height: 120px;
    overflow: hidden;
    margin: 0;
    font-size: 3em;
  }
}
</style>