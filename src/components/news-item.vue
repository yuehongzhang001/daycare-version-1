<template>
  <div class="item-root">
    <div class="news-title">
      <router-link :to="'/news/'+item.newsId">{{item.title}}</router-link>
    </div>
    <div class="news-date">
      <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>Posted on
      {{item.month}} {{item.day}}, {{item.year}}
    </div>
    <div class="news-content">
      {{item.summary}}
      <span>...<router-link :to="'/news/'+item.newsId">(more)</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: ['item'],
  created () {
    console.log("this.item",this.item)
  }
  
};
</script>

<style src="@/assets/bootstrap/css/bootstrap.css" scoped></style>
<style lang="css" scoped>
.news-date {
  font-size: 0.8rem;
  font-style: italic;
  text-align: left;
}
.news-title, .news-content{
  text-align: left;
}
</style>
