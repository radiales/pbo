<template>
	<div class="landingPage">
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
				<input type="number">
			</form>
			<div class="form">
				<label>Zutaten</label>
				<div class="ingridients chosenParent">
					<span>Ausgewählt:</span>
					<div class="chosen">
						<span>Tomaten</span>
						<span>Schinkenwürfel</span>
					</div>
				</div>
				<div class="ingridients availableParent">
					<span>Verfügbar</span>
					<div class="available">
						<span>Spinat</span>
						<span>Gurken</span>
					</div>
				</div>
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
}
</script>

<style scoped>

.tasteGroup{
	margin: 5px;
	padding: 5px;
	border: 1px  solid rgb(29, 86, 161);
	border-radius: 10px;
	background: rgb(29, 86, 161);
	color: white;
	display: inline;
}

.tasteForm > input{
	background: black;	
}

.tasteForm input, .tasteForm label{
	padding: 5px;
}

.countForm input{
	border-radius: 15px; 
}

.form{
	background: rgb(101, 142, 196);
	padding: 20px;
	margin-bottom: 15px;
}

.ingridients span{
	color: grey;
}

.chosen span {
	background: rgb(29, 86, 161);
	color: white;
}

</style>