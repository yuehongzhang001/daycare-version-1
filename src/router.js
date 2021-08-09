import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import home from '@/views/home.vue'
import news from '@/views/news.vue'
 
Vue.use(Router)
 
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/index', name: 'home', component: home},
    { path: '/news',  name: 'news', component: news}
  ]
})