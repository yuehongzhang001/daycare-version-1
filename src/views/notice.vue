<template>
  <div class="news-detail-root">
    <div class="flex-body">
      <div class=" ql-editor" v-html="noticeContent">
        
      </div>
    </div>
  </div>
</template>

<script>
import noticeAPI from "@/apis/noticeAPI.js";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  data() {
    return {
      noticeContent: "",
    };
  },
  created() {
    noticeAPI.get().then((response) => {
      this.noticeContent = response.data.data.data;
    });
  },
};
</script>


<style src="@/assets/bootstrap/css/bootstrap.css" scoped></style>
<style lang="css" scoped>
.news-detail-content {

  white-space: normal;
}
.news-detail-title{
  border-bottom: 4px solid #f8f7f3;
  padding: 1rem 0;
}
.flex-body {
  max-width: 65rem;
  margin: auto;

  padding: 1rem;
}

.news-detail-date{
  background-color: #f8f7f3;
  padding: 0.7rem;
  color: #999999;
  font-style: italic;
  font-size: 1rem;
}
</style>
