const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack')
const CopyPlugin = require("copy-webpack-plugin");

dotenv.config();

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        libraryTarget: "var",
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new HtmlWebPackPlugin({
            template: "./src/client/views/NLP2.html",
            filename: "./NLP2.html",
        }),
        new CopyPlugin([
            {from: "./src/client/images/NLP.jpg", to: './images/NLP.jpg'}],
        ),
        new webpack.DefinePlugin( {
            API_KEY1: JSON.stringify(process.env.API_KEY)
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new Dotenv()
    ]
}
