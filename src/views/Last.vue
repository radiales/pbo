<template>

    <div class="Last">

            <div class="Header">
                <h1>Tomatensuppe 🍜</h1>
            </div>

            <div class="Recipe">

                <ul id="Ingredients">
                    <li>
                        <h2>2 Tomaten 🍅</h2>
                        <h2>100ml Sahne 🥛</h2>
                        <h2>1tl Salz 🧂</h2>
                        <h2>1000ml Water 💧</h2>
                        <h2>Pfeffer 🌶️</h2>
                    </li>
                </ul>
            </div>

            <div class="Preperations">

                <h4>Die Tomaten an der Unterseite kreuzweise anritzen und in eine große Schüssel legen. Mit kochendem oder heißem Wasser übergießen. Nach 10 Minuten vorsichtig die Haut und den grünen Knopf auf der Oberseite von der Tomate entfernen und die geschälten Tomaten klein schneiden.

                    Nun die Zwiebeln klein würfeln und den Knoblauch pressen. Beides in Olivenöl anbraten und nach ca. 3 Minuten die Tomatenstücke hinzugeben. Nach ein paar Minuten die Gemüsebrühe und die Gewürze (ohne die Petersilie) hinzugeben und auf niedriger Temperatur 20 Minuten kochen. Das Tomatenmark unterrühren und die Suppe mit einem Pürierstab fein pürieren.
                    Nach Belieben mit den Gewürzen abschmecken und mit ein wenig frischer Petersilie servieren.
                </h4>
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
        text-align: left;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }

    .Header{
        margin: 0 auto;
        background: rgba(210, 210, 210, 0.4);
        border-radius: 15px;
        padding: 20px;
        margin-top: 15px;
        width: 70%;
        backdrop-filter: blur(5px);
        border-color: transparent!important;
    }
    .Recipe{
        margin: 0 auto;
        text-align: left;
        background: rgba(210, 210, 210, 0.4);
        border-radius: 15px;
        padding: 20px;
        margin-top: 15px;
        width: 70%;
        backdrop-filter: blur(5px);
        border-color: transparent!important;
    }
    .Preperations{
        margin: 0 auto;
        background: rgba(210, 210, 210, 0.4);
        border-radius: 15px;
        padding: 20px;
        margin-top: 15px;
        width: 70%;
        backdrop-filter: blur(5px);
        border-color: transparent!important;
    }
</style>
