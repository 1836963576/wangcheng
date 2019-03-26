<template>
  <div class="home" >
    <router-link to="vOne" >第一页</router-link><br/>
    <router-link to="vSecend">第二页</router-link><br/>
    <router-link to="vThird">第三页</router-link>
    <router-link to="vThird">第三页</router-link>

  </div>
</template>

<!--<script>-->
<!--// @ is an alias to /src-->
<!--import HelloWorld from "@/components/headTitle.vue";-->

<!--export default {-->
  <!--name: "home",-->
  <!--components: {-->
    <!--HelloWorld-->
  <!--}-->
<!--};-->
<!--</script>-->
<script>
import { AxiosInstance as axios } from "axios";

export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  }
  // methods: {
  //   init() {
  //     axios.get("/api/data").then(res => {
  //       console.log(res.data, "字符串");
  //     });
  //     axios.get("/api/getInteger").then(res => {
  //       console.log(res.data, "数字");
  //     });
  //   }
  // }
};
</script>
