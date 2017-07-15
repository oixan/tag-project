var ExtractTextPlugin = require("./node_modules/extract-text-webpack-plugin");

var path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.js',
        test: './src/test.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']     
    },
    module: {
        loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },
            { 
                test: /\.tsx?$/,
                loader: 'ts-loader' 
            },
            {   
                test: /\.css$/, 
                //loader: "style-loader!css-loader"
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    loader: "css-loader!sass-loader",
                }), 
            }
         ],
     },
    plugins: [
            new ExtractTextPlugin("./style.css")
    ]

};