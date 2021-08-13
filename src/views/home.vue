<template>
  <div> 
    <div style="line-height:1rem;">
      <banner></banner>
      <coming-event></coming-event>
    </div>
    
    <div class="home-body-container">
      
      <div class="home-content-container">
        
        <header class="list-header-my">
          <div class="more-title">
            Activity Photos
            <router-link to="/gallery" class="link">( view all )</router-link>
          </div>
        </header>

        <div>
          <frame
            v-for="(item, index) in activityList"
            :key="index"
            :item="item"
          ></frame>
        </div>
        <header class="list-header-my">
          <div class="more-title">
            News <router-link to="/news" class="link">( view all )</router-link>
          </div>
        </header>
        <section class="news-body">
          <ul class="news-list">
            <li
              class="news-item-home"
              v-for="(item, index) in newsList"
              :key="index"
            >
              <news-item :item="item"></news-item>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
import frame from "@/components/frame.vue";
import newsItem from "../components/news-item.vue";
import activityAPI from "@/apis/activity_api.js";
import newsAPI from "@/apis/news_api.js";

import ComingEvent from '../components/comingEvent.vue';

const picLimit = 3;
const newsLimit = 5;
export default {
  data() {
    return {
      activityList: [],
      newsList: [],
    };
  },
  components: {
    banner,
    frame,
    newsItem,
    ComingEvent
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      activityAPI.getActivityList(picLimit).then((response) => {
        this.activityList = response.data.data.data;
      });
      newsAPI.getNewsList(newsLimit).then((response) => {
        this.newsList = response.data.data.data;
      });
    },
  },
};
</script>


<style lang="css" scoped>
.home-content-container {
  max-width: 80rem;
  margin: auto;
}
.list-header-my {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  color: #666666;
  visibility: visible;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  outline: none;
  margin: 1rem 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  display: block;
  width: 100%;
}
.more-title {
  text-align: left;
  padding-left: 1rem;
  font-size: 1.3rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  outline: none;
  border: 0;
  color: #333;
  font-weight: 400;
  line-height: 1.5em;
  font-family: "Open Sans";
  opacity: 1;
  visibility: visible;
  transition: opacity 0.24s ease-in-out;
}

.news-list {
  list-style: none;
  padding-left: 1rem;
  max-width: 80%;
}
.news-body {
  text-align: left;
}
.news-item-home {
  padding: 1rem 0;
  border-top: solid #e4dfdf 1px;
}
.link {
  color: #337ab7;
}


</style>
