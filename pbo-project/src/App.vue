<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <div class="headerDiv">
      <span id="headerSalad"> 🥗ShareMeal🍔</span>
    </div>

    <!--<HelloWorld id="helloDiv" msg="Welcome to Your Vue.js App"/>-->
    <!--<Last id="test" msg="test msg"/>-->
    <Recipes id="recipesID" msg="recipes page"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Recipes from "./components/Recipes.vue"
import Last from "./components/Last";

export default {
  name: 'app',
  components: {
    HelloWorld,
    Recipes,
    Last
  }
}
</script>
s
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#hellDiv{
  width: 100%;
}

#headerSalad{
  font-size: 48pt;
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
