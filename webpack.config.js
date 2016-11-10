const webpack = require('webpack')
const path = require('path')

const config = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'out.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        cacheDirectory: true,
        exclude: /node_modules/,
        loader: 'babel'
      },
    ],
  },
}

module.exports = config
