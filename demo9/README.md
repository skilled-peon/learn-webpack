## 修改打包图片的文件夹
设置 [url-loader](https://webpack.js.org/loaders/url-loader/ "url-loader") 的 outputPath 属性
```javascript
// webpack.config.js
{
	loader: 'url-loader',
	options: {
		esModule: false,
		limit: 8192,
		outputPath: 'img/'
	}
}
```

## 修改 css 打包的文件夹
设置 [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/ "MiniCssExtractPlugin") 的 filename 属性
```
// webpack.config.js
new MiniCssExtractPlugin({
	filename: 'css/main.css'
})
```

## 在引用时加上域名
+ 全局设置使用 output.publicPath
```
output: {
	filename: 'bundle.js', // 打包后的文件名
	path: path.resolve(__dirname, 'dist'),
	publicPath: 'http://localhost:3000'
}
```
	+ 另外还需要修改 url-loader.options.outputPath 为 '/img/'
	+ 修改 MiniCssExtractPlugin 中 {} 的 filename 为 '/css/main.css'

+ 单独给图片加域名
```
{
	loader: 'url-loader',
	options: {
		esModule: false,
		limit: 8192,
		outputPath: '/img/',
		publicPath: 'http://localhost:3000'
	}
}
```
