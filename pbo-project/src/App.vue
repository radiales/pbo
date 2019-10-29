<template>
	<div id="app">
		<!--<img alt="Vue logo" src="./assets/logo.png">-->
		<!--<span id="headerSalad">🥗</span>-->
		<div id="appHeader">
			<div id="centeredDiv">
				<h2>MealShare</h2>
				<h5>What do you want to eat today?</h5>
			</div>
		</div>
		<Home id="homeDiv" msg="testMessage"/>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from "./components/Home.vue"

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

#appHeader{
	text-align: center;
}

#centeredDiv{
	text-align: left;
	width: 75%;
	margin: 0 auto;
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
