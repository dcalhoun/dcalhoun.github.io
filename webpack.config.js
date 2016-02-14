var calc          = require('postcss-calc');
var Copy          = require('copy-webpack-plugin');
var customMedia   = require('postcss-custom-media');
var customProps   = require('postcss-custom-properties');
var locals        = require('./src/data.js');
var path          = require('path');
var postcssImport = require('postcss-import');
var StaticSite    = require('static-site-generator-webpack-plugin');
var webpack       = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    'main': './entry.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.jsx', '.js', '']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        loader: 'css!postcss'
      }
    ]
  },

  plugins: [
    new StaticSite('bundle.js', locals.paths, locals),
    new webpack.NoErrorsPlugin(),
    new Copy([
      {from: '.nojekyll'},
      {from: '*.txt'},
      {from: '*.png'},
      {from: 'CNAME'}
    ])
  ],

  postcss: function() {
    return [
      postcssImport,
      customMedia,
      customProps,
      calc
    ]
  }
};
