<template>
  <div class="d-flex flex-column ml-3 title-font">
    <span class="name boldest">Adrian Danlos</span>
    <span class="rol regular">Frontend Developer</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.name {
  font-size: 22px;
}
.rol {
  font-size: 13px;
  letter-spacing: 3px;
}
@media (max-width: 380px) {
  .rol {
    letter-spacing: 2px;
  }
}
</style>