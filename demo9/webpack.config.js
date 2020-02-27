let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let TerserJSPlugin = require('terser-webpack-plugin')
let webpack = require('webpack')

module.exports = {
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                sourceMap: true
            }), new OptimizeCssAssetsPlugin()
        ]
    },
    mode: 'development',
    entry: './src/index.js',   // 入口
    output: {
        filename: 'bundle.js', // 打包后的文件名
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:3000'
    },
    devServer: {
        port: 3000,
        progress: true,
        contentBase: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '/css/main.css'
        }),
        new webpack.ProvidePlugin({
            $ : 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 8192,
                        outputPath: '/img/'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "useBuiltIns": "usage",
                                    "corejs":3
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-regenerator',
                            [
                                '@babel/plugin-transform-runtime',
                                {
                                    corejs: 3
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/, use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/, use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    }
}