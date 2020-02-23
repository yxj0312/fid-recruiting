import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import Vue2TouchEvents from 'vue2-touch-events'
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Bars from 'vuebars';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';


Vue.use(VueRouter);
Vue.use(Vue2TouchEvents);
Vue.use(VueFusionCharts, FusionCharts, Charts);
Vue.use(Bars)
Vue.config.productionTip = false

Vue.component('v-chart', ECharts)

import './assets/sass/app.scss';

new Vue({
  render: h => h(App),

  router: new VueRouter(routes),
}).$mount('#app')
