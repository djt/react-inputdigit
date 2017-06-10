import Webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'

export default {
    entry: [
        'babel-polyfill',
        './src/InputDigit.jsx'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './dist/InputDigit.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime', 'transform-decorators-legacy'],
                presets: ['es2015','stage-0','react'],
            },
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        root: [
        ]
    },
};