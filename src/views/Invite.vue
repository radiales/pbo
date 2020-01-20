<template>
  <div id="container">
    <Alert v-if="notifyCopy" :message="'Kopiert!'" :type="'success'" :offsetVertical="-40"></Alert>
    <Alert v-if="notifyCreate" :message="participantName + ', dein Invite wurde erstellt!'" :type="'success'" :offsetVertical="-40"></Alert>
    <Alert v-if="notifyError" :message="'Sorry, da ist was schief gelaufen...'" :type="'error'" :offsetVertical="-40"></Alert>
    <div class="wrapper">
      <div>
        <h3>Toll!</h3>
        <p id="message" @click="createInvite">
          Du hast ein Rezept gefunden!
          <br />
          <br />
          Um Freunde einzuladen oder zu sehen,
          wer welche Zutat mitbringt, kannst du hier einen Link generieren:
        </p>
      </div>
      <div v-if="!showLink">
        <label>Dein Name: </label>
        <input type="text" v-model="participantName" class="alignCenter"/>
        <input type="button" value="Link generieren" class="button margin15" @click="createInvite" />
      </div>
      <div v-if="showLink">
        <input type="text" :value="link" id="link" ref="link" @click="selectText">
        <div id="copyButtonWrapper" v-clipboard:copy="link" v-clipboard:success="onCopy" v-clipboard:error="onError">
          <input type="button" value="Kopieren" class="button">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invite",
  data: function () {
    return {
      id: null,
      showLink: false,
      participantName: "",
      showHint: false,
      notifyCopy: false,
      notifyCreate: false,
      notifyError: false
    }
  },
  computed: {
    link(){
      return window.location.origin + "/share?id=" + this.id;
    }
  },
  methods: {
    async createInvite() {
      let availableIngredients = this.$root.$data.meal.ingredients.filter(
        x => this.$root.$data.ingredients.find(y => y.name == x.name)
      );

      const invite = await this.$be.createInvite({
      name: this.$root.$data.meal.name,
      participants: [
          {
            name: this.participantName,
            ingredients: availableIngredients,
            multiplicator: this.$root.$data.selectedPeopleCount
          }
        ]
      });

      this.notifyCreate = true;

      this.id = invite.data.newId;
      this.showLink = true;
    },
    selectText(){
      this.$refs.link.select();
    },
    onCopy: function () {
      this.notifyCopy = true;
    },
    onError: function () {
        this.notifyError = true;
    }
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  width: 65%;
  background: rgba(210,210,210,0.8);
  backdrop-filter: blur(5px);
  margin-top: 15px;
  padding: 25px;
  border-radius: 15px;
}

#message {
  text-align: left;
}

.alignCenter {
  text-align: center;
}

.margin15 {
  margin-top: 15px;
}

#link {
  padding: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: white;
  border: 3px dotted black;
  width: 94%;
  text-align: center;
}

#copyButtonWrapper {
  margin-top: 25px;
  background: rgba(200,200,200,0.6);
  border-radius: 15px;
  padding: 15px;
}

.button {
  background: rgb(69, 126, 201);
  border-radius: 5px;
  padding: 10px;
  color: white;
  width: 80%;
  font-weight: 600;
  border: 0;
}
</style>