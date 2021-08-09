<template>
  <div>
    <div class="nav-container">
      <nav class="nav">
        <ul class="main-menu">
          <li><router-link to="/index">Home</router-link></li>
          <li><router-link to="/news">News</router-link></li>
          <li>
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                activities<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >activity 1</el-dropdown-item>
                <el-dropdown-item divided>activity 2</el-dropdown-item>
                <el-dropdown-item divided>activity 3</el-dropdown-item>
                <el-dropdown-item divided>activity 4</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li><a href="/admin.html">admin</a></li>
          <!-- <li><el-dropdown-item divided>activity 4</el-dropdown-item></li> -->
        </ul>
      </nav>
    </div>

    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.nav {
  text-align: center;
}
.el-menu{
  list-style-type: none!important;
}
.el-menu-item{
  list-style-type: none!important;
  display: inline!important;
}

/* self defined */
.nav-container{
  font-family: "Open Sans";
  font-size: 1.3rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.86);
  padding: 1rem 0rem;
}

.main-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.main-menu li {
  list-style-type: none;
  display: inline;
  margin: 1rem;
}

.main-menu li a{
  text-decoration:none;
  color: white;
  padding: 1rem;
}

.el-dropdown{
  font-size: 1.3rem!important;
  font-family: "Open Sans"!important;
  color: white!important;
  /* background-color: rgba(0, 0, 0, 0.86)!important; */
}
.el-dropdown-menu{
  font-size: 1.3rem!important;
  font-family: "Open Sans"!important;
  color: white!important;
   background-color: rgba(0, 0, 0, 0.86)!important;
}
.el-dropdown-menu__item{
  font-size: 1.3rem!important;
  font-family: "Open Sans"!important;
  color: white!important;
}
.el-dropdown-menu__item--divided::before{
  height: 0.03rem!important;
}
/* sytle from element-ui */
.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 1rem;
}
</style>
