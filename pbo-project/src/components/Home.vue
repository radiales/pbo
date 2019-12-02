<template>
	<div class="landingPage">
		<!--
		<div>
			<form class="tasteForm form">
				<div class="tasteGroup">
					<input type="radio" id="sweet" value="süß"/>
					<label for="sweet">süß</label>
				</div>
				<div class="tasteGroup">
					<input type="radio" id="herzhaft" value="herzhaft"/>
					<label for="herzhaft">herzhaft</label>
				</div>
				<div class="tasteGroup">
					<input type="radio" id="spicy" value="spicy"/>
					<label for="spicy">spicy</label>
				</div>
			</form>
			<form class="countForm form">
				<label>Für wie viele Personen?</label><br>
				<input class="textInput" id="peopleCountInput" type="number">
			</form>
			<div class="form">
				<form>
					<input type="checkbox">
					<label>vegetarisch</label>
					<input type="checkbox">
					<label>vegan</label>
					<br>
					<input type="checkbox">
					<label>glutenfrei</label>
					<input type="checkbox">
					<label>laktosefrei</label>
				</form>
			</div>
			<div class="form">
				<label>Zutaten</label>
				<div class="ingredients chosenParent">
					<span class="availabilityLabel">Ausgewählt:</span>
					<div class="chosen ingredientsGroup">
						<span class="ingredient">Tomaten</span>
						<span class="ingredient">Schinkenwürfel</span>
						<span class="ingredient">Streukäse</span>
						<span class="ingredient">Blattsalat</span>
					</div>				
				</div>
				<div class="ingredients availableParent">
					<span class="availabilityLabel">Verfügbar</span>
					<form>
						<input class="textInput" type="text" placeholder="Suchen...">
					</form>
					<div class="available ingredientsGroup">
						<span class="ingredient">Spinat</span>
						<span class="ingredient">Gurken</span>
					</div>
				</div>
			</div>
		</div>
		-->
		<div>
			<form class="tasteForm form">
				<!--
				<div class="tasteGroup">
					<input type="radio" id="sweet" value="süß"/>
					<label for="sweet">süß</label>
				</div>
				<div class="tasteGroup">
					<input type="radio" id="herzhaft" value="herzhaft"/>
					<label for="herzhaft">herzhaft</label>
				</div>
				<div class="tasteGroup">
					<input type="radio" id="spicy" value="spicy"/>
					<label for="spicy">spicy</label>
				</div>
				-->
				<input type="radio" name="taste" value="suess" id="suess">
				<label for="suess">süß</label>
				<input type="radio" name="taste" value="herzhaft" id="herzhaft">
				<label for="herzhaft">herzhaft</label>
				<input type="radio" name="taste" value="spicy" id="spicy">
				<label for="spicy">spicy</label>
			
			</form>
			<form class="countForm form">
				<label>Für wie viele Personen?</label><br>
				<input type="radio" name="count" value="1" id="count1">
				<label class="noLabel" for="count1">1</label>
				<input type="radio" name="count" value="2" id="count2">
				<label class="noLabel" for="count2">2</label>
				<input type="radio" name="count" value="3" id="count3">
				<label class="noLabel" for="count3">3</label>
				<input type="radio" name="count" value="4" id="count4">
				<label class="noLabel" for="count4">4</label>
				<input type="radio" name="count" value="5" id="count5">
				<label class="noLabel" for="count5">5</label>
				<input type="radio" name="count" value="6" id="count6">
				<label class="noLabel" for="count6">6</label>
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
				<div class="ingredients chosenParent">
					<span class="availabilityLabel">Ausgewählt:</span>
					<div class="chosen ingredientsGroup">
						<span class="ingredient">Tomaten</span>
						<span class="ingredient">Schinkenwürfel</span>
						<span class="ingredient">Streukäse</span>
						<span class="ingredient">Blattsalat</span>
					</div>				
				</div>
				<div class="ingredients availableParent">
					<span class="availabilityLabel">Verfügbar</span>
					<form>
						<input class="textInput" type="text" placeholder="Suchen...">
					</form>
					<div class="available ingredientsGroup">
						<span class="ingredient">Spinat</span>
						<span class="ingredient">Gurken</span>
					</div>
				</div>
			</div>
			<div class="form searchForm">
				<form>
					<input v-on:click="show = !show" type="button" value="Search">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
  /*,
  data: function(){
	  return{
		  show: false
  		}
  }
  */
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

.noLabel{
	display: inline-block;
	padding: 10px;
	border-radius: 5px;
	margin: 5px;
	/*background: rgb(29, 86, 161);*/
	backdrop-filter: blur(10px);
	/*color: white;*/
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
	display: inline-block;
}

.availabilityLabel{
	font-weight: bold;
}

.ingredientsGroup{
	margin-top: 10px;
	margin-bottom: 10px;
	/*color: white;*/
}

.ingredient{
	/*
	background:rgb(29, 86, 161);
	border: 1px solid rgb(29, 86, 161);
	*/
	border-radius: 5px;
	padding: 5px;
	margin: 10px;
	float: left;
}

.chosen span {
	background: rgb(69, 126, 201);
	color: white;
}

.available > *{
	/*
	border: rgb(59, 127, 216);
	background: rgb(59, 127, 216);
	*/
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