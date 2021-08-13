import Vue from "vue";
import Router from "vue-router";

//组件模块
import login from "@/admin/pages/login";

import layout from "@/admin/pages/layout";
Vue.use(Router);
const path = "/admin";
export default new Router({
  mode: "history",
  routes: [
    { path: path + "/login", name: "login", component: login, hidden:true},
    /*for waiting-list*/

    // { path: '/news',  name: 'news', component: resolve => require(['@/views/news.vue'], resolve)},
    {
      path: path + "/",
      component: layout,
      name: "Dashboard",
      redirect: path +"/dashboard",
      hidden:true,
      meta: { title: "权限管理", icon: "chart" },
      children: [
        {
          path: "dashboard",
          component: () => import('@/admin/pages/dashboard'),
          name: "Dashboard",
          meta: { title: "Dashboard", icon: "chart" },
        }
      ]
    },
    {
      path: path + "/activity",
      component: layout,
      name: "Activity",
      redirect: path +"/activity/list",
      meta: { title: "Activity", icon: "chart" },
      children: [
        {
          path: "list",
          component: () => import('@/admin/pages/activity/list'),
          name: "List",
          meta: { title: "List", icon: "table" },
        },
        {
          path: "save",
          component: () => import('@/admin/pages/activity/save'),
          name: "Save",
          meta: { title: "Save", icon: "table" },
          
        },
        {
          path: "edit/:id",
          hidden: true,
          component: () => import('@/admin/pages/activity/save'),
          name: "Edit",
          meta: { title: "Edit", icon: "table" },
          
        }
      ]
    },
    {
      path: path + "/news",
      component: layout,
      name: "News",
      redirect: path +"/news/list",
      meta: { title: "News", icon: "chart" },
      children: [
        {
          path: "list",
          component: () => import('@/admin/pages/news/list'),
          name: "List",
          meta: { title: "List", icon: "table" },
        },
        {
          path: "save",
          component: () => import('@/admin/pages/news/save'),
          name: "Save",
          meta: { title: "Save", icon: "table" },
        },
        {
          path: "edit/:id",
          hidden: true,
          component: () => import('@/admin/pages/news/save'),
          name: "Edit",
          meta: { title: "Edit", icon: "table" },
          
        }
      ]
    },

    {
      path: path + "/notice",
      component: layout,
      name: "Notice",
      redirect: path +"/notice/edit",
      meta: { title: "Notice", icon: "chart" },
      children: [
        {
          path: "edit",
          component: () => import('@/admin/pages/notice/edit'),
          name: "edit",
          meta: { title: "Edit", icon: "table" },
        },
      ],
    },
    {
      path: path + "/calendar",
      component: layout,
      name: "Calendar",
      redirect: path +"/calendar/edit",
      meta: { title: "Calendar", icon: "el-icon-date" },
      children: [
        {
          path: "edit",
          component: () => import('@/admin/pages/calendar/edit'),
          name: "edit",
          meta: { title: "Edit", icon: "table" },
        },
      ],
    },
    {
      path: path + "/banner",
      component: layout,
      name: "Banner",
      redirect: path +"/banner/edit",
      meta: { title: "Banner", icon: "chart" },
      children: [
        {
          path: "edit",
          component: () => import('@/admin/pages/banner/edit'),
          name: "edit",
          meta: { title: "Edit", icon: "table" },
        },
      ],
    },
  ],
});
