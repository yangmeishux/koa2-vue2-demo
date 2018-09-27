/**
 * Created by chenjiajun on 2017/8/17.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');

let prodConfig =  merge(baseConfig, {
	plugins: [
		
	],
	optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
    mode: 'production'
});

module.exports = prodConfig;