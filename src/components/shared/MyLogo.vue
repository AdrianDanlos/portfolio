<template>
  <div class="logo-container d-flex align-center">
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 84 96"
      style="
    fill: none;
    user-select: none;
"
    >
      <title>Logo</title>
      <g transform="translate(-8.000000, -2.000000)">
        <text
          class="svg-text"
          x="38.5"
          y="60"
          fill="currentcolor"
          style="
    font-size: 35px;
    /* font-family: Roboto; */
    font-family: &quot;Roboto&quot;, sans-serif !important;
    font-weight: 400;
"
        >A</text>
        <g transform="translate(11.000000, 5.000000)">
          <polygon
            id="Shape"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="39 0 0 22 0 67 39 90 78 68 78 23"
            :class="loaded ? 'stroke-on' : 'stroke-off'"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    loaded: Boolean
  }
};
</script>

<style scoped>
svg {
  width: 55px;
}
.logo-container {
  z-index: 15;
  pointer-events: none;
}
</style>