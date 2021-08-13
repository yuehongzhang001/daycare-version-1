<template>
  <div id="admin">
    <router-view />
  </div>
</template>

<script>



export default {
  name: 'admin',
  components: {
  },
  
}

</script>

<style>
#admin {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
p{
  white-space: normal!important;;
  /* word-break: break-all;
  word-wrap:break-word; */

}
</style>
