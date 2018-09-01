const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, '/app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, '/app'),
        historyApiFallback: true,
        hotOnly: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/i,
            use: {
                loader: 'url-loader',
                options: {
                    name: 'images/[hash]-[name].[ext]'
                }
            }
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};