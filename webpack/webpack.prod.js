const merge = require('webpack-merge'),
path = require('path'),
common = require('./webpack.common.js'),
MiniCssExtractPlugin = require("mini-css-extract-plugin"),
UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
config = require('./config.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, config.output),
    filename: 'js/bundle.[chunkhash:8].js',
    chunkFilename: 'js/bundle.[chunkhash:8].chunk.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
        },
    ],
},
});