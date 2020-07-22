<template>
  <div class="scroll-to-icon"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.scroll-to-icon {
  @include centerAbsolute();
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
  margin-left: -2px;
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