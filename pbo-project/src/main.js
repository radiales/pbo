import Vue from 'vue'

//import BootstrapVue from "../node_modules/bootstrap-vue"
import App from './App.vue'

import router from './router'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

//Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
