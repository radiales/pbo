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
        inviteView: Invite
      }
    },
    {
      path: "/home",
      name: "home",
      props: true,
      component: Home
    },
    {
      path: "/share",
      name: "share",
      component: Share
    },
    {
      path: "/invite",
      name: "invite",
      component: Invite
    },
    {
      path: "/recipes",
      name: "recipes",
      props: true,
      component: Recipes
    },
    {
      path: "/last",
      name: "last",
      props: true,
      component: Last
    }
  ]
})

