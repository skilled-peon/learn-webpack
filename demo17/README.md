
## 使用 webpack-merge 合并文件
```
yarn add webpack-merge -D
```

## 区分不同的环境
1 创建 webpack.dev.js
```
let {smart} = require('webpack-merge');
let base = require('./webpack.base.js');

module.exports = smart(base, {
    mode: 'development'
})
```
2 创建 webpack.prod.js
```
let {smart} = require('webpack-merge');
let base = require('./webpack.base.js');

module.exports = smart(base, {
    mode: 'production'
})
```

3 修改 weboack.config.js -> webpack.base.js


## 打包
开发环境打包
```
npm run build -- --config webpack.dev.js
```
生产环境打包
```
npm run build -- --config webapck.prod.js
```

## 建议
可以在开发环境中配置 `devServer`, `devtool`,
可以在生产环境中配置 `optimization`