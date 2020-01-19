import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import backend from "@/services/backend.js"
import VueClipboard from "vue-clipboard2"

import Selectable from "@/components/Selectable"
import Constraint from "@/components/Constraint"
import Back from "@/components/Back.vue"
import Alert from "@/components/Alert.vue"

Vue.config.productionTip = false

// Vue.component("Home");
// Vue.component("Recipes");
// Vue.component("Last");
/*
 * FIX for non-registered components bug I
 * had before. 
*/
Vue.component("Selectable", Selectable);
Vue.component("Constraint", Constraint);
Vue.component("Back", Back);
Vue.component("Alert", Alert);

Vue.use(VueClipboard);

Vue.use({
  install(Vue) {
    Vue.prototype.$be = backend;
  }
});

new Vue({
  router,
  data: {
    ingredients: [],
    selectedPeopleCount: 1,
    chosenRecipe: null
  },
  render: h => h(App)
}).$mount('#app')
