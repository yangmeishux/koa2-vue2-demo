const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');

let devConfig =  merge(baseConfig, {
	plugins: [
		//new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin()
         
	],
	mode: 'development'
});

module.exports = devConfig;