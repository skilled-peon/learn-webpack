$$本章处理 js 语法并校验$$

## [Why @babel/plugin-transform-runtime ?](https://babeljs.io/docs/en/babel-plugin-transform-runtime#why "@babel/plugin-transform-runtime")

Babel 使用很小的帮助程序来实现 `_extend` 等常用功能。默认情况下，它将被添加到需要它的每个文件中。有时不必要重复，特别是当您的应用程序分布在多个文件中时。

这就是 `@babel/plugin-transform-runtime` 插件的出现的原因：所有帮助程序都将引用模块 `@babel/ runtime`，以避免在编译后的输出中出现重复。运行时将被编译到您的构建中。

该转换器的另一个目的是为您的代码创建一个沙盒环境。如果直接导入 `core-js` 或 `@babel/polyfill` 及其提供的内置程序（例如Promise，Set和Map），则这些将污染全局范围。尽管这对于应用程序或命令行工具可能是可以的，但是如果您的代码是要发布供他人使用的库，或者您无法完全控制代码运行的环境，则将成为一个问题。

转换器会将这些内置别名作为 `core-js` 的别名，因此您可以无缝使用它们，而无需 `require('polyfill')`。

## 本地安装 plugin-transform-runtime
+ 使用 Yarn 安装
```
yarn add @babel/plugin-transform-runtime -D
```

+ 使用 npm 安装
```
npm i @babel/plugin-transform-runtime -D
```

## 本地安装 runtime
`@babel/runtime` 是生产依赖 (因为它是 'runtime').

+ 使用 Yarn 安装
```
yarn add @babel/runtime
```

+ 使用 npm 安装
```
npm i @babel/runtime
```

## 配置 babel-loader.options.plugins
```javascript
{
	loader: 'babel-loader',
	options: {
		presets: ['@babel/preset-env'],
		plugins: [
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-transform-runtime'
		]
	}
}
```

## es7 语法转换
关于[`@babel/polyfill`](https://babeljs.io/docs/en/babel-polyfill "@babel/polyfill")
从Babel 7.4.0开始，不推荐使用此软件包，而直接包含 core-js/stable（以充实ECMAScript功能）和regenerator-runtime/runtime（需要使用转译的生成器函数）：

### 如果要转换 **_生成器函数_** `function*`

```
function* a() { yield  1; }
console.log(gen().next());
```
安装并引用 [babel-plugin-transform-regenerator](https://babeljs.io/docs/en/babel-plugin-transform-regenerator)

### 如果想转换 includes 等
```
'aaaa'.includes('a')
```
7.4.0之前是安装插件`@babel/polyfill`,不过现在废弃了，改为以下操作：
```
npm i @babel/runtime-corejs3
```
修改配置：
```javascript
presets: [
	[
		'@babel/preset-env',
		{
			"useBuiltIns": "usage",
			"corejs":3
		}
	]
],
plugins: [
	[
		'@babel/plugin-transform-runtime',
		{
			corejs: 3
		}
	]
]
```

## js 代码检查插件 eslint
+ 安装 eslint 和 eslint-loader
```
yarn add eslint eslint-loader
```

+ 配置 `.eslintrc.json`
可以去 [Eslint Demo](https://eslint.org/demo) 中去配置，然后直接下载文件


+ 配置 `webpack.config.js`
```javascript
{
	enforce: "pre", // 设为前置loader
	test: /\.js$/,
	exclude: /(node_modules|bower_components)/,
	use: "eslint-loader"
},
```

## 拓展阅读
[Babel 7 升级实践](https://blog.hhking.cn/2019/04/02/babel-v7-update/)