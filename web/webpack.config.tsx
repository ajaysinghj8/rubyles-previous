//import webpack from 'webpack';
import * as webpack from 'webpack';

export default {
  entry: "./app/index.tsx",
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "bundle.js"
  },
  devtool: 'source-map',
 resolve: {
   extensions: [".ts", ".tsx", ".js", ".json"]
 },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
    ]
  }
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
