<template>
  <div class="gallery-root">
      <page-header>PHOTOS</page-header>
    <div class="gallery-body">
        <frame v-for="item in activityList" :key="item.activity_id" :item="item"></frame>

    </div>  
    
  </div>
</template>

<script>
import frame from '../components/frame.vue'
import PageHeader from '../components/pageHeader.vue'
import activityAPI from '@/apis/activity_api.js'

const limit = 21
export default {
  components: { frame, PageHeader },

  data () {
    return {
      activityList:[]
    }
  },
  created () {
    this.init();
  },
  methods: {
    init(){
      // call api to get activity List
      activityAPI.getActivityList(limit).then(response=>{
        this.activityList= response.data.data.data;
        
      })
    }
  }

}
</script>


<style lang="css" scoped>
.gallery-body{
    margin: auto;
    max-width: 80rem;

    /* padding: 1rem; */
}

</style>