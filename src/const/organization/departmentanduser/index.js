import store from "@/store/index.js"
import {
  valiEmail,
  valiNameZH,
  validPhone
} from "@/utils/validator.js"
let {
  department
} = store.state.organization['department_and_users']
export const option = {
  rowKey: 'departmentId',
  addBtn: false,
  selection: true,
  submitBtn: false,
  emptyBtn: false,
  tip: false,
  menu: false,
  refreshBtn: false,
  column: [{
    label: '姓名',
    prop: 'name',
    labelPosition: 'top',
    fixed: true,
    slot: true,
    rules: [{
      required: true,
      validator: valiNameZH,
      trigger: "blur"
    }]
  }, {
    label: "手机号码",
    prepend: '+86',
    prop: 'phone',
    labelPosition: 'top',
    slot: true,
    rules: [{
      required: true,
      message: "请输入手机号",
      trigger: "blur"
    }, {
      validator: validPhone,
      trigger: "blur"
    }]
    //  hide:true
  }, {
    label: '部门',
    prop: 'department',
    labelPosition: 'top',
    type: 'tree',
    dicData: department.records,
    props: {
      label: 'name',
      value: 'departmentId'
    },
  }, {
    label: '邮箱',
    prop: 'email',
    // hide: true,
    labelPosition: 'top',
    rules: [{
      required: true,
      validator: valiEmail,
      trigger: 'blur'
    }]
  }, {
    label: '英文名',
    prop: 'enName',
    display: false
  }, {
    label: '帐号状态',
    prop: 'accountStatus',
    hide: true,
    display: false
  }, {
    label: '工号',
    prop: 'workNumber',
    hide: true,
    display: false
  }, {
    label: '性别',
    prop: 'sex',
    hide: true,
    display: false
  }, {
    label: '地区',
    prop: 'area',
    hide: true,
    display: false
  }, {
    label: '城市',
    prop: 'city',
    hide: true,
    display: false
  }, {
    label: '直属上级',
    prop: 'directSuperiors',
    hide: true,
    display: false
  }, {
    label: '人员类型',
    prop: 'personType',
    hide: true,
    display: false
  }, {
    label: '用户ID',
    prop: 'userId',
    hide: true,
    display: false
  }, {
    label: '入职时间',
    prop: "ontheJobTime",
    type: "date",
    format: "yyyy-MM-dd",
    valueFormat: "yyyy-MM-dd",
    display: false
  }, {
    label: '工位',
    prop: 'station',
    display: false
  }]
}

export const departmentOption = {
  submitBtn: false,
  emptyBtn: false,
  rowKey: 'departmentId',
  addBtn: false,
  selection: true,
  tip: false,
  menu: false,
  refreshBtn: false,
  columnBtn: false,
  defaultExpandAll: true,
  column: [{
    label: '部门名称',
    prop: 'name',
    span: 24,
    labelPosition: 'top',
    rules: [{
      required: true,
      message: '请输入部门名称',
      trigger: "blur"
    }]
  }, {
    label: '部门人数',
    prop: 'number',
    labelPosition: 'top',
    span: 24,
  }, {
    label: '部门负责人',
    prop: 'head',
    labelPosition: 'top',
    span: 24,
  }, {
    label: '部门群名称',
    prop: 'groupName',
    labelPosition: 'top',
    span: 24,
    rules: [{
      required: true,
      message: '请输入部门名称',
      trigger: "blur"
    }]
  }, {
    label: '部门群群主',
    prop: 'groupOwner',
    labelPosition: 'top',
    span: 24,
    slot: true
  }]
}

export const dict = {
  accountState: {
    label: '全部',
    value: '选项1'
  },
  accountOptions: [{
      value: '选项1',
      label: '全部'
    },
    {
      value: '选项2',
      label: '正常'
    },
    {
      value: '选项3',
      label: '未激活'
    },
    {
      value: '选项4',
      label: '已暂停'
    }
  ],
}