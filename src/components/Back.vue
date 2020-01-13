<template>
    <div id="container" @click="goBack">
        <h3>Back</h3>
    </div>
</template>

<script>
export default {
  name: "Back",
  props: {
    page: {
      default: "home",
      type: String
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

#container > h3 {
  margin: 0;
  padding: 0;
}
</style>