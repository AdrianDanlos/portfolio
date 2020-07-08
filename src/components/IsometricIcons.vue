<template>
  <v-container>
    <v-row>
      <v-col sm12 md6 class="d-flex justify-center justify-sm-end pr-0 first-row">
        <li @mouseover="$emit('displayTechnology', n)" v-for="n in 3" :key="n">
          <span v-for="n in 4" :key="n"></span>
          <span>
            <v-icon>{{ technologiesIcons[n - 1] }}</v-icon>
          </span>
        </li>
      </v-col>
      <v-col sm12 md6 class="d-flex pl-0 second-row">
        <li @mouseover="$emit('displayTechnology', n + 3)" v-for="n in 3" :key="n">
          <span v-for="n in 4" :key="n"></span>
          <span>
            <v-icon>{{ technologiesIcons[(n + 3) - 1] }}</v-icon>
          </span>
        </li>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      technologiesIcons: [
        "mdi-vuejs",
        "mdi-language-javascript",
        "mdi-laravel",
        "mdi-language-php",
        "mdi-language-html5",
        "mdi-sass"
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  transform: rotate(-25deg) skew(25deg);
  padding: 50px 0 0 0;
}
.container li {
  position: relative;
  list-style: none;
  width: 60px;
  height: 60px;
  margin: 0 10px;
  flex: 1 0 auto;
}
.container li:before {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0px;
  width: 100%;
  height: 4px;
  background: #e6e6e6;
  transform-origin: top;
  transform: skewX(-41deg);
}
.container li:after {
  content: "";
  position: absolute;
  top: 0px;
  left: -4px;
  width: 4px;
  height: 100%;
  background: #d1d1d1;
  transform-origin: right;
  transform: skewY(-49deg);
}
.container li span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include flexCenter();
  background: #f6f6f6;
  transition: 0.2s;
}
.container li:hover span {
  z-index: 1;
  transition: 0.5s;
  color: #fff;
  box-shadow: -1px 1px 1px 1px rgba(0, 0, 0, 0.05);
}
.container li:hover span:nth-child(5) {
  transform: translate(40px, -40px);
  opacity: 1;
}
.container li:hover span:nth-child(4) {
  transform: translate(30px, -30px);
  opacity: 0.8;
}
.container li:hover span:nth-child(3) {
  transform: translate(20px, -20px);
  opacity: 0.6;
}
.container li:hover span:nth-child(2) {
  transform: translate(10px, -10px);
  opacity: 0.4;
}
.container li:hover span:nth-child(1) {
  transform: translate(0px, 0px);
  opacity: 0.2;
}
.first-row li:nth-child(1):hover span {
  background: #40b883;
}
.first-row li:nth-child(2):hover span {
  background: #efd61f;
}
.first-row li:nth-child(3):hover span {
  background: #e65b49;
}
.second-row li:nth-child(1):hover span {
  background: #4d598f;
}
.second-row li:nth-child(2):hover span {
  background: #f88838;
}
.second-row li:nth-child(3):hover span {
  background: #c66395;
}
.first-row li:nth-child(1) span {
  z-index: 6;
}
.first-row li:nth-child(2) span {
  z-index: 5;
}
.first-row li:nth-child(3) span {
  z-index: 4;
}
.second-row li:nth-child(1) span {
  z-index: 3;
}
.second-row li:nth-child(2) span {
  z-index: 2;
}
.second-row li:nth-child(3) span {
  z-index: 1;
}

.container li:hover i {
  color: #e7e7e7;
}
.container li:nth-child(2):hover i {
  color: rgb(71, 71, 71);
}

i {
  font-size: 30px !important;
  //   color: white;
}
@media (max-width: 599px) {
  .first-row li:nth-child(1) span {
    z-index: 3;
  }
  .first-row li:nth-child(2) span {
    z-index: 2;
  }
  .first-row li:nth-child(3) span {
    z-index: 1;
  }
  .second-row li:nth-child(1) span {
    z-index: 6;
  }
  .second-row li:nth-child(2) span {
    z-index: 5;
  }
  .second-row li:nth-child(3) span {
    z-index: 4;
  }
  .container li {
    flex: 0 0 auto;
    width: 65px;
  }
  .container {
  padding: 0;
}
}
</style>