//const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/./../src/assets/sass/_variables.scss";`
      }
    }
  }
};