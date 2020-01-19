<template>
    <div id="container">
      <router-link :to="{ name: page, params: propsToPass }">
        <h3>Back</h3>
      </router-link>
    </div>
</template>

<script>
export default {
  name: "Back",
  props: {
    page: {
      default: "home",
      type: String
    },
    propsToPass: {
      type: Object
    }
  },
  methods: {
    goBack() {
      this.$emit("goBack", this.page);
    }
  }
}
</script>

<style scoped>
#container {
  background:rgba(69, 126, 201, 0.4);
  backdrop-filter: blur(10px);
  width: calc(90% - 20px);
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
  cursor: pointer;
}

h3 {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
  padding: 0;
}
</style>