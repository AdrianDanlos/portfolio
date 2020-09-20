<template>
  <v-app>
    <div class="inner-cursor" v-if="cursorMoved"></div>
    <div class="outer-cursor" v-if="cursorMoved"></div>
    <main-loading v-if="!loaded"></main-loading>
    <div v-if="loaded">
      <!-- header -->
      <header-vue v-if="showHeader"></header-vue>
      <!-- content -->
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
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
      cursorMoved: false,
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
      }, 3000); //3000 aprox --- 2s (2000) is the animation time of the loading logo
    },
    showOrHideFeatures() {
      let scroll = document.querySelector("html");

      if (this.$route.name === "FullProject") {
        this.showHeader = false;
        scroll.style.scrollBehavior = "auto";
      } else {
        this.showHeader = true;
        scroll.style.scrollBehavior = "smooth";
      }
    },
    cursorChange(e) {
      if (e.clientX && e.clientY) {
        this.cursorMoved = true;

        //We need the setTimeout to avoid vuejs errors caused by changing the DOM manually
        //To react to window events there is no other way than manually changing the DOM
        setTimeout(() => {
          let innerCursor = document.querySelector(".inner-cursor");

          innerCursor.style.transform =
            "translate(" +
            (e.clientX - 3.25) +
            "px, " +
            (e.clientY - 3.25) +
            "px)";

          if (this.click) {
            this.adjustOuterCursorPosition(e, 9.75);
          } else {
            this.adjustOuterCursorPosition(e, 17.25);
          }
        }, 0);
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
    adjustOuterCursorSize(size) {
      let outerCursor = document.querySelector(".outer-cursor");

      outerCursor.style.width = size + "px";
      outerCursor.style.height = size + "px";
    },
  },
  mounted() {
    this.animateLoading();
    this.showOrHideFeatures();
    //First cursor call to hide it until it has been moved by the user
    window.addEventListener("load", this.cursorChange);
    window.addEventListener("mousemove", this.cursorChange);
    window.addEventListener("mousedown", this.cursorClick);
    window.addEventListener("mouseup", this.cursorRelease);
    document.querySelector('head title').textContent = 'Adrian Danlos';
  },
  watch: {
    $route: function () {
      this.showOrHideFeatures();
      //Whenever the route changes we set the cursor back to normal. Otherwise mouseleave event never triggers on the clicked element.
      this.cursorLeave();
    },
  },
};
</script>

<style lang="scss" scoped>
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



