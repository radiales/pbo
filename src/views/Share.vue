<template>
    <div class="Last">
        <div class="backgroundBlur">
           <label>Name </label>
           <input type="text" />
           <h4>Ich bringe mit:</h4>
           <ul class="partUl">
                <li class="ingridientsNeeded ingLi ingGreen"
                    v-for="(ing, id) in ingredientsToBring"
                    :key="id"
                    @click="removeFromOwn(id)">
                    <span class="ingName ingGreen"> {{ ing.name }}</span>
                    <span class="ingAmount">{{ ing.amount + ing.unit }}</span>
                </li>
            </ul>
        </div>
        <div class="backgroundBlur">
            <h3>Gebraucht werden noch:</h3>
            <ul class="partUl">
                <li class="ingridientsNeeded ingLi ingRed"
                    v-for="(ing, id) in ingredientsNeeded"
                    :key="id"
                    @click="addToOwn(id)">
                    <span class="ingName ingRed"> {{ ing.name }}</span>
                    <span class="ingAmount">{{ ing.amount + ing.unit }}</span>
                </li>
            </ul>
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
                        <span class="ingAmount">{{ ing.amount + ing.unit }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Share",
    data: function() {
        return {
            ingredientsToBring: [
                {
                    name: "Tomatenmark",
                    amount: 1,
                    unit: ""
                },
            ],
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
    methods: {
        addToOwn(idx) {
            this.ingredientsToBring.push(this.ingredientsNeeded[idx]);
            this.ingredientsNeeded = this.ingredientsNeeded.slice(idx-1, idx);
        },
        removeFromOwn(idx){
            this.ingredientsNeeded.push(this.ingredientsToBring[idx]);
            this.ingredientsToBring = this.ingredientsToBring.slice(idx-1, idx);
        }
    }
}
</script>

<style scoped>
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
</style>
