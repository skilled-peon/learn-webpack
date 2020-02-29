let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        react: ['react', 'react-dom']
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        }),
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}