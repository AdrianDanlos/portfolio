<template>
  <div class="overflow-hidden nav-container">
    <header class="d-flex align-center justify-space-between my-4 mx-6 ma-sm-9">
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
        <a href="#" @mouseover="drawerBg = 'home'" @mouseleave="drawerBg = 'none'">HOME</a>
        <a href="#" @mouseover="drawerBg = 'about'" @mouseleave="drawerBg = 'none'">ABOUT</a>
        <a href="#" @mouseover="drawerBg = 'projects'" @mouseleave="drawerBg = 'none'">PROJECTS</a>
        <a href="#" @mouseover="drawerBg = 'work'" @mouseleave="drawerBg = 'none'">WORK</a>
        <a
          href="#contact-container"
          @mouseover="drawerBg = 'contact'"
          @mouseleave="drawerBg = 'none'"
        >CONTACT</a>
        <a href="#" @mouseover="drawerBg = 'resume'" @mouseleave="drawerBg = 'none'">RESUME</a>
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
  @include fullScreen();
}
header {
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
  transition: transform 0.5s ease;
  background-position: center;
  background-size: cover;
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
