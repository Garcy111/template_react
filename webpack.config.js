var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname + '/src',
	entry: {
		main: ["webpack-dev-server/client", "webpack/hot/dev-server", "./main"]
	},
	output: {
		path:  __dirname + '/public/',
		publicPath: '/',
		filename: "[name].js",
		library: "[name]"
	},
	module: {
	    loaders: [
	      {
	      	test: /\.js$/,
	      	loader: "uglify!babel",
	      	exclude: [/node_modules/, /public/]
	      },
	      {
	      	test: /\.css$/,
	      	loader: "style!css!autoprefixer",
	      	exclude: [/node_modules/, /public/]
	      },
	      {
	      	test: /\.scss$/,
	      	loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass"),
	      	exclude: [/node_modules/, /public/]
	      },
	      {
	      	test: /\.gif$/,
	      	loader: "url?limit=10000&mimetype=image/gif"
	      },
	      {
	      	test: /\.jpg$/,
	      	loader: "url?limit=10000&mimetype=image/jpg"
	      },
	      {
	      	test: /\.png$/,
	      	loader: "url?limit=10000&mimetype=image/png"
	      },
	      {
	      	test: /\.svg/,
	      	loader: "url?limit=26000&mimetype=image/svg+xml"
	      },
	      {
	      	test: /\.jsx$/,
	      	loader: "babel",
	      	exclude: [/node_modules/, /public/]
	      },
	      {
	      	test: /\.json$/,
	      	loader: "json",
	      	exclude: [/node_modules/, /public/]
	      },
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('css/styles.css'),
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.optimize.UglifyJsPlugin({minimize: true})
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common'
		// })
	],
};