/**
 * @class       : webpack.config
 * @author      : kevin (kevin@kevin-XPS-15-9560)
 * @created     : Monday Jun 21, 2021 18:58:00 PDT
 * @description : webpack.config
 */

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './build/static/'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tx|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devServer: {
        contentBase: './build',
        publicPath: '/static/',
        port: 8000,
    },
};
