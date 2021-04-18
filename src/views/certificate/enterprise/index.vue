<template>
    <div class="certificate-content">
        <div class="certificate-form-header">TMS&nbsp;企业认证</div>
        <el-steps :active="certificateSteps.actived" align-center>
            <template v-for="(item, idx) in certificateSteps.steps">
                <el-step :key="idx" :title="item.title" :description="item.description"></el-step>
            </template>
        </el-steps>
        <el-form ref="form" :model="form" :rules="rules" label-position="top" label-width="80px">
            <div class="certificate-form-title">组织信息</div>
            <el-form-item label="上传营业执照" :required="true">
                <div class="certificate-form-upload-container">
                    <el-upload action="#" list-type="picture-card" :auto-upload="false">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{ file }">
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                    <i class="el-icon-zoom-in"></i>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <i class="el-icon-download"></i>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                        </div>
                    </el-upload>
                </div>
            </el-form-item>
            <div class="certificate-form-title">管理员信息</div>
            <el-form-item label="姓名" prop="name" :required="true">
                <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="上传手持身份证照片" :required="true">
                <div class="certificate-form-upload-container">
                    <el-upload action="#" list-type="picture-card" :auto-upload="false">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{ file }">
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                    <i class="el-icon-zoom-in"></i>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <i class="el-icon-download"></i>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                        </div>
                    </el-upload>
                </div>
            </el-form-item>
            <el-form-item label="邮箱" prop="email" :required="true">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <div class="certificate-form-title">认证公函</div>
            <el-form-item label="上传认证公函" :required="true">
                <div class="certificate-form-upload-container">
                    <el-upload action="#" list-type="picture-card" :auto-upload="false">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{ file }">
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                    <i class="el-icon-zoom-in"></i>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <i class="el-icon-download"></i>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                        </div>
                    </el-upload>
                </div>
            </el-form-item>
            <div class="certificate-form-submit-box">
                <div>
                    <el-checkbox v-model="isConfirmed"></el-checkbox>
                    已阅读并同意<a href="#">《TMS认证证审核标准》</a>和<a href="#">《TMS认证服务协议》</a>
                </div>
                <div>
                    <el-button>取消</el-button>
                    <el-button @click="onSubmit" type="primary" :disabled="!isConfirmed">保存</el-button>
                </div>
            </div>
        </el-form>
    </div>
</template>

<script>
import { valiEmail, valiNameZH } from '@/utils/validator.js';
export default {
    name: 'certificate-enterprise',
    data() {
        return {
            certificateSteps: {
                actived: 0,
                steps: [
                    {
                        title: '填写资料'
                    },
                    {
                        title: '提交审核'
                    },
                    {
                        title: '完成认证'
                    }
                ]
            },
            isConfirmed: false,
            form: {},
            disabled: false,
            rules: {
                email: [{ validator: valiEmail, trigger: 'blur' }],
                name: [{ validator: valiNameZH, trigger: 'blur' }]
            }
        };
    },
    methods: {
        onSubmit(v1, v2, v3) {
            this.$refs.form.validate((result) => {
                if (result) {
                    // TODO 添加接口
                    this.$notify({
                        title: '成功',
                        message: '表单提交成功',
                        type: 'success',
                        duration: 3500
                    });
                } else {
                    this.$notify({
                        title: '提交失败',
                        message: '表单校验失败',
                        type: 'error',
                        duration: 3500
                    });
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/certificate/index.scss';
</style>