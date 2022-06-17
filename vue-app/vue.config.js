const packageName = require('./package').name;
const MyAwesomeWebpackPlugin = require('./plugin/html-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  transpileDependencies: true,
  devServer: {
    hot: true,
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      library: packageName,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
    plugins: [
      new MyAwesomeWebpackPlugin(htmlWebpackPlugin)
    ]
  },
}
