/**
 * Gulpfile
 *
 * @since        18.02.2015 11:30
 * @author       delphinpro delphinpro@gmail.ru
 * @copyright    copyright (C) 2015 delphinpro
 * @license      licensed under the MIT license
 */

'use strict';

var cache = require('gulp-check-hash');
cache.root = __dirname;

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
