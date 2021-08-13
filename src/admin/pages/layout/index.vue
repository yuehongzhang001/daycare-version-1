<template>
  <div class="admin-container">
      <div class="sidebar-container">
          <sidebar></sidebar>
      </div>
      <div class="right-container">
        <navbar></navbar>
        <AppMain></AppMain>
      </div>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
import navbar from './components/navbar.vue'
import sidebar from './components/sidebar'
export default {
  components: { navbar,sidebar, AppMain },

}
</script>

<style>
.admin-container{
  height: 100%;
  display:flex;
}
.sidebar-container{
  flex: 1;
  height: 100%;

}
.right-container{
  flex: 8;
  height: 100%;
  overflow:scroll;
}
html,body {
  width: 100%!important;
  height: 100%!important;
}
</style>