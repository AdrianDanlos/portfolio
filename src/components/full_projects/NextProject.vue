<template>
  <div class="next-project-container">
    <h1 class="d-flex flex-column flex-sm-row ma-0">
      <span>next project</span>
      <v-icon class="ml-4">mdi-arrow-right</v-icon>
    </h1>
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
    text-align: center;
  }
  i {
    font-size: 60px;
    color: darken($color: $purple, $amount: 20%);
  }
}
@media (max-width: 600px) {
  .next-project-container {
    h1,
    i {
      font-size: 26px;
    }
  }
}
</style>