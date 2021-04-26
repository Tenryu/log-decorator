"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogDecorator = void 0;
var colorList = [
    { color: 'green', style: 'color: #008000' },
    { color: 'red', style: 'color: #ff0000' },
    { color: 'magenta', style: 'color: #ff00ff' },
    { color: 'gray', style: 'color: #808080' },
    { color: 'none', style: '' },
];
/**
 * console.log 用のデコレーションメソッド
 *
 * 【使い方】
 *  1. 上記の colorList に定義された color をタグ名にしたタグで色を変更したい箇所を囲む
 *        hoge <red>piyo</red> huga
 *      このような文字列を引数に渡す
 *  2. 返り値を console.log() の引数にスプレッド構文で展開して渡す
 *      console.log(...LogDecorator('hoge <red>piyo</red> huga'))
 *
 * @param str
 * @constructor
 */
var LogDecorator = function (str) {
    var decoratedStr = str;
    var props = [];
    for (var i = 0; i < colorList.length; i += 1) {
        var v = colorList[i];
        if (decoratedStr.indexOf("<" + v.color + ">") !== -1
            && decoratedStr.indexOf("</" + v.color + ">") !== -1) {
            decoratedStr = decoratedStr.replace("<" + v.color + ">", '%c');
            decoratedStr = decoratedStr.replace("</" + v.color + ">", '%c');
            props.push(v.style);
            props.push('');
            i -= 1;
        }
    }
    return __spreadArray([decoratedStr], props);
};
exports.LogDecorator = LogDecorator;
exports.LogDecorator.log = function (str) {
    console.log.apply(console, exports.LogDecorator(str));
};
exports.LogDecorator.group = function (str) {
    console.group.apply(console, exports.LogDecorator(str));
};
exports.LogDecorator.groupEnd = function () {
    console.groupEnd();
};
exports.LogDecorator.groupCollapsed = function (str) {
    console.groupCollapsed.apply(console, exports.LogDecorator(str));
};
