<template>
    <div class="register-wrap">
        <div class="register-form">
            <div class="form-title">作业管理系统注册</div>
            <el-form ref="form" :model="formData" :rules="rules" class="form-content" label-width="0px">
                <el-form-item prop="userId">
                    <el-input onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="学号/工号/管理员账号" v-model="formData.userId">
                        <span slot="prepend"><i class="el-icon-user"></i></span>
                    </el-input>
                </el-form-item>

                <el-form-item prop="username">
                    <el-input placeholder="姓名" v-model="formData.username">
                        <span slot="prepend"><i class="el-icon-user"></i></span>
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input placeholder="密码" type="password" v-model="formData.password">
                        <span slot="prepend"><i class="el-icon-lock"></i></span>
                    </el-input>
                </el-form-item>

                <el-form-item prop="repeatPassword">
                    <el-input placeholder="确认密码" type="password" v-model="formData.repeatPassword"
                              @keyup.enter.native="register()">
                        <span slot="prepend"><i class="el-icon-lock"></i></span>
                    </el-input>
                </el-form-item>

                <el-form-item prop="userType">
                    <el-radio-group v-model="formData.userType">
                        <el-radio-button label="1">学生</el-radio-button>
                        <el-radio-button label="2">教师</el-radio-button>
                           <el-radio-button label="3">管理员</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <div class="register-button" v-loading="this.$store.state.loading">
                    <el-button @click="register()" type="success">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {register} from "@/api/user";
    import md5 from 'js-md5';

    export default {
        name: "Register",
        data() {
            return {
                formData: {
                    userId: "",
                    username: "",
                    password: "",
                    repeatPassword: "",
                    userType: "1"
                },
                rules: {
                    userId: [{required: true, message: "请输入账号", trigger: "blur"}],
                    username: [{required: true, message: "请输入姓名", trigger: "blur"}],
                    password: [{required: true, message: "请输入密码", trigger: "blur"}],
                    repeatPassword: [{required: true, message: "请输入确认密码", trigger: "blur"}],
                    userType: [{required: true, message: "请选择用户类型", trigger: "blur"}]
                }
            };
        },
        methods: {
            register() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        if (this.formData.repeatPassword !== this.formData.password) {
                            this.$message.error("两次密码输入不一致！");
                        } else {
                            register(this.formData.userId, this.formData.username, md5(this.formData.password + md5(this.formData.userId)), this.formData.userType).then(() => {
                                this.$message.success("注册成功");
                                this.$router.push({name: "login"});
                            });
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .register-wrap {
        position: fixed;
        width: 100%;
        height: 100%;
        background-image: url("../assets/login-background.jpg");
        background-size: 100% 100%;
    }

    .form-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #ffffff;
        border-bottom: 1px solid #dddddd;
    }

    .register-form {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.5);
        overflow: hidden;
    }

    .form-content {
        padding: 30px 30px;
        text-align: center;
    }

    .register-button {
        text-align: center;
    }

    .register-button button {
        width: 100%;
        height: 38px;
    }
</style>