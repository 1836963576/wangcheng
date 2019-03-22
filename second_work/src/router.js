import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import signIn from "./signIn/signIn.vue"
import identifys from "./components/identifys"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "signIn",
      component:signIn
    },
    {
      path: "/identifys",
      name: "identifys",
      component:identifys
    },

  ]
});
