const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV == 'production' ? false : true;
const mode = isDev ? 'development' : 'production';

let config = {
    mode: mode,
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
            host: '0.0.0.0'
        }
    }
    config = Object.assign({}, config, devConfig);
    
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;