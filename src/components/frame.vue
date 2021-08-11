<template>
  <div class="frame-root">
    <div class="frame-container">
      <router-link to="/activity/1"
        >
        
        <el-image
          style="image"
          src="https://assets.myy.org/dev/wp-content/uploads/20191204181137/05_Preschool.jpg"
          :fit="contain"
        ></el-image>
        <div class="word-container">
          <strong>Activity 1</strong> 
          <span class="more">view more</span>
          </div>
        
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:
        "https://assets.myy.org/dev/wp-content/uploads/20191204181137/05_Preschool.jpg",
    };
  },
};
</script>

<style lang="css" scoped>
.frame-root {
  max-width: 25rem;
  display: inline-block;
}
.frame-container {
  padding: 0.4rem;
  margin: 0 1rem;
  background-color: #f8f7f3;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
}
.image {
  height: 500px;
  z-index: 998;
}
.word-container{
  position:absolute;
 
  transform: translateY(-5rem);
   z-index: 999;
   font-size: 1rem;
   text-align: left;
   width: 90%;
}
.word-container strong{
  position: absolute;
  float: left;
  color: white;
  padding: 1px 8px;
  background-color: #b70707;
  transition: transform 0.8s;
  height: 2rem;
  max-width: 20rem;
  overflow: hidden;
}
.word-container strong:hover{
  transition: transform 0.8s;
  transform:translateY(-2rem)
}
.more{
  float: left;
  color: black;
  padding: 1px 8px;
  background-color: white;
  font-size: 0.5rem;
}

</style>
