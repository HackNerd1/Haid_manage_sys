<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#FFFFFF"
            text-color="black"
            active-text-color="#3372FF"
            unique-opened
            router
            collapse-transition
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">{{
                                    threeItem.title
                                }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
import { menu } from '@/const/index';
export default {
    data() {
        return {
            collapse: false,
            items: menu
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', (msg) => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
    font-size: 14px;

    /deep/ .el-submenu__title {
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        &:hover {
            background-color: rgb(222, 224, 227) !important;
        }
    }

    .el-menu-item {
        height: 40px;
        line-height: 40px;
        font-size: 12px;

        &:hover {
            background-color: rgb(222, 224, 227) !important;
        }

        &.is-active {
            background-color: #f0f4ff !important;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                left: 0px;
                border-left: 4px solid #3370ff;
                height: 40px;
            }
        }
    }
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 228px;
}
.sidebar > ul {
    height: 100%;
}
</style>
