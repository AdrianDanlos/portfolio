import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'
import vuetify from './plugins/vuetify';
import 'normalize.css';

//Shared componentes
import Navbar from './components/shared/Navbar';
import Logo from './components/shared/MyLogo.vue';


Vue.component('navbar', Navbar);
Vue.component('logo', Logo);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
