## [1.module.noParse](https://webpack.js.org/configuration/module/#modulenoparse)
阻止 webpack 解析某个模块的依赖库。
**webpack.config.js**

```
module.exports = {
  //...
  module: {
    noParse: /jquery|lodash/,
  }
};
```

```
module.exports = {
  //...
  module: {
    noParse: (content) => /jquery|lodash/.test(content)
  }
};
```

## [ IgnorePlugin ](https://webpack.js.org/plugins/ignore-plugin/)
以 [Moment](https://momentjs.com/ "moment") 为例
```
yarn add moment
```
测试代码
```javascript
import moment from 'moment';
// index.js
// 手动引入所需要的语言包
import 'moment/locale/zh-cn';

// 距离今天23:59 还有多久
let r = moment().endOf('day').fromNow(); 
console.log(r);
```

传递给 IgnorePlugin 的参数
+ 第一个 resourceRegExp 参数不会针对导入或要求的解析文件名或绝对模块名进行测试，而是针对在发生导入的源代码中传递给要求或导入的字符串进行测试，[例子](https://webpack.js.org/plugins/ignore-plugin/#example-of-ignoring-moment-locales "例子")
+ 第二个 contextRegExp 参数来选择从中进行 import 的特定目录。

```
module.exports = {
	plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
}
```

