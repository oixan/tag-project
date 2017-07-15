var path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js',
    test: './src/test.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  }
};