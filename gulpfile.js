const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const nodemon = require('gulp-nodemon');

const webpackConfig = require('./__config__/webpack.config');

gulp.task('webpack:watch', () => {
  webpack(Object.assign({ watch: true }, webpackConfig), (err, stats) => {
    if (err) {
      throw new gutil.PluginError('[webpack]:', err);
    }
    gutil.log(stats.toString());
  });
});

gulp.task('serve', () => {
  nodemon({
    script: 'index.js'
  });
});

gulp.task('debug', ['webpack:watch', 'serve']);
