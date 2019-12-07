<template>
    <span class="ingredient">
        {{ ingredientName }}
    </span>
</template>

<script>
export default {
    name: "Selectable",
    props:{
        ingredientName: String,
        amount: Number,
        available: Boolean
    }
}
</script>

<style scoped>
.ingredient{
	border-radius: 5px;
	padding: 5px;
	margin: 10px;
}
</style>