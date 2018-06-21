var webpack = require('webpack');
var rootPath = require("app-root-path");

var BUILD_DIR = rootPath.path + '/public/'; // folder where we will put the output
var APP_DIR = rootPath.path + '/src'; // folder from which we will grab files to compile

module.exports = {
    entry: {
        'bundle': APP_DIR + '/index.js',
    },
    output: {
        path: BUILD_DIR, // where we are going to place the file locally
        filename: "[name].js", // what the file will be named
    },
    devServer: { // tells our dev server where to serve content from
        inline: true,
        contentBase: "./dist", // will look inside this folder for index.html
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // will load all js files
                exclude: /node_modules/, // not in node modules (optional)
                loader: 'babel-loader', // using babel-loader
                query: {
                  presets: ['babel-preset-env', 'react'], // with these presets (also optional)
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
