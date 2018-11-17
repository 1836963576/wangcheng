<template>
    <div class="foot-box">
            <table class="footTable" >
                <tr class="tableTr1" >
                    <td v-for="(img,index) in imgs" :key="index" @click="loginTo(index)">
                        <img v-bind:src="img.url"  class="tableImg">
                    </td>

                </tr>
                <tr class="tableTr2">
                    <td>首页</td>
                    <td>消息</td>
                    <td>圈子</td>
                    <td>我的</td>
                </tr>
            </table>
    </div>

</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          url: require("@/assets/image/home.png")
        },
        {
          url: require("@/assets/image/msg.png")
        },
        {
          url: require("@/assets/image/qz.png")
        },
        {
          url: require("@/assets/image/my.png")
        }
      ]
    };
  },
  methods: {
    loginTo(index) {
      const { $router } = this;
      if (index === 0) {
        $router.push({ name: "vOne" });
      }
      if (index === 3) {
        $router.push({ name: "vThird" });
      }
    }
  }
};
</script>
<style>
.foot-box {
  height: 80px;
  width: 500px;
  margin-left: -1px;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: antiquewhite;
}
.footTable {
  width: 500px;
  height: 60px;
  font-size: 12px;
}
table {
  height: 60px;
}

.tableImg {
  height: 40px;
}
</style>
