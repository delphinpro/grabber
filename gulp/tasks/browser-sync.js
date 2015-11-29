/**
 * Gulp-task. LiveReload.
 *
 * @since        30.06.2015 12:51
 * @author       delphinpro delphinpro@gmail.com
 * @copyright    copyright (C) 2015 delphinpro
 * @license      licensed under the MIT license
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config.js');

gulp.task('browser-sync', function () {

	browserSync.init(config.browserSyncOpts);

	gulp.watch([
		'public_html/**'
	]).on('change', function () {
		browserSync.reload();
	});
});
