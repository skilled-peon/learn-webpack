# 1. 抽取 style 样式到 css 文件
## [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/ "MiniCssExtractPlugin")
+ 使用 Yarn 本地安装
```shell
yarn add mini-css-extract-plugin -D
```

+ 使用 npm 本地安装
```shell
npm install mini-css-extract-plugin -D
```

## 抽取 css 到文件中并在 html 中引用该 css
 ___webpack.config.js___  配置
+ 新增  **require**
```javascript
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
```

+ 新增 **plugin**
```javacript
plugins: [
	... ,
	new MiniCssExtractPlugin({
		filename: 'main.css'
	})
]
```

+ 替换 style-loader
用 `MiniCssExtractPlugin.loader` 替换 `'style-loader'`

# 2. 自动加上 css 前缀
想要webpack帮忙自动加上“-webkit-”之类的css前缀，我们需要用到postcss-loader和它的插件autoprefixer

## 本地安装 [postcss-loader](https://webpack.js.org/loaders/postcss-loader/ "postcss-loader")
+ 使用 Yarn 本地安装
```shell
yarn add postcss-loader autoprefixer -D
```

+ 使用 npm 本地安装
```shell
npm install postcss-loader autoprefixer -D
```

## 配置 postcss
+ 增加  ___postcss.config.js___  配置文件
内容如下：
```
module.exports = {
    plugin: [require('autoprefixer')]
}
```

+ 新增文件 `.browserslistrc`
```
defaults,
not ie < 11,
last 2 versions,
> 1%,
iOS 7,
last 3 iOS versions
```

+ 添加 postcss-loader
 `'postcss-loader'` 跟在 `'postcss-loader'` 后面

# 3. [压缩 css 文件](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production "压缩 css 文件")
## 安装 OptimizeCSSAssetsPlugin
+ 使用 Yarn 本地安装
```shell
yarn add optimize-css-assets-webpack-plugin -D
```

+ 使用 npm 本地安装
```shell
npm install optimize-css-assets-webpack-plugin -D
```

## 安装 [TerserWebpackPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/ "TerserWebpackPlugin")
+ 使用 Yarn 本地安装
```shell
yarn add terser-webpack-plugin -D
```

+ 使用 npm 本地安装
```shell
npm install terser-webpack-plugin -D
```

## 新增优化项
编辑  ___webpack.config.js___

+ 引用插件
```
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let TerserJSPlugin = require('terser-webpack-plugin')
```

+ 编辑优化项
```javascript
optimization: {
	minimizer: [
		new TerserJSPlugin({
			sourceMap: true,
		}), new OptimizeCssAssetsPlugin({})
	]
}
```

# 拓展阅读：
[webpack插件自动加css3前缀](https://www.cnblogs.com/amiezhang/p/8330001.html)
[autoprefixer不起作用的坑](https://www.cnblogs.com/yangzhou33/p/11355169.html)
[browserlist 详解](https://www.jianshu.com/p/91157aa64244)
[sourceMap是个啥](https://segmentfault.com/a/1190000020213957)