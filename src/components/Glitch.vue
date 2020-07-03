<template>
  <div class="content">
    <h1 class="text" v-bind:data-text="glitchText">{{ glitchText }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: ["developer", "thinker", "dreamer"],
      glitchText: null
    };
  },
  mounted() {
    this.glitchText = this.roles[0];
    //Iterate through the array
    setInterval(() => {
      let index = this.roles.indexOf(this.glitchText);
      if (index < this.roles.length - 1) {
        this.glitchText = this.roles[index + 1];
      } else {
        this.glitchText = this.roles[0];
      }
    }, 3000);
  }
};
</script>

<style scoped lang="scss">
.content {
  width: 655px;
  height: 72px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 16px;
  .text {
    position: relative;
    color: $primary-glitch-color;
    font-weight: $bold;
    font-size: 45px;
    font-family: $title-font;
    transform: scale(2);
    padding: 30px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 0 0 140px;
    z-index: 0; /*Probar con 1 para quitar rayas*/
    &::before,
    &::after {
      padding: 30px;
      color: $secondary-glitch-color;
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      background: white; /*white background might be better*/
      overflow: hidden;
      top: 0;
    }
    &::before {
      left: 3px;
      text-shadow: -2px 0 $shadow-glitch-color;
      animation: glitch-1 6s linear infinite reverse;
    }
    &::after {
      left: -6px;
      text-shadow: -2px 0 $shadow2-glitch-color;
      animation: glitch-2 3s linear infinite reverse;
    }
  }
}

@media (max-width: 1263px) {
  .content {
    margin-bottom: 6px;
    width: 440px;
    justify-content: center;
    .text {
      font-size: 30px;
      margin-left: 0;
    }
  }
}
@media (max-width: 599px) {
  .content {
    width: 100%;
    .text {
      font-size: 20px;
      color: $dark;
      &::before,
      &::after {
        color: $dark-gray;
      }
      &::before {
        text-shadow: none;
        left: 1px;
      }
    }
  }
}

@keyframes glitch-1 {
  0% {
    clip: rect(132px, 350px, 101px, 30px);
  }
  5% {
    clip: rect(17px, 350px, 94px, 30px);
  }
  /* 10% {
    clip: rect(40px, 350px, 66px, 30px);
  } */
  15% {
    clip: rect(87px, 350px, 82px, 30px);
  }
  20% {
    clip: rect(137px, 350px, 61px, 30px);
  }
  25% {
    clip: rect(34px, 350px, 14px, 30px);
  }
  /* 30% {
    clip: rect(133px, 350px, 74px, 30px);
  } */
  35% {
    clip: rect(76px, 350px, 107px, 30px);
  }
  40% {
    clip: rect(59px, 350px, 130px, 30px);
  }
  /* 45% {
    clip: rect(29px, 350px, 84px, 30px);
  } */
  50% {
    clip: rect(22px, 350px, 67px, 30px);
  }
  55% {
    clip: rect(67px, 350px, 62px, 30px);
  }
  /* 60% {
    clip: rect(10px, 350px, 105px, 30px);
  } */
  65% {
    clip: rect(78px, 350px, 115px, 30px);
  }
  70% {
    clip: rect(105px, 350px, 13px, 30px);
  }
  /* 75% {
    clip: rect(15px, 350px, 75px, 30px);
  } */
  80% {
    clip: rect(66px, 350px, 39px, 30px);
  }
  85% {
    clip: rect(133px, 350px, 73px, 30px);
  }
  /* 90% {
    clip: rect(36px, 350px, 128px, 30px);
  }  */
  95% {
    clip: rect(68px, 350px, 103px, 30px);
  }
  100% {
    clip: rect(14px, 300px, 100px, 30px);
    /* border: 1px solid blue */
  }
}
@keyframes glitch-2 {
  0% {
    clip: rect(129px, 350px, 36px, 30px);
  }
  5% {
    clip: rect(36px, 350px, 4px, 30px);
  }
  /* 10% {
    clip: rect(85px, 350px, 66px, 30px);
  }  */
  15% {
    clip: rect(91px, 350px, 91px, 30px);
  }
  20% {
    clip: rect(148px, 350px, 138px, 30px);
  }
  /* 25% {
    clip: rect(38px, 350px, 122px, 30px);
  }  */
  30% {
    clip: rect(69px, 350px, 54px, 30px);
  }
  35% {
    clip: rect(98px, 350px, 71px, 30px);
  }
  /* 40% {
    clip: rect(146px, 350px, 34px, 30px);
  } */
  45% {
    clip: rect(134px, 350px, 43px, 30px);
  }
  50% {
    clip: rect(102px, 350px, 80px, 30px);
  }
  /* 55% {
    clip: rect(119px, 350px, 44px, 30px);
  }  */
  60% {
    clip: rect(106px, 350px, 99px, 30px);
  }
  65% {
    clip: rect(141px, 350px, 74px, 30px);
  }
  /* 70% {
    clip: rect(20px, 350px, 78px, 30px);
  }  */
  75% {
    clip: rect(133px, 350px, 79px, 30px);
  }
  80% {
    clip: rect(78px, 350px, 52px, 30px);
  }
  /* 85% {
    clip: rect(35px, 350px, 39px, 30px);
  }  */
  90% {
    clip: rect(67px, 350px, 70px, 30px);
  }
  95% {
    clip: rect(71px, 350px, 103px, 30px);
  }
  100% {
    clip: rect(83px, 350px, 40px, 30px);
  }
}
</style>