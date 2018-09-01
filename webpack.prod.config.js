const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, '/app/index.js')
    ],
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    mode: 'production',
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
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};