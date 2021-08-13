<template>
  <div>
    <div class="nav-container">
      <nav class="nav">
        <ul class="main-menu">
          <li><router-link to="/index" class="path">Home</router-link></li>
          <li v-if="notice.visible"><router-link to="/notice" class="path">{{notice.name}}</router-link></li>
          <li><router-link to="/news" class="path">News</router-link></li>
          <li>
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link path" >
                Photos<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div v-for="(item, index) in activityList" :key="index">
                  <router-link :to="'/activity/'+item.activityId" class="drop path"><el-dropdown-item  v-if="index===0"> {{item.name}}</el-dropdown-item></router-link>
                  <router-link :to="'/activity/'+item.activityId" class="drop path"><el-dropdown-item  v-if="index!==0" divided> {{item.name}}</el-dropdown-item></router-link>
                </div>
                

                <router-link to="/gallery" class="drop path"><el-dropdown-item divided>all...</el-dropdown-item></router-link>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li><router-link to="/waiting-list" class="path">Waiting List</router-link></li>
          <li><router-link to="/calendar" class="path">Calendar</router-link></li>
          <li><router-link to="/contact" class="path">Contact</router-link></li>
          <!-- <li><el-dropdown-item divided>activity 4</el-dropdown-item></li> -->
        </ul>
      </nav>
    </div>

    
    
  </div>
</template>

<script>
const menuLimit = 4;
import navAPI from '@/apis/navAPI.js'
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      id: 1,
      activityList:[],
      notice: '',
      noticeName:"Covid Update"
    };
  },
  created () {
    this.initAcitivityMenu();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    initAcitivityMenu(){
      // call api to get activity List
      navAPI.getNav(menuLimit).then(response=>{
        console.log("getNav: ",response)
        this.activityList= response.data.data.activityList;
        this.notice = response.data.data.notice;

      })
    }
  },
};
</script>

<style lang="css" scoped>
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

  font-size: 1.3rem;
  color: white;
  background-color: #409EFF;
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
   background-color: #409EFF!important;
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
.drop{
  text-decoration:none;
  color: white;
}
.path:hover{
  color: red!important;
}

</style>
