<template>
    <div class="certificate-content">
        <div class="tms-text label">{{ formProps ? formProps.title : 'H_Aid动态表单' }}</div>
        <div v-if="tableOption" class="form-content">
            <template v-for="(item, index) in formProps.description">
                <div :key="index" class="tms-text explain">
                    {{ `${item.label}: ${item.value}` }}
                </div>
            </template>
            <el-divider></el-divider>
            <avue-form :option="tableOption" v-model="from" ref="form"> </avue-form>
        </div>

        <avue-empty v-else image="https://sf1-scmcdn-tos.pstatp.com/goofy/ee/suite/admin/static/imgs/no-data@33a3344ae.svg" desc="暂无数据">
            <br />
        </avue-empty>
    </div>
</template>

<script>
import { form1, form2 } from '@/const/dynamicForm/index.js';
export default {
    data() {
        return {
            from: {}
        };
    },
    computed: {
        tableOption: function () {
            let query = this.$route.query.id;
            if (query == '202CB962A') {
                return form1;
            } else if (query == '2D234B70') {
                return form2;
            } else {
                false;
            }
        },
        formProps: function () {
            let query = this.$route.query.id;
            if (query == '202CB962A') {
                return {
                    title: '员工工作调查',
                    description: [
                        {
                            label: '直属上级',
                            value: ''
                        },
                        {
                            label: '考评时间',
                            value: '当周'
                        }
                    ]
                };
            } else if (query == '2D234B70') {
                return {
                    title: '公司每周常规评价',
                    description: [
                        {
                            label: '重复频率',
                            value: '每周'
                        },
                        {
                            label: '提交时间',
                            value: '周六、周日'
                        },
                        {
                            label: '每个周期内',
                            value: '仅允许1次'
                        },
                        {
                            label: '评价开始时间',
                            value: '周五17时0分'
                        },
                        {
                            label: '评价截至时间',
                            value: '周日17时0分'
                        }
                    ]
                };
            } else {
                false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/certificate/index.scss';
.avue-form,
.avue-empty,
.form-content {
    margin-top: 20px;
}

/deep/.el-radio,
/deep/.el-checkbox {
    margin-top: 5px;
    display: block;
}
</style>