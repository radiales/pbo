import Vue from 'vue'

//import BootstrapVue from "../node_modules/bootstrap-vue"
import App from './App.vue'

import router from './router'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import Selectable from "./components/Selectable"

Vue.config.productionTip = false

//Vue.use(BootstrapVue);
Vue.component("Home");
Vue.component("Recipes");
Vue.component("Last");
/*
 * FIX for non-registered components bug I
 * had before. 
*/
Vue.component("Selectable", Selectable);

var vueIn = new Vue({
  router,
  data:{
    show: false
  },
  methods: {
    updateShowVariable: function(){
      this.$refs.Home.show = true
    }
  },
  render: h => h(App)
}).$mount('#app')
