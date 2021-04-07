<template>
    <el-tabs class="container" v-model="activeName" @tab-click="handleCilck">
        <el-tab-pane label="成员" name="department">
            <department></department>
        </el-tab-pane>
        <el-tab-pane label="部门" name="user">
            <user></user>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import department from '@/views/organization/departmentanduser/department.vue';
import user from '@/views/organization/departmentanduser/user.vue';
export default {
    name: 'tms-departmentanduser',
    components: { department, user },
    data() {
        return {
            activeName: 'department'
        };
    },
    methods: {
        handleCilck(tab, event) {}
    }
};
</script>

<style lang="scss" scoped>
@import '@/components/common/base/tabs.scss';
.container,
.content {
    height: 100%;
}
</style>