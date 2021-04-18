import country from '@/const/country.js';

/**
 * 搜索国家编号
 * @param {String} firstChara 国家首字母
 * @param {String} enKey 英文缩写
 * @param {String} shKey 缩写
 * @returns {Object} enKey,cnKey,shKey, codeKey
 */
export function countryCode(firstChara, shKey, enKey) {
    if (firstChara == undefined && firstChara == null) {
        console.error('首字母不能为空')
        return {}
    }
    if (shKey == undefined && shKey == null) {
        console.error('国家缩写不能为空')
        return {}
    }
    let result = country[firstChara].find(obj => obj.shKey == shKey)
    return result == result ? result : {}
}