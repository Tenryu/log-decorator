/**
 * console.log 用のデコレーションメソッド
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
