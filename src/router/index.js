import { createRouter, createWebHistory } from "vue-router";
import CareView from "../views/CareView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "care",
      component: CareView,
    },
    {
      path: "/sales",
      name: "sales",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SalesView.vue"),
    },
  ],
});

export default router;
