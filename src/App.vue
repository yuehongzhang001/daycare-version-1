<template>
  <div id="app">
    <topbar></topbar>
    <navbar></navbar>
    <router-view />
    <foot></foot>
  </div>
</template>

<script>

import navbar from "@/components/navbar.vue";
import topbar from "@/components/topbar.vue";
import foot from './components/foot.vue';

export default {
  name: 'App',
  components: {
    navbar,
    topbar,
    foot
  },
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
p{
  white-space: normal!important;;
  /* word-break: break-all;
  word-wrap:break-word; */
}
</style>
