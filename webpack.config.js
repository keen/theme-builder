const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const extendedPath = path.resolve(__dirname, 'dist');
const fileName = process.env.BUILD_MODE;
const entry =
  process.env.BUILD_MODE === 'standalone'
    ? './test/demo/example/index.js'
    : './lib/index.js';

module.exports = {
  entry,

  target: 'web',

  output: {
    path: extendedPath,
    filename: `${fileName}.js`,
    library: `${!process.env.LIBRARY ? '' : process.env.LIBRARY}`,
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, '')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },

      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },

  plugins:
    process.env.BUILD_MODE === 'standalone'
      ? [
          new HtmlWebPackPlugin({
            template: './test/demo/index.html',
            filename: './index.html',
            title: 'Theme Builder'
          })
        ]
      : [],

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx']
  },

  optimization: {},

  devtool: 'source-map',

  context: __dirname,

  // stats: 'verbose',

  mode: process.env.NODE_ENV,

  devServer: {
    contentBase: path.join(__dirname, 'test/demo'),
    publicPath: '/',
    open: true,
    watchContentBase: true
  },

  externals:
    process.env.BUILD_MODE !== 'standalone'
      ? {
          'common-tags': true,
          'highlight.js': true,
          'keen-react-charts': true,
          'prop-types': true,
          react: true,
          'react-color': true,
          'react-dom': true,
          'react-lowlight': true,
          'react-select': true,
          'react-tabs': true,
          'styled-jsx': true
        }
      : {}
};
