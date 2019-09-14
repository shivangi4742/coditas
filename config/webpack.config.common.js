'use strict';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

const helpers = require('./helpers');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.css']
    },

    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
          ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
      ]
};