<template>
  <div class="devices-container">
    <div class="mobile"></div>
    <div class="tablet"></div>
    <div class="laptop"></div>
    <strong>XS</strong>
    <strong>MD</strong>
    <strong>LG</strong>
  </div>
</template>


<style lang="scss" scoped>
.devices-container {
  position: relative;
  height: 100vh;
  min-height: 900px;
  strong {
    font-size: 57px;
    font-family: $title-font;
    position: absolute;
    top: 793px;
    left: 674px;
    color: #5a5a5a;
    z-index: 1000;
    transform: rotate(3deg) skewY(-3deg) skewX(-3deg);
  }
  strong:nth-of-type(1) {
    top: 752px;
    left: 701px;
  }
  strong:nth-of-type(2) {
    top: 157px;
    left: 2%;
  }
  strong:nth-of-type(3) {
    top: 66px;
    left: 89%;
  }

  .mobile {
    width: 180px;
    height: 346px;
    background-image: url("/images/projects/vueworld/mobile.png");
    left: 510px;
    top: 470px;
    z-index: 3;
  }
  .tablet {
    width: 400px;
    height: 495px;
    background-image: url("/images/projects/vueworld/tablet.jpg");
    left: 80px;
    top: 230px;
    z-index: 2;
  }
  .laptop {
    @include centerAbsolute();
    width: 84%;
    height: 525px;
    background-image: url("/images/projects/vueworld/landing.jpg");
    margin-right: 5%;
    top: 140px;
    z-index: 1;
  }
  .mobile,
  .tablet,
  .laptop {
    background-size: cover;
    background-position: center;
    border: 1px solid #eee;
    position: absolute;
    transform: rotate(3deg) skewY(-3deg) skewX(-3deg);
    box-shadow: rgb(55 55 55 / 58%) 7px 8px 10px 0px;
    &::after {
      content: "";
      position: absolute;
      top: -2px;
      right: -2px;
      width: 4px;
      height: 100%;
      background: #e0e0e0;
      transform-origin: right;
      transform: skewY(-49deg);
    }
  }
}
</style>