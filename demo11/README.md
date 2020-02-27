## 打包命令
```
npx webpack
```

## 多入口
```javascript
// 多入口
entry: {
	pageOne: './src/index.js',
	pageTwo: './src/other.js'
}
```

## 输出不同的 js 文件
```javascript
output: {
	filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'dist')
},
```

## 输出不同的 html 文件
```javascript
plugins: [
	new HtmlWebpackPlugin({
		template: './src/index.html',
		filename: 'home.html',
		chunks:['pageOne']
	}),
	new HtmlWebpackPlugin({
		tempalte: './src/index.html',
		filename: 'other.html',
		chunks:['pageTwo']
	})
]
```