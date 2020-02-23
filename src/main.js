import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import Vue2TouchEvents from 'vue2-touch-events'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'


Vue.use(VueRouter);
Vue.use(Vue2TouchEvents);
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false

import './assets/sass/app.scss';

new Vue({
  render: h => h(App),

  router: new VueRouter(routes),
}).$mount('#app')
