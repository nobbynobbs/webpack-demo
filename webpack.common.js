const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.NamedModulesPlugin(), // development
    //new webpack.HashedModuleIdsPlugin(), // production
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],
  output: {
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};