本章要介绍的小插件
1) CleanWebpackPlugin  清理 打包输出目录
2) CopyWebpackPlugin   拷贝文件到 打包输出目录
3) BannerPlugin (内置) 添加版权声明 

## [CleanWebpackPlugin](https://www.npmjs.com/package/clean-webpack-plugin "CleanWebpackPlugin")
+ 安装 clean-webpack-plugin

```
yarn add clean-webpack-plugin -D
```

+ 配置

```javascript
// webpack.config.js
let { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	plugins: [
		new CleanWebpackPlugin()
	]
}
```

+ 注意：
	+ 所有配置在 webpack.config.js 的 output.path 目录下的文件将被移除，但不会删除文件夹
	+ webpack 4.x 之后，采用默认选项，默认会清除 `<PROJECT_ROOT_DIRECTORY>/dist/` 下的所有文件
	+ 使用 cleanOnceBeforeBuildPatterns 可覆写此行为

## [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/ "CopyWebpackPlugin")
+ 安装

```
yarn add copy-webpack-plugin -D
```

+ 配置

```
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      { from: 'doc', to: '' }
    ]),
  ],
};
```

## [BannerPlugin](https://webpack.js.org/plugins/banner-plugin/ "BannerPlugin")
+ 配置：

```javascript
// webpack.config.js
const webpack = require('webpack');

// string
new webpack.BannerPlugin({
  banner: 'hello world'
});
```

+ 注意点：
该 string 声明不会加在 html 网页中，只是加在 打包生成的 js 文件中