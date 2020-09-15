<template>
  <div class="overflow-hidden nav-container">
    <header class="d-flex align-center justify-space-between my-4 mx-6 ma-sm-9" id="navbar">
      <div class="d-flex align-center" @mouseover="cursorHover" @mouseleave="cursorLeave">
        <logo :class="menuColor"></logo>
        <!-- <header-brand :class="menuColor"></header-brand> -->
      </div>
      <nav>
        <div class="d-flex align-center open" v-if="!drawer" @click.stop="drawer = !drawer">
          <span class="d-none d-sm-block mr-2 font-weight-bold dark-text">MENU</span>
          <v-icon large>mdi-menu</v-icon>
        </div>
        <div class="d-flex align-center close" v-if="drawer" @click.stop="drawer = !drawer">
          <span class="d-none d-sm-block d- mr-2 font-weight-bold">CLOSE</span>
          <v-icon large>mdi-close</v-icon>
        </div>
      </nav>
    </header>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="100vw"
      class="drawer"
      :style="{ backgroundImage: 'url(' + '/images/drawer/' + drawerBg + '.jpg' + ')' }"
    >
      <v-sheet height="100%" class="flex-column menu">
        <a
          v-for="n in 6"
          :key="n"
          href="#"
          @mouseover="drawerBg = menuOptions[n - 1]"
          @mouseleave="drawerBg = 'none'"
          @click="n != 6 ? redirect(n) : null"
          @click.stop="drawer = !drawer"
        >{{menuOptions[n - 1]}}</a>
        <footer-vue color="gray-blue-text"></footer-vue>
      </v-sheet>
    </v-navigation-drawer>
  </div>
</template>



<script>
// import HeaderBrand from "./child/Brand";
import cursorEvents from "./../../shared/mixins/cursorEvents";

export default {
  mixins: [cursorEvents],
  components: {
    // HeaderBrand
  },
  data() {
    return {
      drawer: null,
      menuColor: "dark-text",
      drawerBg: "none",
      menuOptions: ["HOME", "ABOUT", "PROJECTS", "WORK", "CONTACT", "RESUME"],
    };
  },
  methods: {
    async setHeaderColor() {
      //We check if the menu is closing or opening to set a timing for the color change of the logo and header-brand
      let timing;

      if (screen.width < 1000) {
        timing = this.drawer ? 50 : 200;
      } else {
        timing = this.drawer ? 50 : 350;
      }

      const result = await new Promise((resolve) => {
        window.setTimeout(() => {
          resolve(this.drawer ? "gray200-text" : "dark-text");
        }, timing);
      });
      this.menuColor = result;
    },
    hideScrollY() {
      let html = document.getElementsByTagName("html")[0];
      //this.drawer ? html.style.overflowY = "scroll" : html.style.overflowY = "auto";
      if (this.drawer) {
        html.classList.add("no-scroll");
      } else {
        html.classList.remove("no-scroll");
      }
    },
    redirect(n) {
      let el;

      switch (n) {
        case 1:
          el = document.getElementById("web-container");
          break;
        case 2:
          el = document.getElementById("about-me-container");
          break;
        case 3:
          el = document.getElementById("featured-projects-container");
          break;
        case 4:
          el = document.getElementById("experience-container");
          break;
        case 5:
          el = document.getElementById("contact-container");
          break;
      }

      //Calculate element coordinates
      for (
        var lx = 0, ly = 0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
      );

      //Redirect to desired coordinate. We need the timeout to avoid window.scrollTo bug that redirects to the start of the page, ignoring the values given.
      setTimeout(() => {
        n !== 5 ? window.scrollTo(lx, ly - 90) : window.scrollTo(lx, ly);
      }, 1);
      // console.log({ x: lx, y: ly });
    },
  },
  mounted() {
    let navbar = document.getElementById("navbar");
    if (navbar) {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-90px";
        }
        prevScrollpos = currentScrollPos;
      };
    }
  },
  watch: {
    drawer: function () {
      this.setHeaderColor();
      this.hideScrollY();
    },
  },
};
</script>

<style scoped lang="scss">
.nav-container {
  position: absolute;
  z-index: 2000;
  @include fullScreen();
}
header {
  position: fixed;
  z-index: 3000;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: -ms-fill-available;
  width: -o-fill-available;
  width: fill-available;
  transition: top 0.3s;
  div,
  nav {
    z-index: 10;
    user-select: none;
  }
}
.open,
.close {
  span {
    font-size: 0.8rem;
    letter-spacing: 4px;
  }
}
.open {
  i {
    color: $dark;
  }
}
.close {
  transition: all 0.3s ease;
  &:hover {
    * {
      color: white;
    }
    i {
      transform: rotate(90deg);
    }
  }
}

.menu a,
.menu p,
.menu i,
.close span,
.close i,
.open:hover * {
  color: $gray-300 !important;
}

.drawer {
  transition: all 0.5s ease, background-image 0s;
  background-position: center;
  background-size: cover;
  position: fixed;
  z-index: 2000;
  .menu {
    @include flexCenter();
    opacity: 0.9;
    background-color: $dark-blue;
    a {
      font-size: 60px;
      text-decoration: none;
      line-height: 80px;
      transition: 0.1s all;
      user-select: none;
      font-weight: $thinest;
      &:hover {
        color: white;
        font-weight: $boldest;
      }
    }
  }
}
</style>
