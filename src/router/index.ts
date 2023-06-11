import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/movies",
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import("../views/Movies/MoviesView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: () => import("../views/404/PageNotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
