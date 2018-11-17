import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import vTime from "./views/vTime.vue";
import vOne from "./views/vOne.vue";
import vSecend from "./views/vSecend.vue";
import vThird from "./views/vThird.vue";
import footsBox from "./views/footsBox.vue";
import mainBox from "./views/mainBox.vue";
Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "vOne",
      component: vOne
    },

    {
      path: "/vTime",
      name: "vTime",
      component: vTime,
      children: [
        {
          path: "/vOne",
          name: "vOne",
          component: vOne
        },
        {
          path: "/vSecend",
          name: "vSecend",
          component: vSecend
        },
        {
          path: "/vThird",
          name: "vThird",
          component: vThird
        }
      ]
    },

    {
      path: "/footsBox",
      name: "footsBox",
      component: footsBox
    },
    {
      path: "/mainBox",
      name: "mainBox",
      component: mainBox
    }
  ]
});
