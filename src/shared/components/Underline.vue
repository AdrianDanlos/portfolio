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
    width: 75%;
    height: 10px;
    border-radius: 30px;
    background: lighten($light-orange, 5%);
    bottom: 2px;
    right: 5%;
  }
  .text {
    position: relative;
  }
}
</style>