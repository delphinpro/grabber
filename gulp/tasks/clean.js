/**
 * Gulp-задача. Очистка статики.
 *
 * @since        02.04.2015 18:07
 * @author       delphinpro delphinpro@gmail.com
 * @copyright    copyright (C) 2015 delphinpro
 * @license      licensed under the MIT license
 */

var gulp = require('gulp');
var rmDir = require('rimraf');
var config = require('../config.js');

gulp.task('clean', function (cb) {
	console.log('Remove dir: ./'  +config.css.buildPath);
	rmDir(config.css.buildPath, cb);
});
