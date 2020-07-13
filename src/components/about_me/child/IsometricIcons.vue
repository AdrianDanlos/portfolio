<template>
  <v-container>
    <v-row class="flex-column flex-lg-row">
      <v-col sm12 md6 class="d-flex justify-lg-end pr-0 first-row">
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
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  transform: rotate(-25deg) skew(25deg);
  li {
    position: relative;
    list-style: none;
    height: 60px;
    margin: 0 10px;
    flex: 1 0 auto;
    max-width: 26%;
    &::before,
    &::after {
      content: "";
      position: absolute;
    }
    &::before {
      bottom: -4px;
      left: 0px;
      width: 100%;
      height: 4px;
      background: $tile-bBorder-color;
      transform-origin: top;
      transform: skewX(-41deg);
    }
    &::after {
      top: 0px;
      left: -4px;
      width: 4px;
      height: 100%;
      background: $tile-lBorder-color;
      transform-origin: right;
      transform: skewY(-49deg);
    }
    &:hover {
      span {
        z-index: 1;
        transition: 0.5s;
        color: white;
        box-shadow: -1px 1px 1px 1px rgba(0, 0, 0, 0.05);
        i {
          color: $gray-200;
        }
      }
      span:nth-child(5) {
        transform: translate(40px, -40px);
        opacity: 1;
      }
      span:nth-child(4) {
        transform: translate(30px, -30px);
        opacity: 0.8;
      }
      span:nth-child(3) {
        transform: translate(20px, -20px);
        opacity: 0.6;
      }
      span:nth-child(2) {
        transform: translate(10px, -10px);
        opacity: 0.4;
      }
      span:nth-child(1) {
        transform: translate(0px, 0px);
        opacity: 0.2;
      }
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      @include flexCenter();
      background: $tile-color;
      transition: 0.2s;
      i {
        font-size: 30px !important;
      }
    }
  }
  li:nth-child(2) {
    &:hover {
      i {
        color: $gray-500;
      }
    }
  }
  .first-row {
    li:nth-child(1) {
      span {
        z-index: 6;
      }
      &:hover {
        span {
          background: #40b883;
        }
      }
    }
    li:nth-child(2) {
      span {
        z-index: 5;
      }
      &:hover {
        span {
          background: #efd61f;
        }
      }
    }
    li:nth-child(3) {
      span {
        z-index: 4;
      }
      &:hover {
        span {
          background: #e65b49;
        }
      }
    }
  }
  .second-row {
    li:nth-child(1) {
      span {
        z-index: 3;
      }
      &:hover {
        span {
          background: #4d598f;
        }
      }
    }
    li:nth-child(2) {
      span {
        z-index: 2;
      }
      &:hover {
        span {
          background: #f88838;
        }
      }
    }
    li:nth-child(3) {
      span {
        z-index: 1;
      }
      &:hover {
        span {
          background: #c66395;
        }
      }
    }
  }
}

//Z-INDEX FOR ICONS DISPLAYED IN DOUBLE ROW
@media (max-width: 1263px) {
  .container {
    li {
      max-width: 23%;
    }
    .first-row {
      li:nth-child(1) {
        span {
          z-index: 3;
        }
      }
      li:nth-child(2) {
        span {
          z-index: 2;
        }
      }
      li:nth-child(3) {
        span {
          z-index: 1;
        }
      }
    }
    .second-row {
      li:nth-child(1) {
        span {
          z-index: 6;
        }
      }
      li:nth-child(2) {
        span {
          z-index: 5;
        }
      }
      li:nth-child(3) {
        span {
          z-index: 4;
        }
      }
    }
  }
}

@media (min-width: 380px) and (max-width: 1263px) {
  .first-row,
  .second-row {
    justify-content: center;
  }
}
@media (max-width: 380px) {
  .first-row {
    justify-content: flex-end;
  }
}
</style>