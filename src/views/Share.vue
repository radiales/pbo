<template>
    <div class="Last">

        <div class="Person">
            <form class="PerForm">
                <span>
                    <label>Name</label>
                </span>
            </form>
        </div>

        <form class="IngForm">
            <div class="Ingridients">
                <li>Sahne</li>
            </div>
        </form>
            

        <form class="IngMisForm">
            <div class="Ingridients2">
                <li>Tomaten</li>
                <li>Tomatenmark</li>
                <li>Zwiebeln</li>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Share"
    }
</script>

<style scoped>
    .Last{

    }

    .IngForm{
        background: rgba(210, 210, 210, 0.4);
        border-radius: 15px;
        color: red;
        padding: 20px;
        margin: 0 auto;
        margin-top: 15px;
        width: 70%;
        backdrop-filter: blur(5px);
    }

    .IngMisForm{
        background: rgba(210, 210, 210, 0.4);
        border-radius: 15px;
        color: green;
        padding: 20px;
        margin: 0 auto;
        margin-top: 15px;
        width: 70%;
        backdrop-filter: blur(5px);
    }

    .PerForm{
        background: rgba(210, 210, 210, 0.4);
        border-radius: 15px;
        padding: 20px;
        margin: 0 auto;
        margin-top: 15px;
        width: 70%;
        backdrop-filter: blur(5px);
    }

</style>