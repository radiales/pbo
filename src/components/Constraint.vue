<template>
    <div class="templateDiv">
        <input type="checkbox" name="constraint" 
            :value="name" 
            :id="name" 
            v-model="Active">
            <label :for="name" class="constraint selectable vegan constraintLabel" :style="background">
                <img class="constraintimg" :src="imgSrc">
                <span>{{ name }}</span>
            </label>
    </div>
</template>

<script>
export default {
    props:  {
        name: {
            type: String
        },
        active: {
            default: false,
            type: Boolean
        }
    },
    computed:{
        imgSrc() {
            return require("@/../img/" + this.name + ".png");
        },
        background() {
            return {
                "background-color": this.Active ? "rgb(69, 126, 201)" : "rgba(0, 0, 0, 0)",
                "color": this.Active ? "white" : "inherit"
            };
        },
        Active: {
            get: function(){
                return this.active;
            },
            set: function(val){
                this.$emit("onConstraintsChanged", {
                    name: this.name,
                    active: val
                });
            }
        }
    }
}
</script>

<style scoped>
.templateDiv{
    padding: 10px;
}

.constraint{
	display: inline-block;
}

.selectable{
	background-size: contain;
	background-repeat: no-repeat;
	background-size: 70%;
	backdrop-filter: blur(10px);
	background-position: center;
	border-radius: 15px;
	display: inline-table;
}

.constraintLabel{
    padding: 10px;
}

.constraintimg{
    width: 100%;
    height: 100%;
}

input[type="checkbox"]{
    display: none;
}

/* input[type="checkbox"]:checked + .selectable{
    background: rgb(69, 126, 201);
	color: white;
} */
</style>