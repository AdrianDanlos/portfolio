<template>
  <div id="web-container">
    <main-loading v-if="!loaded"></main-loading>
    <navbar></navbar>
    <intro></intro>
    <v-sheet height="100vh" color="purple">
      <v-container class="content-wrapper pa-5 pa-md-3"></v-container>
    </v-sheet>
  </div>
</template>

<script>
import MainLoading from "./../components/MainLoading";
import Intro from "./../components/Intro";
export default {
  components: {
    MainLoading,
    Intro
  },
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    let svg = document.getElementsByTagName("svg")[0];
    let svgText = document.getElementsByClassName("svg-text")[0];

    //Give opacity to the svg text and switch svg color
    setTimeout(() => {
      svgText.style.opacity = 1;
      svg.style.color = "rgb(101, 101, 203)";
    }, 1800);

    //Make svg disappear by removing its width
    setTimeout(() => {
      svg.style.cssText += ";width:0 !important;";
    }, 2600);

    //Hide main loading component
    setTimeout(() => {
      this.loaded = true;
    }, 1); //3000 aprox --- 2s (2000) is the animation time of the loading logo
  }
};
</script>


<style scoped>

</style>

