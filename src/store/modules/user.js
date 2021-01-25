/*
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-01-24 13:19:14
 * @LastEditors: Hansel
 * @LastEditTime: 2021-01-24 13:33:34
 */
const user = {
    state : {
        userProfile : {
            id: '',
            userName: '',

        },
        access_token : ''
    },
    getters: {
        access_token: state => state.userProfile,
        userName: state => {
            return state.userProfile.userName
        }
    },
    mutations: {
        SET_ACCESS_TOKEN: (state, payload) => {
            state.access_token = payload
        }
    }
}