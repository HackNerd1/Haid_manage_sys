export const option = {
    addBtn: false,
    selection: true,
    tip: false,
    menu: false,
    refreshBtn: false,
    column:[
        {
         label:'姓名',
         prop:'name',
         fixed:true,
       }, {
         label: "手机",
         prop:'phone',
         hide:true
       }, {
         label:'部门',
         prop:'department'
       }, {
        label:'英文名',
        prop:'enName'
      }, {
        label:'帐号状态',
        prop:'accountStatus'
      }, {
        label:'工号',
        prop:'workNumber'
      }, {
        label:'性别',
        prop:'sex'
      }, {
        label:'邮箱',
        prop:'email'
      }, {
        label:'地区',
        prop:'area'
      }, {
        label:'城市',
        prop:'city'
      }, {
        label:'直属上级',
        prop:'directSuperiors'
      }, {
        label:'人员类型',
        prop:'personType'
      }, {
        label:'用户ID',
        prop:'userId'
      }, {
        label:'入职时间',
        prop:'sex',
        prop: "ontheJobTime",
        type: "date",
        format: "yyyy-MM-dd hh:mm:ss",
        valueFormat: "yyyy-MM-dd hh:mm:ss",
      }
     ]
}