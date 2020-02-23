let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',   // 入口
    output: {
        filename: 'bundle.js', // 打包后的文件名
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        progress: true,
        contentBase: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ]
}