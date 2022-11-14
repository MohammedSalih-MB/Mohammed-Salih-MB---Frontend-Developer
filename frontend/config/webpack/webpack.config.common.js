const webpack = require('webpack');
const path = require('path');

require('dotenv').config();

const config = {
  output: {
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  entry: {
    app: './src/index.jsx',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: { config: './config/postcss.config.js' },
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: { config: './config/postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },

  resolve: {
    alias: {
      '@Root': path.resolve(__dirname, '../../src/'),
      '@Components': path.resolve(__dirname, '../../src/components'),
      '@Styles': path.resolve(__dirname, '../../src/styles'),
      '@Variables': path.resolve(__dirname, '../../src/styles/variables'),
      '@Services': path.resolve(__dirname, '../../src/services'),
      '@Assets': path.resolve(__dirname, '../../src/assets'),
      '@Scenes': path.resolve(__dirname, '../../src/scenes'),
      '@Constants': path.resolve(__dirname, '../../src/constants')
    },
    extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      ENV: process.env.ENV || 'development'
    })
  ],
};

module.exports = config;
