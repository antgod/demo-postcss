const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const myplugin = require('../postcss-plugin-demo')
const config = require('./package.json')

const processors = [ myplugin(config.myConfig) ]

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
              return processors
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