$$ webpack 打包我们的图片$$
## 安装支持的插件
+ 安装 [file-loader](https://webpack.js.org/loaders/file-loader/ "file-loader")
```
yarn add file-loader -D
```

+ 新增 **rules**
```javascript
// webpack.config.js
rules: [
    {
        test:/\.(png|jpe?g|gif)$/,
        use: {
			loader: 'file-loader',
			options: {
				esModule: false
			}
		}
    }
]
```
> `esModule: false` 用来解决以下问题：
> `html-withimg-loader` 加载到页面上的图片是这样的`<img src={"default":"43ff4cb2c9cf60e58551ab3db371cc3f.png"} />`，地址是对的，但包裹了一层。

## 图片的来源
1） 在 js 中创建图片来引入
```
// index.js
import logo from './logo.jpg'; // 把图片引入，返回的结果是一个新的图片地址
let image = new Image();
console(logo);
image.src = logo;
document.body.appendChild(image);
```
2） 在 css 引入 background('url')
```
// index.css
div {
    width: 315px; height: 395px;
    background: url('./mouse.jpg')
}

// index.js
import './index.css'
```
3） `<img src="" alt="">`
如果要支持这种需要 [html-withimg-loader](https://www.npmjs.com/package/html-withimg-loader "html-withimg-loader")
+ 安装
```
yarn add html-withimg-loader -D
```

+ 新加  **rules**
```
// webpack.config.js
{
    test: /\.html$/,
    use: 'html-withimg-loader'
}
```


## [url-loader](https://webpack.js.org/loaders/url-loader/ "url-loader")
> `url-loader` 功能类似于 [`file-loader`](https://github.com/webpack-contrib/file-loader)，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。

```
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
```