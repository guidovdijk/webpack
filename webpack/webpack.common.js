const path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
config = require('./config.js');

module.exports = {
    entry: config.entry,
    output: {
        path: path.resolve(__dirname, config.output),
        filename: 'js/bundle.js',
    },

    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CleanWebpackPlugin([config.output]),
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
        ]
    }
};