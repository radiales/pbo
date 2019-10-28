<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <span id="headerSalad">🥗</span>
    <HelloWorld id="helloDiv" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

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
