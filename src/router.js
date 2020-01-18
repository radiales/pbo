import Vue        from 'vue'
import Router     from 'vue-router'
import Home       from './views/Home.vue'
import Recipes    from "./views/Recipes.vue"
import Last       from "./views/Last"
import Share      from "./views/Share"
import Invite     from "@/views/Invite"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      components: {
        default:    Home,
        recipeView: Recipes,
        lastView:   Last,
      }
    },
    {
      path: "/share",
      component: Share
    },
    {
      path: "/invite",
      component: Invite
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

