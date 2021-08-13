<template>
  <div class="navbar">
    <el-button @click="logout" class="logout-button">logout</el-button>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  methods: {
    // logout and jump to login page
    logout(){
      cookie.remove('token');
      this.$router.push("/admin/login")
    }
  }
}
</script>

<style>
.navbar{
  background-color: #f8f7f3;
  height: 40px;
  border: grey;
  text-align: right;
  padding: 2px;
}
.logout-button{
  margin-right: 10px;
}
</style>