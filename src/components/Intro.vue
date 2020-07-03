<template>
  <v-container>
    <main class="content-wrapper row section-push-up flex-column flex-lg-row mx-auto">
      <section
        class="col-12 col-lg-10 d-flex justify-center align-center order-last order-lg-first"
      >
        <div class="d-flex flex-column">
          <p class="d-none d-sm-block orange-text serif-font">Hi, my name is</p>
          <p class="name dark-text d-none d-sm-block mb-1">Adrian Danlos</p>
          <div class="d-flex align-end align-lg-center flex-column flex-sm-row glitch-container">
            <span class="rol gray-text d-none d-sm-block">I am a</span>
            <glitch></glitch>
          </div>
          <p
            class="intro-long-text mt-0 mt-lg-4"
          >As a Software Developer I'm always looking to create innovative websites and applications that could make a positive impact in society and solve real world problems.</p>
        </div>
      </section>
      <aside
        class="col-12 col-lg-2 d-flex align-center justify-center justify-lg-end mb-5 img-container"
      >
        <img src="/images/me.png" alt="Adrian" />
      </aside>
    </main>
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

<style scoped lang="scss">
main {
  position: relative;
}
.name,
.rol {
  font-family: $title-font;
  font-size: 70px;
  line-height: 70px;
  font-weight: $bold;
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
.intro-long-text {
  width: 50%;
  color: $dark;
}
@media (max-width: 1263px) {
  section {
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
  .intro-long-text {
    width: 540px;
  }
}
@media (max-width: 599px) {
  .intro-long-text {
    width: 100%;
  }
  .img-container {
    margin-top: 130px;
  }
}
</style>