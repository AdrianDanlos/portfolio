<template>
  <div>
    <h4 class="text-center text-md-left">
      <slot></slot>
    </h4>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  font-family: $title-font;
  font-weight: $regular;
  color: $gray-blue;
  letter-spacing: 12px;
  font-size: 18px;
  text-transform: uppercase;
}
</style>