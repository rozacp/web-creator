/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // watch: true,
  output: {
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'),
    contentBase: './public', // https://stackoverflow.com/questions/62991326/difference-between-publicpath-and-contentbase-in-webpack
    publicPath: '/static/',
    writeToDisk: true,
    open: true,
    // hot: true,
  },
  // performance: {
  //   hints: false,
  // },
});
