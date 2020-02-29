let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js', 
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.IgnorePlugin(/^\.\/locale/, /moment$/),
        new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true
    },
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