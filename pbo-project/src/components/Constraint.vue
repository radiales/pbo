<template>
    <div class="templateDiv">
        <input type="checkbox" name="constraint" 
            v-bind:value="name" 
            v-bind:id="name" 
            v-model="constraints[name]">
	    <label v-bind:for="name" class="constraint selectable vegan constraintLabel">
	        <img class="constraintimg" v-bind:src="imgSrc">
	        <span>{{ name }}</span>
	    </label>
    </div>
</template>

<script>
export default {
    props:  ["name", "constraints"],
    data:function() {
        return{
            // constraints:{
            //     vegan: false,
            //     veggie: false,
            //     glutenfree: false,
            //     lactosefree: false
            // }
        }
    },
    computed:{
        imgSrc(){
            return require("../../img/" + this.name + ".png");
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

input[type="checkbox"]:checked + .selectable{
    background: rgb(69, 126, 201);
	color: white;
}
</style>