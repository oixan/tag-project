var ExtractTextPlugin = require("./node_modules/extract-text-webpack-plugin");

var path = require('path');

const extractSass = new ExtractTextPlugin({
    filename: "style.css"
});

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
            {   test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }
         ],
     },
};