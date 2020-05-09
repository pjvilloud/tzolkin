import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Count from "./views/Count.vue";
import DreamSpell from "./views/DreamSpell.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/count",
      name: "count",
      component: Count
    },
    {
      path: "/dreamSpell",
      name: "dreamSpell",
      component: DreamSpell
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
