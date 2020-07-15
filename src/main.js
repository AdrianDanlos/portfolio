import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'
import vuetify from './plugins/vuetify';
import 'normalize.css';

//Shared componentes
import Logo from './components/shared/MyLogo';
import ProjectDesc1 from './components/shared/projectDescriptions/ProjectDesc1'
import ProjectDesc2 from './components/shared/projectDescriptions/ProjectDesc2'
import ProjectDesc3 from './components/shared/projectDescriptions/ProjectDesc3'
import ProjectDesc4 from './components/shared/projectDescriptions/ProjectDesc4'
import ProjectDesc5 from './components/shared/projectDescriptions/ProjectDesc5'

Vue.component('logo', Logo);
Vue.component('ProjectDesc1', ProjectDesc1);
Vue.component('ProjectDesc2', ProjectDesc2);
Vue.component('ProjectDesc3', ProjectDesc3);
Vue.component('ProjectDesc4', ProjectDesc4);
Vue.component('ProjectDesc5', ProjectDesc5);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
