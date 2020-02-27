import './index.css'

import logo from './logo.jpg'; // 把图片引入，返回的结果是一个新的图片地址
let image = new Image();
console.log(logo);
image.src = logo;
document.body.appendChild(image);