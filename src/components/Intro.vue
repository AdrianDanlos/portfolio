<template>
  <v-sheet>
    <v-container>
      <div
        class="content-wrapper row intro-container section-push-up flex-column flex-lg-row mx-auto"
      >
        <v-sheet
          class="col-12 col-lg-10 d-flex justify-center align-center order-last order-lg-first text-container"
        >
          <div class="d-flex flex-column">
            <p class="hi d-none d-sm-block">Hi, my name is</p>
            <p class="name dark-text d-none d-sm-block mb-1">Adrian Danlos</p>
            <div
              class="d-flex align-end align-lg-center flex-column flex-sm-row glitch-container"
            >
              <span class="rol dark-lighten-text d-none d-sm-block">I am a</span>
              <glitch></glitch>
            </div>
            <p
              class="intro-text mt-0 mt-lg-4"
            >As a Software Developer I'm always looking to create innovative websites and applications that could make a positive impact in society and solve real world problems.</p>
          </div>
        </v-sheet>
        <v-sheet
          class="col-12 col-lg-2 d-flex align-center justify-center justify-lg-end mb-5 img-container"
          width="100%"
        >
          <img src="/images/me.png" alt="Adrian" />
        </v-sheet>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
import Glitch from "./Glitch";
export default {
  components: {
    Glitch
  }
};
</script>

<style scoped>
.intro-container {
  position: relative;
  height: 100vh;
}

.hi {
  font-family: "Fira Code";
  color: #ff6300e3;
}
.name,
.rol {
  font-family: "Montserrat";
  font-size: 70px;
  line-height: 70px;
  font-weight: 700;
}
.glitch-container {
  position: relative;
}
img {
  /* -webkit-mask-image: -webkit-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))); */
  /* mask-image: -webkit-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))); */
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: grayscale(1);
}
.intro-text {
  width: 50%;
  color: #263238;
}
@media (max-width: 1263px) {
  .text-container {
    margin-top: -30px;
  }
  img {
    width: 230px;
  }
  .intro-container {
    height: auto;
  }
  .rol {
    font-size: 32px;
  }
  .intro-text {
    width: 540px;
  }
}
@media (max-width: 599px) {
  .intro-text {
    width: 100%;
  }
  .img-container {
    margin-top: 130px;
  }
}
</style>