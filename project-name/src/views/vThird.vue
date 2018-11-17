<template>
    <div >
        <div>
            <img src="@/assets/image/set.png" class="mySet">
        </div>

        <div style="" class="userMsg">
            <div>
                <img v-bind:src="msgList.usePH" class="peoplePH">
            </div>
            <div class="userName" >
                <table>
                    <tr>
                        <td style="font-size: 28px">{{msgList.userName}}
                            <img src="@/assets/image/boys.png"
                                 style="width: 24px;height: 24px" >
                    </td>
                    </tr>
                    <tr>
                        <td style="font-size:18px;color: #a4abb3">{{msgList.useaddress}} {{msgList.olds}}岁</td>
                    </tr>
                </table>
            </div>
            <div>
                <img src="@/assets/image/right.png"
                     style="width: 30px;height: 30px;
                            margin-left: 130px;
                            margin-top:25px "
                            >
            </div>
        </div>

        <div>
            <table>
                <tr v-for="(myFc,index) in myFcs" :key="index">
                    <td><img v-bind:src="myFc.icon"
                     style="width: 30px;height: 30px;">
                    </td>
                    <td style="font-size: 18px;width: 410px;
                                text-align: left;padding-left: 20px;"
                    >{{myFc.fcName}}</td>
                    <td> <img src="@/assets/image/right.png"
                           style="width: 30px;height: 30px; ">
                    </td>
                </tr>

            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "vThird",
  data() {
    return {
      msgList: [],
      myFcs: [
        {
          icon: require("@/assets/image/project.png"),
          fcName: "我的项目"
        },

        {
          icon: require("@/assets/image/project.png"),
          fcName: "我的知识库"
        },
        {
          icon: require("@/assets/image/project.png"),
          fcName: "我的购物车"
        },
        {
          icon: require("@/assets/image/project.png"),
          fcName: "发现资讯"
        },
        {
          icon: require("@/assets/image/project.png"),
          fcName: "我的钱包"
        },
        {
          icon: require("@/assets/image/project.png"),
          fcName: "我的书架"
        },
        {
          icon: require("@/assets/image/project.png"),
          fcName: "分享"
        }
      ]
    };
  },
  mounted() {
    let that = this;
    that.$http.post("/userMsg").then(function(res) {
      that.msgList = res.data.data;
    });
  }
};
</script>

<style scoped>
.userMsg {
  width: 520px;
  height: 100px;
  border-bottom: 1px solid black;
  padding-top: 20px;
}
.userMsg > div {
  float: left;
}
.userName {
  width: 240px;
  height: 80px;
  padding-top: 6px;
  padding-left: 20px;
  text-align: left;
}

.mySet {
  width: 40px;
  height: 40px;
  padding-left: 440px;
}
.peoplePH {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid black;
}
</style>
