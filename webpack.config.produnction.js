const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./index.js'],
  output: {
      path: __dirname + "/dist",
      publicPath: "/dist",
      filename: "index.js"
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise'
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [ 'es2015', 'react', 'stage-0']
      }
    }, {
      test: require.resolve("react"),
      loader: "expose?React"
    }]
  }
}
