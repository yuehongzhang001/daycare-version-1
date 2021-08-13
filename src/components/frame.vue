<template>
  <div class="frame-root">
    <div class="frame-container">
      <router-link :to="'/activity/'+item.activityId"
        >
        
        <el-image
          style="width:100%;height:250px"
          :src="item.frontImgUrl"
          fit="cover"
        ></el-image>
        <div class="word-container">
          <strong>{{item.name}}</strong> 
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
      
    };
  },
  props: ["item"]
};
</script>

<style lang="css" scoped>
.frame-root {
  width: 33%;
  min-width: 23rem;
  max-width: 35rem;
  display: inline-block;
}
.frame-container {
  padding: 0.4rem;
  margin: 0.4rem;
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
