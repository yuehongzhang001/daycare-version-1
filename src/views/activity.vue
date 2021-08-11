<template>
  <div>
    <div class="activity-container">
      <div class="description">{{ description }}</div>
      <div class="gallery">
        <el-image style="activity-picture" :src="url" :fit="fit"></el-image>
        <el-image
          style="activity-picture"
          src="https://images.squarespace-cdn.com/content/v1/5bdf2d01b40b9d7b5b80c2af/1543865727110-R82CW5O6FROWD92PE3PL/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/VegDaycareA-3.jpg"
          :fit="fit"
        ></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "This is a description",
      url:
        "https://assets.myy.org/dev/wp-content/uploads/20191204181137/05_Preschool.jpg",
      fit: "contain",
    };
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
  max-width: 750px;
  text-align: center;
  margin: auto;
  padding: 5px;
}
.activity-picture {
  width: 1200px;
}
</style>
