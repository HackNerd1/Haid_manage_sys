<template>
    <div class="tms-tree-menu">
        <template v-for="(item, index) in data">
            <div
                :key="index"
                class="tms-space-between tms-tree-item"
                @click="handleClick(index, item.id)"
                :class="{ activated: index == current }"
            >
                <div class="tms-tree-item label">
                    <div class="tms-tree-item avatar"><img :src="item.avatarUrl" alt="头像" /></div>
                    <div>{{ item.name }}</div>
                </div>
                <div>
                    <el-dropdown szie="mini">
                        <i class="el-icon-more"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>添加子部门</el-dropdown-item>
                            <el-dropdown-item>设置全员群</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <template v-for="(child, childidx) in item.children">
                <div
                    :key="'child' + childidx"
                    class="tms-space-between tms-tree-item children"
                    @click="handleClick('child' + childidx, child.id)"
                    :class="{ activated: 'child' + childidx == current }"
                >
                    <div class="tms-tree-item label">
                        <div><i :class="child.icon"></i>{{ child.name }}</div>
                    </div>
                    <div>
                        <el-dropdown szie="mini">
                            <i class="el-icon-more"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>编辑部门</el-dropdown-item>
                                <el-dropdown-item>添加子部门</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    name: 'tree-menu',
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            current: ''
        };
    },
    methods: {
        handleClick(index, id) {
            this.current = index;
            this.$emit('on-click', id);
        }
    }
};
</script>

<style lang="scss" scoped>
@import './index.scss';

.tms-space-between {
    cursor: pointer;
    align-items: center;
    &:hover {
        background: #f0f4ff;
    }

    &:active {
        background-color: rgb(240, 244, 255);
    }
}
</style>