import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import axios from 'axios';

Vue.use(VueRouter);
Vue.config.productionTip = false
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

new Vue({
  render: h => h(App),

  router: new VueRouter(routes),
}).$mount('#app')
