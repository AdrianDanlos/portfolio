<template>
  <v-container class="px-0">
    <v-row :class="reverse ? 'push-to-right flex-row-reverse' : 'push-to-left'">
      <v-col class="col-1 d-none d-sm-block" :class="reverse ? 'pr-0' : 'pl-0'">
        <v-card class="side-title-card">
          <v-img height="100%" src="/images/projects/side_title_bg/side-title-bg1.jpg"></v-img>
          <slot name="side-title"></slot>
        </v-card>
      </v-col>
      <v-col class="col-12 col-sm-6 col-md-7" :class="reverse ? 'pr-sm-0' : 'pl-sm-0'">
        <router-link :to="{ name: 'FullProject', params: { id: projectNumber }}">
          <v-hover class="image-card" v-slot:default="{ hover }">
            <v-card ripple :elevation="hover ? 24 : 10" color="transparent" @mouseover="cursorHover" @mouseleave="cursorLeave">
              <slot></slot>
            </v-card>
          </v-hover>
        </router-link>
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
            <div
              class="languages-used d-flex flex-sm-wrap mb-4 mt-4 mt-sm-0"
              :class="{'justify-sm-end': reverse}"
            >
              <slot name="languages-used"></slot>
            </div>
            <div class="links d-flex" :class="{'justify-sm-end': reverse}">
              <slot name="web-links"></slot>
              <router-link :to="{ name: 'FullProject', params: { id: projectNumber }}">
                <v-btn :class="reverse ? 'mr-n2 ml-sm-4' : 'mr-4'" icon @mouseover="cursorHover" @mouseleave="cursorLeave">
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </router-link>
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
    reverse: Boolean,
    projectNumber: Number,
  },
};
</script>

<style lang="scss" scoped>
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
  }
  .image-card {
    transition: all 0.2s ease;
    height: 330px;
  }
  .project-info {
    height: 100%;
    .project-description {
      text-align: justify;
      color: $gray-400;
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
@media (max-width: 600px) {
  .container {
    .image-card {
      height: 230px;
    }
  }
}
</style>