<template>
    <div style="">
        <div style="height: 50px;" >
            <table class="tableList"><tr>
                <td style="text-align: left" @click="goOne">《 返回</td>
                    <td>综合资讯</td>
                    <td style="text-align: right">
                        <img src="@/assets/image/sS.png" style="height: 20px;width: 20px;"> </td>
                </tr>
            </table>
        </div>
        <div class="zHZX" v-for="(lis,index) in lists" :key="index">
            <div style="width: 370px">
                <div style="font-size: 28px;width: 370px">{{lis.mainText}}</div>
                <div style="width: 370px;margin-top: 15px;color: #9ca9b5">{{lis.zan}}人赞.{{lis.names}}.{{lis.times}}天前</div>
            </div>
            <div>
                <img v-bind:src="lis.thumbnail_pic_s" >
            </div>
        </div>
    </div>
</template>

<script>
import RouterLink from "vant/packages/mixins/router-link";
export default {
  name: "vSecend",
  components: { RouterLink },
   data(){
      return{
          lists:[],
      }
   },
  methods: {
    goOne() {
      const { $router } = this;
      $router.push("vOne");
    },

  },
  mounted() {
    let that = this;
    this.$http.post("/Secends").then(function(res) {
      that.lists = res.data.data;
    });
  }
};
</script>

<style scoped>
.tableList {
  width: 500px;
}
.zHZX {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #9ca9b5;
  padding-left: 20px;
  text-align: left;
  padding-top: 20px;
}
.zHZX div {
  float: left;
}
</style>
