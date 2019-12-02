<template>
  <div id="app">
    <div id="heading">
      <div id="headingWrapper">
        <h2>MealShare</h2>
        <h4>What do you want to eat today?</h4>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/recipes">Recipes</router-link> |
      <router-link to="/last">Last</router-link>
    </div>
    <transition name="slide-fade">
      <router-view v-if="!show" class="view"></router-view>
    </transition>
    <transition name="slide-fade">
      <router-view v-if="show" class="view"  name="recipesView"></router-view>
    </transition>
    <transition
      name="lastTransition"
      enter-active-class="last-start"
      leave-active-class="last-leave"
      >
      <router-view v-if="show" class="view" name="lastView"></router-view>
    </transition>
  <!--
	<Home id="homeSection" msg="test"/>
  <Recipes id="recipesSection" msg="test"/>
  <Last id="lastSection" msg="test"/>
  -->
  </div>
</template>

<style>
body{
  margin: 0;
  border: 0;
  outline: 0;
  padding: 0;
  position: absolute;
  top: 0;
  height: 200vh;
  background-image: url("../img/bg_new.png");
  background-attachment: fixed;
  background-size: 50%;
}

#homeSection{
  position: absolute;
  left: 0;
}

#recipesSection{
  position: absolute;
  display: none;
  left: 100vw;
}

#lastSection{
  position: absolute;
  display: none;
  left: 100vw;
}

.recipes-start, .last-start{
  left: 100vw;
  display: none;
}

.recipes-leave, .last-leave{
  left: 0;
  display: block;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
  width: 100vw;
}

#headingWrapper{
  background: rgba(200,200,200,0.6);
  backdrop-filter: blur(1px);
  padding: 5px;
}

#heading{
  text-align: left;
  height: 15vh;
  background-image: url("../img/food_illustration.jpg");
  background-size: 100%;
  background-attachment: fixed;
}

#heading h2, #heading h4{
  margin-top: 5px;
  margin-bottom: 5px;
}

#hellDiv{
	width: 100%;
}

#appHeader{
	text-align: center;
}

#centeredDiv{
	text-align: left;
	width: 75%;
	margin: 0 auto;
}

#nav{
  display: none;
}

@media screen and (max-width: 600px) {
  #headerSalad{
    font-size: 28pt;
  }
  .headerDiv{
    margin-bottom: 5%;
  }
}
</style>

<script>
import Home     from "./components/Home.vue"
import Recipes  from "./components/Recipes.vue"
import Last     from "./components/Last.vue"

function animate(){
  document.querySelector("#recipesSection").classList += "animationTest";
}

export default{
  components:{
    'Home': Home,
    "Recipes": Recipes,
    "Last": Last
  },
  data:function(){
    return{
      show: false
    }
  }
}
</script>