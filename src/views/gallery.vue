<template>
  <div class="gallery-root">
      <page-header>ACTIVITIES</page-header>
    <div class="gallery-body">
        <frame></frame>
        <frame></frame>
        <frame></frame>
        <frame></frame>
        <frame></frame>
        <frame></frame>
    </div>  
    
  </div>
</template>

<script>
import frame from '../components/frame.vue'
import PageHeader from '../components/pageHeader.vue'
export default {
  components: { frame, PageHeader },

}
</script>


<style lang="css" scoped>
.gallery-body{
    margin: auto;
    max-width: 80rem;

    padding: 1rem;
}
</style>