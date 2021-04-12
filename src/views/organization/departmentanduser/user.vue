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
                <div class="department-aside-buttons">
                    <el-button size="mini" icon="el-icon-plus">新建部门</el-button>
                    <el-button size="mini" icon="el-icon-user">管理部门</el-button>
                </div>
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
    name: 'departmentanduser-user',
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
            collapsed: false,
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
                avatarUrl:
                    'https://s3-fs.pstatp.com/static-resource/v1/e7c24442-9851-4515-8857-ecc708c911cg~?image_size=72x72&cut_type=default-face&quality=&format=png&sticker_format=.webp',
                children: [
                    {
                        name: 'children',
                        icon: 'el-icon-user'
                    }
                ]
            },
            {
                name: 'test2',
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