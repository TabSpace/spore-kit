/**
 * # 处理数字，数据转换
 * @module spore-kit-num
 * @see https://github.com/SporeUI/spore-kit/tree/master/packages/num
 * @example
 * // 统一引入 spore-kit
 * var $kit = require('spore-kit');
 * console.info($kit.num.limit);
 *
 * // 单独引入 spore-kit-num
 * var $num = require('spore-kit-num');
 * console.info($num.limit);
 *
 * // 单独引入一个方法
 * var $limit = require('spore-kit-num/limit');
 */

exports.comma = require('./comma');
exports.fixTo = require('./fixTo');
exports.limit = require('./limit');
exports.numerical = require('./numerical');
