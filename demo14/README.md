## node 模拟一个服务器
+ 新建 server.js 文件

```javascript
// server.js
const express = require('express');

const app = express();

app.get('/api/user', (req, res)=> {
    res.json({name: 'Hello World'})
})

app.listen(3000);
```

+ 使用 node.js 启动该服务
在命令行窗口执行

```
node server.js
```

如此操作，我们就模拟好了一个提供 `/api/user` 接口且访问地址为 `http://localhost:3000` 的服务器

## 配置 webpack devServer 代理 解决跨域

```javascript
// webpack.config.js
module.exports = {
	devServer: {
        proxy: {
            // 1) 配置一个代理
            '/api': 'http://localhost:3000'
        }
    }
}
```

## 重写代理路径
如果 接口地址 为 `/user`
1.修改 `server.js` 并重新执行 `node server.js`

```
...

app.get('/user', (req, res)=> {
    res.json({name: 'Hello World'})
})

...
```

2.代理-路径重写：

```
module.exports = {
	devServer: {
        proxy: {
            // 重写的方式，把请求转发到 express 服务器上
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '/api' : '' }
            }
        }
    }
}
```


## 使用 devServer 本地模拟数据
+ 修改 `index.js`

```javascript
// index.js
...
// 使用 devServer.before 模拟请求时
xhr.open('GET', '/user', true);
...
```

+ 修改配置文件

```javascript
// webpack.config.js
module.exports = {
	devServer: {
		before(app) {
			app.get('/user', (req,res) => {
				res.json({name: "hook test before()"})
			})
		}
	}
}
```

## 服务器端和 webpack 端口使用同一个
借助 [webapck-dev-middleware](https://www.npmjs.com/package/webpack-dev-middleware "webapck-dev-middleware") 中间件, 把前端代码也启动到服务器端口上

+ 安装

```
yarn add webpack-dev-middleware -D
```

+ 新建 server.middle.js 并在命令行中运行 `node server.middle.js`

```
const express = require('express');
const webpack = require('webpack')
const middle = require('webpack-dev-middleware')

const app = express();
const config = require('./webpack.config.js');

const compiler = webpack(config);

app.use(middle(compiler));

app.get('/user', (req, res)=> {
    res.json({name: 'Hello World'})
})

app.listen(3000);
```