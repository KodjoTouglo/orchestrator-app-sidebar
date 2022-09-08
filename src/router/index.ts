import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test-0",
    name: "test-0",
    component: () => import("../views/test-0.vue"),
  },
  {
    path: "/settingsOrchestre",
    name: "Settings Orchestre",
    component: () => import("../views/settingsOrchestre.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass:'active-sidebar-link',
  linkExactActiveClass: 'active-sidebar-link',
  base: process.env.BASE_URL,
  routes,
});

export default router;
