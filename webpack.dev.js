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
  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  // },
  // performance: {
  //   hints: false,
  // },
});
