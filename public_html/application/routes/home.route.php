<?php
/**
 * @since       29.11.2015 16:53
 * @author      delphinpro delphinpro@gmail.ru
 * @copyright   copyright (C) 2015 delphinpro
 * @license     Licensed under the MIT license
 */

$app->get('/', function () use ($app) {
    $app->render('index.twig');
})->name('home');
