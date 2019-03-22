<template>
    <div>
        <el-form>
            账号<el-input v-model="zhangHaos" class="input"></el-input><br>
            密码<el-input v-model="miMas" class="input"></el-input><br>
            <el-button @click="user">登录</el-button>
        </el-form>
{{dengLuList}}
    </div>
</template>

<script>
    export default {
        name: "first",
        data() {
            return {
                zhangHaos:"",
                miMas:" ",
                dengLuList:[]
            }
        },
        mounted() {
            let that = this
            this.$http.post('/denglu')
                .then(function (res){
                    that.dengLuList = res.data.data
                    console.error(res.data.data)
                })
    },
        methods:{
            user(){
                let that = this
                this.$http.post('/denglu')
                    .then(function (res){
                        that.dengLuList = res.data.data
                        console.error(res)
                    })


            }
        }
    }
</script>

<style scoped>
.input{
    width: 300px;
    height: 80px;
}
</style>