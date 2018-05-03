/*
* @Author: zoulin
* @Date:   2018-04-28 11:04:01
* @Last Modified by:   zoulin
* @Last Modified time: 2018-05-03 13:24:14
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: '[name].[chunkhash:8].bundle.js',
        chunkFilename: '[name]-[id].[chunkhash:8].bundle.js',
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
　　 　　new HtmlWebpackPlugin({
             title: '途牛商旅',
　　　　 　　template: path.resolve(__dirname, './src/index.tpl.html'),
　　　　　　 inject: true
　　　　 }),
         new ExtractTextPlugin("css/style.css"), //提取出来的样式放在style.css文件中
         new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.optimize\.(css|scss)$/g,
              cssProcessor: require('cssnano'),
              cssProcessorOptions: { discardComments: { removeAll: true } },
              canPrint: true
         }),
         new UglifyJSPlugin(),
　　 ]
}