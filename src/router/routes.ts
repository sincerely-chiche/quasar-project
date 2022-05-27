import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", meta: { requiresAuth: true }, component: () => import("pages/IndexPage.vue") },
    { path: "login", meta: { requiresAuth: false }, component: () => import("pages/LoginPage.vue") },
    { path: "products", meta: { requiresAuth: true }, component: () => import("pages/ProductsPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
