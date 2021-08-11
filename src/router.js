import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import home from '@/views/home.vue'
import news from '@/views/news.vue'
import waitinglist from '@/views/waiting-list.vue'
import test from '@/views/test.vue'
import newsdetail from '@/views/newsdetail.vue'

Vue.use(Router)
 
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/index', name: 'home', component: home},
    { path: '/news',  name: 'news', component: news},
    { path: '/waiting-list',  name: 'waitinglist', component: waitinglist},
    { path: '/newsdetail/:id', name: 'newsdetail', component: newsdetail },
    { path: '/gallery', name: 'gallery', component: resolve => require(['@/views/gallery.vue'], resolve) },
    { path: '/activity/:id',  name: 'activity', component: resolve => require(['@/views/activity.vue'], resolve)},
    { path: '/test', name: 'test', component: test }
  ]
})