<template>
  <div id="spread">
    <div id="window">
      <h3 id="title" :style="headingStyle"> {{ Heading }}</h3>
      <p id="message"> {{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    }
  },
  computed: {
    Type(){
      let type = "";

      switch(this.type){
        case "error": type = "error"; break;
        case "success": type = "success"; break;
        default: type = "info";
      }

      return type;
    },
    Heading() {
      let heading = "";

      switch(this.Type){
        case "error": heading = "Fehler"; break;
        case "success": heading = "Fertig"; break;
        default: heading = "Info";
      }

      return heading;
    },
    headingStyle() {
      let color = "";

      switch(this.Type){
        case "error": color = "rgba(200,100,100,0.5)"; break;
        case "info": color = "rgba(69, 126, 201,0.5)"; break;
        default: color = "rgba(100,200,100,0.5)"; break;
      }

      return {
        "background": color
      }
    }
  }
}
</script>

<style scoped>
@keyframes appear {
  0%, 100%{
    opacity: 0;
    display: none;
  }
  20%, 80%{
    opacity: 1;
    display: block;
  }
}

#spread {
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  animation: appear ease-in-out 1s forwards;
}

#window {
  background: rgba(200,200,200,0.8);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  width: 40%;
  min-height: 10%;
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#title {
  width: 90%;
  padding: 5px;
  border-radius: 5px;
}
</style>