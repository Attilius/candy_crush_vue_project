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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_4",
    name: "level_4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_5",
    name: "level_5",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_6",
    name: "level_6",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_7",
    name: "level_7",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_8",
    name: "level_8",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_9",
    name: "level_9",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_10",
    name: "level_10",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_11",
    name: "level_11",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_12",
    name: "level_12",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  },
  {
    path: "/level_13",
    name: "level_13",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue"),
  }
];

const router = new VueRouter({
  routes
});

export default router;
