<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <span id="headerSalad"> 🥗ShareMeal🍔</span>
    <!--<HelloWorld id="helloDiv" msg="Welcome to Your Vue.js App"/>-->
    <Last id="test" msg="test msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Last from "./components/Last";

export default {
  name: 'app',
  components: {
    HelloWorld,
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
</style>
