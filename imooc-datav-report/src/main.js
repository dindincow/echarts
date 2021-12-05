import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import * as ECharts from 'echarts'
import VueECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

Vue.config.productionTip = false;
Vue.prototype.$echarts = ECharts;
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
