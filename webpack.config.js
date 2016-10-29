const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./index.js'],
  output: {
      path: __dirname + "/dist",
      publicPath: "/dist",
      filename: "index.js"
  },

  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],

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
  },

  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    hot: true,
    progress: true,
    stats: 'errors-only',
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  },

  eslint: {
    configFile: '.eslintrc'
  }
}
