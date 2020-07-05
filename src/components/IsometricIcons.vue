<template>
  <ul>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <v-icon>mdi-vuejs</v-icon>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <v-icon>mdi-language-javascript</v-icon>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <v-icon>mdi-laravel</v-icon>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <v-icon>mdi-language-php</v-icon>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <v-icon>mdi-language-html5</v-icon>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <v-icon>mdi-sass</v-icon>
        </span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  transform: rotate(-25deg) skew(25deg);
  padding: 50px 0 0 0;
}
ul li {
  position: relative;
  list-style: none;
  width: 60px;
  height: 60px;
  margin: 0 10px;
}
ul li:before {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0px;
  width: 100%;
  height: 4px;
  background: #a8a8a8;
  transform-origin: top;
  transform: skewX(-41deg);
}
ul li:after {
  content: "";
  position: absolute;
  top: 0px;
  left: -4px;
  width: 4px;
  height: 100%;
  background: #c9c9c9;
  transform-origin: right;
  transform: skewY(-49deg);
}
ul li span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include flexCenter();
  background: rgb(189, 189, 189);
  color: rgba(255, 255, 255, 0.2);
  font-size: 30px !important;
  transition: 0.2s;
}
ul li:hover span {
  z-index: 1000;
  transition: 0.5s;
  color: #fff;
  box-shadow: -1px 1px 1 1px rgba(0, 0, 0, 0.05);
}
ul li:hover span:nth-child(5) {
  transform: translate(40px, -40px);
  opacity: 1;
}
ul li:hover span:nth-child(4) {
  transform: translate(30px, -30px);
  opacity: 0.8;
}
ul li:hover span:nth-child(3) {
  transform: translate(20px, -20px);
  opacity: 0.6;
}
ul li:hover span:nth-child(2) {
  transform: translate(10px, -10px);
  opacity: 0.4;
}
ul li:hover span:nth-child(1) {
  transform: translate(0px, 0px);
  opacity: 0.2;
}
ul li:nth-child(1):hover span {
  background: #40b883;
}
ul li:nth-child(2):hover span {
  background: #efd61f;
}
ul li:nth-child(3):hover span {
  background: #e65b49;
}
ul li:nth-child(4):hover span {
  background: #4d598f;
}
ul li:nth-child(5):hover span {
  background: #f88838;
}
ul li:nth-child(6):hover span {
  background: #c66395;
}
ul li:hover i {
  color: #e7e7e7;
}
ul li:nth-child(2):hover i {
  color: rgb(71, 71, 71);
}

i {
  font-size: 30px !important;
  //   color: white;
}
</style>