<template>
  <span class="btn-container">
    <slot></slot>
    <div class="liquid"></div>
  </span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn-container {
  position: relative;
  padding: 20px 50px;
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
  background: $btn-liquid-water;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.btn-container .liquid::after,
.btn-container .liquid::before {
  content: "";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 50%;
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