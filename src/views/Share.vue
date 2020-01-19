<template>
  <div class="Last">
    <div class="backgroundBlur fWeight600">
      <h2>Rezept: {{ name }}</h2>
    </div>
    <div class="backgroundBlur">
      <form id="nameForm">
        <label>Name: </label>
        <input required type="text" v-model="participantName" />
      </form>
      <h4>Ich bringe mit:</h4>
         <transition-group mode="out-in" name="fade" tag="ul" class="partUl">
        <li class="ingridientsNeeded ingLi ingGreen"
          v-for="(ing, id) in ingredientsToBring"
          :key="id"
          @click="removeFromOwn(id)">
          <span class="ingName ingGreen"> {{ ing.name }}</span>
          <span class="ingAmount">{{ ing.amount.toString() + " " + ing.unit }}</span>
        </li>
         </transition-group>
    </div>
    <div class="backgroundBlur">
      <h3>Gebraucht werden noch:</h3>
        <transition-group name="fade" tag="ul" class="partUl">
        <li class="ingridientsNeeded ingLi ingRed"
          v-for="(ing, id) in ingredientsNeeded"
          :key="id"
          @click="addToOwn(id)">
          <span class="ingName ingRed"> {{ ing.name }}</span>
          <span class="ingAmount">{{ ing.amount.toString() + " " + ing.unit }}</span>
        </li>
        </transition-group>
    </div>
    <div class="backgroundBlur" id="participantsWrapper">
      <h3>Wer bringt was mit:</h3>
      <div class="participant" 
        v-for="(part, id) in participants" 
        :key="id">
        <span class="fWeight600">{{ part.name }}</span>
        <ul class="partUl">
          <li 
            v-for="(ing, id) in part.ingredients" 
            :key="id" 
            class="ingLi">
            <span class="ingName">{{ ing.name }}</span>
            <span class="ingAmount">{{ ing.amount.toString() + " " + ing.unit }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="form searchForm">
        <input @click="update" :style="UnsavedChanges" type="submit" value="Update" form="nameForm"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Share",
  data: function() {
    return {
      debugInvite: "",
      unsavedChanges: false,
      participantName: "",
      name: "",
      ingredientsToBring: [],
      ingredientsNeeded: [
        {
          name: "Tomatenmark",
          amount: 1,
          unit: ""
        },
        {
          name: "Sahne",
          amount: 150,
          unit: "ml"
        }
      ],
      participants: [
        {
          name: "Julius",
          ingredients: [
            {
              name: "Tomaten",
              amount: 1,
              unit: ""
            },
            {
              name: "Tomatenmark",
              amount: 1,
              unit: ""
            }
          ]
        },
        {
          name: "Wlad",
          ingredients: [
            {
              name: "Sahne",
              amount: 150,
              unit: "ml"
            }
          ]
        }
      ]
    }
  },
  computed: {
    UnsavedChanges: function() {
      return {
        "background": this.unsavedChanges ? "" : "#b4b7bb"
      }
    }
  },
  mounted(){
    this.fetchInvite();
  },
  methods: {
    fetchInvite(){
      this.AsyncfetchInvite().then((x) => {
        this.debugInvite = x;
        this.name = x.name;
        this.ingredientsNeeded = x.ingredientsNeeded;
        this.participants = x.participants;
      });
    },
    async AsyncfetchInvite(){
      if(!this.$route.query.id) return;
      const response = await this.$be.fetchInvite(this.$route.query.id);
      return response.data;
    },
    update(){
      this.AsyncPutInvite().then(x => alert(x.error ? "Fehler" : "Fertig!"));
      this.unsavedChanges = false;

      setTimeout(()=>{this.fetchInvite()}, 300); //TODO: evaluate
    },
    async AsyncPutInvite(){
      let dataToBeAdded = {
        name: this.participantName,
        ingredients: this.ingredientsToBring
      };

      const response = await this.$be.putInvite(this.$route.query.id, JSON.parse(JSON.stringify(dataToBeAdded)));
      return response.data;
    },
    addToOwn(idx) {
      let found = false;
      for(let ing of this.ingredientsToBring){
        if(ing.name == this.ingredientsNeeded[idx].name){
          ing.amount += this.ingredientsNeeded[idx].amount;
          found = true;
          break;
        }
      }

      if(!found)
        this.ingredientsToBring.push(this.ingredientsNeeded[idx]);
      
      this.ingredientsNeeded.splice(idx, 1);
      this.unsavedChanges = true;
    },
    removeFromOwn(idx){
      let found = false;
      for(let ing of this.ingredientsNeeded){
        if(ing.name == this.ingredientsToBring[idx].name){
          ing.amount += this.ingredientsToBring[idx].amount;
          found = true;
          break;
        }
      }

      if(!found)
        this.ingredientsNeeded.push(this.ingredientsToBring[idx]);
      
      this.ingredientsToBring.splice(idx, 1);
      this.unsavedChanges = true;
    }
  }
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

.Last {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
}

.backgroundBlur {
  background: rgba(210, 210, 210, 0.4);
  backdrop-filter: blur(5px);
  width: 80%;
  border-radius: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.backgroundBlur > input, label {
  font-size: 14pt;
}

#participantsWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.participant {
  background: rgba(200, 200, 200, 0.4);
  margin-bottom: 10px;
  width: 80%;
  border-radius: 15px;
  padding: 5px;
}

.fWeight600 {
  font-weight: 600;
}

.partUl {
  padding: 5px;
  margin: 0;
  text-align: left;
  width: 100%;
}

.ingLi{
  list-style-type: none;
  padding: 5px;
  width: 90%;
  border-radius: 5px;
  background: rgba(100, 100, 150, 0.2);
  margin: 5px;
}

.ingName {
  display: inline-block;
  min-width: 40%;
  padding: 5px;
  background: rgba(50, 50, 150, 0.2);
  border-radius: 5px;
  margin-right: 5px;
  font-weight: 700;
}

.ingRed {
  background: rgba(150, 50, 50, 0.2);
}

.ingGreen {
  background: rgba(50, 150, 50, 0.2);
}

.form{
  background: rgba(210, 210, 210, 0.4);
  border-radius: 15px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 15px;
  width: 70%;
  backdrop-filter: blur(5px);
  left: 0;
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
