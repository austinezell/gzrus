"use strict";
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/js/index.js",
    vendor: ["angular", "angular-animate", "angular-ui-router"]
  },
  output: {
    path: __dirname + '/dist/js/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules\/|bower_components\/)/,
      loader: 'babel?presets[]=es2015'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
