/* 引入操作路径模块和webpack */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	/* 输入文件 */
	entry: {
		index: [path.resolve(__dirname, '../src/main.js')]
	},
	output: {
		/* 输出目录，没有则新建 */
		path: path.resolve(__dirname, '../output'),
		/* 静态目录，可以直接从这里取文件 */
		publicPath: '/',
		/* 文件名 */
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[name].[chunkhash].js'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
						use: 'css-loader!vue-style-loader',
						fallback: 'vue-style-loader' 
					}),
					less: ExtractTextPlugin.extract({
						use: 'css-loader!less-loader!vue-style-loader',
						fallback: 'vue-style-loader'  
					})
				}
			}
		}, {
			test: /\.less$/,
			use: [
			    'vue-style-loader',
			    'css-loader',
			    'less-loader'
			]
		}, {//页面中import css文件打包需要用到
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			/* 排除模块安装目录的文件 */
			exclude: /node_modules/
		}, {
			test: /\.png$|\.jpg$|\.gif$|\.ico$/,
			loader: "file-loader",
			exclude: /node_modules/
		}, {
			test: /\.png$|\.jpg$|\.gif$|\.ico$/,
			loader: "file-loader",
			exclude: /node_modules/
		},
			{
				test: /\.(ttf|eot|svg|otf)(\?(.*))?$/,
				use: [{
					loader: 'file-loader',
					options: {prefix: 'fonts/'}
				}]
			},
			{
				test: /\.(woff|woff2)(\?(.*))?$/,
				use: [{
					loader: 'url-loader',
					options: {
						prefix: 'factorynts/',
						limit: 5000,
						mimetype: 'application/font-woff'
					}
				}]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}]
	},
	resolve: {
		extensions: [' ', '.js', '.vue']
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../index.html'),
			inject: true
		}),
		new ExtractTextPlugin('css/[name].[chunkhash:7].css', {
			allChunks: true
		}),
		// new MiniCssExtractPlugin({
  //           filename:'css/[id].[contenthash].css'
  //       })
	]
};