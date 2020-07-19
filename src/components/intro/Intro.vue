<template>
  <v-sheet>
    <v-container class="content-wrapper" id="intro-container">
      <v-row class="flex-column flex-lg-row mx-auto">
        <v-col class="col-12 col-lg-10 order-last order-lg-first">
          <div class="d-flex flex-column">
            <p class="d-none d-sm-block dark-orange-text serif-font">Hi, my name is</p>
            <p class="name dark-text d-none d-sm-block mb-1">Adrian Danlos</p>
            <div class="d-flex align-end align-lg-center flex-column flex-sm-row glitch-container">
              <span class="rol gray-blue-text d-none d-sm-block">I am a</span>
              <glitch></glitch>
            </div>
            <p
              class="intro-long-text mt-0 mt-lg-4"
            >As an enthusiast for progress my goal is to create innovative websites and applications that could make a positive impact in society and solve real world problems.</p>
            <p class="call-to-action">
              View Projects
              <span class="d-inline-block mx-4">or</span> Contact Me
            </p>
          </div>
        </v-col>
        <v-col class="col-12 col-lg-2 justify-lg-end mb-5 img-container">
          <img src="/images/me.png" alt="Adrian" />
        </v-col>
      </v-row>
      <div class="d-none d-md-block scroll-to-icon"></div>
      <aside class="d-none d-md-flex align-center flex-column" :style="[showAside ? {opacity: 1} : {opacity: 0}]">
        <p>{{email}}</p>
        <div class="vertical-divider"></div>
      </aside>
    </v-container>
  </v-sheet>
</template>

<script>
import Glitch from "./child/Glitch";
import PersonalData from "./../../shared/mixins/personalData";
export default {
  mixins: [PersonalData],
  components: {
    Glitch
  },
  data() {
    return {
      showAside: true,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      window.top.scrollY > 3333 ? this.showAside = false : this.showAside = true;
      console.log(window.top.scrollY);
    }
  }
};
</script>

<style scoped lang="scss">
#intro-container,
.col {
  @include flexCenter();
}
.row {
  position: relative;
}
#intro-container {
  aside {
    position: fixed;
    right: -55px;
    bottom: 0;
    z-index: 1000;
    font-size: 14px;
    transition: opacity 0.5s;
    p {
      transform: rotate(90deg);
      letter-spacing: 1px;
      margin: 0;
    }

    .vertical-divider {
      width: 1px;
      height: 100px;
      margin: 100px 0 0 -4px;
      background: $gray-400;
    }
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
    width: 55%;
    color: $gray-400;
    font-size: 18px;
  }
  .call-to-action {
    font-size: 18px;
    color: $dark;
    font-weight: $bold;
    span {
      color: $gray-400;
      font-weight: $regular;
    }
  }
  .scroll-to-icon {
    position: absolute;
    top: 85vh;
    width: 20px;
    height: 30px;
    box-shadow: inset 0 0 0 2px $dark;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  .scroll-to-icon:after {
    content: "";
    width: 4px;
    height: 6px;
    background: $dark;
    margin-left: 8px;
    top: 8px;
    border-radius: 2px;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: scroll;
    animation-name: scroll;
    position: absolute;
  }
}

@media (max-width: 1263px) {
  #intro-container {
    .rol {
      font-size: 32px;
    }
    .col {
      margin-top: -30px;
    }
    img {
      width: 230px;
    }
    .intro-long-text {
      width: 540px;
    }
  }
}
@media (max-width: 599px) {
  #intro-container {
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

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>