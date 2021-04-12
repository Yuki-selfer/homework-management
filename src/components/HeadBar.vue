<template>
    <div class="head-bar">
        <div class="head-icon">
            <i class="el-icon-fa"></i>
        </div>

        <div class="title">作业管理系统</div>

        <div class="head-right">
            <div class="head-user-area">
                <div class="user-avatar">
                    <img src="../assets/logo.png" alt="Avatar"/>
                </div>

                <el-dropdown @command="handleCommand" class="user-name" trigger="click">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import {logout} from "@/api/user";

    export default {
        name: "HeadBar",
        computed: {
            username() {
                return this.$store.state.status.username;
            }
        },
        methods: {
            handleCommand(command) {
                if (command === "logout") {
                    logout().then(() => {
                        this.$store.commit("logout");
                        this.$message.success("注销成功");
                        this.$router.push("/login");
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .head-bar {
        position: absolute;
        top: 0;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #ffffff;
        box-sizing: border-box;
        background-color: #242f42;
    }

    .head-bar .title {
        float: left;
        width: 250px;
        line-height: 70px;
    }

    .head-icon {
        float: left;
        padding: 0 20px;
        line-height: 70px;
    }

    .head-right {
        float: right;
        padding-right: 50px;
    }

    .head-user-area {
        display: flex;
        height: 70px;
        align-items: center;
    }

    .user-name {
        margin-left: 10px;
    }

    .user-avatar {
        margin-left: 20px;
    }

    .user-avatar img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .el-dropdown-link {
        color: #ffffff;
        cursor: pointer;
    }
</style>