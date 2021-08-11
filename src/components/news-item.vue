<template>
  <div class="item-root">
    <div class="news-title">
      <router-link to="/newsdetail">news title</router-link>
    </div>
    <div class="news-date">
      <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>on
      May 5th,2021
    </div>
    <div class="news-content">
      Once again, this year Discovery’s Board, following the lead of many other
      Centres, has agreed to close our programs in the early afternoons, four
      times...
      <span><router-link to="/newsdetail">(more)</router-link></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/bootstrap/css/bootstrap.css" scoped></style>
<style lang="css" scoped>
.news-date {
  font-size: 0.8rem;
  font-style: italic;
}
.item-root {
  padding: 1rem 0;
  border-top: solid #e4dfdf 1px;
  max-width: 80%;
}
</style>
