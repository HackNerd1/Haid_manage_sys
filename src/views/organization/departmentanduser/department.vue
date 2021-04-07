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
                <tree-menu :data="menuData"></tree-menu>
            </div>
            <div class="department-main">
                <button class="department-collapse-btn" :class="{ collapse: collapsed }" @click="onCollapse">
                    <i class="el-icon-s-fold"></i>
                </button>
                <div class="department-table-header tms-space-between">
                    <div>
                        {{ departmentName }}
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
                        <el-button type="primary" size="mini" icon="el-icon-plus">添加成员</el-button>
                        <el-button size="mini">批量导入/导出</el-button>
                        <el-button size="mini" :disabled="!selectedItem.length > 0">变更部门</el-button>
                        <el-button size="mini" :disabled="!selectedItem.length > 0" type="danger" plain>离职操作</el-button>
                    </div>
                </div>
                <avue-crud
                    class="tms-table"
                    :option="tableOption"
                    :data="tableData"
                    @selection-change="onSelect"
                    @on-load="fetchPage"
                    :table-loading="loading"
                ></avue-crud>
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
    </div>
</template>

<script>
import { option } from '@/const/organization/departmentanduser/index.js';
import treeMenu from '@/components/common/treeMenu/index.vue';
export default {
    name: 'departmentanduser-department',
    components: { treeMenu },
    data() {
        return {
            accountState: {
                label: '全部',
                value: '选项1'
            },
            accountOptions: [
                {
                    value: '选项1',
                    label: '全部'
                },
                {
                    value: '选项2',
                    label: '正常'
                },
                {
                    value: '选项3',
                    label: '未激活'
                },
                {
                    value: '选项4',
                    label: '已暂停'
                }
            ],
            collapsed: true,
            departmentName: 'departmentName',
            tableOption: option,
            tableData: [],
            loading: false,
            selectedItem: [],
            search: '',
            switchVal: false,
            menuData: [],
            userCount: 1
        };
    },
    created() {
        this.menuData = [
            {
                name: 'test1',
                avatarUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
            }
        ];
    },
    methods: {
        fetchPage() {
            this.tableData = [
                {
                    name: 'test'
                }
            ];
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
        onSelect(row) {
            this.selectedItem = row;
        }
    }
};
</script>

<style lang="scss" scoped>
.tms-content {
    height: 100%;
}
.el-card__body {
    padding: 0;
}
.department-container {
    display: flex;
    height: 100%;
    .department-collapse-btn {
        position: absolute;
        top: 22px;
        width: 19px;
        // left: -19px;
        height: 32px;
        line-height: 28px;
        text-align: center;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background-color: White;
        border-right: none;
        cursor: pointer;

        &.collapse {
            transform: rotate(180deg);
        }
    }

    .department-aside {
        transition-delay: 0.3s;
        padding: 0 16px 0 16px;
        height: 100%;
        min-width: 160px;
    }
    .department-main {
        border-left: 1px solid black;
        width: 100%;

        .department-table-header {
            // display: flex;
            // justify-content: space-between;
            // align-items: flex-end;
            color: #8f959e;
            font-size: 13px;
            white-space: nowrap;
        }
        .department-footer-descrip {
            line-height: 14px;
            font-size: 14px;

            span {
                margin-left: 5px;
            }
        }

        .el-dropdown span[disc] {
            color: #8f959e;
        }

        .department-table-footer {
            align-items: flex-end;
        }
    }
}
</style>