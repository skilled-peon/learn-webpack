// 懒加载
// let btn = document.createElement('button');
// btn.innerHTML = 'Hello'

// btn.addEventListener('click', function() {
//     // es6 草案中的语法 jsonp 实现动态加载文件
//     import('./source.js').then(data=>{
//         console.log(data.default);
//     })
// });

// document.body.appendChild(btn);

// 热更新
import str from './source';

console.log(str);

if (module.hot) {
    module.hot.accept('./source', ()=>{
        console.log('文件更新了')
        let str = require('./source.js');
        console.log(str);
    });
}