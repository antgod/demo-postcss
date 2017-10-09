const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    style: './src/style.js',
  },
  output: {
    filename: "./dest/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                require('../postcss-plugin-demo')()
              ]
            }
          }
        }]
      })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dest/[name].css'),
  ]
}