import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Selectable from "./components/Selectable"
import Constraint from "./components/Constraint"

Vue.config.productionTip = false

Vue.component("Home");
Vue.component("Recipes");
Vue.component("Last");
/*
 * FIX for non-registered components bug I
 * had before. 
*/
Vue.component("Selectable", Selectable);
Vue.component("Constraint", Constraint);

var vueIn = new Vue({
  router,
  data:{
    show: {
      home:     true,
      recipes:  false,
      last:     false,
      share:    false
    }
  },
  methods: {
    updateShowVariable: function(){
      this.$refs.Home.show = true
    }
  },
  render: h => h(App)
}).$mount('#app')
