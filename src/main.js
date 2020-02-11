import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'


Vue.use(VueRouter);
Vue.config.productionTip = false

import './assets/sass/app.scss';

new Vue({
  render: h => h(App),

  router: new VueRouter(routes),
}).$mount('#app')
