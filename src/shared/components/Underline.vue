<template>
  <span class="underline-container">
    <div class="underline"></div>
    <span class="text">
      <slot></slot>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.underline-container {
  position: relative;
  display: inline-block;
  .underline {
    position: absolute;
    width: 100%;
    height: 10px;
    border-radius: 30px;
    background: lighten($light-orange, 5%);
    bottom: 2px;
    right: 5%;
    z-index: 1;
  }
  .text {
    position: relative;
    span {
      position: relative;
      z-index: 1000;
    }
    &::after {
      position: absolute;
      bottom: -88px;
      color: lighten($purple, 48%);
      font-size: 140px;
      font-weight: $bold;
    }
  }
}
</style>