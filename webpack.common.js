/**
 * @class       : webpack.config
 * @author      : kevin (kevin@kevin-XPS-15-9560)
 * @created     : Monday Jun 21, 2021 18:58:00 PDT
 * @description : webpack.config
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        // filename: './static/index.bundle.js',
        filename: './static/[name].[contenthash].js',
        path: path.resolve(__dirname, './server/build/'),
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
    plugins: [
        new HtmlWebpackPlugin({
            title: "Automated Term Extraction Demonstrater | Web app for demonstrating PyATE's algorithms",
            inject: 'body',
            templateContent: ({ htmlWebpackPlugin }) => `
            <html>
              <head>
                <title>
                    Automated Term Extraction Demonstrater | Web app for demonstrating
                    PyATE's algorithms
                </title>
                ${htmlWebpackPlugin.tags.headTags}
              </head>
              <body>
                <div id="root"></div>
              </body>
            </html>
          `,
        }),
    ],
};
