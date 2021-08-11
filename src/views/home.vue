<template>
  <div>
    <banner></banner>

    <div class="home-body-container">
      <div class="home-content-container">
        <header class="list-header-my">
          <div class="more-title">
            Activity Photos
            <router-link to="/gallery">( view all )</router-link>
          </div>
        </header>
        <div ><frame></frame><frame></frame><frame></frame></div>
        <header class="list-header-my">
          <div class="more-title">
            News <a href="./activityList.html" class="no-dec">( view all )</a>
          </div>
        </header>
        <section class="news-body">
          <ul class="news-list">
            <li><news-item></news-item></li>
            <li><news-item></news-item></li>
          </ul>
        </section>
        
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
import frame from "@/components/frame.vue";
import newsItem from '../components/news-item.vue';

export default {
  components: {
    banner,
    frame,
    newsItem,
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
  padding-left: 4rem;
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
.no-dec {
  color: #333;

}
.news-list {
  list-style: none;
  padding-left: 4rem;
}
.news-body{
  text-align: left;
}
</style>
