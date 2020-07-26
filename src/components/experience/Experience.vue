<template>
  <v-sheet>
    <v-container class="content-wrapper flex-column mt-sm-16 mb-8">
      <v-row>
        <v-col class="col-12">
          <section-title class="mb-16">
            <span>
              <span class="z-index-priority">My</span>&nbsp;
              <underline class="main-title">
                <span>work</span>
              </underline>&nbsp;
              <span class="z-index-priority">experience</span>
            </span>
          </section-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-8">
          <v-row>
            <v-col class="col-2 pt-1 z-index-priority">
              <p
                @click="currentJob === 0 ? animation() : '', currentJob = 1"
                class="jobs-item"
              >Present</p>
              <p @click="currentJob = 0" class="jobs-item">2019 - 2020</p>
            </v-col>
            <v-col v-if="currentJob === 0" class="col-10">
              <h4 class="mb-2">
                FullStack Developer
                <span class="purple-text">@IbaiScanbit</span>
              </h4>
              <h5 class="mb-5">1 year, 2019 - 2020</h5>
              <ul>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Developed multiple Web Apps for scholarly and published digital content using Dspace open source package.
                </li>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Contributed to over 10 Web Apps that serve as digital repositories for public institutions and big companies.
                </li>
                <li>
                  <v-icon>mdi-chevron-right</v-icon>Test and implementation of performant and responsive code to ensure cross-browser compatibility and responsiveness in all devices.
                </li>
              </ul>
            </v-col>
            <v-col v-if="currentJob === 1" class="col-10">
              <h4 class="mb-2">
                FullStack Developer
                <span class="purple-text">@YourCompany</span>
              </h4>
              <h1 class="ml4">
                <span class="letters letters-1">Ready</span>
                <span class="letters letters-2">Set</span>
                <span class="letters letters-3">Go!</span>
                <span class="letters letters-4">Contact me</span>
              </h1>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="col-4">
          <v-img src="/images/nomad.svg"></v-img>
        </v-col>
      </v-row>
      <v-row class="mt-16 mb-10">
        <v-col class="col-12 pl-5">
          <section-title>
            <underline>
              <span>Clients</span>
            </underline>&nbsp; I worked for @IbaiScanbit
          </section-title>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col v-for="n in clients.length" :key="n" class="col-3 pb-8">
          <img
            class="w100"
            :src="'/images/clients/' + (clients[n-1])"
            alt="clients"
            :style="[n === clients.length ? {width: '80px'} : {width: '65%'}]"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import clientsImagesURLs from "./../../shared/mixins/clients/clientsImagesURLs";
export default {
  mixins: [clientsImagesURLs],
  data() {
    return {
      currentJob: 0,
    };
  },
  methods: {
    animation() {
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
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay,
          })
          .add({
            targets: ".ml4 .letters-4",
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn,
          })
          .add({
            targets: ".ml4 .letters-4",
            easing: "easeInExpo",
          });
        // .add({
        //   targets: ".ml4",
        //   opacity: 0,
        //   duration: 500,
        //   delay: 500,
        // });
      }, 10);
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
h4,
h5,
.ml4 {
  color: $gray-500;
}

.jobs-item {
  border-left: 2px solid $gray-300;
  padding: 10px;
  margin-bottom: 0;
  font-size: 15px;
  cursor: pointer;
  color: $gray-400;
}
h4 {
  font-family: $title-font;
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
      color: $dark-orange !important;
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
</style>