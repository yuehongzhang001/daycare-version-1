<template>
  <div>
    <topbar></topbar>
    <navbar></navbar>
    <banner></banner>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";

import navbar from "@/components/navbar.vue";
import topbar from "@/components/topbar.vue";
export default {
  components: {
    navbar,
    topbar,
    banner
  },
};
</script>

<style></style>
