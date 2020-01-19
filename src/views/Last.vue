<template>
  <div class="Last">
    <div class="Header">
      <h1 v-if="recipe != null">{{ recipe.name }}</h1>
      <Back :page="'recipes'" @goBack="x => $emit('goBack', x)"></Back>
    </div>
    <div class="nothingFound" v-if="recipe == null" @click="$emit('goBack', 'recipes')">
      <span>😢</span>
      <h4>Sorry, da ist was schief gelaufen...</h4>
   </div>
    <div class="Recipe" v-if="recipe != null">
      <h3>Zutaten</h3>
      <ul id="Ingredients">
        <li v-for="(i, id) in recipe.ingredients" :key="id" :style="isMissing(i)" class="ingridient">{{ i.amount + i.unit + " " + i.name }}</li>
      </ul>
    </div>
    <div class="Preparations" v-if="recipe != null">
      <h3>Anleitung</h3>
      <ol>
        <li v-for="(step, id) in recipe.description.split('\n')" :key="id" class="step">{{ step }}</li>
      </ol>
    </div>
    <div class="form searchForm">
      <form>
        <router-link :to="{ name: 'invite' }">
          <input type="button" value="Einladen">
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'Last',
    data: function()
    {
      return {
        recipe: null
      }
    },
    methods: {
      isMissing(i) {
        return {
          "color": this.recipe.missing.map(x => x.name).includes(i.name) ? "rgb(167, 0, 0)" : "inherit"
        };
      }
    },
    mounted() {
      this.recipe = this.$root.$data.meal;
    }
	}
</script>

<style scoped>
#backContainer {
  position: fixed;
  bottom: 0;
}

ol {
  padding: 0;
}

ul {
	list-style-type: none;
	padding: 0s;
}

li {
	text-align: left;
	margin: 0 10px;
  word-wrap: break-word;
}

a {
	color: #42b983;
}

.nothingFound {
    border-radius: 10px;
    margin: 0 auto;
    background: rgba(200, 200, 200, 0.4);
    backdrop-filter: blur(10px);
    width: 90%;
    margin-top: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
}

.nothingFound > span {
    font-size: 19pt;
}

.Header{
	margin: 0 auto;
	background: rgba(210, 210, 210, 0.4);
  padding-top: 10px;
  padding-bottom: 10px;
	width: 100%;
	backdrop-filter: blur(5px);
	border-color: transparent!important;
}

.Recipe{
	margin: 0 auto;
	background: rgba(210, 210, 210, 0.4);
	border-radius: 15px;
	margin-top: 15px;
	width: 90%;
  padding-top: 5px;
  padding-bottom: 5px;
	backdrop-filter: blur(5px);
	border-color: transparent!important;
}

.ingridient {
  font-weight: 600;
  padding-inline-start: 10px;
}

.step {
  margin-bottom: 15px;
}

.Preparations{
	margin: 0 auto;
	background: rgba(210, 210, 210, 0.4);
	border-radius: 15px;
	padding: 20px;
	margin-top: 15px;
	width: calc(90% - 40px);
	backdrop-filter: blur(10px);
	border-color: transparent!important;
}

.searchForm{
  padding: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(200,200,200,0.4);
  backdrop-filter: blur(5px);
}

.searchForm input{
  width: 90%;
  height: 10vw;
  border: 0;
  background: rgb(69, 126, 201);
  border-radius: 5px;
  color: white;
}
</style>
