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
        <avue-crud
            class="tms-table"
            :option="tableOption"
            :data="tableData"
            @selection-change="onSelect"
            @on-load="fetchPage"
            :table-loading="loading"
        >
            <template slot="empty">
                <avue-empty
                    image="https://sf1-scmcdn-tos.pstatp.com/goofy/ee/suite/admin/static/imgs/no-data@33a3344ae.svg"
                    desc="暂无数据"
                >
                    <br />
                </avue-empty>
            </template>
            <template slot="groupOwner" slot-scope="{ row }">
                <div class="avatar" v-if="row.avatarUrl && row.avatarUrl != ''"><img :src="row.avatarUrl" alt="" /></div>
                <span style="margin: 0px 0px 0px 25px">{{ row.groupOwner }} </span>
            </template>
        </avue-crud>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { departmentOption } from '@/const/organization/departmentanduser/index.js';
export default {
    name: 'departmentanduser-department',
    data() {
        return {
            search: '',
            tableOption: departmentOption,
            tableData: [],
            loading: false,
            selectedItem: []
        };
    },
    created() {},
    computed: {
        ...mapGetters(['dept_recods'])
    },
    methods: {
        fetchPage(params) {
            this.loading = true;
            setTimeout(() => {
                this.tableData = this.dept_recods.records;
                this.loading = false;
            }, 500);
        },
        onSelect(row) {
            this.selectedItem = row;
        }
    }
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