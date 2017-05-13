const env = process.env.NODE_ENV || 'development';

require('babel-register')({
  sourceMaps: env === 'development'
});
require('./server/app');
