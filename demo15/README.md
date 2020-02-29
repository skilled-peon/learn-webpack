## 指定模块查找路径
[官方文档 v12.x：从 node_modules 文件夹 加载模块](https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_loading_from_node_modules_folders)

如果 Node.js 在当前目录中找不到 node_modules 文件夹，那么它将移动到父目录，依此类推，直到到达文件系统的根目录为止。

我们可以使用 resolve 缩小查找范围
```
// webpack.config.js
module.exports = {
	modules: [path.resolve('node_modules')]
}
```

## 导入 bootstrap 的样式示例
+ 安装 style-loader 和 css-loader 并配置

```
yarn add style-loader css-loader -D
```

+ 配置

```javascript
// webpack.config.js
module.exports = {
	rules : [
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}
	]
}
```

+ 安装 bootstrap 导入样式

```
yarn add bootstrap
```

+ 使用 bootstrap 样式

```
// index.js
import 'bootstrap/dist/css/bootstrap.css';
```

```
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="btn btn-danger"></button>
</body>
</html>
```

## 使用 alias 缩短引用
```
// webpack.config.js
module.exports = {
	alias: {
		bootstrap: 'bootstrap/dist/css/bootstrap.css'
	}
}
```

```
// 1) 添加 alias 配置前
// import 'bootstrap/dist/css/bootstrap.css';
// 2) 添加 alias 配置后
import 'bootstrap';
```

## 修改 main 文件的寻找顺序
```
// webpack.config.js
module.exports = {
	mainFields: [
		'style', 'main'
	]
}
```

```
// 1) 添加 mainFields 配置前
// import 'bootstrap/dist/css/bootstrap.css';
// 2) 添加 mainFields 配置后
import 'bootstrap';
```

## 修改 extensions 扩展名
```
// webpack.config.js
module.exports = {
	extensions: ['.js','.css','.json']
}
```

```javascript
// 1) 添加 extensions 前
// import './style.css';
// 2) 添加 extensions 后
import './style';
```