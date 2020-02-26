## 本地安装 jquery
```
yarn add jquery
```

##  ___index.js___ 示例
```
import $ from 'jquery';
console.log(window.$); // undefined
```
## 使用 [expose-loader](https://webpack.js.org/loaders/expose-loader/ "expose-loader")
```
yarn add expose-loader -D
```

## 使用 expose-loader 暴露到 window上
+ ___index.js___ 内联 loader
```
import $ from 'expose-loader?$!jquery'
console.log(window.$)
```

+ **rules**
```
// webpack.config.js
module: {
  rules: [{
    test: require.resolve('jquery'),
    use: [{
      loader: 'expose-loader',
      options: 'jQuery'
    },{
      loader: 'expose-loader',
      options: '$'
    }]
  }]
}
```
## 在每个模块中注入  _$_  对象
1. 导入 webpack
```
let webpack = require('webpack')
```

2. 引用 [ProvidedPlugin](https://webpack.js.org/plugins/provide-plugin/ "ProvidedPlugin")
```javascript
plugins: [
	new webpack.ProvidePlugin({
		$ : 'jquery'
	})
]
```

## 引入而不打包
比如 网页中已经有了
```html
// index.html
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
```

但是 入口 js 文件中还是引入了
```
// index.js
import $ from 'jquery'
console.log($)
```

此时我们需要用到 externals
```
externals: {
	jquery:'$'
}
```