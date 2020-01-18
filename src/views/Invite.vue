<template>
  <div>
    <div class="linkDiv" id="myInput">
      {{link}}
    </div>
    <div class="copyLinkDiv"  v-clipboard:copy="link" v-clipboard:success="onCopy" v-clipboard:error="onError">
      <input type="button" value="Copy Link">
    </div>
  </div>

</template>

<script>
    export default {
        name: "Invite",
        data: function () {
            return {
                link: 'Link to copy'
            }
        },
        methods: {
            onCopy: function (e) {
                alert('copied: ' + e.text)
            },
            onError: function () {
                alert('Failed')
            }
        }
    }
</script>

<style scoped>
  .linkDiv{
    margin: 80px auto;
    margin-bottom: 8px;
    padding: 10px;
    border-style: dashed;
    backdrop-filter: blur(5px);
    background: rgba(200,200,200,0.8);
    backdrop-filter: blur(10px);
    width: 60%;
  }

  .copyLinkDiv{
    border-radius: 0;
    margin: 0 auto;
    width: 60%;
  }

  .copyLinkDiv input{
    width: 90%;
    height: 10vw;
    border: 0;
    background: rgb(69, 126, 201);
    border-radius: 5px;
    color: white;
  }

</style>