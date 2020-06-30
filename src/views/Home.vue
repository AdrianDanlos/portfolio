<template>
  <div>
    <main-loading v-if="!loaded"></main-loading>
    <navbar></navbar> 
  </div>
</template>

<script>
import MainLoading from './../components/MainLoading';
export default {
  components:{
    MainLoading
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted(){
    let svg = document.getElementsByTagName('svg')[0];
    let svgText = document.getElementsByClassName('svg-text')[0]

    //Give opacity to the svg text and switch svg color
    setTimeout(() => {
      svgText.style.opacity = 1;
      svg.style.color = "rgb(101, 101, 203)";
    }, 1800);

    //Make svg disappear by removing its width
    setTimeout(() => {
      svg.style.cssText += ';width:0 !important;';
    }, 2600); 
    
    //Hide main loading component
    setTimeout(() => {
      this.loaded = true;
    }, 3000); //2s is the animation time of the loading logo
    
  }
}
</script>


