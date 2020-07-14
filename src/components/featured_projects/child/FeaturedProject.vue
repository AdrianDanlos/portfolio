<template>
  <v-container>
    <v-row :class="reverse ? 'push-to-right flex-row-reverse' : 'push-to-left'">
      <v-col class="col-1 d-none d-sm-block" :class="reverse ? 'pr-0' : 'pl-0'">
        <v-card class="side-title-card">
          <v-img height="100%" src="/images/projects/side_title_bg/side-title-bg1.jpg"></v-img>
          <slot name="side-title"></slot>
        </v-card>
      </v-col>
      <v-col class="col-12 col-sm-6 col-md-7" :class="reverse ? 'pr-sm-0' : 'pl-sm-0'">
        <slot></slot>
      </v-col>
      <v-col class="col-sm-5 col-md-4" :class="reverse ? 'pl-sm-0' : 'pr-sm-0'">
        <v-card
          color="transparent"
          :outlined="true"
          class="d-flex flex-column justify-space-between project-info"
          :class="reverse ? 'pr-sm-4': 'pl-sm-4'"
        >
          <div>
            <p
              class="dark-orange-text serif-font ma-0"
              :class="{'text-sm-right': reverse}"
            >Featured Project</p>
            <p class="d-block d-sm-none gray-blue-text">
              <slot name="project-title"></slot>
            </p>
            <div class="project-description pt-4">
              <slot name="project-description"></slot>
            </div>
          </div>
          <div>
            <div class="languages-used d-flex flex-wrap mb-4" :class="{'justify-end': reverse}">
              <slot name="languages-used"></slot>
            </div>
            <div class="links d-flex" :class="{'justify-end': reverse}">
              <slot name="links"></slot>
            </div>
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
    .links i {
      color: $gray-blue;
    }
    .project-description {
      text-align: justify;
      font-size: 15px;
      color: $gray-blue;
    }
    .languages-used {
      color: $gray-blue;
      span {
        font-family: $serif-font;
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 960px) {
  .container {
    .push-to-right,
    .push-to-left {
      width: 100%;
    }
  }
}
</style>