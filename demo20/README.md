
`index.js` 和 `other.js` 均引用 `a.js` 和 `b.js`

## 修改配置
设置多入口
```javascript
// webpack.config.js
module.exports = {
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    }
}
```
修改名称
```javascript
// webpack.config.js
module.exports = {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}
```
**分割代码块**
```javascript
module.exports = {
    optimization: {
        splitChunks: { // 分割代码块
            cacheGroups: { // 缓存组
                common: { // 公共的模块
                    chunks:'initial',
                    minSize:0,
                    minChunks:1
                },
                vendor: {
                    priority: 1,
                    test: /node_modules/,
                    chunks:'initial',
                    minSize:0,
                    minChunks:2
                }
            }
        }
    }
}
```

`common` 是抽取的内部公共代码，
`vendor` 是抽取的第三方代码，需要设置 `priority:1`