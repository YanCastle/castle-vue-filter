import * as moment from 'moment';
export default function install(Vue: any, config: any) {
    Vue.filter('date', date)
    Vue.filter('datetime', datetime)
    Vue.filter('time', time)
    Vue.filter('round_money', round_money)
    Vue.filter('floor_money', floor_money)
    Vue.filter('ceil_money', ceil_money)
    Vue.filter('more', more)
}
/**
 * 四舍五入
 * @param value 
 * @param decimal 
 */
export function round_money(value: any, decimal = 2) {
    let p = Math.pow(10, decimal)
    return Math.round(value * p) / p
}
/**
 * 向下取整
 * @param value 
 * @param decimal 
 */
export function floor_money(value: any, decimal = 2) {
    let p = Math.pow(10, decimal)
    return Math.floor(value * p) / p
}
/**
 * 向上取整
 * @param value 
 * @param decimal 
 */
export function ceil_money(value: any, decimal = 2) {
    let p = Math.pow(10, decimal)
    return Math.ceil(value * p) / p
}
/**
 * 舍弃掉多余的部分
 * @param value 
 * @param len 
 */
export function more(value: any, len = 10) {
    return value.toString().substr(0, len) + '...'
}
/**
 * 格式化成日期
 * @param value 
 * @param format 
 */
export function date(value: any, format = "YYYY-MM-DD") {
    return moment(value).format(format)
}
/**
 * 格式化成日期时间
 * @param value 
 * @param format 
 */
export function datetime(value: any, format = "YYYY-MM-DD HH:mm:ss") {
    return moment(value).format(format)
}
/**
 * 格式化成时间
 * @param value 
 * @param format 
 */
export function time(value: any, format = "HH:mm:ss") {
    return moment(value).format(format)
}