<!--
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-03-01 13:56:29
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-01 16:41:19
-->
<template>
    <el-radio-group v-model="radio" 
                    @change="handleChange"
                    fill="#E1EAFF"
                    :disabled="disabled"
                    >

        <template v-for="value in items">
            <el-radio   class="tms-radio" 
                        border 
                        size="medium"
                        :label="value.label" 
                        :key="value.label">{{value.value}}
            </el-radio>
        </template>
    </el-radio-group>
</template>
<script>
export default {
    name: 'tms-radio-group',
    components:{},
    props:{
        items: {
            type: Array,
            default: ()=>[],
            descripttion: '选项'
        },
        disabled: {
            type: Boolean,
            default: false,
            descripttion: '是否全部禁用'
        }
    },
    data(){
        return{
            radio: ''
        }
    },
    methods:{
        handleChange(event) {
        }
    },
    created(){
        this.items.forEach(element => {
            this.radio = element.selected === 1 ? element.label : this.radio
        });
    }
}
</script>
<style scoped>
    .tms-radio {
        border-radius: 20px;
        counter-reset: black;
        background-color: #F5F6F7;
        border: 0;
    }
    .tms-radio .radio__label {
        font-size: 14px!important;
    }
    .tms-radio.el-radio.is-bordered.is-checked {
        border: 1px solid #3370ff;
        background-color: #e1eaff;
    }
    .tms-radio.el-radio__input.is-checked.el-radio__label{
        color: black!important;;
    }
</style>