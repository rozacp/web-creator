/* eslint-disable import/no-extraneous-dependencies */

// const ImageminPlugin = require('imagemin-webpack');
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
  // performance: {
  //   hints: false,
  // },
  // stats: {
  //   modules: false,
  //   entrypoints: false,
  // },
  // plugins: [
  //   new ImageminPlugin({
  //     name: '[path][name].[ext]',
  //     bail: true,
  //     cache: true,
  //     imageminOptions: {
  //       plugins: [
  //         ['gifsicle', { interlaced: true }],
  //         ['mozjpeg', { quality: 90 }],
  //         ['optipng', { optimizationLevel: 5 }],
  //         [
  //           'svgo',
  //           {
  //             plugins: [
  //               {
  //                 removeViewBox: false,
  //               },
  //             ],
  //           },
  //         ],
  //       ],
  //     },
  //   }),
  // ],
});
