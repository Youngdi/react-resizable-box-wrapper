const webpack = require('webpack');
module.exports = {
  entry: './index.js', // 要輸出的檔案入口
  output: {
    filename: './bundle.min.js', //最終的目的檔案
    library: 'react-resizable-box-wrapper',
    libraryTarget: 'commonjs2'
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
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}