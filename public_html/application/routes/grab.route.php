<?php
/**
 * @since       29.11.2015 16:54
 * @author      delphinpro delphinpro@gmail.ru
 * @copyright   copyright (C) 2015 delphinpro
 * @license     Licensed under the MIT license
 */

$app->post('/grab', function () use ($app) {
    if ($app->request->isAjax()) {
        sleep(1);
    }

})->name('grab');
