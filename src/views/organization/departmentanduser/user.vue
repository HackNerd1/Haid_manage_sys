<template>
    <div>
        <div class="department-container">
            <div class="department-aside" v-if="!collapsed">
                <el-input
                    size="mini"
                    v-model="search"
                    :fetch-suggestions="querySearchAsync"
                    prefix-icon="el-icon-search"
                    placeholder="搜索成员和部门"
                ></el-input>
                <tree-menu @on-click="handleSwitch" :data="dept_recods.records"></tree-menu>
                <div class="department-aside-buttons">
                    <el-button size="mini" icon="el-icon-plus">新建部门</el-button>
                    <el-button size="mini" icon="el-icon-user" @click="onMangeDept">管理部门</el-button>
                </div>
            </div>
            <div class="department-main" :class="{ collapse: collapsed }">
                <el-tooltip placement="top">
                    <div slot="content">{{ collapsed ? '展开' : '收起' }}</div>
                    <button class="department-collapse-btn" :class="{ collapse: collapsed }" @click="onCollapse">
                        <i class="el-icon-s-fold"></i>
                    </button>
                </el-tooltip>
                <div class="department-table-header tms-space-between">
                    <div>
                        {{ departmentInfor.name }}
                        <i class="el-icon-user"></i>
                        {{ userCount }}
                    </div>
                    <div class="department-table-header-icon">
                        <el-button type="text" icon="el-icon-user">已离职成员</el-button>
                        <el-button type="text" icon="el-icon-user">邀请成员加入本组织</el-button>
                    </div>
                </div>
                <div class="department-table-operate tms-space-between">
                    <div>
                        <el-dropdown size="mini" split-button type="default" @command="onSelectState">
                            <span disc>帐号状态:</span> &nbsp;{{ accountState.label }}
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item
                                    v-for="item in accountOptions"
                                    :key="item.value"
                                    :command="`${item.value},${item.label}`"
                                    >{{ item.label }}</el-dropdown-item
                                >
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div>
                        <el-button type="primary" size="mini" icon="el-icon-plus" @click="handleAdd">添加成员</el-button>
                        <el-button size="mini">批量导入/导出</el-button>
                        <el-button size="mini" :disabled="!selectedItem.length > 0">变更部门</el-button>
                        <el-button size="mini" :disabled="!selectedItem.length > 0" type="danger" plain @click="handleDelete"
                            >离职操作</el-button
                        >
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
                    <template slot="name" slot-scope="{ row }">
                        <div class="avatar"><img :src="row.avatar" alt="" /></div>
                        <span style="margin: 0px 0px 0px 25px">{{ row.name }} </span>
                    </template>
                    <template slot="phone" slot-scope="{ row }">
                        {{ `+${countryCode(row.country.slice(0, 1), row.shKey).codeKey} ${row.phone}` }}
                    </template>
                </avue-crud>
                <div class="department-table-footer tms-space-between">
                    <div class="department-footer-descrip">
                        <el-switch v-model="switchVal"></el-switch>
                        <span>仅展示部门的直属成员</span>
                    </div>
                    <div class="department-footer-pagination">
                        <el-pagination background layout="prev, pager, next" :small="true" :total="20"> </el-pagination>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog ref="dialog" title="添加成员" :visible.sync="visible" @close="handleCancel">
            <div slot="title">
                添加成员&nbsp;
                <el-button icon="el-icon-question" size="mini" type="text"> 功能介绍 </el-button>
            </div>
            <avue-form :option="tableOption" v-model="form" ref="form" v-loading="dialogLoading"> </avue-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="visible = false" size="mini">取 消</el-button>
                <el-button type="primary" size="mini" @click="handleSubmit">完 成</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { option, dict } from '@/const/organization/departmentanduser/index.js';
import treeMenu from '@/components/common/treeMenu/index.vue';
import { countryCode } from '@/utils/utils.js';
export default {
    name: 'departmentanduser-user',
    components: { treeMenu },
    data() {
        return {
            accountState: dict.accountState,
            accountOptions: dict.accountOptions,
            collapsed: false,
            countryCode: countryCode,
            departmentInfor: {
                name: 'test1',
                id: null
            },
            departmentName: 'test1',
            tableOption: option,
            tableData: [],
            loading: false,
            selectedItem: [],
            search: '',
            switchVal: false,
            userCount: 1,
            visible: false,
            form: {},
            dialogLoading: false
        };
    },
    computed: {
        ...mapGetters(['dept_users', 'dept_recods'])
    },
    methods: {
        ...mapMutations(['SET_DEPT_USERS', 'SET_DEPT_RECODS']),
        fetchPage(row, id = 1) {
            this.loading = true;
            let data = this.dept_users.records.find((obj, index) => {
                this.departmentInfor.id = index;
                return obj.departmentId == id;
            });

            setTimeout(() => {
                if (data) {
                    this.tableData = data.data;
                    this.userCount = data.data.length;
                } else {
                    this.tableData = [];
                    this.userCount = 0;
                }
                this.loading = false;
            }, 500);
        },
        onCollapse() {
            this.collapsed = !this.collapsed;
        },
        querySearchAsync(query, cb) {},
        onSelectState(row) {
            let [value, label] = row.split(',');
            this.accountState = {
                label: label,
                value: value
            };
        },
        onMangeDept() {
            this.$emit('change-tab', 'department');
        },
        onSelect(row) {
            this.selectedItem = row;
        },
        handleAdd() {
            this.visible = true;
        },
        handleCancel() {
            this.form = {};
            this.dialogLoading = false;
            this.visible = false;
        },
        handleDelete() {
            let { id } = this.departmentInfor;
            let data = this.dept_users.records[id].data;
            this.selectedItem.forEach(({ $index }) => {
                data.splice($index, 1);
                console.log(data);
                this.fetchPage(id);
                this.$notify({
                    title: '成功',
                    message: '删除成功',
                    type: 'success',
                    duration: 3500
                });
            });
        },
        handleSubmit() {
            this.$refs.form.validate((success, done) => {
                if (success) {
                    let { id } = this.departmentInfor;
                    let row = this.form;
                    let data = this.dept_users;
                    Object.assign(row, {
                        country: 'China',
                        shKey: 'CN',
                        avatar:
                            'https://s3-fs.pstatp.com/static-resource/v1/e7c24442-9851-4515-8857-ecc708c911cg~?image_size=72x72&cut_type=default-face&quality=&format=png&sticker_format=.webp',
                        ontheJobTime: new Date(),
                        department: '-',
                        enName: '-',
                        station: '-'
                    });
                    data.records[id].data.push(row);
                    this.SET_DEPT_USERS(data);
                    this.dialogLoading = true;
                    setTimeout(() => {
                        this.handleCancel();
                        done();
                        this.$notify({
                            title: '成功',
                            message: '添加成功',
                            type: 'success',
                            duration: 3500
                        });
                    }, 800);
                }
                return;
            });
        },
        handleSwitch(row) {
            this.fetchPage({}, row.departmentId);
            this.switchDepartment(row);
        },
        switchDepartment(row) {
            this.departmentInfor.name = row.name;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/organization/departmentanduser/index.scss';

.tms-table {
    margin-top: 20px;
}
.tms-content {
    height: 100%;
}
.el-card__body {
    padding: 0;
}
</style>