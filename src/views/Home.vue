<template>
  <div class="landingPage">
    <div>
      <form class="tasteForm form">
        <span v-for="(taste, id) in tastes" :key="id">
          <input type="radio" :name="taste" :value="taste" :id="taste" v-model="tasteString">
          <label :for="taste">{{ taste }}</label>
        </span>
      </form>
      <form class="countForm form">
        <div class="peopleCountWrapper" v-for="i in peopleCount" :key="i">
          <input type="radio" name="count" :value="i" :id="'count'+i" v-model="SelectedPeopleCount">
          <label class="noLabel" :for="'count'+i">{{ i }}</label>
        </div>
        <br>
        <hr>
        <label>Andere Anzahl:</label><br>
        <input v-model="SelectedPeopleCount" :style="countInputBackground" class="textInput" id="peopleCountInput" type="number">
      </form>
      <div class="form">
        <form class="constraintForm">
          <span v-for="(constraint, id) in Constraints" :key="id" class="constraint">
            <Constraint
              :name="id"
              :active="constraint"
              @onConstraintsChanged="changeConstraints"
            >
            </Constraint>
          </span>
        </form>
      </div>
      <div class="form ingredientsForm">
        <label>Zutaten</label>
        <br>
        <div class="ingredients chosenParent">
          <span class="availabilityLabel">Ausgewählt:</span>
          <transition-group name="fade" tag="div" class="chosen ingredientsGroup">
            <span
              v-for="(ingredient, id) in availableIngredients"
              :key="id"
              :id="id"
              @click="addUnavailable($event, id)">
              <Selectable
                class="selectable"
                :ingredientName="ingredient.name"
                :amount="ingredient.amount"
                :available="ingredient.available">
              </Selectable>
            </span>
          </transition-group>
        </div>
        <div class="ingredients availableParent">
          <span class="availabilityLabel">Verfügbar</span>
          <form>
            <input class="textInput" v-model="filterString" type="text" placeholder="Suchen...">
          </form>
          <div class="available ingredientsGroup">
            <transition-group name="fade" tag="div" class="chosen ingredientsGroup">
              <span
                v-for="(ingredient, id) in unavailableIngredients"
                :key="id"
                :id="id"
                @click="addAvailable($event, id)">
                <Selectable
                  class="selectable"
                  :ingredientName="ingredient.name"
                  :amount="ingredient.amount"
                  :available="ingredient.available">
                </Selectable>
              </span>
            </transition-group>
          </div>
        </div>
      </div>
      <div class="form searchForm">
        <form>
          <router-link @click.native="$root.$data.ingredients = availableIngredients" :to="{ name: 'recipes' }">
            <input type="button" value="Suchen">
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function(){
    return{
      peopleCount: [1,2,3,4,5,6],
      selectedPeopleCount: 1,
      tasteString: "",
      tastes:["süß", "spicy", "herzhaft"],
      constraints:{
        vegan: false,
        veggie: false,
        glutenfree: false,
        lactosefree: false
      },
      filterString: "",
      ingredients: [
        {
          name: "Tomaten",
          constraints: {
            vegan: true,
            veggie: true,
            lactosefree: true,
            glutenfree: true
          },
          available: true
        },
        {
          name: "Spinat",
          constraints: {
            vegan: true,
            veggie: true,
            lactosefree: true,
            glutenfree: true
          },
          available: true
        },
        {
          name: "Zwiebel",
          constraints: {
            vegan: true,
            veggie: true,
            lactosefree: true,
            glutenfree: true
          },
          available: false
        },
        {
          name: "Nudeln",
          constraints: {
            vegan: true,
            veggie: true,
            lactosefree: true,
            glutenfree: true
          },
          available: false
        },
        {
          name: "Lachsfilet",
          constraints: {
            vegan: false,
            veggie: false,
            lactosefree: true,
            glutenfree: true
          },
          available: false
        },
        {
          name: "Salat",
          constraints: {
            vegan: true,
            veggie: true,
            lactosefree: true,
            glutenfree: true
          },
          available: false
        },
        {
          name: "Sahne",
          constraints: {
            vegan: false,
            veggie: true,
            lactosefree: false,
            glutenfree: true
          },
          available: false
        }
      ]
    }
  },
  mounted() {
    for(let ing of this.ingredients){
      ing.available = this.$root.$data.ingredients.find(x => x.name == ing.name) != undefined;
    }
  },
  computed:{
    SelectedPeopleCount:{
      get: function(){
        return this.selectedPeopleCount;
      },
      set: function(val){
        this.selectedPeopleCount = (val > 100) ? 100 : parseInt(val);
        this.$root.$data.selectedPeopleCount = this.selectedPeopleCount;
      }
    },
    Constraints:{
      get: function(){
        return this.constraints;
      },
      set: function(val){
        this.constraints = val;
      }
    },
    availableIngredients(){
      return this.ingredients.filter(x => (x.available && this.fitsConstraints(x.constraints)));
    },
    unavailableIngredients(){
      return this.ingredients.filter(x =>
        (
          !(x.available) &&
          ((this.filterString=="") ? true : (x.name.toLowerCase().indexOf(this.filterString.toLowerCase())!=-1)) &&
          this.fitsConstraints(x.constraints)
        )
      );
    },
    countInputBackground(){
      return {
        "background-color": (this.selectedPeopleCount === 0)?"#fff":"rgb(69, 126, 201)",
        "color": (this.selectedPeopleCount === 0)?"#000":"#fff"
      }
    }
  },
  methods: {
    fitsConstraints(con) {
      let fits = true;
      Object.keys(con).forEach(c => {
        fits = fits && ((con[c] == this.Constraints[c]) || !this.Constraints[c])
      });
      return fits;
    },
    changeConstraints(val){
      if(val.name == "vegan" && val.active) this.Constraints.veggie = false;
      this.Constraints[val.name] = val.active;
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
.fade-enter-active {
  transition: all .5s ease-in;
}

.fade-leave-active{
  transition: all .5s ease-out;
}

.fade-enter {
  opacity: 0;
  transform: scaleY(0);
}

.fade-leave-to {
  opacity: 0;
  transform: scaleY(0)
}

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

.constraint{
  width: 30vw;
  display: inline-block;
}

.selectable{
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center;
  padding: 10px;
  border-radius: 15px;
  display: inline-table;
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