const merge = require('webpack-merge'),
common = require('./webpack.common.js'),
webpack = require('webpack'),
config = require('./config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: config.output,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [       
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});