/**
 * 邮箱验证
 * @param { * } rule 
 * @param { string } value 
 * @param { function } callback 
 * @returns 
 */
export const valiEmail = (rule, value, callback)=>{
    let regex = /^[^@\t\n\r\s]+@[^@\t\n\r\s]+[^@\t\n\r\s]$/
    if (value == '' || value == undefined) callback(new Error('邮箱不能为空'))
    else if(!regex.test(value)) callback(new Error('邮箱格式错误')); 
    else callback()
}

export const valiNameZH = (rule, value, callback) => {
    let regex = /^[\u4e00-\u9fa5]{2,6}$/
    if (value == '' || value == undefined) callback(new Error('姓名不能为空'))
    else if(!regex.test(value)) callback(new Error('请输入正确的中文名')); 
    else callback()
}