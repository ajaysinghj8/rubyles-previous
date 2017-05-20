import * as express from 'express';
import path = require('path');
import config from '../webpack.config';
import open = require('open');

//import { webpack } from 'webpack';
//import webpack = require('webpack');
import * as webpack from 'webpack';

/* eslint-disable no-console */

const port = 3001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../app/index.html'));
});

app.listen(port, function(err: any) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
