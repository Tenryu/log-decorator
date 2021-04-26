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
export declare const LogDecorator: {
    (str: string): string[];
    log(str: string): void;
    group(str: string): void;
    groupEnd(): void;
    groupCollapsed(str: string): void;
};
