<template>
    <div>
        <template v-for="(item, index) in data">
            <div :key="index" class="tms-space-between">
                <div><el-avatar shape="square" :size="20" :src="item.avatarUrl"></el-avatar>{{ item.name }}</div>
                <div>
                    <el-dropdown>
                        <i class="el-icon-more"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
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