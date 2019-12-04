module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      },
      {
        test: /\.(ttf|eof|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'fonts'
          }
        }
      }
    ]
  }
}