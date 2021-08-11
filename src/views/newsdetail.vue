<template>
  <div class="news-detail-root">
    <page-header>NEWS</page-header>
    <div class="flex-body">
      <div class="news-detail-title"><h1>title</h1></div>
      <div class="news-detail-date"><i class="glyphicon glyphicon-calendar"></i><span>Posted on May 10, 2021</span> </div>
      <div class="news-detail-content">
        News content:
        New health orders were announced Sunday afternoon. These
        new orders are being labelled as a proactive decision around safety for
        school age children. ”All K-12 schools in Winnipeg will move to remote
        learning from May 12 to May 30”. Students whose parents/caregivers are
        deemed “ESSENTIAL SERVICE WORKERS (E.S.W.) will have the choice to
        remain in school learning. Due to the increase of “level of
        transmission” for school aged children, before and after school care
        will not be available for families who do not self-declare as E.S.W. New
        health orders were announced Sunday afternoon. These new orders are
        being labelled as a proactive decision around safety for school age
        children. ”All K-12 schools in Winnipeg will move to remote learning
        from May 12 to May 30”. Students whose parents/caregivers are deemed
        “ESSENTIAL SERVICE WORKERS (E.S.W.) will have the choice to remain in
        school learning. Due to the increase of “level of transmission” for
        school aged children, before and after school care will not be available
        for families who do not self-declare as E.S.W. New health orders were
        announced Sunday afternoon. These new orders are being labelled as a
        proactive decision around safety for school age children. ”All K-12
        schools in Winnipeg will move to remote learning from May 12 to May 30”.
        Students whose parents/caregivers are deemed “ESSENTIAL SERVICE WORKERS
        (E.S.W.) will have the choice to remain in school learning. Due to the
        increase of “level of transmission” for school aged children, before and
        after school care will not be available for families who do not
        self-declare as E.S.W.
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "../components/pageHeader.vue";
export default {
  components: { pageHeader },
};
</script>

<style src="@/assets/bootstrap/css/bootstrap.css" scoped></style>
<style lang="css" scoped>
.news-detail-content {
  word-break: break-all;
  
}
.news-detail-title{
  border-bottom: 4px solid #f8f7f3;
  padding: 1rem 0;
}
.flex-body {
  max-width: 75rem;
  margin: auto;
  text-align: left;
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
