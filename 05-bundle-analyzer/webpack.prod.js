const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      MODE: 'production',
      DBNAME: 'Production Server Name',
      DBSERVER: 'Production Server IP'
    })
  ]
});