const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		test: './src/test.js',
	},
	output: {
		filename: "./dest/[name].js",
	},
	module: {
		rules: [
			{ test: /\.css$/,  use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader!postcss-loader"
			}) },
		]
	},
	plugins: [
		new ExtractTextPlugin('./dest/[name].css')
	]
}