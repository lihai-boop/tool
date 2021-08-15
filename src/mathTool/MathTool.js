const { _warn } = require('../tool');
const extendsFunc = require('../tool/extends');
/**处理数字转换常用类
 * @class 
 */
class MathTool {
    /**
     * 随机获取一个范围内的值
     * @param {Number} min 最小值
     * @param {Number} max 最大值 
     * @returns Number
     */
    getRangeNumber(min, max) {
        return max > min ? Math.round((Math.random() * (max - min)) + min) : _warn('max值小于min,参数不合法!');
    }

    /**
     * 返回一个两位数的字符串,传入的数字小于10进行拼接
     * @param {Number} num 传入的数字
     * @returns String
     */
    getUseTwoNumberToString(num) {
        let absNum = Math.abs(num);
        return absNum < 10 ? `0${absNum}` : String(absNum);
    }

    /**
     * 将数字转换成一个千位符并返回
     * @param {Number} num 传入数字 
     * @param {String} char 千位字符
     * @returns String
     */
    getThousandsChar(num, char = ',') {
        if (num < 1000) {
            return String(num);
        }
        //Number.prototype.toLocaleString 可实现千位符
        //去除小数点后面的数
        let numStrs = String(num).split('.'),
            thousandsChar = numStrs[0].replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
                return $1 + char;
            })
        return numStrs[1] ? [thousandsChar, numStrs[1]].join('.') : thousandsChar;
    }
    //扩展
    extends(callBacks) {
        extendsFunc.call(this, callBacks);
    }
}

module.exports = new MathTool();