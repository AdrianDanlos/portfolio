<template>
  <v-container>
    <v-row>
      <v-col :class="{'order-2': reverse}">
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
          class="d-flex flex-column justify-center project-info"
          :class="{'align-end': !reverse}"
        >
          <p class="featured-text ma-0">Featured Project</p>
          <v-card-title class="pt-2" :class="reverse ? 'pl-0': 'pr-0'">
            <slot name="project-title"></slot>
          </v-card-title>
          <v-card-text class="project-description pa-4 my-5">
            <slot name="project-description"></slot>
          </v-card-text>
          <div class="languages-used mb-5">
            <slot name="languages-used"></slot>
          </div>
          <div>
            <slot name="links"></slot>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    reverse: Boolean
  }
};
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
}
</style>