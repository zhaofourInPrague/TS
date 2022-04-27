const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'source-map',// false
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        static: path.join(__dirname, 'dist'),
        historyApiFallback: {// browser路由的话 如果路径不能正常响应会重定向到index.html
            index: './index.html'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: { // ts也需要
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'ts-loader'
            },
            {
                enforce: 'pre',// 提前执行 可以让我们调试ts源代码
                test: /.tsx?$/,
                loader: 'source-map-loader'
            },
            {
                test: /.css?$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        /*
        1. 配置devServer.hot为true
        2. 配置webpack.HotModuleReplacementPlugin插件
        */
        new webpack.HotModuleReplacementPlugin()
    ]
}