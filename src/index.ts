const colorList = [
  { color: 'green', style: 'color: #008000' },
  { color: 'red', style: 'color: #ff0000' },
  { color: 'magenta', style: 'color: #ff00ff' },
  { color: 'gray', style: 'color: #808080' },
  { color: 'none', style: '' },
];

/**
 * console.log 用のデコレーションメソッド
 * @param str
 * @constructor
 */
export const LogDecorator = (str: string): string[] => {
  let decoratedStr = str;
  const props: string[] = [];
  for (let i = 0; i < colorList.length; i += 1) {
    const v = colorList[i];
    if (
      decoratedStr.indexOf(`<${v.color}>`) !== -1
      && decoratedStr.indexOf(`</${v.color}>`) !== -1
    ) {
      decoratedStr = decoratedStr.replace(`<${v.color}>`, '%c');
      decoratedStr = decoratedStr.replace(`</${v.color}>`, '%c');
      props.push(v.style);
      props.push('');
      i -= 1;
    }
  }
  return [decoratedStr, ...props];
};

LogDecorator.log = (str: string) => {
  console.log(...LogDecorator(str));
};

LogDecorator.group = (str: string) => {
  console.group(...LogDecorator(str));
};

LogDecorator.groupEnd = () => {
  console.groupEnd();
};

LogDecorator.groupCollapsed = (str: string) => {
  console.groupCollapsed(...LogDecorator(str));
};
