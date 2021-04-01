<!--
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-03-01 13:56:45
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-02 13:52:15
-->
<template>
    <div class="visiable visiable-card">
        <div class="visiable explain">说明：可设置用户查看他人手机号码的权限，修改用户间互看号码受限或不受限的各类规则。</div>
        <riadoGroup :items="items" @on-select="handleSelect"></riadoGroup>
        <div class="visiable visiable-annotation">
            设置结果：<br />
            用户间可互看手机号码，不限查看次数。
        </div>
    </div>
</template>
<script>
import riadoGroup from '@/components/common/radioGroup.vue';
export default {
    name: 'contact-phone',
    components: { riadoGroup },
    props: {},
    data() {
        return {
            items: [
                {
                    value: '查看手机号码不受限',
                    label: 1,
                    selected: 1
                },
                {
                    value: '查看手机号码受限',
                    label: 2,
                    selected: 0
                }
            ]
        };
    },
    methods: {
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
</style>