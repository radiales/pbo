<template>
    <div class="Last">

        <div class="Header">
            <h1>Tomatensuppe 🍅</h1>
        </div>

        <div class="Recipe">

            <ul id="Ingridients">
                <li>
                    <h4>2 Tomaten</h4>
                    <h4>100ml Sahne</h4>
                    <h4>1tl Salz</h4>
                    <h4>1000ml Water</h4>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Last',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0s;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }

    .Header{
        margin-top: auto;
        background: rgb(200, 100, 255);
        padding: 20px;
    }
    .Recipe{
        margin: 0 auto;
        background: rgb(220, 100, 220);
        padding: 10px;
    }
</style>
