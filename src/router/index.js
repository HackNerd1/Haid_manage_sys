/*
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-01-23 19:20:22
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-01 13:55:08
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import( /* webpackChunkName: "home" */ '@/components/layouts/index.vue'),
            meta: {
                title: '自述文件'
            },
            children: [{
                    path: '/dashboard',
                    component: () => import( /* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
                    meta: {
                        title: '系统首页'
                    }
                },
                {
                    path: '/departmentanduser',
                    component: () => import( /* webpackChunkName: "dashboard" */ '@/views/organization/departmentanduser/index.vue'),
                    meta: {
                        title: '成员与部门'
                    }
                },
                {
                    path: '/contact',
                    component: () => import( /* webpackChunkName: "dashboard" */ '@/views/organization/contact/index.vue'),
                    meta: {
                        title: '通讯录设置'
                    }
                },
                {
                    path: '/table',
                    component: () => import( /* webpackChunkName: "table" */ '@/views/BaseTable.vue'),
                    meta: {
                        title: '基础表格'
                    }
                },
                {
                    path: '/form',
                    component: () => import( /* webpackChunkName: "form" */ '@/views/BaseForm.vue'),
                    meta: {
                        title: '基本表单'
                    }
                },
                {
                    path: '/404',
                    component: () => import( /* webpackChunkName: "404" */ '@/pages/404.vue'),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: () => import( /* webpackChunkName: "403" */ '@/pages/403.vue'),
                    meta: {
                        title: '403'
                    }
                },
            ]
        },
        {
            path: '/certificate',
            redirect: '/certificate/enterprise',
            component: () => import('@/App.vue'),
            children: [{
                path: 'enterprise',
                component: () => import( /**/ '@/views/certificate/enterprise/index.vue'),
                meta: {
                    title: '企业认证'
                }
            }]
        },
        {
            path: '/dynamicForm',
            component: () => import( /**/ '@/views/dynamicForm/index.vue'),
            meta: {
                title: '动态表单'
            }
        },
        {
            path: '/login',
            component: () => import( /* webpackChunkName: "login" */ '@/pages/Login.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});