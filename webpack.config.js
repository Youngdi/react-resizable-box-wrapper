const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js', // 要輸出的檔案入口
  output: {
    filename: 'index.min.js', //最終的目的檔案
    library: 'react-resizable-box-wrapper',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components|build)/,
        query: {
          presets: ['env', 'react', 'es2015','stage-0']
        }
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}