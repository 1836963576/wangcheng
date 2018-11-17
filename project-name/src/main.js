import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vant from "vant";
import "vant/lib/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.use(ElementUI);
import { HappyScroll } from "vue-happy-scroll";
//自定义组件名
Vue.component("happy-scroll", HappyScroll);
// 引入css
import "vue-happy-scroll/docs/happy-scroll.css";
import "./mock/index";
import axios from "axios"; //发送ajax
Vue.prototype.$http = axios;
new Vue({
  el: "#app",
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");

