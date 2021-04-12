<template>
    <div class="tms-content tms-departmentanduser">
        <div class="tms-space-between">
            <div class="tms-text explain">如何创建部门、批量导入部门及创建部门群？<a href="#">了解详情</a></div>
            <div class="tms-table operate">
                <el-input size="mini" v-model="search" prefix-icon="el-icon-search" placeholder="搜索部门名称"></el-input>
                <el-button type="primary" size="mini">新建部门</el-button>
                <el-button size="mini">批量编辑部门</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'departmentanduser-department',
    data() {
        return {
            search: ''
        };
    },
    created() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/organization/departmentanduser/index.scss';
.el-input--mini {
    margin-right: 10px;
}
.tms-content {
    height: 100%;
}
.el-card__body {
    padding: 0;
}
</style>