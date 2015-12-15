var StaticRender = require('static-render-webpack-plugin');
var webpack      = require('webpack');

var routes = [
  '/',
  '/about'
];

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/dev-server',
    './src/entry.js'
  ],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },
  //
  // devServer: {
  //   contentBase: 'dist/',
  //   historyApiFallback: true,
  //   port: 8080,
  //   hot: true
  // },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        // loader: ExtractText.extract('css!cssnext')
        loader: 'style!css!cssnext'
      }
    ]
  },

  plugins: [
    // new ExtractText('bundle.css'),
    new StaticRender('bundle.js', routes),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],

  cssnext: {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  }
};
