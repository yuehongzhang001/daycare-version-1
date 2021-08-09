<template>
  <div>
    <topbar></topbar>
    <navbar></navbar>
    <page-header>NEWS</page-header>
    <timeline></timeline>
  </div>
  
</template>

<script>
// import banner from "@/components/banner.vue";

import navbar from "@/components/navbar.vue";
import topbar from "@/components/topbar.vue";
import pageHeader from '../components/pageHeader.vue';
import timeline from '../components/timeline.vue';
export default {
  components: {
    navbar,
    topbar,
    pageHeader,
    timeline

  },
}
  
</script>

<style></style>