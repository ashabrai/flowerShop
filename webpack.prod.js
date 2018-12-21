const merge = require('webpack-merge');
const MiniCssPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common');

const webpackProdConfig = {};
webpackProdConfig.module = {};
webpackProdConfig.mode = 'production';

webpackProdConfig.plugins = [
    new MiniCssPlugin({
        filename: '[name].[hash].css',
    }),
];

webpackProdConfig.module.rules = [{
    test: /\.scss$/,
    use: [
        MiniCssPlugin.loader,
        'css-loader',
        'sass-loader',

        {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash:8].[ext]'
                    },
                },
            ]
        },
    ],
}];

module.exports = merge(commonConfig, webpackProdConfig);
