const organization = {
    state: {
        department_and_users: {
            department: {
                total: 3,
                records: [{
                        departmentId: 1,
                        name: 'test1',
                        groupName: 'groupName',
                        groupOwner: 'groupOwner',
                        avatarUrl: 'https://s3-fs.pstatp.com/static-resource/v1/e7c24442-9851-4515-8857-ecc708c911cg~?image_size=72x72&cut_type=default-face&quality=&format=png&sticker_format=.webp',
                        children: [{
                            departmentId: 2,
                            name: 'children',
                            icon: 'el-icon-user',
                            groupName: 'groupName',
                            groupOwner: 'groupOwner',
                        }]
                    },
                    {
                        departmentId: 3,
                        name: 'test2',
                        groupName: 'groupName',
                        groupOwner: 'groupOwner',
                        avatarUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
                    }
                ]
            },
            users: {
                total: 2,
                activated: 2,
                unused: 0,
                records: [{
                    departmentId: 1,
                    data: [{
                        name: 'test',
                        avatar: 'https://s3-fs.pstatp.com/static-resource/v1/e7c24442-9851-4515-8857-ecc708c911cg~?image_size=72x72&cut_type=default-face&quality=&format=png&sticker_format=.webp',
                        phone: '12345678901',
                        country: 'China',
                        shKey: 'CN',
                        department: '-',
                        enName: '-',
                        ontheJobTime: new Date(),
                        station: '-'
                    }]
                }, {
                    departmentId: 2,
                    data: [{
                        name: 'test2',
                        avatar: 'https://s3-fs.pstatp.com/static-resource/v1/e7c24442-9851-4515-8857-ecc708c911cg~?image_size=72x72&cut_type=default-face&quality=&format=png&sticker_format=.webp',
                        phone: '12345678901',
                        country: 'China',
                        shKey: 'CN',
                        department: '-',
                        enName: '-',
                        ontheJobTime: new Date(),
                        station: '-'
                    }]
                }, {
                    departmentId: 3,
                    data: [{
                        name: 'test3',
                        avatar: 'https://s3-fs.pstatp.com/static-resource/v1/e7c24442-9851-4515-8857-ecc708c911cg~?image_size=72x72&cut_type=default-face&quality=&format=png&sticker_format=.webp',
                        phone: '12345678901',
                        country: 'China',
                        shKey: 'CN',
                        department: '-',
                        enName: '-',
                        ontheJobTime: new Date(),
                        station: '-'
                    }]
                }]
            },
        },
        contact: {}
    },
    getters: {
        dept_users: state => state.department_and_users.users,
        dept_recods: state => state.department_and_users.department
    },
    mutations: {
        SET_DEPT_USERS: (state, payload) => {
            state.department_and_users.users = payload
        },
        SET_DEPT_RECODS: (state, payload) => {
            state.department_and_users.department = payload
        },
    },
    actions: {

    }
}

export default organization