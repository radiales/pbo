import Vue      from 'vue'
import Router   from 'vue-router'
import Home     from './components/Home.vue'
import Recipes  from "./components/Recipes.vue"
import Last     from "./components/Last"

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: "/",
      components: {
        default:    Home,
        recipeView: Recipes,
        lastView:   Last
      },
      props: {default: true, recipeView: false, lastView: false}
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

  /*
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/last',
      name: 'last',
      component: Last
    },
    {
      path: '/about',
      name: 'about',*/
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //}
  //]
})

