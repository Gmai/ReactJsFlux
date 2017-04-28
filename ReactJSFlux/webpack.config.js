var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		list: "./React/List.jsx",
		register: "./React/Register.jsx"
	},
	output: {
		path: __dirname +'/Scripts/dist/',
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["react", "es2015", "stage-3"],
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["react", "es2015", "stage-3"],
				}
			}
		]
	}
};