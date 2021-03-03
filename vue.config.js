/*
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-01-23 19:20:22
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-02 14:00:16
 */
module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.extensions
          .add('ts')
          .add('tsx');
    }
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
}