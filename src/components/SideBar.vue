<template>
    <div class="side-bar">
        <el-menu :default-active="routePath" class="side-bar-el-menu" text-color="#bfcbd9" active-text-color="#20a0ff"
                 background-color="#324157" router>
            <template v-for="item in sideBarItems">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title"> {{item.title}}</span>
                        </template>

                        <template v-for="subItem in item.subs">
                            <el-submenu :index="subItem.index" :key="subItem.index" v-if="subItem.subs"></el-submenu>

                            <template slot="title">{{subItem.title}}</template>
                            <el-menu-item :index="subSubItem.index" :key="i" v-for="(subSubItem, i) in subItem.subs">
                                {{subSubItem.title}}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>

                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        computed: {
            sideBarItems() {
                return this.$store.state.sideBarItems;
            },
            routePath() {
                return this.$router.path;
            }
        }
    };
</script>

<style scoped>
    .side-bar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .side-bar::-webkit-scrollbar {
        width: 0;
    }

    .side-bar-el-menu:not(.el-menu--collapse) {
        width: 200px;
    }

    .side-bar > ul {
        height: 100%;
    }
</style>