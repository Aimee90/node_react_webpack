/*
* @Author: zoulin
* @Date:   2018-04-28 11:04:01
* @Last Modified by:   zoulin
* @Last Modified time: 2018-05-04 11:41:00
*/

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        publicPath: ASSET_PATH,
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /containers\/([^/]+)\/?([^/]*)\.jsx?$/,
                include: path.resolve(__dirname, 'src/routers/'),
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            styles: path.join(__dirname,'/styles')
        }
    },
    plugins: [
         new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
         }),
　　 　　new HtmlWebpackPlugin({
             title: '途牛商旅',
　　　　 　　template: path.resolve(__dirname, './src/index.tpl.html'),
　　　　　　 inject: true
　　　　 }),
         new ExtractTextPlugin("css/[name].[chunkhash:8].css"), //提取出来的样式放在style.css文件中
         new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.optimize\.(css|scss)$/g,
              cssProcessor: require('cssnano'),
              cssProcessorOptions: { discardComments: { removeAll: true } },
              canPrint: true
         }),
         new UglifyJSPlugin(),
　　 ]
}