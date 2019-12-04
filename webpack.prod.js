const path = require('path'),
      merge = require('webpack-merge'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      TerserPlugin = require('terser-webpack-plugin'),
      common = require('./webpack.common');


module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});