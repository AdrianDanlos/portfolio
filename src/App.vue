<template>
  <v-app>
    <main-loading v-if="!loaded"></main-loading>
    <!-- header -->
    <header-vue v-if="showHeader"></header-vue>
    <!-- content -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- footer -->
  </v-app>
</template>

<script>
import MainLoading from "./../src/components/main_loading/MainLoading";
import HeaderVue from "./../src/components/header/Header";
export default {
  components: {
    MainLoading,
    HeaderVue
  },
  name: "App",
  data() {
    return {
      loaded: false,
      showHeader: true
    };
  },
  methods: {
    animateLoading() {
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
  },
  mounted() {
    this.animateLoading();
  },
  watch: {
    $route: function() {
      this.$route.name === "FullProject"
        ? (this.showHeader = false)
        : (this.showHeader = true);
    }
  }
};
</script>




