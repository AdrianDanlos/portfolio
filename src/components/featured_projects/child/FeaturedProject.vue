<template>
  <v-container>
    <v-row>
      <v-col class="col-7" :class="{'order-2': reverse}">
        <v-card elevation="1" color="transparent" :outlined="true">
          <slot name="image"></slot>
        </v-card>
      </v-col>
      <v-col class="col-5">
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
          <v-card elevation="4" class="project-description pa-4 my-5">
            <slot name="project-description"></slot>
          </v-card>
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
  margin-bottom: -6px;
}
.project-info {
  height: 100%;
  .featured-text {
    font-family: $serif-font;
    color: $orange;
  }
  .project-description {
    width: 120%;
    max-width: 120%;
    background-color: $gray-100 !important;
    text-align: justify;
    font-weight: $thin;
  }
}
</style>