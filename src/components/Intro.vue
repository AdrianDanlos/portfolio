<template>
  <v-container class="content-wrapper pa-5 pa-sm-3">
    <div class="row intro-container d-flex mt-n3 section-push-up flex-column flex-sm-row">
      <v-sheet
        class="col-12 col-sm-10 d-flex align-center order-last order-sm-first text-container"
      >
        <div>
          <p class="hi d-none d-sm-block">Hi, my name is</p>
          <p class="name dark-text d-none d-sm-block mb-1">Adrian Danlos</p>
          <div
            class="d-flex align-start align-sm-center d-none d-sm-flex flex-column flex-sm-row glitch-container"
          >
            <p class="rol dark-lighten-text d-none d-sm-block">I am a</p>
            <glitch></glitch>
          </div>
          <p
            class="intro-text mt-0 mt-sm-4"
          >As a Software Developer I'm always looking to create innovative websites and applications that could make a positive impact in society and solve real world problems.</p>
        </div>
      </v-sheet>
      <v-sheet
        class="col-12 col-sm-2 d-flex align-center justify-center justify-sm-end mb-5 img-container"
        width="100%"
      >
        <img src="/images/me.png" alt="Adrian" />
      </v-sheet>
    </div>
  </v-container>
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
@media (max-width: 600px) {
  .text-container {
    margin-top: -30px;
  }
  .img-container {
    margin-top: 90px;
  }
  img {
    width: 70%;
  }
  .intro-container {
    height: auto;
  }
  .rol {
    font-size: 37px;
  }
  .intro-text {
    width: 100%;
  }
}
</style>