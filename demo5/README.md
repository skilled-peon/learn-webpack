## 安装 [babel-loader](https://webpack.js.org/loaders/babel-loader/ "babel-loader")
+ 使用 Yarn 安装
```
yarn add babel-loader @babel/core @babel/preset-env -D
```

+ 使用 npm 安装
```
npm i babel-loader @babel/core @babel/preset-env -D
```
## 新增规则
```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

## 测试的 es6 代码
___index.js___

+ 箭头函数
```
let fn = () => {
    console.log('log')
}
fn()
```

## 如果要支持 class
+ class
```javascript
class A {
    a = 1
}
```

## 安装 额外的语法支持
+ 使用 Yarn 安装
```
yarn add @babel/plugin-proposal-class-properties -D
```

+ 使用 npm 安装
```
npm i @babel/plugin-proposal-class-properties -D
```

## 配置 支持 class
```
plugins: ['@babel/plugin-proposal-class-properties']
```

## 拓展阅读
[es2017 装饰器语法](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)