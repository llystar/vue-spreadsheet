import Vue from 'vue'
import App from './App.vue'
import vueSpreadsheets from 'vue-spreadsheets'
import 'vue-spreadsheets/lib/vue-spreadsheets.css'
Vue.use(vueSpreadsheets)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')