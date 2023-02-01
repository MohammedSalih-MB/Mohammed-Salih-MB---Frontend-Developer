const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.common');

const buildPath = path.resolve(__dirname, '../../dist/');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '9000';

const devConfig = merge(webpackConfig, {
  mode: 'development',
  target: 'web',
  output: {
    path: buildPath,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },

  module: {},

  devServer: {
    compress: true,
    hot: true,
    port: PORT,
    host: HOST
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
});

module.exports = devConfig;
