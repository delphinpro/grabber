/**
 * Gulp-задача. Сборка шрифтов.
 *
 * @since        02.04.2015 18:16
 * @author       delphinpro delphinpro@gmail.com
 * @copyright    copyright (C) 2015 delphinpro
 * @license      licensed under the MIT license
 */

var gulp = require('gulp');
var cache = require('gulp-check-hash');
var config = require('../config.js');

gulp.task('build-fonts', function () {

	gulp.src(config.fonts.srcFilters)
		.pipe(cache({
			src      : config.fonts.srcPath,
			build    : config.fonts.buildPath
		}))
		.pipe(gulp.dest(config.fonts.buildPath));

	gulp.src(['bower_components/font-awesome/fonts/*.*'])
		.pipe(cache({
			src      : 'bower_components/font-awesome/fonts/',
			build    : config.fonts.buildPath + 'awesome/'
		}))
		.pipe(gulp.dest(config.fonts.buildPath + 'awesome/'));

});
