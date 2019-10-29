<template>
  <div class="recipiesPageDiv">
      <div class="titleDiv">
    <h1>Recipes</h1>    
      </div>

      <div class="mainDiv">
        <div class="recipesGrpDiv">
           <div class="activeRecipeDiv">  
              <h3>Pasta <i class="arrow-right"></i> </h3>
            </div>
            <div class="activeRecipeDiv">  
               <h3> Pasta <i class="arrow-right"></i></h3>
            </div>
            <div class="activeRecipeDiv">  
               <h3> Pasta <i class="arrow-right"></i></h3>
            </div>
            <hr></hr>
            <div class="inactiveRecipeDiv">  
              <h3> Pasta <i class="arrow-right"></i> </h3>
            </div>
            <div class="inactiveRecipeDiv">  
               <h3> Pasta <i class="arrow-right"></i></h3>
            </div>
            <div class="inactiveRecipeDiv">  
               <h3> Pasta <i class="arrow-right"></i></h3>
            </div>
        </div>
      </div>
  </div>    
  
</template>

<script>
export default {
  name: 'Recipes',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
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

.titleDiv{
  margin: 0 auto;
  background: rgb(69, 151, 206);
  padding: 10px;
}

.mainDiv{
    margin: 0 auto;
    background: rgb(56, 202, 51);
    padding: 2px;
}

.mainDiv hr{
  border-top: 3px solid rgb(38, 138, 35)
}

.mainDiv h3{
   margin: 5% auto 5% 5%;
}

.activeRecipeDiv,
.inactiveRecipeDiv{
   margin: 8px auto;
   width: 30%;
   cursor: pointer;
}

.activeRecipeDiv{
    border: 1px solid green;
    background-color: rgb(57, 182, 57);    
}

.activeRecipeDiv i{
  margin-right: 5%;
  width: 15px;
  height: 15px;
  float: right;
  box-shadow: -2px 2px 0 rgba(255, 255, 255, .5);
  transform: rotate(225deg);
}

.inactiveRecipeDiv{  
  border: 1px solid green;
  background-color: rgb(119, 170, 119);
}

.inactiveRecipeDiv h3{  
 margin: 5% auto 5% 3%;
}

.inactiveRecipeDiv i:before,
.inactiveRecipeDiv i:after{
  float:right;
  content: ' '; 
  width: 2px;
  box-shadow: -2px 2px 0 rgba(255, 255, 255, .5);
}

.inactiveRecipeDiv i:before {
 margin-right:5%;
 transform: rotate(45deg);
 height: 22px;
}
.inactiveRecipeDiv i:after{
 transform: rotate(-45deg);
 height: 18px;
}

@media screen and (max-width: 600px) {
  .activeRecipeDiv,
  .inactiveRecipeDiv{
      width: 100%
  }
}

</style>
