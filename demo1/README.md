# 1.Webpack 基础配置
## 本地安装 webpack

+ 使用 npm

```
npm install webpack webpack-cli -D
```
+ 使用 yarn
```
yarn add webpack webpack-cli -D
```

## webpack 可以进行 零配置
+ 打包工具，输出后的结果（js 模块）
+ 打包 （支持我们的 js 的模块化）

## 手动配置 webpack
+ 默认配置文件的名字 `webpack.config.js`
> webpack 引用 webpack-cli，webpack-cli/bin 文件夹中有个 config-yargs.js 文件, 查看该文件可以查询 webpack 的默认配置值

## 测试 webpack.config.js 文件是否编写正确
```
node webpack.config.js
```

## 利用 npx 进行 webpack 进行打包
```
npx webpack
```
## 利用 scripts 进行 webpack 进行打包
修改___package.json___ 的 scripts 属性
```javascript
"scripts": {
	"build": "webpack"
}
```
接着运行命令
```
npm run build
```

# 2.http 开发服务器

## 安装 webpack-dev-server
+ 使用 npm
```
npm i webpack-dev-server -D
```

+ 使用 yarn
```
yarn add webpack-dev-server -D
```

## 用 npx 运行 webpack-dev-server
```
npx webpack-dev-server
```

## 用 scripts 运行 webpack-dev-server
在  ___package.json___ 文件的  **scripts**  属性中新增  **dev**  脚本
```javascript
"scripts": {
	"build": "webpack --config webpack.config.js",
	"dev": "webpack-dev-server"
}
```
运行命令：
```
npm run dev
```

## 手动配置 devServer
修改 ___webpack.config.js___ 文件，添加 `webServer`属性
```javascript
devServer: {
	port: 3000,
	progress: true,
	contentBase: "./dist"
}
```
第 2 行 **port** 修改 http服务器端口
第 3 行 [**contentBase**](https://www.webpackjs.com/configuration/dev-server/#devserver-contentbase "contentBase") 告诉服务器从哪里提供内容，注意，<span style="color:red">推荐使用绝对路径</span>