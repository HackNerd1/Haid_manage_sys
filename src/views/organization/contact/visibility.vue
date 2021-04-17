<!--
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-03-01 13:56:29
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-02 13:48:12
-->
<template>
    <div class="visiable tms-content">
        <div class="tms-text label">通讯录权限设置</div>
        <div class="tms-text explain">说明: 可灵活设置企业组织架构的可见性，选择成员可见所有人、可见本部门、不可见任何人等</div>
        <radioGroup :items="items" :disabled="isEdit" @on-select="handleSelect"></radioGroup>
        <div class="visiable-flexbox">
            <div class="visiable-content-header">以下部门和成员例外</div>
            <div class="g-flexbox"></div>
            <span v-if="isEdit">
                <el-button size="mini" @click="handleCancel">取消</el-button>
                <el-button size="mini" type="primary">保存</el-button>
            </span>
            <el-button size="mini" v-else @click="handleEdit">编辑</el-button>
        </div>
        <el-table :data="tableData" class="table" ref="multipleTable" header-cell-class-name="table-header">
            <template slot="empty">
                <avue-empty
                    image="https://sf1-scmcdn-tos.pstatp.com/goofy/ee/suite/admin/static/imgs/no-data@33a3344ae.svg"
                    desc="暂无数据"
                >
                    <br />
                </avue-empty>
            </template>
            <el-table-column prop="name" label="部门或成员"></el-table-column>
            <el-table-column label="可见范围">
                <template slot-scope="scope">￥{{ scope.row.money }}</template>
            </el-table-column>
            <el-table-column v-if="isEdit" width="55www" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="textalign: center">
            <el-button style="color: #3370ff; fontsize: 14px" type="text">+ 添加权限</el-button>
        </div>
    </div>
</template>
<script>
import radioGroup from '@/components/common/radioGroup.vue';
import { option } from '@/const/organization/contact/index.js';
export default {
    name: 'contact-visibility',
    components: { radioGroup },
    props: {},
    data() {
        return {
            isEdit: false,
            tableData: [],
            tableOption: option,
            items: [
                {
                    value: '可见所有人',
                    label: 1,
                    selected: 1
                },
                {
                    value: '可见本部门',
                    label: 2,
                    selected: 0
                },
                {
                    value: '不可见任何人',
                    label: 3,
                    selected: 0
                }
            ]
        };
    },
    methods: {
        handleEdit() {
            this.isEdit = true;
        },
        handleCancel() {
            this.isEdit = false;
        },
        handleSelect(row) {
            this.$notify({
                title: '成功',
                message: '修改成功',
                type: 'success',
                duration: 3500
            });
        }
    },
    computed: {},
    created() {}
};
</script>
<style  lang="scss" scoped>
@import '@/assets/scss/organization/contact/index.scss';
.avue-empty {
    margin-top: 20px;
}
</style>