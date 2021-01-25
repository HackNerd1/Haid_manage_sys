/*
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-01-23 19:20:22
 * @LastEditors: Hansel
 * @LastEditTime: 2021-01-25 10:03:48
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '@/components/layouts/index.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '@/views/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '@/views/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '@/pages/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '@/pages/403.vue'),
                    meta: { title: '403' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '@/pages/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
