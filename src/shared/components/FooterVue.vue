<template>
  <footer>
    <span :class="color">Built with VueJS by Adrian Danlos</span>
    <v-icon small :class="color" class="mx-1">mdi-cards-heart</v-icon>
    <span :class="color">{{new Date().getFullYear()}}</span>
  </footer>
</template>

<script>
export default {
    props:{
        color: String
    }
}
</script>

<style lang="scss" scoped>
footer {
  @include centerAbsolute();
  bottom: 15px;
  font-size: 14px;
  font-weight: $thin;
  user-select: none;
}
</style>