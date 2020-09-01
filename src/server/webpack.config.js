const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './index-client.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "stage-0", "react"]
                }
            },
            {
                test:/\.css$/,
                loader: ExtractTextPlugin({
                    fallback: 'style-loader',
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: ()=>[require('autoprefixer')]
                            }
                        }
                    ]
                })
            },
            {
                test:/\.scss$/,
                loader: ExtractTextPlugin({
                    fallback: 'style-loader',
                    use: [
                        "css-loader",
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: ()=>[require('autoprefixer')]
                            }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    }
};