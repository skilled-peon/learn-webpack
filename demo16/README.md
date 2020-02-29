## 环境变量的插件---webpack自带的 [DefinePlugin](https://webpack.js.org/plugins/define-plugin/ "DefinePlugin")
示例代码
```javascript
// index.js
let url = '';
if (DEV === 'dev') {
    url = 'http://localhost:3000'
} else {
    url = 'http://www.testme.com'
}

console.log(url, '----------------');
```
配置文件
```javascript
// webpack.config.js
const webpack = require('webpack');
module.exports = {
	plugins: [
		{
			new webpack.DefinePlugin({
            // DEV: "'dev'"
			DEV: JSON.stringify('dev'),
			FLAG: 'true',
			EXPRESSION: '1+1'
        })
		}
	]
}
```
