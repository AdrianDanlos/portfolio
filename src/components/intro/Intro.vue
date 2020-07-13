<template>
  <v-sheet>
    <v-container class="content-wrapper" id="intro-container">
      <v-row class="flex-column flex-lg-row mx-auto">
        <v-col class="col-12 col-lg-10 order-last order-lg-first">
          <div class="d-flex flex-column">
            <p class="d-none d-sm-block orange-text serif-font">Hi, my name is</p>
            <p class="name dark-text d-none d-sm-block mb-1">Adrian Danlos</p>
            <div class="d-flex align-end align-lg-center flex-column flex-sm-row glitch-container">
              <span class="rol gray-blue-text d-none d-sm-block">I am a</span>
              <glitch></glitch>
            </div>
            <p
              class="intro-long-text mt-0 mt-lg-4"
            >As an enthusiast for progress my goal is to create innovative websites and applications that could make a positive impact in society and solve real world problems.</p>
          </div>
        </v-col>
        <v-col class="col-12 col-lg-2 justify-lg-end mb-5 img-container">
          <img src="/images/me.png" alt="Adrian" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import Glitch from "./child/Glitch";
export default {
  components: {
    Glitch
  }
};
</script>

<style scoped lang="scss">
.row {
  position: relative;
}
#intro-container, .col {
  @include flexCenter();
}
.name,
.rol {
  font-family: $title-font;
  font-size: 70px;
  line-height: 70px;
  font-weight: $bold;
}
img {
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: grayscale(1);
}
.glitch-container {
  position: relative;
}

.intro-long-text {
  width: 50%;
  color: $dark;
}

@media (max-width: 1263px) {
  .col {
    margin-top: -30px;
  }
  img {
    width: 230px;
  }
  .rol {
    font-size: 32px;
  }
  .intro-long-text {
    width: 540px;
  }
}
@media (max-width: 599px) {
  .intro-long-text {
    width: 100%;
  }
  .img-container {
    margin-top: 90px;
  }
  img {
    width: 180px;
  }
}

@media (min-width: 600px) {
  #intro-container {
    @include fullHeight();
  }
}
@media (min-width: 1600px) {
  .row {
    @include sectionPushup();
  }
}

</style>