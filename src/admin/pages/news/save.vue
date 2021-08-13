<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="8rem">
      <el-form-item label="Title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="Summary">
        <el-input type="textarea" v-model="form.summary"></el-input>
      </el-form-item>
      <el-form-item label="Post date">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="select date"
            v-model="form.postDate"
            style="width: 50%;"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Content" style="height:600px; ">
        <!--Start: news content editing part-->

        <quill-editor
          v-model="form.content"
          :options="editorOption"
          ref="QuillEditor"
        ></quill-editor>
      </el-form-item>

      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <el-upload
          :show-file-list="false"
          :on-success="handleUploadSuccess"
          :before-upload="beforeAvatarUpload"
          :action="uploadUrl"
          multiple="false"
          class="avatar-uploader"
        >
          <div class="block" v-loading="loading">
            <i slot="default" class="el-icon-plus"></i>
          </div>
        </el-upload>
        <el-image
          style="width: 150px; height: 80px"
          :src="imgUrl"
          fit="cover"
        ></el-image>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleCancelUpload">Cancel</el-button>
          <el-button type="primary" @click="handleConfirmUpload"
            >Confirm</el-button
          >
        </span>
      </el-dialog>

      <el-form-item>
        <el-button type="primary" @click="publish">Publish</el-button>
        <el-button type="info" @click="saveDraft">Save as draft</el-button>

        <el-button @click="cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import newsAPI from "@/admin/admin-api/newsAPI.js";
export default {
  data() {
    return {
      /**for img upload */
      uploadUrl: "http://127.0.0.1:9000/tools/oss/upload",
     
      /**for form */
      form: {
        urlList:[],
        newsId: "",
        title: "",
        summary: "",
        postDate: new Date(),
        status: "draft",
        content: "",
        
      },
      templateType: "",
      imgUrl: "",
      loading: false,
      dialogVisible: false,
      /**editorOption */
      editorOption: {
        placeholder: "请输入文本...",
        modules: {
          toolbar: {
            // 配置工具栏，此次引入了全部工具栏，也可自行配置
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ["link", "image", "video"],
            ],
            handlers: {
              image: () => {
                this.quill.format("image", false);
              },
            },
          },
        },
      },
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  created() {
    // check if this is a edit template
    this.init();
    console.log(this.form)
  },
  computed: {
    quill() {
      let quill = this.$refs.BGEditor.quill;
      return quill;
    },
  },
  mounted() {
    var imgup = document.querySelector(".quill-editor .ql-image");
    imgup.onclick = () => {
      this.dialogVisible = !this.dialogVisible;
    };
  },
  methods: {
    init() {
      if (this.$route.params && this.$route.params.id) {
        this.templateType = "edit";
        this.form.newsId = this.$route.params.id;
        this.initNewsVoInfo();
      } else {
        this.form = {
          newsId: "",
          title: "",
          summary: "",
          postDate: new Date(),
          status: "draft",
          content: "",
          urlList:[],
        };
        this.templateType = "save";
      }
    },
    /**for img upload */
    handleCancelUpload() {
      newsAPI.deletePicture(this.imgUrl);
      console.log("deletePicture",this.imgUrl);
      // clear the imgUrl
      this.imgUrl = "";
      this.dialogVisible = false;
      
    },
    handleConfirmUpload() {
      //set the imgUrl into the editor
      let quill = this.$refs.QuillEditor.quill;
      let length = quill.getSelection(true).index;
      quill.insertEmbed(length, "image", this.imgUrl);
      quill.setSelection(length + 1);
      this.form.urlList.push(this.imgUrl);
      console.log(this.form);
      // clear the imgUrl
      this.imgUrl = "";
      this.dialogVisible = false;
    },
    beforeAvatarUpload() {
      this.loading = true;
    },
    /* eslint-disable */
    handleUploadSuccess(response, file, fileList) {
      this.loading = false;
      console.log("response", response);
      // console.log("file",file);
      // console.log("fileList",fileList);

      this.imgUrl = response.data.url;

      // save the picture
    },
    /**for form */

    /**get news info by calling api  */
    initNewsVoInfo() {
      newsAPI.getNewsVo(this.form.newsId).then((response) => {
        this.form.title = response.data.data.data.title;
        this.form.summary = response.data.data.data.summary;
        this.form.postDate = response.data.data.data.postDate;
        this.form.content = response.data.data.data.content;
        console.log(this.form);
      });
    },
    /**method to update activity */
    saveOrUpdateNews(meesage) {
      //1 check the goal of this operation

      if (this.form.newsId === "") {
        //this is a save operation

        // save this news
        newsAPI.save(this.form).then(() => {
          // prompt success message
          this.$message({
            type: "success",
            message: meesage,
          });
          this.$router.push("/admin/news/list");
        });
      } else {
        //this is a update operation

        newsAPI.update(this.form).then(() => {
          //1 prompt success message
          this.$message({
            type: "success",
            message: meesage,
          });
          //2 jump to list page
          this.$router.push("/admin/news/list");
        });
      }
    },
    /**method to publish activity */
    publish() {
      this.form.status = "normal";
      console.log("publish:", this.form);
      this.saveOrUpdateNews("News is published successfully");
    },
    /**method to update activity as a draft */
    saveDraft() {
      this.form.status = "draft";
      this.saveOrUpdateNews("This news is saved as a draft");
    },
    /**method of cancel button */
    cancel() {
      //1 let user confirm
      this.$confirm(
        "All the modification will not take effect, are you sure to continue?",
        "Hint",
        {
          confirmButtonText: "confirm",
          cancelButtonText: "cancel",
          type: "warning",
        }
      ).then(() => {
        if(this.form.urlList&& this.form.urlList.length>0){// batch delete the new added picutres on oss
          newsAPI.batchDeleteByUrls(this.form.urlList).then(()=>{
            this.$router.push("/admin/news/list");
          })
        }else{
          this.$router.push("/admin/news/list");
        }
        
      });
    },
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
.quill-editor {
  height: 500px !important;
}
</style>
