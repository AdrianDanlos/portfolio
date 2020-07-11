<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card color="transparent" :outlined="true">
          <img
            src="https://cdn.vox-cdn.com/thumbor/Y_7VBy5IfOIBtyEZB5hrd47eOgo=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/67018905/elon_musk_tesla_3036.0.jpg"
            alt="project"
          />
        </v-card>
      </v-col>
      <v-col>
        <v-card
          color="transparent"
          :outlined="true"
          class="d-flex flex-column justify-center align-end project-info"
        >
          <p class="featured-text ma-0">Featured Project</p>
          <v-card-title class="pr-0 pt-2">PROJECT TITLE</v-card-title>
          <v-card-text class="project-description pa-4 my-5">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus earum eum neque saepe id similique culpa doloribus, unde dolore debitis pariatur nihil aliquid qui voluptates iste odit tenetur vel.</span>
          </v-card-text>
          <div class="languages-used mb-5">
            <span>tech1</span>
            <span>tech2</span>
            <span>tech3</span>
          </div>
          <div>
            <v-icon>mdi-github</v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
img {
  width: 100%;
}
.project-info {
  height: 100%;
  .featured-text {
    font-family: $serif-font;
    color: $orange;
  }
  .project-description {
    width: 120%;
    background: #013cff;
    text-align: justify;
    border-radius: 3px;
  }
  .languages-used {
    span {
      margin-left: 40px;
      width: 100%;
      text-align: right;
    }
  }
}
</style>