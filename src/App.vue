<template>
  <div id="app">
    <div id="heading">
      <div id="headingWrapper">
        <router-link :to="{ name: 'home' }" tag="span">
          <h2>MealShare</h2>
          <h4>What do you want to eat today?</h4>
        </router-link>
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view ></router-view>
    </transition>
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

@keyframes slidein {
  from
  {
    transform: translateX(100vw);
  }
  to
  {
    transform: translateX(0vw);
  }
}

@keyframes slideout {
  from
  {
    transform: translateX(0vw);
  }
  to
  {
    transform: translateX(-100vw);
  }
}

.slide-fade-enter-active
{
  animation: slidein .15s ease-in;
}

.slide-fade-leave-active
{
  animation: slideout .15s ease-out;
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
export default{
  name: "App"
}
</script>