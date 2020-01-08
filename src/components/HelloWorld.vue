<template>
  <div class="hello">

    <div class="flavourDiv">
      <h2>Geschmack</h2>
      <select>
        <option>Herzhaft</option>
        <option>Süß</option>
        <option>Scharf</option>
        <option>Geil</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.flavourDiv{
  margin: 0 auto;
  background: rgb(69, 151, 206);
  padding: 10px;
}
</style>
