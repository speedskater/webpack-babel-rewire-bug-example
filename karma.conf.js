'use strict'

const path = require('path')

let webpackConfig = require('./webpack.config')
webpackConfig.entry = {}

module.exports = (config) => {
  config.set({
    basePath: '',
    client: {
      captureConsole: true,
      mocha: {
        bail: true,
      },
    },
    frameworks: [
      'mocha',
    ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.min.js',
      'node_modules/core-js/client/shim.min.js',
      'src/**/*.test.js',
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
    },
    webpack: webpackConfig,
    exclude: [],
    port: 9876,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatchBatchDelay: 300,
    browsers: [
      'PhantomJS',
      //'Chrome',
    ],
    reporters: [
      'mocha',
    ],
    mochaReporter: {
      output: 'minimal',
    },
    captureTimeout: 60000,
    singleRun: true,
  })
}
