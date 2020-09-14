<template>
  <div class="z-index-priority">
    <slot name="text"></slot>
    <slot name="author"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-container {
  &::before,
  &::after {
    position: absolute;
    background-size: 100px 60px;
    display: inline-block;
    width: 100px;
    height: 60px;
    content: "";
    opacity: 0.04;
  }
  &::before {
    background-image: url("/images/start-quote.png");
    left: -50px;
    top: -30px;
  }
  &::after {
    background-image: url("/images/end-quote.png");
    right: -35px;
    bottom: 20px;
  }
}
</style>