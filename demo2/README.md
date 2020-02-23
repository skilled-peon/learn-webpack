## 序言
`index.html` 文件放在 `dist/` 中，在开发时自然是不合理的，我们需要 webpack 帮助我们的 html 引用打包的 `dist/bundle.js`

# 1.html 插件
## [安装 html-webpack-plugin](https://www.webpackjs.com/plugins/html-webpack-plugin/ "安装 html-webpack-plugin")
+ npm 安装
```
npm i html-webpack-plugin -D
```

+ yarn 安装
```
yarn add html-webpack-plugin -D
```

## 配置 webpack 的 plugins
在  ___webpack.config.js___  中引用插件：
```
let HtmlWebpackPlugin = require('html-webpack-plugin')
```
> 如果想知道 `require('name')` 是如何从`node_modules`中加载指定 name 的模块：[请查阅 nodejs 官方文档](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders)

在 ___webpack.config.js___ 新增插件
```javascript
plugins: [
	new HtmlWebpackPlugin({
		template: './src/index.html',
		filename: 'index.html'
	})
]
```
**plugins** 传入的是数组，HtmlWebpackPlugin 的 [**配置参数**](https://github.com/jantimon/html-webpack-plugin#configuration "配置参数") 中

## 利用 minify 参数压缩 html 文件
如果将`minify`选项设置为`true`（当webpack的`mode`为`production`时为默认值），则将使用 html-minifier-terser和以下选项来缩小生成的HTML：
```
minify: {
  collapseWhitespace: true, // 折叠空行
  removeComments: true, // 移除注释
  removeRedundantAttributes: true, // 移除多余的属性
  removeScriptTypeAttributes: true, // 从script标签中删除type="text/javascript"
  removeStyleLinkTypeAttributes: true, // 从style和link标签中删除type=" text/css"
  useShortDoctype: true  // 使用最简单的html申明<!DOCTYPE html>
}
```
要使用自定义`html-minifier`选项，请通过传递一个对象来缩小。 <span style="color:red">该对象不会与上面的默认值合并。</span>

要在生产模式下禁用缩小，请将minify选项设置为false。

`removeAttributeQuotes: true` 移除属性的双引号 

# 附录：常用 HtmlWebpackPlugin 参数
|参数|默认值|描述|
|---|---|---|
|template| `index.html` | 将HTML写入的文件。 默认为`index.html`。 您也可以在此处指定一个子目录（例如：`assets/admin.html`）|
|filename| | webpack 模板的相对或绝对路径。 默认情况下，它将使用`src / index.ejs`（如果存在）。|
|minify|`true` if `mode` is `'production'`, otherwise `false`|控制是否以及以什么方式最小化输出。 有关更多详细信息，请参见下面的 [**minification**](https://github.com/jantimon/html-webpack-plugin#minification "minification")。|
|hash|`false`|如果为true，则将唯一的 webpack 编译哈希值附加到所有包含的脚本和CSS文件中。 这对于清除缓存很有用|



