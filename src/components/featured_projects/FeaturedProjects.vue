<template>
  <v-sheet color="#19182D">
    <v-container class="content-wrapper flex-column" id="featured-projects-container">
      <v-row class="mb-4">
        <v-col>
          <h4 class="mt-sm-15">FEATURED PROJECTS</h4>
          <div class="main-title gray-blue-text">
            <span>Some Things I've Built</span>
            <div class="decoration-line gray-blue-bg"></div>
          </div>
        </v-col>
      </v-row>
      <!-- PROJECT 1 -->
      <v-row class="mb-15">
        <v-col class="px-0">
          <featured-project>
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: 'rgb(22, 82, 46)' }"></div>
              <div class="side-title-container">
                <span class="mt-4">V</span>
                <span>U</span>
                <span>E</span>
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>L</span>
                <span class="mb-4">D</span>
              </div>
            </template>
            <v-hover class="image-card" v-slot:default="{ hover }">
              <v-card ripple :elevation="hover ? 24 : 10" color="transparent">
                <v-img height="100%" src="/images/projects/vueworld/landing.jpg"></v-img>
              </v-card>
            </v-hover>
            <template v-slot:project-title>
              <span>VueWorld</span>
            </template>
            <template v-slot:project-description>
              <span>
                A
                <span class="special-text">lodging</span> SPA that offers accomodation for your trips all around the world. It follows the philosophy of popular websites such as
                <span
                  class="special-text"
                >Airbnb</span>, Hostelworld and Booking. Book your next adventure with us!
              </span>
            </template>
            <template v-slot:languages-used>
              <span class="ml-4">Vue</span>
              <span class="ml-4">VueX</span>
              <span class="ml-4">Php</span>
              <span class="ml-4">Laravel</span>
              <span class="ml-4">Auth</span>
            </template>
            <template v-slot:links>
              <a target="_blank" href="https://github.com/AdrianDanlos/VueWorld">
                <v-icon class="ml-4">mdi-github</v-icon>
              </a>
              <a target="_blank" href="http://vueworld.herokuapp.com/">
                <v-icon class="ml-4">mdi-web</v-icon>
              </a>
              <v-icon class="ml-4">mdi-arrow-right</v-icon>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <!-- PROJECT 2 -->
      <v-row class="mb-15">
        <v-col class="px-0">
          <featured-project reverse>
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: 'rgb(102, 142, 115)' }"></div>
              <div class="side-title-container">
                <span class="mt-4">C</span>
                <span>L</span>
                <span>O</span>
                <span>U</span>
                <span>D</span>
                <span>R</span>
                <span>O</span>
                <span>A</span>
                <span class="mb-4">D</span>
              </div>
            </template>
            <v-hover class="image-card" v-slot:default="{ hover }">
              <v-card ripple :elevation="hover ? 24 : 10" color="transparent">
                <v-img height="100%" src="/images/projects/cloudroad/map.png"></v-img>
              </v-card>
            </v-hover>
            <template v-slot:project-title>
              <span>Cloud Road</span>
            </template>
            <template v-slot:project-description>
              <span>
                A web app designed to provide quicker
                <span
                  class="special-text"
                >assistance to road incidents</span> by providing real-time data trough webcams, graphs, map visualization and
                <span
                  class="special-text"
                >route algorithms</span> that allow technicians to solve incidents in a rapid and easy way.
              </span>
            </template>
            <template v-slot:languages-used>
              <span class="mr-4">GoogleMaps API</span>
              <span class="mr-4">ChartJS</span>
              <span class="mr-4">SASS</span>
              <!-- <span class="mr-4">Dark Mode</span> -->
              <span class="mr-4">Laravel</span>
            </template>
            <template v-slot:links>
              <a target="_blank" href="https://github.com/AdrianDanlos/CloudRoad">
                <v-icon class="mr-4">mdi-github</v-icon>
              </a>
              <a target="_blank" href="http://onthethunder.herokuapp.com/">
                <v-icon class="mr-4">mdi-web</v-icon>
              </a>
              <v-icon class="mr-4">mdi-arrow-right</v-icon>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <!-- PROJECT 3 -->
      <v-row class="mb-15">
        <v-col class="px-0">
          <featured-project>
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: '#1E2337' }"></div>
              <div class="side-title-container">
                <span>A</span>
                <span>P</span>
                <span>E</span>
                <span>X</span>
              </div>
            </template>
            <v-hover class="image-card" v-slot:default="{ hover }">
              <v-card ripple :elevation="hover ? 24 : 10" color="transparent">
                <v-img height="100%" src="/images/projects/apex/apex.jpg"></v-img>
              </v-card>
            </v-hover>
            <template v-slot:project-title>
              <span>Apex Legends Tracker</span>
            </template>
            <template v-slot:project-description>
              <span>
                A
                <span class="special-text">real-time statistic tracker</span> for Apex Legends
                <span class="special-text">videogame</span>. Search for your username to display data about your rank, kills, wins, top3's.. Ideal for all players that would like to keep track of their in-game stats.
              </span>
            </template>
            <template v-slot:languages-used>
              <span class="ml-4">JS</span>
              <span class="ml-4">Apex API</span>
              <span class="ml-4">Firebase</span>
            </template>
            <template v-slot:links>
              <a target="_blank" href="https://github.com/AdrianDanlos/ApexLegends.OPGG">
                <v-icon class="ml-4">mdi-github</v-icon>
              </a>
              <a target="_blank" href="https://apex-opgg.herokuapp.com/">
                <v-icon class="ml-4">mdi-web</v-icon>
              </a>
              <v-icon class="ml-4">mdi-arrow-right</v-icon>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <!-- PROJECT 4 -->
      <v-row class="mb-15">
        <v-col class="px-0">
          <featured-project reverse>
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: '#454976' }"></div>
              <div class="side-title-container">
                <span class="mt-4">F</span>
                <span>N</span>
                <span>E</span>
                <span>X</span>
                <span>U</span>
                <span class="mb-4">S</span>
              </div>
            </template>
            <v-hover class="image-card" v-slot:default="{ hover }">
              <v-card ripple :elevation="hover ? 24 : 10" color="transparent">
                <v-img height="100%" src="/images/projects/fnexus/landing.png"></v-img>
              </v-card>
            </v-hover>
            <template v-slot:project-title>
              <span>Fnexus</span>
            </template>
            <template v-slot:project-description>
              <span>
                A web app dedicated to create a
                <span
                  class="special-text"
                >networking space for entrepreneurs</span>, giving them the posibility to promote themselves and contact other entrepreneurs. Fnexus enalbes them to show off their latest products gaining more
                <span
                  class="special-text"
                >visibility</span> and
                <span class="special-text">recognition</span>.
              </span>
            </template>
            <template v-slot:languages-used>
              <span class="mr-4">JS</span>
              <span class="mr-4">Php</span>
              <span class="mr-4">MySql</span>
              <span class="mr-4">Vagrant</span>
              <span class="mr-4">Email API</span>
            </template>
            <template v-slot:links>
              <a target="_blank" href="https://github.com/AdrianDanlos/Fnexus">
                <v-icon class="mr-4">mdi-github</v-icon>
              </a>
              <v-icon class="mr-4">mdi-arrow-right</v-icon>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <!-- PROJECT 5 -->
      <v-row class="mb-15">
        <v-col class="px-0">
          <featured-project>
            <template v-slot:side-title>
              <div class="shadow" :style="{ background: '#4D728F' }"></div>
              <div class="side-title-container">
                <span class="mt-4">C</span>
                <span>I</span>
                <span>T</span>
                <span>I</span>
                <span>E</span>
                <span class="mb-4">S</span>
              </div>
            </template>
            <v-hover class="image-card" v-slot:default="{ hover }">
              <v-card ripple :elevation="hover ? 24 : 10" color="transparent">
                <v-img height="100%" src="/images/projects/manhattan/landing.jpg"></v-img>
              </v-card>
            </v-hover>
            <template v-slot:project-title>
              <span>Danlos Cities</span>
            </template>
            <template v-slot:project-description>
              <span>
                A Sci-fi -ish website of a company offering to build entire cities. Created to play around with fun
                <span
                  class="special-text"
                >design</span> concepts and ideas following a
                <span class="special-text">minimalist</span> philosophy.
              </span>
            </template>
            <template v-slot:languages-used>
              <span class="ml-4">UX/UI</span>
              <span class="ml-4">Design</span>
              <span class="ml-4">Animations</span>
            </template>
            <template v-slot:links>
              <a target="_blank" href="#">
                <v-icon class="ml-4">mdi-github</v-icon>
                <v-icon class="ml-4">mdi-arrow-right</v-icon>
              </a>
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
  .main-title {
    font-family: $title-font;
    font-weight: $thin;
    font-size: 50px;
    position: relative;
    .decoration-line {
      position: absolute;
      height: 1px;
      width: 50%;
      top: 50%;
      left: 50%;
    }
  }
  .image-card {
    transition: all 0.2s ease;
    height: 330px;
    // filter: grayscale(0.4);
  }
  a {
    text-decoration: none;
  }
}
</style>