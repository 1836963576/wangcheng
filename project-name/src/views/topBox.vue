
    <template>

        <div class="topHead">
            <div >
            <div style="height: 30px;width: 30px">
                <img src="@/assets/image/slh.png" alt="" style="height: 30px;width: 30px">
            </div >

            <div style="height: 30px;width: 80px">
                <span style="height: 30px;font-size: 18px;line-height: 30px;">中国移动</span>
            </div>

            <div style="height: 30px;width: 30px">
                <img src="@/assets/image/WIFI.png" alt="" style="height: 30px;width: 30px">
            </div>
            <div style="line-height: 30px;margin-left: 100px">
                {{timess}}
            </div>
            <div style="height: 30px;">
                <span style="height: 30px;font-size: 18px;line-height: 30px;margin-left: 140px">100%</span>
            </div>
            <div style="height: 30px;width: 30px">
                <img src="@/assets/image/dian.png" alt="" style="height: 30px;width: 30px">
            </div></div>


        </div>

    </template>
    <script>

import moment from "moment";
const times = moment().format("hh:mm");
export default {
  data() {
    return {
      timess: times
    };
  },

  methods: {}
};
</script>
    <style>
.topHead {
  width: 500px;
  height: 30px;
  /*border: 1px black solid;*/

  z-index: 10;
  background: #fff;
  top: 0;
  left: 0;
}
.topHead > div>div {
float: left;
}
</style>
