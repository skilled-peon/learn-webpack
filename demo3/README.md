## [loader 的特性](https://www.webpackjs.com/concepts/loaders/#loader-%E7%89%B9%E6%80%A7 "loader 的特性")
+ loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的 loader 将按照<span style="color:red">相反的顺序执行</span>。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。
+ loader 可以写成对象形式，并使用 `options` 对象进行配置。
```javascript
{
    loader: 'css-loader',
    options: {
    ...
    }
}
```

## [css-loader](https://www.webpackjs.com/loaders/css-loader/#%E7%94%A8%E6%B3%95 "css-loader") 和 [style-loader](https://webpack.js.org/loaders/style-loader/ "style-loader") 的作用
+ `css-loader` 主要是解释`@import` 和 `url()`
+ `style-loader` 是通过插入`<style>`把 css 添加到 DOM 中

## 本地安装 css-loader 和 style-loader
+ 使用 Yarn 安装：
```
yarn add css-loader style-loader -D
```
+ 使用 npm 安装：
```
npm add css-loader style-loader -D
```

## 配置 module
```javascript
module: {
    rules: [
        { test: /\.css$/, use: [ 'style-loader', 'css-loader']
        }
    ]
}
```

## 使用 [less-loader ](https://www.webpackjs.com/loaders/less-loader/ "less-loader ")支持 less
+ 使用 Yarn 安装：
```
yarn add less less-loader -D
```
+ 使用 npm 安装：
```
npm add less less-loader -D
```

## 新增 less 文件配置
```javascript
{
    test: /\.less$/, use:
    [
		'style-loader',
        'css-loader',
        'less-loader'
    ]
}
```