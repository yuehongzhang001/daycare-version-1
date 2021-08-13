import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import home from '@/views/home.vue'
// import news from '@/views/news.vue'
// import waitinglist from '@/views/waiting-list.vue'
import test from '@/views/test.vue'
// import newsdetail from '@/views/newsdetail.vue'

Vue.use(Router)
 
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/index', name: 'home', component: home},
    /*for waiting-list*/ 
    { path: '/news',  name: 'news', component: resolve => require(['@/views/news.vue'], resolve)},
    { path: '/waiting-list',  name: 'waitinglist', component: resolve => require(['@/views/waiting-list.vue'], resolve)},
    { path: '/waiting-list/ok',  name: 'waitinglistok', component: resolve => require(['@/views/submit-ok.vue'], resolve)},
    { path: '/waiting-list/error',  name: 'waitinglistok', component: resolve => require(['@/views/submit-error.vue'], resolve)},


    { path: '/news/:id', name: 'newsdetail', component:  resolve => require(['@/views/newsdetail.vue'], resolve)},
    { path: '/gallery', name: 'gallery', component: resolve => require(['@/views/gallery.vue'], resolve) },
    { path: '/activity/:id',  name: 'Photos', component: resolve => require(['@/views/activity.vue'], resolve)},
    { path: '/calendar',  name: 'calendar', component: resolve => require(['@/views/calendar.vue'], resolve)},
    { path: '/contact',  name: 'Contact', component: resolve => require(['@/views/contact.vue'], resolve)},
    { path: '/notice',  name: 'Notice', component: resolve => require(['@/views/notice.vue'], resolve)},
    { path: '/test', name: 'test', component: test }
    
  ]
})