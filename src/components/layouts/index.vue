<!--
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-01-23 19:20:22
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-02 13:50:40
-->
<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <!-- <breadCrum/> -->
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from '@/components/layouts/Header.vue';
import vSidebar from '@/components/layouts/Sidebar.vue';
import vTags from '@/components/layouts/Tags.vue';
import bus from '@/components/common/bus.js';
import breadCrum from '@/components/layouts/Breadcrum.vue'
export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags,
        breadCrum
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            // console.log(msg);
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
