import Vue from 'vue'
import App from './App'
import router from './router/routes'
import store from './store/store'
import vuetify from './plugins/vuetify';
import 'normalize.css';

//Shared componentes
import Logo from './shared/components/MyLogo';
import LiquidButton from './shared/components/LiquidButton';
import SectionTitle from './shared/components/SectionTitle';
import Underline from './shared/components/Underline';
import ScrollIcon from './shared/components/ScrollIcon';
import FooterVue from './shared/components/FooterVue';
import ProjectDesc1 from './shared/components/projectDescriptions/ProjectDesc1'
import ProjectDesc2 from './shared/components/projectDescriptions/ProjectDesc2'
import ProjectDesc3 from './shared/components/projectDescriptions/ProjectDesc3'
import ProjectDesc4 from './shared/components/projectDescriptions/ProjectDesc4'
import ProjectDesc5 from './shared/components/projectDescriptions/ProjectDesc5'

Vue.component('logo', Logo);
Vue.component('LiquidButton', LiquidButton);
Vue.component('SectionTitle', SectionTitle);
Vue.component('Underline', Underline);
Vue.component('ScrollIcon', ScrollIcon);
Vue.component('FooterVue', FooterVue);
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
