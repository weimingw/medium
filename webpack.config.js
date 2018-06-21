var webpack = require('webpack');
var rootPath = require("app-root-path");

var BUILD_DIR = rootPath.path + '/public/';
var APP_DIR = rootPath.path + '/src';

module.exports = {
    mode: 'development',
    entry: {
        'bundle': APP_DIR + '/index.jsx',
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['babel-preset-env', 'react'],
                  plugins: ["syntax-async-functions","transform-regenerator", "transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: ["style-loader", "css-loader", "autoprefixer-loader", "less-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
}
