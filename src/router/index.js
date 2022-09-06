import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      layout: "empty",
      auth: false,
    },
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/license",
    name: "license",
    component: () => import("@/views/License.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/tariffs",
    name: "tariffs",
    component: () => import("@/views/Tariffs.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/systems",
    name: "systems",
    component: () => import("@/views/Systems.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("@/views/Messages.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () => import("@/views/Notifications.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/leads",
    name: "leads",
    component: () => import("@/views/Leads.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("@/views/Tasks.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/list-doctors",
    name: "list-doctors",
    component: () => import("@/views/ListDoctors.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/list-lpu",
    name: "list-lpu",
    component: () => import("@/views/ListLpu.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/list-pharmacy",
    name: "list-pharmacy",
    component: () => import("@/views/ListPharmacy.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/list-distributors",
    name: "list-distributors",
    component: () => import("@/views/ListDistributors.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/reports",
    name: "reports",
    component: () => import("@/views/Reports.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/Settings.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/branches",
    name: "branches",
    component: () => import("@/views/Branches.vue"),
    meta: {
      layout: "main",
      auth: false,
    },
  },
  {
    path: "/departments",
    name: "departments",
    component: () => import("@/views/Departments.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/staff",
    name: "staff",
    component: () => import("@/views/Staff.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/rules-and-roles",
    name: "rules-and-roles",
    component: () => import("@/views/RulesAndRoles.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  const requireAuth = to.meta.auth;

  if (requireAuth && store.isAuthenticated) {
    next();
  } else if (requireAuth && !store.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
