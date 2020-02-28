const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        // 3) 前端模拟数据
        // before(app) {
        //     app.get('/user', (req, res) => {
        //         res.json({"name": "hook test before()"})
        //     })
        // },
        proxy: {
            // 1) 配置一个代理
            // '/api': 'http://localhost:3000'
            // 2) 重写的方式，把请求转发到 express 服务器上
            // '/api': {
            //     target: 'http://localhost:3000',
            //     pathRewrite: { '/api' : '' }
            // }
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]

}