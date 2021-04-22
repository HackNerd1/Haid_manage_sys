<!--
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-03-01 13:19:17
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-01 15:31:24
-->
<template>
    <el-tabs class="container" v-model="activeName" @tab-click="handleCilck">
        <el-tab-pane label="可见性设置" name="visibility">
            <visibility></visibility>
        </el-tab-pane>
        <el-tab-pane label="查看手机号设置" name="phone">
            <phone></phone>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
import phone from '@/views/organization/contact/phone.vue';
import visibility from '@/views/organization/contact/visibility.vue';
export default {
    name: 'tms-contact',
    components: {
        phone,
        visibility
    },
    props: {},
    data() {
        return {
            activeName: 'visibility'
        };
    },
    methods: {
        handleCilck(tab, event) {}
    },
    computed: {},
    created() {}
};
</script>
<style lang="scss" scoped>
@import '@/components/common/base/tabs.scss';
</style>