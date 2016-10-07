var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
        preloaders: [{
            test: /\.scss/,
            loader: 'import-glob-loader'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('css!sass!import-glob-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('app.css', {
            allChunks: true
        })
    ]
};