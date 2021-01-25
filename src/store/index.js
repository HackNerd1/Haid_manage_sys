/*
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-01-24 13:17:52
 * @LastEditors: Hansel
 * @LastEditTime: 2021-01-24 13:41:20
 */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// modules
import user from "@/store/modules/user"

Vue.use(Vuex)
const store = new Vuex.Store({
    /**
     * 用法 store.state.a // -> moduleA 的状态
     * store.state.b // -> moduleB 的状态
    */
    modules: {
        user
    },
    plugins: [
        createPersistedState() //将 state 数据持久化, 防止刷新后数据丢失 ， 解决多次请求登录接口
    ]
});

export default store

