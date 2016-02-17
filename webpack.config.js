var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
      }
    ]
  },
  // devtool: "#inline-source-map" 
  // devtools: "#eval"
  devtool: "#source-map" 
};
