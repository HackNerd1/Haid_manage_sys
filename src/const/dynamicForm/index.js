export const form1 = {
    size: "mini",
    submitText: '完成',
    column: [{
        type: 'radio',
        label: "您对目前从事的工作是否有成绩感",
        prop: "您对目前从事的工作是否有成绩感",
        labelPosition: 'top',
        span: 24,
        dicData: [{
            label: '非常多',
            value: 0
        }, {
            label: '有一些',
            value: 1
        }, {
            label: '可能有',
            value: 2
        }, {
            label: '没有',
            value: 3
        }],
        rules: [{
            required: true,
            message: "请选择",
            trigger: "blur"
        }],
    }, {
        type: 'radio',
        label: "您对您的工作内容和工作职责是否了解",
        prop: "您对您的工作内容和工作职责是否了解",
        labelPosition: 'top',
        span: 24,
        dicData: [{
            label: '单选',
            value: 0
        }, {
            label: '充分了解',
            value: 1
        }, {
            label: '基本了解',
            value: 2
        }, {
            label: '不怎么了解',
            value: 3
        }],
        rules: [{
            required: true,
            message: "请选择",
            trigger: "blur"
        }],
    }, {
        type: 'radio',
        label: "您的工作是否被合理公正的分配",
        prop: "您的工作是否被合理公正的分配",
        labelPosition: 'top',
        span: 24,
        dicData: [{
            label: '完全合理',
            value: 0
        }, {
            label: '基本合理',
            value: 1
        }, {
            label: '较不合理',
            value: 2
        }, {
            label: '完全不合理',
            value: 3
        }],
        rules: [{
            required: true,
            message: "请选择",
            trigger: "blur"
        }],
    }, {
        type: 'radio',
        label: "您在工作前是否会制定工作计划，此计划对实际工作是否有用",
        prop: "您在工作前是否会制定工作计划，此计划对实际工作是否有用",
        labelPosition: 'top',
        span: 24,
        dicData: [{
            label: '总是有用',
            value: 0
        }, {
            label: '经常有用',
            value: 1
        }, {
            label: '偶尔有用',
            value: 2
        }, {
            label: '从不计划',
            value: 3
        }],
        rules: [{
            required: true,
            message: "请选择",
            trigger: "blur"
        }],
    }, {
        type: 'radio',
        label: "您对工作强度的感受如何",
        prop: "您对工作强度的感受如何",
        labelPosition: 'top',
        span: 24,
        dicData: [{
            label: '很紧迫',
            value: 0
        }, {
            label: '较紧迫',
            value: 1
        }, {
            label: '一般',
            value: 2
        }, {
            label: '较轻松',
            value: 3
        }],
        rules: [{
            required: true,
            message: "请选择",
            trigger: "blur"
        }],
    }, {
        type: 'checkbox',
        label: "目前的工作压力主要来源于",
        prop: "目前的工作压力主要来源于",
        labelPosition: 'top',
        span: 24,
        dicData: [{
            label: '工作量太大',
            value: 'A'
        }, {
            label: '工作精细化程度很高',
            value: 'B'
        }, {
            label: '工作内容或职责变换太快',
            value: 'C'
        }, {
            label: '与其他同事或领导沟通不畅',
            value: 'D'
        }, {
            label: '工作效果难以控制',
            value: 'E'
        }, {
            label: '工作内容单一枯燥',
            value: 'F'
        }, {
            label: '工作环境和条件较差',
            value: 'G'
        }, {
            label: '其它',
            value: 'H'
        }],
        rules: [{
            required: true,
            message: "请选择",
            trigger: "blur"
        }],
    }, {
        type: 'radio',
        label: "您认为目前的工作",
        prop: "您认为目前的工作",
        labelPosition: 'top',
        span: 24,
        dicData: [{
            label: '很合适，并且有信心、有能力做好',
            value: 'A'
        }, {
            label: '是我喜欢的工作，但我的能力有所欠缺',
            value: 'B'
        }, {
            label: '不是我理想的工作，但我能够做好',
            value: 'C'
        }, {
            label: '不太适合，希望换一个岗位',
            value: 'D'
        }],
        rules: [{
            required: true,
            message: "请选择",
            trigger: "blur"
        }],
    }]
}

export const form2 = {
    size: "mini",
    submitText: '完成',
    column: [{
            type: 'radio',
            label: "工作完成情况",
            prop: "工作完成情况",
            labelPosition: 'top',
            span: 24,
            dicData: [{
                label: '超额完成',
                value: 0
            }, {
                label: '主要完成',
                value: 1
            }, {
                label: '有未完成',
                value: 2
            }],
            rules: [{
                required: true,
                message: "请选择",
                trigger: "blur"
            }],
        }, {
            type: 'radio',
            label: "与同事的工作是否融洽",
            prop: "与同事的工作是否融洽",
            labelPosition: 'top',
            span: 24,
            dicData: [{
                label: '很融洽',
                value: 0
            }, {
                label: '融洽',
                value: 1
            }, {
                label: '一般',
                value: 2
            }, {
                label: '较不融洽',
                value: 3
            }],
            rules: [{
                required: true,
                message: "请选择",
                trigger: "blur"
            }],
        }, {
            type: 'radio',
            label: "工作心情",
            prop: "工作心情",
            labelPosition: 'top',
            span: 24,
            dicData: [{
                label: '开心',
                value: 0
            }, {
                label: '平淡',
                value: 1
            }, {
                label: '沮丧',
                value: 2
            }, {
                label: '较不融洽',
                value: 3
            }],
            rules: [{
                required: true,
                message: "请选择",
                trigger: "blur"
            }],
        }, {
            type: 'radio',
            label: "是否明确自己的工作职责",
            prop: "是否明确自己的工作职责",
            labelPosition: 'top',
            span: 24,
            dicData: [{
                label: '是',
                value: 0
            }, {
                label: '不是',
                value: 1
            }],
            rules: [{
                required: true,
                message: "请选择",
                trigger: "blur"
            }],
        },
        {
            label: "工作业绩",
            prop: "工作业绩",
            type: 'textarea',
            labelPosition: 'top',
            span: 24
        },
        {
            label: "备注",
            prop: "备注",
            type: "textarea",
            labelPosition: 'top',
            span: 24
        }
    ]
}