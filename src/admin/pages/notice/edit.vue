<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="8rem">
      <el-form-item label="Title">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="Visible">
        <template>
            <el-radio v-model="form.visible" :label="true">visible</el-radio>
            <el-radio v-model="form.visible" :label="false">invisible</el-radio>
        </template>
    </el-form-item>
      
      <el-form-item label="Content" style="height:600px; ">
        <!--Start: news content editing part-->

        <quill-editor
          v-model="form.noticeContent"
          :options="editorOption"
          ref="QuillEditor"
        ></quill-editor>
      </el-form-item>

      <el-dialog title="Upload picture" :visible.sync="dialogVisible" width="30%">
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
        <el-button type="primary" @click="SaveChanges">Save changes</el-button>
        <el-button @click="cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

import noticeAPI from "@/admin/admin-api/noticeAPI.js";

export default {
  data() {
    return {
      /**for img upload */
      uploadUrl: "http://127.0.0.1:9000/tools/oss/upload",
      /**for form */
      form: {
        id: "",
        name: "",
        visible: false,
        noticeContent: "",
      },
      templateType: "",
      picSort: 0,
      picList: [],
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
  created() {
    // check if this is a edit template
    
    this.init();
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
    /**for img upload */
    handleCancelUpload(){
      // clear the imgUrl
      this.imgUrl='';
      this.dialogVisible = false;
    },
    handleConfirmUpload(){
      //set the imgUrl into the editor
      let quill = this.$refs.QuillEditor.quill;
      let length = quill.getSelection(true).index;
      quill.insertEmbed(length, "image", this.imgUrl);
      quill.setSelection(length + 1);
      // clear the imgUrl
      this.imgUrl='';
      this.dialogVisible = false;
      
    },
    beforeAvatarUpload() {
      this.loading = true;
    },
    /* eslint-disable */
    handleUploadSuccess(response, file, fileList) {
      this.loading=false;
      console.log("response", response);
      // console.log("file",file);
      // console.log("fileList",fileList);

      this.imgUrl = response.data.url;


      // save the picture
    },
    /**for form */
   
    /**get news info by calling api  */
    init() {
      noticeAPI.get().then((response) => {
        
        this.form.id = response.data.data.data.id;
        this.form.name = response.data.data.data.name;
        this.form.visible = response.data.data.data.visible;
        this.form.noticeContent = response.data.data.data.noticeContent;
        console.log("this.form",this.form);
      });
    },
    
    /**method to save changes */
    SaveChanges() {
      console.log("publish:", this.form);
      noticeAPI.update(this.form).then(()=>{
        this.init();
        this.$message({
          type: "success",
          message: "The changes have been saved",
          duration: 5000
        });
      })
    },

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
        this.init();
        this.$message({
          message: "The changes are not saved",
          duration: 5000
        });
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
