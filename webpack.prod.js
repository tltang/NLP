const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const dotenv = require('dotenv');
dotenv.config();

// optimization: {
//     minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
// },

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png)$/i,
                use: [
                    {loader: 'file-loader',
                        options: {
                            name: '/images/[name].[ext]'
                        }
                    }
                    // ,
                    // {loader: 'extract-loader'},
                    // {loader: 'ref-loader'},
                ]
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
        new webpack.DefinePlugin( {
           API_KEY1: JSON.stringify(process.env.API_KEY)
        }),
        new MiniCssExtractPlugin({filename: '[name].css'})
    ]
}
const rules = [
    {
        test: /\.jpeg$/,
        use: [{ loader: 'file-loader'}]
    }
    // ,
    // {
    //     test: /\.html$/,
    //     use: [
    //         {loader: 'file-loader'},
    //         {loader: 'extract-loader'},
    //         {loader: 'ref-loader'},
    //     ]
    // }
];