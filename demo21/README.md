## 懒加载

1 懒加载的测试文件
```
// source.js
export default 'sourceJs'
```
2 创建按钮和点击事件
```javascript
// index.js
let btn = document.createElement('button');
btn.innerHTML = 'Hello'

btn.addEventListener('click', function() {
    // es6 草案中的语法 jsonp 实现动态加载文件
    import('./source.js').then(data=>{
        console.log(data.default);
    })
});

document.body.appendChild(btn);
```

## 热更新
1 配置热更新
```
// webpack.config.js
const webpack = require('webpack');

module.exports = {
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
```
2 运用热更新的写法
```
// index.js
import str from './source';

console.log(str);

if (module.hot) {
    module.hot.accept('./source', ()=>{
        console.log('文件更新了')
        let str = require('./source.js');
        console.log(str.default);
    });
}
```