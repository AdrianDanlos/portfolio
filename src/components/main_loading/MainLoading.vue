<template>
  <div class="overflow-hidden main-loading-container dark-blue-bg">
    <logo :loaded="loaded"></logo>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: null,
    };
  },
  mounted() {
    //When to component is rendered we update loaded prop to change start the stroke animation
    //For some reason this doesnt work outside of a timeout
    setTimeout(() => {
      this.loaded = true;
    }, 0);
  },
};
</script>

<style scoped lang="scss">
.main-loading-container {
  @include fullScreen();
  @include flexCenter();
}
.logo-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
::v-deep polygon {
  stroke-width: 3;
  transition: all 2s cubic-bezier(0.645, 0.045, 0.955, 1), color 1s ease;
  stroke-dasharray: 480;
}
::v-deep svg {
  width: 95px !important;
  color: white;
  transition: width 0.3s ease;
}
::v-deep .svg-text {
  opacity: 0;
  transition: opacity 1s ease, color 1s ease;
}
::v-deep .stroke-off {
  stroke-dashoffset: 480;
}
::v-deep .stroke-on {
  stroke-dashoffset: 0;
}
</style>