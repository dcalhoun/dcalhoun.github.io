'use strict'

require('babel-register')

var calc = require('postcss-calc')
var Copy = require('copy-webpack-plugin')
var customMedia = require('postcss-custom-media')
var customProps = require('postcss-custom-properties')
var ExtractText = require('extract-text-webpack-plugin')
var path = require('path')
var paths = require('./src/shared/utils/paths.js')
var postcssImport = require('postcss-import')
var StaticSite = require('static-site-generator-webpack-plugin')
var webpack = require('webpack')
var env = process.env.NODE_ENV || 'dev'

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    filename: 'static.bundle.js',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractText.extract('style', 'css!postcss') },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel!standard' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md$/, loader: 'json!front-matter' }
    ]
  },

  plugins: [
    new Copy([
      {from: 'src/.nojekyll'},
      {from: 'src/*.txt'},
      {from: 'src/*.png'},
      {from: 'src/CNAME'}
    ]),
    new ExtractText('bundle.css'),
    new StaticSite('static.bundle.js', paths.routes),
    new webpack.DefinePlugin({
      'config': {
        'env': JSON.stringify(env)
      }
    }),
    new webpack.NoErrorsPlugin()
  ],

  standard: {
    parser: 'babel-eslint'
  },

  postcss: function () {
    return [postcssImport, customMedia, customProps, calc]
  }
}
