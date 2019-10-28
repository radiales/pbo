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

                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies, lorem quis posuere egestas, justo felis euismod enim, eget porta turpis risus non quam.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse laoreet, nisl nec luctus viverra, velit dolor cursus mauris,
                    sit amet finibus purus purus non quam. Donec id neque quis magna convallis auctor pellentesque a tortor. Vivamus varius elit in mi gravida malesuada. Nam varius velit in
                    pharetra hendrerit. Duis vehicula laoreet erat. In enim ex, dapibus lobortis lobortis eget, ornare sed erat. Nulla dolor mauris, venenatis ut convallis pellentesque,
                    convallis mattis urna. Proin vulputate tempus arcu, non convallis leo iaculis et. Ut aliquet fermentum mollis. Sed ullamcorper tempor tempus.
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
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }

    .Header{
        margin-top: auto;
        background: rgb(245,199,84);
        padding: 20px;
    }
    .Recipe{
        margin: 0 auto;
        background: rgb(175,199,84);
        padding: 20px;
    }
    .Preperations{
        margin: 0 auto;
        background: rgb(140,199,84);
        padding: 20px;
    }
</style>
