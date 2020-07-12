<template>
  <v-sheet color="#fff6ea">
    <v-container class="content-wrapper flex-column" id="featured-projects-container">
      <v-row class="w100">
        <v-col>
          <h4 class="mt-sm-15">Some Things I've Built</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <featured-project>
            <template v-slot:image>
              <img src="/images/projects/vueworld/landing.jpg" alt="project" />
            </template>
            <template v-slot:project-title>
              <span>VueWorld</span>
            </template>
            <template v-slot:project-description>
              <span>
                A
                <span class="special-text">lodging</span> SPA web app that offers accomodation for your trips all around the world. It follows the philosophy of popular websites such as <span class="special-text">Airbnb</span>, Hostelworld and Booking. Book your next adventure with us!
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
              <v-icon class="ml-4">mdi-github</v-icon>
              <v-icon class="ml-4">mdi-web</v-icon>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <featured-project :reverse="true">
            <template v-slot:image>
              <img src="/images/projects/cloudroad/map.png" alt="project" />
            </template>
            <template v-slot:project-title>
              <span>Cloud Road</span>
            </template>
            <template v-slot:project-description>
              <span>A web app designed to provide quicker <span class="special-text">assistance to road incidents</span> achieving a fast road clearance by providing real-time data trough webcams, graphs, map visualization and <span class="special-text">route algorithms</span> that allow technicians to solve incidents in a rapid and easy way.</span>
            </template>
            <template v-slot:languages-used>
              <span class="ml-4">Google Maps API</span>
              <span class="ml-4">Chart.js</span>
              <span class="ml-4">SASS</span>
              <span class="ml-4">Dark Mode</span>
              <span class="ml-4">Laravel</span>
            </template>
            <template v-slot:links>
              <v-icon class="ml-4">mdi-github</v-icon>
              <v-icon class="ml-4">mdi-web</v-icon>
            </template>
          </featured-project>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <featured-project>
            <template v-slot:image>
              <img src="/images/projects/apex/apex.jpg" alt="project" />
            </template>
            <template v-slot:project-title>
              <span>Apex Legends Tracker</span>
            </template>
            <template v-slot:project-description>
              <span>A <span class="special-text">real-time statistic tracker</span> for Apex Legends <span class="special-text">videogame</span>. Search for your username to display data about your rank, kills, wins, top3's.. Ideal for all players that would like to keep track of their in-game stats.</span>
            </template>
            <template v-slot:languages-used>
              <span class="mr-4">JS</span>
              <span class="mr-4">Apex API</span>
            </template>
            <template v-slot:links>
              <v-icon class="mr-4">mdi-web</v-icon>
              <v-icon class="mr-4">mdi-github</v-icon>
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