const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app/index.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.(woff|woff2|eot|ttf|oft|svg)$/,
            use: ['file-loader']
        }]
    },

    devtool: 'inline-source-map',

    devServer : {
        contentBase: './dist',
        compress : true,
        port : 9000
    },

    plugins : [
        new CleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
            title : 'anguler1.x-demo',
            template : './index.html'
        }) 
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
}