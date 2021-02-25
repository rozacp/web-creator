/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
// const { ProgressPlugin } = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  src: './source',
  dest: './public',
  assets: './static',
};

module.exports = {
  entry: {
    'static/js/common': './source/js/common.js',
    // [`${config.assets}/js/common`]: `${config.src}/js/common.js`,
    // [`${config.assets}/js/cookies`]: `${config.src}/js/cookies.js`,
    // [`${config.assets}/js/forms`]: `${config.src}/js/forms.js`,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    // publicPath: `.${config.assets}/`
  },
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     // loader: 'eslint-loader',
    //     use: ['babel-loader', 'eslint-loader'],
    //     options: {
    //       cache: false,
    //       fix: false,
    //     },
    //   },
    // ],
  },
  plugins: [
    // new ProgressPlugin(),
    // new CleanWebpackPlugin(),
  ],
};
