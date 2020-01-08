import Vue        from 'vue'
import Router     from 'vue-router'
import Home       from './views/Home.vue'
import Recipes    from "./views/Recipes.vue"
import Last       from "./views/Last"

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: "/",
      components: {
        default:    Home,
        recipeView: Recipes,
        lastView:   Last,
      }//,
      //props: {default: true, recipeView: false, lastView: false}
    },
    {
      path: "/recipes",
      components: {
        default: Recipes
      }
    },
    {
      path: "/last",
      components: {
        default: Last
      }
    }
  ]
})

