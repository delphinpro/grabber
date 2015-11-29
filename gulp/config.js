/**
 * Конфигурация gulp-задач.
 *
 * @since        30.06.2015 9:21
 * @author       delphinpro delphinpro@gmail.com
 * @copyright    copyright (C) 2015 delphinpro
 * @license      licensed under the MIT license
 */

var pkg = require('../package.json');

/* Локальный домен, на котором вы запускаете сайт */

var _localDomain = 'grabber.project';

/* Ваши любымые браузеры для разработки */

var _browsers = ['firefox'];

/* Настройка путей */

var _src = 'source/';
var _build = 'public_html/';

var _js = 'js/';
var _css = 'css/';
var _img = 'images/';
var _fonts = 'fonts/';
var _html = 'html/';

var _buildCss = _build + 'design/css/';
var _buildJs = _build + 'design/js/';
var _buildImages = _build + 'design/images/';
var _buildFonts = _build + 'design/fonts/';
var _buildHtml = _build + '';


module.exports = {

    // Список задач, выполняемых при билде
    buildTaskList  : ['build-js', 'build-css', 'build-images'/*, 'build-fonts'*/],

    // Опции для BrowserSync http://www.browsersync.io/docs/options/
    browserSyncOpts: {
        browser  : _browsers, // Браузер(ы), в котором будет открыта страница
        notify   : false,
        startPath: '/',
        proxy    : _localDomain // Локальный домен, на котором у вас крутится сайт
    },

    docHeader: '/*! ' + pkg.name + ' v' + pkg.version + ' */\n',

    sourceRoot: _src,
    buildRoot: _build,

    css: {
        srcPath         : _src + _css,
        srcPathWatch    : [_src + _css + '**/*.scss'],
        srcFilters      : [
            _src + _css + '**/*.scss', // Все scss-файлы
            '!' + _src + _css + '**/_*.scss' // Исключая файлы с именами, начинающимися с подчеркивания
        ],
        buildPath       : _buildCss,
        autoprefixerOpts: {
            // Какие префиксы будем ставить.
            // Для браузеров, имеющих долю более 1%
            // И для последних двух версий браузеров.
            // Информация берется с сайта caniuse.com
            browsers: ['> 1%', 'last 2 versions']
        }
    },

    js: {
        srcPath     : _src + _js,
        srcPathWatch: [_src + _js + '**/*.js'],
        srcFilters  : [_src + _js + '*.js'], // Все js-файлы
        buildPath   : _buildJs
    },

    images: {
        srcPath      : _src + _img,
        srcPathWatch : [_src + _img + '**/*.*'],
        srcFilters   : [
            _src + _img + '**/*.png',
            _src + _img + '**/*.jpg',
            _src + _img + '**/*.gif'
        ],
        srcFiltersSVG: [
            _src + _img + '**/*.svg'
        ],
        buildPath    : _buildImages
    },

    fonts: {
        srcPath     : _src + _fonts,
        srcPathWatch: [_src + _fonts + '**/*.*'],
        srcFilters  : [_src + _fonts + '**/*.*'],
        buildPath   : _buildFonts
    },

    html: {
        srcPath     : _src + _html,
        srcPathWatch: [_src + _html + '**/*.html'],
        srcFilters  : [_src + _html + '**/*.html', '!' + _src + _html + '**/_*.html'],
        buildPath   : _buildHtml
    },

    twig: {
        srcPath     : _src + _html,
        srcPathWatch: [_src + _html + '**/*.twig'],
        srcFilters  : [_src + _html + '*.twig'],
        buildPath   : _buildHtml
    }

};
