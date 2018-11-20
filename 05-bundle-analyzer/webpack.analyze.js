const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      generateStatsFile: true,
      statsOptions: { source: false }
    }),
  ]
});