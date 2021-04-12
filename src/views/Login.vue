<template>
    <div class="login-wrap">
        <div class="login-form">
            <div class="form-title">作业管理系统</div>
            <el-form ref="form" :model="formData" :rules="rules" class="form-content" label-width="0px">
                <el-form-item prop="userId">
                    <el-input onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="学号/工号/管理员账号" v-model="formData.userId">
                        <span slot="prepend"><i class="el-icon-user"></i></span>
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input placeholder="密码" type="password" v-model="formData.password"
                              @keyup.enter.native="login()">
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

                <div class="login-button" v-loading="this.$store.state.loading">
                    <el-button @click="login()" type="primary">登录</el-button>
                </div>

                <div>
                    <p></p>
                </div>

                <div class="register-button">
                    <el-button @click="register()" type="success">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {login} from "@/api/user";
    import md5 from 'js-md5';

    export default {
        name: "Login",
        data() {
            return {
                formData: {
                    userId: "",
                    password: "",
                    userType: "1"
                },
                rules: {
                    userId: [{required: true, message: "请输入账号", trigger: "blur"}],
                    password: [{required: true, message: "请输入密码", trigger: "blur"}],
                    userType: [{required: true, message: "请选择用户类型", trigger: "blur"}]
                }
            };
        },
        methods: {
            login() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        login(this.formData.userId, md5(this.formData.password + md5(this.formData.userId)), this.formData.userType).then(res => {
                            this.$message.success("登录成功：" + res.username);
                            this.$store.commit("login", res);
                            this.$router.push({ path: "/"});
                        });
                    }
                });
            },
            register() {
                this.$router.push({name: "register"});
            }
        }
    };
</script>

<style scoped>
    .login-wrap {
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

    .login-form {
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

    .login-button {
        text-align: center;
    }

    .login-button button {
        width: 100%;
        height: 38px;
    }

    .register-button {
        text-align: center;
    }

    .register-button button {
        width: 100%;
        height: 38px;
    }
</style>