const packageName = require('./package').name;

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
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
      globalObject: 'this',
    },
  },
}
