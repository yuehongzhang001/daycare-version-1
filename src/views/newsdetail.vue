<template>
  <div class="news-detail-root">
    <page-header>NEWS</page-header>
    <div class="flex-body">
      <div class="news-detail-title"><h1>{{news.title}}</h1></div>
      <div class="news-detail-date"><i class="glyphicon glyphicon-calendar"></i><span>Posted on {{news.postDate.substring(0,11)}}</span> </div>
      <div class=" ql-editor" v-html="change(news.content)">
        
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "../components/pageHeader.vue";
import news_api from  "@/apis/news_api.js";
import 'quill/dist/quill.core.css'

import 'quill/dist/quill.snow.css'

import 'quill/dist/quill.bubble.css'
export default {
  data () {
    return {
      news:{}
    }
  },
  components: { pageHeader },
  created () {
    this.init();
  },
  methods: {
    init(){
      //get news_id from path
      this.news.news_id = this.$route.params.id;
      console.log(this.news.news_id)
      news_api.getNews(this.news.news_id).then(response=>{
        console.log("init: ",response)
        this.news = response.data.data.data
      });
    },
    change(content) {
      let t = content.replace("<iframe", `<iframe style="width:600px;height:400px;margin:auto"`);
      return t
    }
  }
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
  max-width: 75rem;
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
element.style{
  width: 800px!important;
  height: 500px!important;
  background: red;
}

</style>
