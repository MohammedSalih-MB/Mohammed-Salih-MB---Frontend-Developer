const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { merge } = require('webpack-merge');

const webpackConfig = require('./webpack.config.common');

const buildPath = path.resolve(__dirname, '../../dist/');

const BASE_ROUTE = '/';

const prodConfig =  merge(webpackConfig, {
  mode: 'production',
  output: {
    path: buildPath,
    filename: '[name].[chunkhash].js',
    publicPath: BASE_ROUTE,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true,
    nodeEnv: 'production'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // Inline all files which names start with “runtime~” and end with “.js”.
      // That’s the default naming of runtime chunks
      inlineSource: 'runtime~.+\\.js',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new InlineSourcePlugin(HtmlWebpackPlugin)
  ],
});

module.exports = prodConfig;
