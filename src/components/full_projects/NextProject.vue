<template>
  <div class="next-project-container">
    <h1 class="ma-0">next project</h1>
    <v-icon class="ml-3">mdi-arrow-right</v-icon>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.next-project-container {
  @include fullScreen();
  @include flexCenter();
  h1 {
    font-family: $title-font;
    font-size: 60px;
    font-weight: 300;
    text-transform: uppercase;
    color: darken($color: $purple, $amount: 20%);
    letter-spacing: 6px;
  }
  i {
    font-size: 64px;
    color: darken($color: $purple, $amount: 20%);
  }
}
</style>