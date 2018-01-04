var webpack = require('webpack')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }]
  },
  devServer: {
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4040',
        secure: false
      }
    },
    contentBase: "./dist", //本地服务器所加载的页面所在的目录
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index-tpl.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}