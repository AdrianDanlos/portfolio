<template>
  <v-container>
    <v-row :class="reverse ? 'push-to-right flex-row-reverse' : 'push-to-left'">
      <v-col class="col-1" :class="reverse ? 'pr-0' : 'pl-0'">
        <v-card class="side-title-card">
          <v-img height="100%" src="/images/projects/side_title_bg/side-title-bg1.jpg"></v-img>
          <slot name="side-title"></slot>
        </v-card>
      </v-col>
      <v-col class="col-7" :class="reverse ? 'pr-0' : 'pl-0'">
        <slot></slot>
      </v-col>
      <v-col class="col-4 pr-0">
        <v-card
          color="transparent"
          :outlined="true"
          class="d-flex flex-column justify-center project-info"
          :class="{'align-end': !reverse}"
        >
          <p class="featured-text orange-text serif-font ma-0">Featured Project</p>
          <v-card-title class="project-title title-font pt-2" :class="reverse ? 'pl-0': 'pr-0'">
            <slot name="project-title"></slot>
          </v-card-title>
          <v-card class="project-description pa-4 my-5" elevation="4">
            <slot name="project-description"></slot>
          </v-card>
          <div class="languages-used gray-blue-text mb-5">
            <slot name="languages-used"></slot>
          </div>
          <div class="links">
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
.container {
  .push-to-right,
  .push-to-left {
    width: 90%;
  }
  .push-to-left {
    margin-right: auto;
    margin-left: 0;
  }
  .push-to-right {
    margin-right: 0;
    margin-left: auto;
  }
  .v-card.side-title-card {
    position: relative;
    height: 100%;
    .v-image {
      border-radius: 4px;
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
      span {
        font-family: $title-font;
        font-size: 23px;
        font-weight: $thin;
        color: white;
      }
    }
  }
  .project-info {
    height: 100%;
    .project-title {
      color: $gray-300;
    }
    .links i {
      color: $gray-400;
    }
    .project-description {
      width: 145%;
      max-width: 145%;
      background-color: $gray-200 !important;
      text-align: justify;
      font-weight: $thin;
    }
    .languages-used {
      span {
        font-family: $serif-font;
        font-size: 14px;
      }
    }
  }
}
</style>