const HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path'),
      merge = require('webpack-merge'),
      common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true,
              }
          }
      ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      filename: "[name].css",
    }),
  ]
});