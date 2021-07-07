/**
 * @class       : webpack.config
 * @author      : kevin (kevin@kevin-XPS-15-9560)
 * @created     : Monday Jun 21, 2021 18:58:00 PDT
 * @description : webpack.config
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './server/build',
        publicPath: '/static/',
        port: 8000,
    },
});
