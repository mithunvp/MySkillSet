var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    devtool: 'source-map',

    entry: {
        'app': './ng2App/main.ts' // JiT compilation
    },

    output: {
        path: "./dist/",
        filename: '[name].bundle.js',
        publicPath: "/"
    },

    resolve: {
        extensions: ['.ts', '.js', '.css', '.html']
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        outputPath: path.join(__dirname, 'dist/')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'source-map-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],
        exprContextCritical: false
    },

    plugins: [
        new CleanWebpackPlugin(
            [
                './dist',                
            ]
        )
    ]
};