<template>

      <!-- <img src="@/assets/banner.jpg" class="img"> -->
      <el-image
          style="width: 100%;"
          :src="url"
          :fit="fit"
        ></el-image>

</template>

<script>
import bannerAPI from'@/apis/bannerAPI.js'
export default {
  data () {
    return {
      url:''
    }
  },
  //require('@/assets/b2.jpg')
  created () {
    bannerAPI.getBanner().then(response=>{
      this.url = response.data.data.data;
    })
  }
}
</script>

<style >


</style>