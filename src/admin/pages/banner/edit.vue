<template>
  <div>
    <el-alert
      title="点击下方图片上传新的文件。点击上传后如果长时间没有反应，可能是传输的文件过大，默认单个图片大小不能超过2MB"
      type="success"
      :closable="false"
      style="width:500px;margin:1rem 0 1rem 120px;"
    >
    </el-alert>
    <el-form label-width="120px">
      <el-form-item label="Banner picture">
        <el-upload
          :show-file-list="false"
          :on-success="handleUploadSuccess"
          :before-upload="handleBeforeUpload"
          action="http://localhost:9000/tools/oss/upload"
          class="banner-uploader"
          v-loading="loading"
        >
          <el-image
            style="width: 600px;"
            :src="banner.url"
            fit="cover"
          ></el-image>
        </el-upload>
        <div style="text-align:left">
          <el-button type="primary" @click="confirm">Save change</el-button>
          <el-button @click="cancel">Cancel</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import bannerAPI from "@/admin/admin-api/bannerAPI.js";
export default {
  data() {
    return {
      banner: {
        url: "",
      },
      loading: true,
      oldUrl: "",
    };
  },
  created() {
    this.init();
  },

  methods: {
    init() {
      this.loading = true;
      this.oldUrl = "";
      (this.banner = {
        url: "",
      }),
        bannerAPI.getBanner().then((response) => {
          this.banner = response.data.data.data;
          this.loading = false;
        });
    },
    handleUploadSuccess(response) {
      this.banner.url = response.data.url;
      this.loading = false;
    },
    handleBeforeUpload(file) {
      this.loading = true;
      console.log(file);
      this.oldUrl = this.banner.url;
    },
    cancel() {
      //delete the picture on oss
      bannerAPI.delete(this.banner.url).then(() => {
        this.$message({
          message: "The change is not saved",
          duration: 3000,
        });
        this.init();
      });
    },
    confirm() {
      // 1 delete old url
      bannerAPI.delete(this.oldUrl).then(() => {
        console.log("oldUrl deleted");
        //2 update banner
        bannerAPI.update(this.banner).then(() => {
          this.$message({
            type: "success",
            message: "The change is saved",
            duration: 2000,
          });
          this.init();
        });
      });
    },
  },
};
</script>

<style>
.banner-uploader {
  margin-left: 0;
  text-align: left;
}
.el-upload {
  text-align: left;
}
</style>
