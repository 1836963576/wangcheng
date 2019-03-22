<template >
    <div  class="formClass" >
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="登录权限" style="margin-left: 47px;margin-top: 2px">
                <el-select v-model="formInline.admin"  @change="changeAdmin(formInline.admin)"

                >
                    <el-option label="学生" value="studentAdmin"></el-option>
                    <el-option label="教师" value="teacherAdmin"></el-option>
                    <el-option label="一级管理员" value="oneAdmin"></el-option>
                    <el-option label="二级管理员" value="twoAdmin"></el-option>
                </el-select>
            </el-form-item><br>

            <!--权限为学生时-->
            <el-form-item v-if="studentAdmin">

                <!--   filterable 可搜索   change-on-select是否允许选择任意一级的选项-->
                <!--   expand-trigger="hover"  hover 触发子菜单-->
                <el-cascader
                        placeholder="请选择班级"
                        filterable
                        change-on-select
                        :show-all-levels="false"
                        expand-trigger="hover"
                        :options="classInformation"
                        v-model="formInline.choosingClasses"
                        @change="changeClass"
                         style="margin-left: 80px"  >
                </el-cascader>

                <identifys @transferRandom="getRandomChars" ref="son"></identifys>
                <el-input   style="height: 50px;width:215px;margin-left: 80px;
                            margin-top: 10px "
                            placeholder="验证码"
                            v-model="formInline.verification">
                </el-input>

            </el-form-item>
            <!--权限不为学生时-->
            <el-form-item v-if="teacherAdmin">

                <identifys @transferRandom="getRandomChars" ref="son"></identifys>


                <el-input   style="height: 50px;width:215px;margin-left: 80px;
                            margin-top: 5px "
                            placeholder="账号"
                            v-model="formInline.accountNumber">

                </el-input>

                <el-input   style="height: 50px;width:215px;margin-left: 80px;
                            margin-top: 5px "
                            placeholder="密码"
                            v-model="formInline.password">

                </el-input>
                <el-input   style="height: 50px;width:215px;margin-left: 80px;
                            margin-top: 5px "
                            placeholder="验证码"
                            v-model="formInline.verification">

                </el-input>
                <span style="margin-top: -50px;margin-left: 10px;color: #f50853;">注册账号</span>
                <span style="                  margin-left: 10px;color: #f50853;">忘记密码</span>
            </el-form-item>

            <el-button type="primary" @click="login" style="width: 255px;
                       margin-left: 60px;margin-top: -10px" >登录
            </el-button>
        </el-form>
    </div>
</template>

<script>
import identifys from "@/components/identifys"
    export default {
        data() {
            return {
                formInline:
                    {
                        admin:"studentAdmin",
                        choosingClasses: [],           //班级
                        verification:"",              //验证码
                        accountNumber:"",             //账号
                        password:"",
                    },
                studentAdmin:"true",
                teacherAdmin:"",
                oneAdmin:"",
                twoAdmin:"",
                classInformation: [],
                photoVerification:[],
                getRandom:""                         //获取的验证码

            }
        },
        methods: {
            //
            changeAdmin(admin){
                this.studentAdmin=false;
                this.teacherAdmin=false;
                if(admin==="studentAdmin") this.studentAdmin=true
                else this.teacherAdmin=true

            },
            changeClass() {
                console.log(this.choosingClasses);
            },
            //获取identifys的验证码
            getRandomChars(msg){
                this.getRandom=msg
                console.error(msg)
            },
            login(){
                //输入的验证码变为大写
                let verifications=this.formInline.verification.toUpperCase()
                console.error(verifications)

                if(verifications!==this.getRandom) {
                    this.$refs.son.drawPic ()  //刷新验证码
                    this.$message({
                        message: '验证码或密码错误',
                        type: 'warning'
                    });
                        //console.error(this.$store.state.a+"a")  调用state数据
                }
                else{
                    this.$message({
                        message: '验证码正确',
                        type: 'warning'
                    });
                }
            }

        },
        mounted(){
            let that = this
            this.$ajax.get('/classInformation')
                .then(function (res){
                    that.classInformation = res.data.data
                })

        },
        components:{
            identifys
        }
    }


</script>

<style scoped>
    *{float: left;}
.formClass{
    width: 380px;
    height: 400px;
    border: skyblue 1px solid;
    margin-left: 50%;
}
</style>