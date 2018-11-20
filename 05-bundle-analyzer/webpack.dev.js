const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      MODE: 'development',
      DBNAME: 'Development Server Name',
      DBSERVER: 'Development Server IP'
    })
  ]
});