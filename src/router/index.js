import Vue from "vue";
import VueRouter from "vue-router";
import MainPageView from "../views/MainPageView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPageView,
  },
  {
    path: "/level_1",
    name: "level_1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_2",
    name: "level_2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_3",
    name: "level_3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_4",
    name: "level_4",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_5",
    name: "level_5",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_6",
    name: "level_6",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_7",
    name: "level_7",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_8",
    name: "level_8",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_9",
    name: "level_9",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_10",
    name: "level_10",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_11",
    name: "level_11",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_12",
    name: "level_12",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_13",
    name: "level_13",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  }
];

const router = new VueRouter({
  routes
});

export default router;
