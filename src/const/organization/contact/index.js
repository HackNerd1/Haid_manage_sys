/*
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-03-01 16:20:21
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-01 16:24:09
 */
export const option = {
    addBtn: false,
    refreshBtn: false,
    column:[
        {
         label:'姓名',
         prop:'name'
       },
       {
         label:'性别',
         prop:'sex'
       },{
         label: "日期",
         prop: "date",
         type: "date",
         format: "yyyy-MM-dd hh:mm:ss",
         valueFormat: "yyyy-MM-dd hh:mm:ss",
       }
     ]
}