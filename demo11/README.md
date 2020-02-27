+ babel 核心包
```
yarn add @babel/core @babel/preset-env babel-loader webpack-dev-server -D
```

+ 配置 babel-loader
```
// webpack.config.js
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use : {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}
```

+ 配置 devtool
源码映射
```
// webpack.config.js
module.exports = {
	devtool: 'source-map'
}
```
`devtool: 'source-map'` 会单独生成一个 sourceMap 文件(`.js.map`)，出错了，会标识 当前报错的行和列

`devtool: 'eval-source-map'`不会产生单独的文件，但是也可以显示出错行和列

`devtool: 'cheap-module-source-map'`出错只会定位到行不会产生列，但是会生成一个单独的映射文件

`devtool: 'cheap-module-eval-source-map'` 不会产生文件， 集成在打包后的文件中，不会产生列