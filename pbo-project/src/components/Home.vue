<template>
	<div class="landingPage">
		<div>
			<form class="tasteForm form">
				<input type="radio" name="taste" value="suess" id="suess">
				<label for="suess">süß</label>
				<input type="radio" name="taste" value="herzhaft" id="herzhaft">
				<label for="herzhaft">herzhaft</label>
				<input type="radio" name="taste" value="spicy" id="spicy">
				<label for="spicy">spicy</label>
			
			</form>
			<form class="countForm form">
				<div class="peopleCountWrapper" v-for="i in peopleCount" v-bind:key="i">
					<input type="radio" name="count" :value="i" :id="'count'+i">
					<label class="noLabel" :for="'count'+i">{{ i }}</label>
				</div>
				<br>
				<hr>
				<label>Andere Anzahl:</label><br>
				<input onchange="if(this.value=='') this.style.background = 'default'; else this.style.background = 'rgb(69, 126, 201)';" class="textInput" id="peopleCountInput" type="number">
			</form>
			<div class="form constraintForm">
				<input type="checkbox" name="constraint" value="vegan" id="vegan">
				<label for="vegan" class="constraint selectable vegan">
					<img class="constraintimg" src="../../img/vegan.png">
					<span>vegan</span>
				</label>
				<input type="checkbox" name="constraint" value="veggie" id="veggie">
				<label for="veggie" class="constraint selectable veggie">
					<img class="constraintimg" src="../../img/veggie.png">
					<span>vegetarisch</span>	
				</label>
				<br>
				<input type="checkbox" name="constraint" value="glutenfree" id="glutenfree">
				<label for="glutenfree" class="constraint selectable glutenfree">
					<img class="constraintimg" src="../../img/glutenfree.png">
					<span>glutenfrei</span>
				</label>
				<input type="checkbox" name="constraint" value="lactosefree" id="lactosefree">
				<label for="lactosefree" class="constraint selectable lactosefree">
					<img class="constraintimg" src="../../img/lactosefree.png">
					<span>laktosefrei</span>
				</label>
			</div>
			<div class="form ingredientsForm">
				<label>Zutaten</label>
				<br>
				<div class="ingredients chosenParent">
					<span class="availabilityLabel">Ausgewählt:</span>
					<div class="chosen ingredientsGroup">
						<span 
							v-for="(ingredient, id) in availableIngredients" 
							:key="id" 
							v-bind:id="id"
							@click="addUnavailable($event, id)">
							<Selectable
								class="selectable"
								v-bind:ingredientName="ingredient.name" 
								v-bind:amount="ingredient.amount"
								v-bind:available="ingredient.available">
							</Selectable>
						</span>
					</div>				
				</div>
				<div class="ingredients availableParent">
					<span class="availabilityLabel">Verfügbar</span>
					<form>
						<input class="textInput" v-model="filterString" type="text" placeholder="Suchen...">
					</form>
					<div class="available ingredientsGroup">
						<div class="chosen ingredientsGroup">
						<span 
							v-for="(ingredient, id) in unavailableIngredients" 
							:key="id" 
							v-bind:id="id"  
							@click="addAvailable($event, id)">
							<Selectable
								class="selectable"
								v-bind:ingredientName="ingredient.name" 
								v-bind:amount="ingredient.amount"
								v-bind:available="ingredient.available">
							</Selectable>
						</span>
					</div>	
					</div>
				</div>
			</div>
			<div class="form searchForm">
				<form>
					<input v-on:click="nextPage" type="button" value="Search">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  props: ['show'],
  data: function(){
	  return{
		doShow: this.show,
		peopleCount: [1,2,3,4,5,6],
		filterString: "",
		ingredients: [
				{
					name: "Tomaten",
					amount: 300,
					available: true
				},
				{
					name: "Spinat",
					amount: 500,
					available: true
				},
				{
					name: "Zwiebeln",
					amount: 3,
					available: false
				},
				{
					name: "Nudeln",
					amount: 1000,
					available: false
				},
				{
					name: "Lachsfilet",
					amount: 500,
					available: false
				},
				{
					name: "Salat",
					amount: 500,
					available: false
				}
			]
  		}
	},
	computed:{
		availableIngredients(){
			return this.ingredients.filter(x => x.available);
		},
		unavailableIngredients(){
				return this.ingredients.filter(x => (!(x.available) && 
					((this.filterString=="")?true:(x.name.toLowerCase().indexOf(this.filterString.toLowerCase())!=-1))));
		}
	},
	methods: {
	  nextPage(){
		  this.doShow = !this.doShow;
		  this.$emit("onShowChanged", this.doShow);
		  /*
		   * We don't want to mutate the prop 'show' because its value will change
		   * on re-render of the parent element. So instead we mirror it on a local
		   * variable and then emit the change of the local variable back to the 
		   * original prop to pass to the parent.
		   */
	  },
	  addAvailable(event, id){
		  for(let ingr of this.ingredients){
			  if(ingr.name == this.unavailableIngredients[id].name){
				  ingr.available = !(ingr.available);
				  return;
			  }
		  }
	  },
	  addUnavailable(event, id){
		  for(let ingr of this.ingredients){
			  if(ingr.name == this.availableIngredients[id].name){
				  ingr.available = !(ingr.available);
				  return;
			  }
		  }
	  }
  },
}
</script>

<style scoped>
.tasteForm label{
	margin: 10px;
	padding: 10px;
	border-radius: 5px;
	backdrop-filter: blur(10px);
	display: inline;
	background: rgba(200,200,200,0.4);
	backdrop-filter: blur(10px);
}

.tasteForm > input{
	background: black;	
}

.tasteForm input[type="radio"]{
	display:none;
}

.tasteForm input[type="radio"]:checked + label{
	background: rgb(69, 126, 201);
	color: white;
}

.textInput {
	border-radius: 15px; 
	margin-top: 10px;
	text-align: center;
	border: 0;
}

.countForm input[type="radio"]{
	display: none;
}

.countForm input[type="radio"]:checked + .noLabel{
	background: rgb(69, 126, 201);
	color: white;
}

.peopleCountWrapper{
	display: inline;
}

.noLabel{
	display: inline-block;
	padding: 10px;
	border-radius: 5px;
	margin: 5px;
	backdrop-filter: blur(10px);
}

.form{
	background: rgba(210, 210, 210, 0.4);
	border-radius: 15px;
	padding: 20px;
	margin: 0 auto;
	margin-top: 15px;
	width: 70%;
	backdrop-filter: blur(5px);
}

.constraintForm input[type="checkbox"]{
	display: none;
}

.constraintForm input[type="checkbox"]:checked + .selectable{
	background: rgb(69, 126, 201);
	color: white;
}

.constraint{
	height: 20vw;
	width: 20vw;
	display: inline-block;
	padding-top: 5px;
	margin: 5px;
}

.selectable{
	background-size: contain;
	background-repeat: no-repeat;
	background-size: 70%;
	backdrop-filter: blur(10px);
	background-position: center;
	padding: 10px;
	border-radius: 15px;
	display: inline-table;
}

.constraintimg{
	width: 100%;
}

.ingredients{
	display: block;
}

Selectable{
	display: inline;
}

.availabilityLabel{
	font-weight: bold;
}

.ingredientsGroup{
	margin-top: 10px;
	margin-bottom: 10px;
}

.ingredient{
	border-radius: 5px;
	padding: 5px;
	margin: 10px;
}

.chosen .selectable{
	background: rgb(69, 126, 201);
	color: white;
}

.available > *{
	border-radius: 15px;
	backdrop-filter: blur(10px);
}

.searchForm{
	padding: 0;
	padding-top: 15px;
	padding-bottom: 15px;
	border-radius: 0;
	position: fixed;
	bottom: 0;
	width: 100%;
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