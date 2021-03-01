/*
 * @Descripttion: 
 * @version: 
 * @Author: Hansel
 * @Date: 2021-03-01 13:08:14
 * @LastEditors: Hansel
 * @LastEditTime: 2021-03-01 13:17:23
 */
export const menu = [
    {
        icon: 'el-icon-lx-home',
        index: 'dashboard',
        title: '系统首页'
    },
    {
      icon: 'el-icon-notebook-1',
      index: 'organization',
      title: '组织架构',
      subs: [
        {
            index: 'contact',
            title: '通讯录设置'
        }
      ]
    },
    {
        icon: 'el-icon-lx-cascades',
        index: 'table',
        title: '基础表格'
    },
    {
        icon: 'el-icon-lx-calendar',
        index: '3',
        title: '表单相关',
        subs: [
            {
                index: 'form',
                title: '基本表单'
            }
        ]
    },
    {
        icon: 'el-icon-lx-warn',
        index: '7',
        title: '错误处理',
        subs: [
            {
                index: '404',
                title: '404页面'
            }
        ]
    },
]