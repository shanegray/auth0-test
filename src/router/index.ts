import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Admin from "@/views/admin.vue";
import AdminViewer from "@/views/admin-viewer.vue";
import Authenticated from "@/views/authenticated.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/authenticated",
    component: Authenticated
  },
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/admin-viewer",
    component: AdminViewer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
