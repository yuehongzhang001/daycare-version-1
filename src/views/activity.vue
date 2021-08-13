<template>
  <div>
    <div class="activity-container">
      <div class="description">{{ activity.description }}</div>
      <div class="gallery">
        <div class="activity-picture" v-for="picture in activity.pictureList" :key="picture.picId" >
          <el-image   :src="picture.url" :fit="cover" style="width:100%;"></el-image>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import activityAPI from "@/apis/activity_api.js";
export default {
  data() {
    return {
      activity_id: "",
      activity:[],

      fit: "contain",
    };
  },
  created() {
    this.activity_id = this.$route.params.id;
    this.init();
  },
  watch: {
    $route(to,from){
      console.log("to:",to," from: ",from);
      this.activity_id = this.$route.params.id;
      this.init();
    }
  },
  methods: {
    init() {
      // get Activity And Pics
      activityAPI.getActivityAndPics(this.activity_id).then((response) => {
        this.activity = response.data.data.data
        // console.log("response", this.data);
      });
    },
  },
};
</script>

<style>
.description {
  font-size: 1.5rem;
  padding: 1rem;
  text-align: left;
}
.activity-container {
  max-width: 60rem;
  text-align: center;
  margin: auto;
  padding: 5px;
}
.activity-picture {

}
</style>
