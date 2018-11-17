<!--suppress ALL -->
<template xmlns="http://www.w3.org/1999/html">
    <div>
        <div style="font-size: 18px;font-weight: 600">首页</div>
        <el-button @click="zHZX" type="primary" >综合资讯</el-button>
    <div style="height: 100px;width: 520px">
        <el-carousel height="100px" :interval="1000" >
            <el-carousel-item v-for="(image,index) in images" :key="index">
                <img v-bind:src="image.url"><p>{{index+1}}</p>
            </el-carousel-item>
        </el-carousel>
        <div v-for="(lis,index) in list" :key="index">
        <table class="tableList1">
            <tr style="height: 70%">
                <td class="tableTd1">{{lis.mainText}}</td>
                <td class="tableTd2"><img v-bind:src="lis.thumbnail_pic_s"></td>
            </tr>
            </table>

            <table class="tableList2">
            <tr >
                <td style="background-color: #3a9bd2;width: 50px;
                color: #fff;border-radius: 5px;text-align: center">
                    <span>娱乐</span>
                </td>
                <td>
                <td style="width: 20px">
                <img src="@/assets/image/pl.png" style="height: 18px;
                width: 18px;padding-left: 20px;line-height: 35px">
                </td>
                <td style="width: 36px;line-height: 35px;text-align: right">{{lis.numReview}}</td>
                <td>  评论</td>
                <td style="width: 20px">
                    <img src="@/assets/image/time.png" style="height: 18px;
                width: 18px;padding-left: 20px;line-height: 35px">
                </td>
                <td style="width: 28px;line-height: 35px;text-align: right">{{lis.times}}</td>
                <td>分钟前</td>
            </tr>
        </table>
        </div>
    </div>
    <div >

    </div>




    </div>
</template>

<script>
import RouterLink from "vant/packages/mixins/router-link";
export default {
  name: "vOne",
    components: {RouterLink},
    data(){
    return {
        images: [
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
        ],
        list:[],
    }
},
    methods:{
www(){
    let that = this
    this.$http.post('/list')
        .then(function (res){
            that.list = res.data.data
        }),console.error(that.list)

},
        zHZX(){
    const {$router}=this;
    $router.push("vSecend")

        }
    },
    mounted(){
        let that = this
        this.$http.post('/list')
            .then(function (res){
                that.list = res.data.data
            })

    }
}
</script>

<style >
    .lunSwipe{

        border: 1px black solid;
    }
    .tableList1{

        height: 150px;
        width: 460px;
        word-break:break-all;
        text-align: left;
        font-size: 24px;
        font-weight: 500;
        margin-left: 20px;
        margin-top: 10px;
    }

    .tableList1 .tableTd1{
        width: 70%;
    }
    .tableList1 .tableTd2 img{
        width: 100%;
        height: 100%;
    }

    .tableList2{
        border-bottom: 1px black solid;
        height: 40px;
        width: 460px;
        word-break:break-all;
        text-align: left;
        font-size: 16px;
        margin-left: 20px;
    }

</style>
