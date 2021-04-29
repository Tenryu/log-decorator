# LogDecorator

ja / [en](./README.en.md)

ブラウザの `console.log()` を簡単にデコレーション

## 使い方

```TypeScript
import { LogDecorator } from '@tenryu/log-decorator';

LogDecorator.log('text <red>red text</red> <green>green text</green>');

LogDecorator.group('text <red>red text</red> <green>green text</green>');
LogDecorator.groupEnd();

LogDecorator.groupCollapsed('text <red>red text</red> <green>green text</green>');
LogDecorator.groupEnd();

console.log(...LogDecorator('text <red>red text</red> <green>green text</green>'));
```

## 使用可能なタグ

| tag         | color                                            |
| ----------- | ------------------------------------------------ |
| `<green>`   | <span style="color: #008000">text sample</span>  |
| `<red>`     | <span style="color: #ff0000">text sample</span>  |
| `<magenta>` | <span style="color: #ff00ff">text sample</span>  |
| `<gray>`    | <span style="color: #8008080">text sample</span> |
