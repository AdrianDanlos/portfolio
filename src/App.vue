<template>
  <v-app>
    <div class="inner-cursor"></div>
    <div class="outer-cursor"></div>
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
    HeaderVue,
  },
  name: "App",
  data() {
    return {
      loaded: false,
      showHeader: true,
      click: false,
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
    },
    showOrHideHeader() {
      this.$route.name === "FullProject"
        ? (this.showHeader = false)
        : (this.showHeader = true);
    },
    cursor(e) {
      let innerCursor = document.querySelector(".inner-cursor");

      innerCursor.style.transform =
        "translate(" + (e.clientX - 3.25) + "px, " + (e.clientY - 3.25) + "px)";

      if (this.click) {
        this.adjustOuterCursorPosition(e, 9.75);
      } else {
        this.adjustOuterCursorPosition(e, 17.25);
      }
    },
    cursorClick(e) {
      this.click = true;
      this.adjustOuterCursorSize(20);
      this.adjustOuterCursorPosition(e, 9.75);
    },
    cursorRelease(e) {
      this.click = false;
      this.adjustOuterCursorSize(35);
      this.adjustOuterCursorPosition(e, 17.25);
    },
    adjustOuterCursorPosition(e, pos) {
      let outerCursor = document.querySelector(".outer-cursor");

      outerCursor.style.transform =
        "translate(" + (e.clientX - pos) + "px, " + (e.clientY - pos) + "px)";
    },
    adjustOuterCursorSize(size){
      let outerCursor = document.querySelector(".outer-cursor");

      outerCursor.style.width = size + "px";
      outerCursor.style.height = size + "px";
    }
  },
  mounted() {
    this.animateLoading();
    this.showOrHideHeader();
    window.addEventListener("mousemove", this.cursor);
    window.addEventListener("mousedown", this.cursorClick);
    window.addEventListener("mouseup", this.cursorRelease);
    document.querySelector('html').style.scrollBehavior = "smooth";
  },
  watch: {
    $route: function () {
      this.showOrHideHeader();
    },
  },
};
</script>

<style lang="scss" scoped>
*,
*:hover {
  cursor: none !important;
}
a{
  cursor: none !important;
}
.inner-cursor,
.outer-cursor {
  position: fixed;
  z-index: 10000;
  border-radius: 50%;
  pointer-events: none;
}
.inner-cursor {
  height: 7px;
  width: 7px;
  background-color: $light-violet;
  transition: height 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96),
    width 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
}
.outer-cursor {
  height: 35px;
  width: 35px;
  border: 1px solid $light-violet;
  transition: 0.1s;
}
</style>



