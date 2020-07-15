import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'
import vuetify from './plugins/vuetify';
import 'normalize.css';

//Shared componentes
import Logo from './components/shared/MyLogo';
import FullProjectLayout from './components/shared/FullProjectLayout';

Vue.component('logo', Logo);
Vue.component('FullProjectLayout', FullProjectLayout);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
