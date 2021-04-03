<!--
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-03-01 13:56:29
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-01 16:41:19
-->
<template>
    <el-radio-group v-model="radio" @change="handleChange" fill="#E1EAFF" :disabled="disabled">
        <template v-for="value in items">
            <el-radio class="tms-radio" border size="medium" :label="value.label" :key="value.label">{{ value.value }} </el-radio>
        </template>
    </el-radio-group>
</template>
<script>
export default {
    name: 'tms-radio-group',
    components: {},
    props: {
        items: {
            type: Array,
            default: () => [],
            descripttion: '选项'
        },
        disabled: {
            type: Boolean,
            default: false,
            descripttion: '是否全部禁用'
        }
    },
    data() {
        return {
            radio: ''
        };
    },
    methods: {
        handleChange(event) {
            this.$emit('on-select', event);
        }
    },
    created() {
        this.items.forEach((element) => {
            this.radio = element.selected === 1 ? element.label : this.radio;
        });
    }
};
</script>
<style lang="scss" scoped>
.el-radio-group {
    margin: 32px 0 16px;
    /deep/ .el-radio__label {
        color: black;
        font-size: 14px;
    }
}
/deep/ .el-radio__input {
    width: 16px;
    height: 16px;
    &.el-radio__inner {
        &::after {
            width: 6px;
            height: 6px;
            background-color: #fff;
        }

        &.is-disabled {
            background-color: #bbbfc4;
        }
    }
    &:not(.is-disabled).el-radio__inner {
        border-color: #3370ff;
        background-color: #3370ff;
    }
}
.tms-radio {
    border-radius: 20px;
    counter-reset: black;
    background-color: #f5f6f7;
    border: 1px solid #f5f6f7;
    transition: all 0.3s ease-in-out;
    &:not(.is-disabled) {
        &:hover {
            border-color: #3370ff;
        }
        &.is-checked {
            border-color: #3370ff;
            background-color: #e1eaff;
        }
    }
}
</style>