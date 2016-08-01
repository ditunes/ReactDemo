var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:  {// 页面入口文件
        productsPage : path.resolve(APP_PATH, 'main.jsx')
    },
    output: {
        path: BUILD_PATH,
        publicPath: "/",
        filename: '[name].[hash].js'
    },
    debug:true,
    devtool: '#eval-source-map',//开启源码映射，方便调试
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host:"127.0.0.1",//web容器ip
        port:8088//web容器的端口号
    },
    resolve: {
        root: path.join(__dirname, 'node_modules'),
        alias:{ normalize:"normalize.css"}//设置第三方包别名
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                include: [path.resolve(APP_PATH) ],
                query: {
                    presets: ['es2015','stage-2','react']
                }
            },
            {//cssloader
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader"),
                include: APP_PATH
            },
            {//将图片执行base64编码
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'url?limit=4000&&name=images/[name].[hash].[ext]',
                include: path.resolve(APP_PATH)
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer')];
    },
    plugins : [
        new ExtractTextPlugin("css/[name].[hash].css"),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: '测试',
            filename : "productsPage.html",
            inject: "body",
            template: path.resolve(APP_PATH,'productsPage.html'),
            chunks: ["productsPage"]
        })
    ]
};