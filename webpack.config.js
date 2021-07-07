/**
 * @class       : webpack.config
 * @author      : kevin (kevin@kevin-XPS-15-9560)
 * @created     : Monday Jun 21, 2021 18:58:00 PDT
 * @description : webpack.config
 */

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './server/build/static/'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tx|tsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devServer: {
        contentBase: './server/build',
        publicPath: '/static/',
        port: 8000,
    },
};
