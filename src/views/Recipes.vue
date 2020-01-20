<template>
  <div class="recipiesPageDiv">
    <div class="titleDiv">
      <h1 @click="getRecipes">Rezepte</h1>
      <Back :page="'home'"></Back>
    </div>
    <div class="mainDiv">
      <div class="recipesGrpDiv">
        <div class="nothingFound" v-if="meals.available.length == 0 && meals.unavailable.length == 0">
          <router-link :to="{ name: 'home' }" tag="span">
            <span>😢</span>
            <h4>Sorry, wir konnten keine Mahlzeiten finden die deinen Kriterien entsprechen!</h4>
           </router-link>
        </div>
        <div v-for="(meal, id) in meals.available" :key="id" class="activeRecipeDiv">  
          <router-link @click.native="AddMeal(meal)" :to="{ name: 'last' }" tag="span">
            <h3> {{ meal.name }} </h3>
          </router-link>
         </div>
         <hr v-if="meals.available.length > 0 && meals.unavailable.length > 0" />
         <div v-for="(meal, id) in meals.unavailable" :key="id" class="inactiveRecipeDiv">
          <router-link @click.native="AddMeal(meal)" :to="{ name: 'last' }" tag="span">
            <h3> {{ meal.name }} </h3>
            <span class="missingIngredients">{{ meal.missing.map(x => x.name).slice(0, 3).join(", ") + ((meal.missing.length > 3) ? ", ..." : "") }}</span>
          </router-link>
         </div>
      </div>
    </div>
  </div>    
  
</template>

<script>
export default {
  name: 'Recipes',
  mounted() {
    this.ingredients = this.$root.$data.ingredients;
    this.getRecipes();
  },
  data: function(){
    return{
      ingredients: null,
      meals:{
        available:[],
        unavailable:[]
      }
    }
  },
  methods:{
    AddMeal(meal){
      this.$root.$data.meal = meal;
      this.$root.$data.meal.ingredients.map(x => x.amount *= this.$root.$data.selectedPeopleCount);
    },
    async getRecipes() {
      const response = await this.$be.fetchRecipes(this.ingredients);
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
