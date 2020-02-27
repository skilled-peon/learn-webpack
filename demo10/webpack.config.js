let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    // 多入口
    entry: {
        pageOne: './src/index.js',
        pageTwo: './src/other.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'home.html',
            chunks:['pageOne']
        }),
        new HtmlWebpackPlugin({
            tempalte: './src/index.html',
            filename: 'other.html',
            chunks:['pageTwo']
        })
    ]

}