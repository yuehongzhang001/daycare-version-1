<template>
  <div>
    <page-header>NEWS</page-header>
    <div class="page-body">
      <div class="timeline-container">
        <div class="block">
          <el-timeline>
            <el-timeline-item v-for="item in newsList" :key="item.news_id">
              <el-card>
                <div class="timeline-badge" v-if="item.firstDay">{{item.month}}<div>{{item.year}}</div></div>
                <news-item class="news-item" :item="item"></news-item>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import banner from "@/components/banner.vue";


import pageHeader from '../components/pageHeader.vue';

import news_api from  "@/apis/news_api.js";
import NewsItem from '../components/news-item.vue';

const num = 100;
export default {
  data () {
    return {
      newsList:[]
    }
  },
  components: {
    pageHeader,NewsItem

  },
    created () {
    this.init();
  },
  methods: {
    init(){
      // call api to get news list
      news_api.getNewsList(num).then(response=>{
        this.newsList = response.data.data.data;

      });
    },

    
  }
}
</script>

<style lang="css" scoped>
.page-body {
  text-align: center;
  padding: 3rem 0 0 0;
}
.timeline-container {
  max-width: 70rem;
  padding: 1rem;
  margin: auto;
}

.timeline-badge {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  visibility: visible;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  list-style-type: none;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  color: #fff;
  width: 50px;
  height: 50px;
  padding-top: 11px;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  position: absolute;
  top: 0%;
  left: 0.4%;
  margin-left: -25px;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: #b70707;
}

.news-item {
  font-size: 1rem;
}
</style>
