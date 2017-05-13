import express from 'express';
import { createServer } from 'http';
import { join } from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import router from './routes/router';
import webpackConfig from '../__config__/webpack.config';

const app = express();

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  app.use(webpackMiddleware(webpack(webpackConfig)));
}
app.use(express.static(join(__dirname, '../public')));

app.use(router);

const port = process.env.PORT || 3000;
createServer(app).listen(port, () => console.info(`Now listening on ${port}`));
