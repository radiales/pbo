<template>
  <div class="recipiesPageDiv">
      <div class="titleDiv">
    <h1>Recipes</h1>    
      </div>

      <div class="mainDiv">
        <div class="recipesGrpDiv">
           <div v-for="meal in meals.available" v-bind:key="meal" class="activeRecipeDiv" v-on:click="nextPage('last')">  
              <h3> {{ meal }} </h3>
            </div>
            <hr/>
            <div v-for="meal in meals.unavailable" v-bind:key="meal" class="inactiveRecipeDiv" v-on:click="nextPage('last')">  
              <h3> {{ meal }} </h3>
            </div>
        </div>
      </div>
  </div>    
  
</template>

<script>
export default {
  name: 'Recipes',
  props: ['show'],
  data: function(){
    return{
      doShow: this.show,
      meals:{
        available:[
          "Pasta carbonara",
          "Nudelauflauf",
          "Spätzle"
        ],
        unavailable:[
          "Gemüseauflauf",
          "Cordon bleu",
          "French toast"
        ]
      }
    }
  },
  methods:{
    nextPage(val){
      this.doShow[val] = !this.doShow[val];
		  this.doShow['recipes'] = false;
		  this.$emit("onShowChanged", this.doShow);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  padding: 10px;
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

@media screen and (max-width: 600px) {
  .activeRecipeDiv,
  .inactiveRecipeDiv{
      width: 90%;
      height: 50px;
  }

  .mainDiv hr{
    margin-top: 8%;
    margin-bottom: 8%;
    width: 50%;
  }

}

</style>
