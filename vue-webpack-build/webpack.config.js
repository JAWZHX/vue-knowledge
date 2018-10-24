const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV == 'production' ? false : true;
const mode = isDev ? 'development' : 'production';

let config = {
    target: 'web',
    mode: mode,
    resolve: {
        alias: {
            'src': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        },
    },
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name][hash:8].[ext]'
                        }
                    }
                ] 
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin()
    ]
};

if(isDev) {
    config.devtool = '#cheap-module-eval-source-map';

    let devConfig = {
        devServer: {
            overlay: {
                errors: true
            },
            port: 9000,
            host: '0.0.0.0',
            hot: true,
            https: true
        }
    }
    config = Object.assign({}, config, devConfig);

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;