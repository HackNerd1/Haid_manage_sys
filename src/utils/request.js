/*
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-01-23 19:20:22
 * @LastEditors: Hansel
 * @LastEditTime: 2021-01-30 15:31:24
 */
import axios from 'axios';
import store from "@/store";
import router from "@/router"

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // TODO baseURL: '/apis', 
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        // TODO 配置token
        const token = store.user.access_token
        const isToken = (config.headers || {}).isToken === false
        if (token && !isToken) {
            config.headers['Authorization'] = 'Bearer ' + token// token
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (err.response.status === 401) {
            return router.push({path: '/login'})
        } else if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
