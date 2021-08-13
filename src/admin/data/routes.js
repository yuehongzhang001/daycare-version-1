const path = "/admin";
const routes=[
  {
    path: path + "/activity",
    component: "layout",
    name: "Activity",
    redirect: path + "/activity/list",
    meta: { title: "Activity", icon: "el-icon-picture" },
    children: [
      {
        path: "list",
        component: () => import("@/admin/pages/activity/list"),
        name: "View all",
        meta: { title: "List", icon: "table" },
      },
      {
        path: "save",
        component: () => import("@/admin/pages/activity/save"),
        name: "Create",
        meta: { title: "Save", icon: "table" },
      },
      {
        path: "edit/:id",
        hidden:true,
        component: () => import('@/admin/pages/activity/save'),
        name: "Edit",
        meta: { title: "Edit", icon: "table" },
      }
    ],
  },
  {
    path: path + "/news",
    component: "layout",
    name: "News",
    redirect: path + "/news/list",
    meta: { title: "News", icon: "el-icon-chat-line-square" },
    children: [
      {
        path: "list",
        component: () => import("@/admin/pages/news/list"),
        name: "View all",
        meta: { title: "List", icon: "table" },
      },
      {
        path: "save",
        component: () => import("@/admin/pages/news/save"),
        name: "Create",
        meta: { title: "Save", icon: "table" },
      },
      {
        path: "edit/:id",
        hidden:true,
        component: () => import('@/admin/pages/news/save'),
        name: "Edit",
        meta: { title: "Edit", icon: "table" },
        
      }
    ],
  },
  {
    path: path + "/notice",
    component: "layout",
    name: "Notice",
    redirect: path +"/notice/edit",
    meta: { title: "Notice", icon: "el-icon-message-solid" },
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
    component: "layout",
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
    component: "layout",
    name: "Banner",
    redirect: path +"/banner/edit",
    meta: { title: "Banner", icon: "el-icon-picture-outline" },
    children: [
      {
        path: "edit",
        component: () => import('@/admin/pages/banner/edit'),
        name: "edit",
        meta: { title: "Edit", icon: "table" },
      },
    ],
  },
]

function f(){
  console.log('f');
}
export default {
  routes,f
};
