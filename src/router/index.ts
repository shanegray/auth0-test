import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Admin from "@/views/admin.vue";
import AdminViewer from "@/views/admin-viewer.vue";
import Authenticated from "@/views/authenticated.vue";
import Login from "@/views/Login.vue";
import Unauthorized from "@/views/Unauthorized.vue";
import user from "@/store/modules/user";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: { allowAnonymous: true }
  },
  {
    path: "/authenticated",
    component: Authenticated
  },
  {
    path: "/admin",
    component: Admin,
    meta: { roles: ["admin"] }
  },
  {
    path: "/admin-viewer",
    component: AdminViewer,
    meta: { roles: ["admin", "viewer"] }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { allowAnonymous: true }
  },
  {
    path: "/unauthorized",
    component: Unauthorized,
    meta: { allowAnonymous: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // TODO : Figure out sub nav
  // const requiresAuth = to.matched.some(r => r.meta.allowAnonymous)

  const userHasRoles = user.roles && user.roles.length;

  if (to.meta.allowAnonymous) {
    next();
  } else if (!user.isAuthenticated) {
    next({ name: "login" });
  } else {
    if (to.meta.roles && !userHasRoles) {
      next("/unauthorized");
    } else if (!to.meta.roles) {
      next();
    } else if (user.roles.some(r => to.meta.roles.includes(r))) {
      next();
    } else {
      console.log("NO WAY");
      next("/unauthorized");
    }
  }
});

export default router;
