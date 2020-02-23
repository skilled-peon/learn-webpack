let path = require('path')
console.log(path.resolve(__dirname))
console.log(path.resolve('dist'))

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
    }
}