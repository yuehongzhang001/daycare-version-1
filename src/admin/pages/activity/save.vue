<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="8rem">
      <el-form-item label="Activity Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="Activiy description">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="Add photos">
        <el-upload
          :show-file-list="false"
          :on-success="handleUploadSuccess"
          :before-upload="beforeAvatarUpload"
          :action="uploadUrl"
          class="avatar-uploader"
        >
          <div class="block" v-loading="loading">
            <i slot="default" class="el-icon-plus"></i>
          </div>
        </el-upload>

        <!--Start: picList part-->
      </el-form-item>
      <el-table :data="picList" style="width: 100%" max-height="600px">
        <el-table-column prop="url" label="Photo">
          <template slot-scope="scope">
            <el-image
              style="width: 150px; height: 80px"
              :src="scope.row.url"
              fit="cover"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="sort" label="Order" width="180">
          <template slot-scope="scope">
            <input
              type="text"
              @keyup.enter="handleEidtSort(scope.row.picId, scope.row.sort)"
              @blur="handleEidtSort(scope.row.picId, scope.row.sort)"
              v-model="scope.row.sort"
              style="width:1rem; text-align:center"
            />
          </template>
        </el-table-column>

        <el-table-column width="180" label="operation" fixed="right">
          <template slot-scope="scope">
            <el-button
              @click="handleDelete(scope.row.picId, scope.row.url)"
              type="text"
              size="small"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-form-item>
        <el-button type="primary" @click="publish">Publish</el-button>
        <el-button type="info" @click="saveDraft">Save as draft</el-button>

        <el-button type="danger" @click="discard">Discard</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import pictureAPI from "@/admin/admin-api/pictureAPI.js";
import activityAPI from "@/admin/admin-api/activityAPI.js";
export default {
  data() {
    return {
      /**for img upload */
      uploadUrl: "http://localhost:9000/tools/oss/upload",
      /**for form */
      form: {
        activityId: "",
        name: "",
        description: "",
        sort: "",
        status: "draft",
      },
      templateType: "",
      picSort: 0,
      picList: [],

      loading: false,
    };
  },
  watch: {
    $route() {
      this.init()
    }
  },
  created() {
    // check if this is a edit template
    this.init()
  },
  
  methods: {
    init(){
    if (this.$route.params && this.$route.params.id) {
      this.templateType = "edit";
      this.form.activityId = this.$route.params.id;
      this.initActivityInfo();
      this.initPicList();
    }else{
      this.templateType = "save";
      this.form = {
        activityId: "",
        name: "",
        description: "",
        sort: "",
        status: "draft",
      };
      this.picList = [];
    }
  },
    /**for img upload */

    beforeAvatarUpload() {
      this.loading = true;
    },
    /* eslint-disable */
    handleUploadSuccess(response, file, fileList) {
      // console.log("response",response);
      // console.log("file",file);
      // console.log("fileList",fileList);

      const url = response.data.url;

      //1 check if the activity is created, if no create it
      if (this.form.activityId === "") {
        activityAPI
          .save({
            name: this.form.name,
            description: this.form.description,
          })
          .then((response) => {
            this.form.activityId = response.data.data.data; // set up the activityId
            //2 after the activity is created, save the pic
            this.savePic(url, this.form.activityId, this.picSort);
          });
      } else {
        this.savePic(url, this.form.activityId, this.picSort);
      }

      // save the picture
    },
    /** method to save picutres info */
    savePic(url, activityId, picSort) {
      //1 save pic
      pictureAPI
        .save({
          activityId: activityId,
          url: url,
          sort: picSort,
        })
        .then(() => {
          //2 init the pic list
          this.initPicList();
          this.picSort++;
        });
    },
    /**get activity info by calling api  */
    initActivityInfo() {
      activityAPI.getActivity(this.form.activityId).then((response) => {
        this.form.name = response.data.data.data.name;
        this.form.description = response.data.data.data.description;
        this.form.sort = response.data.data.data.sort;
        console.log(this.form);
      });
    },
    initPicList() {
      pictureAPI.getPicList(this.form.activityId).then((response) => {
        // console.log("initPicList", response);
        this.picList = response.data.data.data;
        this.loading = false;
      });
    },
    handleDelete(picId, url) {
      pictureAPI.deletePicOnOss(url).then(() => {
        console.log("pic is deleted on oss:", url);
        pictureAPI.delete(picId).then(() => {
          this.initPicList();
        });
      });
    },
    handleEidtSort(picId, sort) {
      console.log(picId, " ", sort);
      pictureAPI.update({ picId, sort }).then(() => {
        this.initPicList();
      });
    },

    /**method to publish activity */
    publish() {
      this.form.status = "normal";
      this.saveOrUpdateActivity("The activity is published");
    },
    /**method to update activity as a draft */
    saveDraft() {
      this.form.status = "draft";
      this.saveOrUpdateActivity("The activity is saved as a draft");
    },
    saveOrUpdateActivity(message) {
      if (this.form.activityId) {
        // update activity
        activityAPI.update(this.form).then((response) => {
          //1 prompt success message
          this.$message({
            type: "success",
            message: message,
          });
          //2 jump to list page
          this.$router.push("/admin/activity/list");
        });
      } else {
        // save a new activity
        console.log("saveOrUpdateActivity")
        activityAPI.save(this.form).then(() => {
          this.$message({
            type: "success",
            message: message,
          });
          this.$router.push("/admin/activity/list");
        });
      }
    },

    discard() {
      //1 let user confirm whether to discard this activity
      this.$confirm(
        "This operation will discard this activity and all the pictures, are you sure to continue?",
        "Hint",
        {
          confirmButtonText: "confirm",
          cancelButtonText: "cancel",
          type: "warning",
        }
      ).then(() => {
        if(this.picList && this.picList.length>0){ //2 if there are pictures, delete pictures on oss firtst
          pictureAPI
          .batchDelete(this.picList)
          .then(() => {
            //3 delete the activity and pictures in database
            this.deleteActivity();
          })
          .catch((error) => {
            this.$message({
              type: "error",
              message: "Error happened when batchDelete",
            });
          });
        }else{//4 if there are no pictures, delete the activity and pictures in database directly
          this.deleteActivity();
        }
        
      });
    },
    /** method to delete the activity and pictures in database */
    deleteActivity(){
      if(this.form.activityId){
         activityAPI
              .discard(this.form.activityId)
              .then(() => {
                this.$message({
                  type: "success",
                  message: "This activity is discarded ",
                });
                this.$router.push("/admin/activity/list")
              });
      }else{
        this.$router.push("/admin/activity/list")
      }
     
    }
  },
};
</script>
<style scoped>
.form-container {
  padding: 1rem 30% 0 1rem;
  text-align: left;
}
.img-upload-block {
  text-align: center;
}
.el-upload-list__item-thumbnail {
  margin: auto 0;
}
.block {
  width: 50px;
  height: 50px;
  border: dashed grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
