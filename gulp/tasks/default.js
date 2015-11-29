/**
 * Gulp-задача выполняемая по умолчанию.
 *
 * @since        30.06.2015 9:33
 * @author       delphinpro delphinpro@gmail.com
 * @copyright    copyright (C) 2015 delphinpro
 * @license      licensed under the MIT license
 */

var gulp = require('gulp');
var config = require('../config.js');

gulp.task('default', ['build', 'browser-sync'], function () {

	gulp.watch(config.css.srcPathWatch, ['build-css']);
	gulp.watch(config.js.srcPathWatch, ['build-js']);
	gulp.watch(config.images.srcPathWatch, ['build-images']);
	//gulp.watch(config.fonts.srcPathWatch, ['build-fonts']);

});

gulp.task('build', config.buildTaskList);
