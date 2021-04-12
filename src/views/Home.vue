<template>
    <div class="home-wrap">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-fa fa-home"></i> 首页
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-wrap">
            <el-container class="main-container">
                <div class="introduction-container">
                    <p>
                        欢迎来到作业管理系统！
                        
                    </p>
                    <p>
                        关注公众号： YukiSu小杂铺
                        分享前端知识
                    </p>
                   
                </div>
            </el-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .home-wrap {
        width: 100%;
        height: 100%;
    }

    .main-wrap {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 5px;
    }

    .main-container {
        width: 100%;
        height: 100%;
        text-align: justify-all;
        margin: auto;
          background-image: url("../assets/login-background.jpg");
        background-size: 100% 100%;
        filter: blur(20);
    }

    .introduction-container {
        position: absolute;
        top: 50%;
        padding: 10px;
        background-color:  rgb(255, 255, 255, 1);
        text-shadow: rgb(255, 255, 255, 1);
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: rgb(39, 153, 147);
        
    }
</style>