<template>
  <span class="btn-container">
    <slot></slot>
    <div class="liquid" :class="bgcolor"></div>
  </span>
</template>

<script>
export default {
  props:{
    bgcolor: String
  }
};
</script>

<style lang="scss" scoped>
.btn-container {
  position: relative;
  padding: 15px 35px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  border-radius: 4px;
}

.btn-container span {
  position: relative;
  color: #fff;
  font-weight: $bold;
  font-family: $title-font;
  letter-spacing: 8px;
  z-index: 1;
}

.btn-container .liquid {
  position: absolute;
  top: -80px;
  left: 0;
  width: 200px;
  height: 200px;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.btn-container .liquid::after,
.btn-container .liquid::before {
  content: "";
  width: 200%;
  height: 200%;
  position: absolute;
  top: -5px;
  left: 39%;
  transform: translate(-50%, -75%);
  background: #000;
}

.btn-container .liquid::before {
  border-radius: 45%;
  background: $btn-liquid-bg;
  animation: animate 5s linear infinite;
}

.btn-container .liquid::after {
  border-radius: 40%;
  background: $btn-liquid-shadow;
  animation: animate 10s linear infinite;
}

.btn-container:hover .liquid {
  top: -120px;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>