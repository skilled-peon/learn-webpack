let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.IgnorePlugin(/^\.\/locale/, /moment$/),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ],
    module: {
        noParse: /jquery/, // 不去解析 jquery 的依赖库
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    } 
}