<template>
  <v-sheet color="#ffffee">
    <v-container class="flex-column">
      <v-layout class="content-wrapper align-center text-layout">
        <v-flex md6>
          <h1>A FEW WORDS ABOUT ME</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium laboriosam dolorum ratione sequi vel nobis cupiditate at, ipsam quasi nisi voluptas quam debitis provident a. Asperiores laborum architecto</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium laboriosam dolorum ratione sequi vel nobis cupiditate at, ipsam quasi nisi voluptas quam debitis provident a. Asperiores laborum architecto</p>
          <h3>PASSION - TEAMWORK - PROBLEM SOLVING</h3>
        </v-flex>
        <v-flex md6 id="img-about-me-container">
          <img src="/images/about-me.svg" alt />
        </v-flex>
      </v-layout>
      <v-layout class="content-wrapper">
        <v-flex md6>
          <img id="img-arrow" src="/images/arrow.png" alt />
        </v-flex>
        <v-flex md6>
          <isometric-icons></isometric-icons>
          <p id="skills-legend">Always learning</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-sheet>
</template>

<script>
import IsometricIcons from "./IsometricIcons";
export default {
  components: {
    IsometricIcons
  }
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
}
.text-layout {
  margin-top: 60px;
}
h1 {
  font-family: Montserrat;
  color: rgb(71, 71, 71);
  margin: 0;
}
h3 {
  font-family: montserrat;
  letter-spacing: 4px;
  font-weight: $thin;
}
#skills-legend {
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  transform: rotate(-25deg) skew(25deg);
  margin-left: 145px;
  font-family: Montserrat;
  font-size: 55px;
  color: gray;
  font-weight: 100;
}
#img-about-me-container {
  @include flexCenter();
  img {
    width: 350px;
  }
}

#img-arrow {
  position: absolute;
  left: 315px;
  top: 450px;
}
</style>