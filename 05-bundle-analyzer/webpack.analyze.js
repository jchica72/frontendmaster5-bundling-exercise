const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


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
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      generateStatsFile: true,
      statsOptions: { source: false }
    }),
  ]
});