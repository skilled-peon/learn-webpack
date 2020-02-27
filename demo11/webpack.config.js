let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        home: './src/index.js'
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
    // 1) 生成 .map 文件，可以定位到错误
    devtool: 'source-map',
    // 2) 不会生成单独文件，可以显示行和列
    // devtool: 'eval-source-map',
    // 3) 不会产生列 但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map',
    // 4) 不会生成文件 集成在打包后的文件中，不会产生列
    // devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'home.html'
        })
    ]

}