<template>
  <div class="recipiesPageDiv">
      <div class="titleDiv">
        <h1 @click="getRecipes">Recipes</h1>
        <Back :page="'home'" @goBack="x => $emit('goBack', x)"></Back>
      </div>
      <div class="mainDiv">
        <div class="recipesGrpDiv">
           <div class="nothingFound" v-if="meals.available.length == 0 && meals.unavailable.length == 0" @click="$emit('goBack', 'home')">
               <span>😢</span>
               <h4>Sorry, wir konnten keine Mahlzeiten finden die deinen Kriterien entsprechen!</h4>
           </div>
           <div v-for="(meal, id) in meals.available" :key="id" class="activeRecipeDiv" @click="nextPage('last', meal)">  
              <h3> {{ meal.name }} </h3>
            </div>
            <hr v-if="meals.available.length > 0 && meals.unavailable.length > 0" />
            <div v-for="(meal, id) in meals.unavailable" :key="id" class="inactiveRecipeDiv" @click="nextPage('last', meal)">  
              <h3> {{ meal.name }} </h3>
              <span class="missingIngredients">{{ meal.missing.map(x => x.name).slice(0, 3).join(", ") + ((meal.missing.length > 3) ? ", ..." : "") }}</span>
            </div>
        </div>
      </div>
  </div>    
  
</template>

<script>
export default {
  name: 'Recipes',
  props: ['show'],
  mounted() {
      this.getRecipes();
  },
  data: function(){
    return{
      doShow: this.show,
      debugRes: "",
      meals:{
        available:[],
        unavailable:[]
      }
    }
  },
  methods:{
    nextPage(val, meal){

        this.$root.$data.chosenRecipe = meal;

        this.doShow[val] = !this.doShow[val];
		this.doShow['recipes'] = false;
		this.$emit("onShowChanged", this.doShow);
    },
    getIngredients() {
        alert(this.$root.$data.ingredients);
    },
    async getRecipes() {
        const response = await this.$be.fetchRecipes(this.$root.$data.ingredients);
        this.debugRes = response.data;

        this.meals.unavailable = response.data["almostSuitable"];
        this.meals.available = response.data["suitable"];
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 20px 0 0;
  text-align:left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.titleDiv{
  margin: 0 auto;
  background: rgba(200,200,200,0.4);
  backdrop-filter: blur(10px);
  padding-top: 10px;
  padding-bottom: 10px;
}

.mainDiv{
  margin: 0 auto;
  padding: 2px;
}

.mainDiv hr{
  margin-top: 2%;
  margin-bottom: 2%;
  width: 8%;
}

.mainDiv h3{
  text-align: center;
  padding-top: 15px;
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

.activeRecipeDiv,
.inactiveRecipeDiv{
  border-radius: 10px;
  margin: 8px auto;
  width: 30%;
  cursor: pointer;
}

.activeRecipeDiv{
    background: rgba(200,200,200,0.4);
	backdrop-filter: blur(10px);
}

.inactiveRecipeDiv{  
  background: rgba(100,100,100,0.4);
	backdrop-filter: blur(10px);
}

.missingIngredients {
    font-size: 9pt;
    color: rgb(167, 0, 0);
}

@media screen and (max-width: 600px) {
  .activeRecipeDiv,
  .inactiveRecipeDiv{
      width: 90%;
      height: 60px;
  }

  .mainDiv hr{
    margin-top: 8%;
    margin-bottom: 8%;
    width: 50%;
  }

}

</style>
