<template>
  <el-col  class="column">
    
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu  v-for="(route,index)  in routes" :index="index" :key="index">
        <template slot="title">
          <i :class="route.meta.icon"></i>
          <router-link :to="route.path"><span>{{route.name}}</span></router-link>
        </template>
        <el-menu-item-group>
          <router-link :to="route.path+'/'+child.path" v-for="(child,i) in route.children" :key="i" :style="child.hidden?'display:none':''"><el-menu-item :index="index+'-'+i">{{child.name}}</el-menu-item></router-link>
        </el-menu-item-group>
        
      </el-submenu>
     
    </el-menu>
  </el-col>
</template>

<script>
import data from '@/admin/data/routes.js'
import cookie from 'js-cookie'
import loginAPI from '@/admin/admin-api/loginAPI.js'
export default {
  data () {
    return {
      routes:data.routes,
    }
  },
  created () {
    if(!cookie.get('token')){
      this.$router.push("/admin/login")
    }else{
      loginAPI.checkin().then(()=>{
        
      }).catch(()=>{
        this.$router.push("/admin/login")
      })
    }
      
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-submenu .el-menu-item {
  min-width: 0%;
}
.el-menu-vertical-demo,
.el-menu {
  height: 100%;
  background-color: cornflowerblue;
}
.column{
  height: 100%;
}
li{
  text-align: left;
}
</style>
