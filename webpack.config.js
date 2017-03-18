import webpack from 'webpack';
import path from 'path';

export default {
  entry: "./app/application.js",
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, "app"), loaders: ['babel-loader']},
    ]
  }
};
