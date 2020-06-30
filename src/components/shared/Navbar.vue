<template>
  <div class="overflow-hidden">
    <v-row class="d-flex align-center justify-space-between ma-9 menu-icon-container">
      <div class="d-flex align-center">
        <logo :class="menuColor"></logo>
        <header-brand :class="menuColor"></header-brand>
      </div>
      <div class="d-flex align-center open" v-if="!drawer" @click.stop="drawer = !drawer">
        <span class="d-none d-sm-block mr-2 font-weight-bold">MENU</span>
        <v-icon large>mdi-menu</v-icon>
      </div>
      <div class="d-flex align-center close" v-if="drawer" @click.stop="drawer = !drawer">
        <span class="d-none d-sm-block d- mr-2 font-weight-bold">CLOSE</span>
        <v-icon large>mdi-close</v-icon>
      </div>
    </v-row>

    <v-navigation-drawer v-model="drawer" absolute temporary width="100vw" class="drawer">
      <v-sheet
        height="100%"
        color="#000510"
        class="d-flex flex-column justify-center align-center menu"
      >
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PROJECTS</a>
        <a href="#">CONTACT</a>
        <p class="copyright d-flex">
          <span>© 2020 Made with</span>
          <v-icon small class="mx-1">mdi-cards-heart</v-icon>
          <span>by Adrian Danlos.</span>
        </p>
      </v-sheet>
    </v-navigation-drawer>
  </div>
</template>



<script>
import HeaderBrand from './../Header';

export default {
  components:{
    HeaderBrand,
  },
  data() {
    return {
      drawer: null,
      menuColor: "dark-text"
    };
  },
  methods: {
    async setHeaderColor() {
      //We check if the menu is closing or opening to set a timing for the color change of the logo and header-brand
      let timing;
      if(screen.width < 500){
        timing = this.drawer ? 50 : 200;
      }
      else{
        timing = this.drawer ? 50 : 350;
      }

      const result = await new Promise(resolve => {
        window.setTimeout(() => {
          resolve(this.drawer ? "light-text" : "dark-text");
        }, timing);
      });
      this.menuColor = result;
    }
  },
  watch: {
    drawer: function() {
      this.setHeaderColor();
    }
  }
};
</script>

<style scoped>
.menu-icon-container div {
  z-index: 10;
  cursor: pointer;
  user-select: none;
}
.open span,
.close span {
  font-size: 0.8rem;
  letter-spacing: 4px;
}
.open span,
.open i {
  color: #1f1f1f;
}
.menu a,
.menu p,
.menu i,
.close span,
.close i,
.open:hover * {
  color: #878a8f;
}
.close {
  transition: all 0.3s ease;
}
.close:hover * {
  color: white;
}
.close:hover i {
  transform: rotate(90deg);
}
.drawer {
  transition: all 0.5s ease;
}
.menu {
  opacity: 0.9;
}
.menu a {
  font-size: 60px;
  text-decoration: none;
  line-height: 80px;
  transition: 0.1s all;
  user-select: none;
  font-weight: 100;
}
.menu a:hover {
  color: white;
  font-weight: 900;
}
.copyright {
  font-size: 14px;
  font-weight: 300;
  position: absolute;
  bottom: 0;
  user-select: none;
}
/* #F44336 */
</style>
