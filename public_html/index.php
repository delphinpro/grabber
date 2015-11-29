<?php

require '../vendor/autoload.php';

use Slim\Slim;

error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', 'On');

class Config
{
    public static $removeLinkAlternate = true;
    public static $removeLinkCanonical = true;
    public static $cleanMetaDescription = true;
    public static $removeMetaProperty = true;

    public static $cssDirectory = '/design/css';
    public static $jsDirectory = '/design/js';
    public static $imagesDirectory = '/design/images';
}

function getRemoteFile($url, $referrer = null)
{
    if (is_null($referrer)) {
        $referrer = parse_url($url, PHP_URL_SCHEME) . '::/' . parse_url($url, PHP_URL_HOST);
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FAILONERROR, true);
    curl_setopt($ch, CURLOPT_COOKIEFILE, '');
    curl_setopt($ch, CURLOPT_REFERER, $referrer);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:26.0) Gecko/20100101 Firefox/26.0');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}

$app = new Slim([
    'debug'          => true,
    'templates.path' => __DIR__ . DIRECTORY_SEPARATOR . 'application' . DIRECTORY_SEPARATOR . 'templates',
    'view'           => new \Slim\Views\Twig(),
]);

/** @var \Slim\Views\Twig $view */
$view = $app->view();

$view->parserOptions = [
    'cache' => __DIR__ . DIRECTORY_SEPARATOR . 'application' . DIRECTORY_SEPARATOR . 'cache',
    'debug' => true,
];

$routes = glob(__DIR__ . DIRECTORY_SEPARATOR . 'application' . DIRECTORY_SEPARATOR . 'routes' . DIRECTORY_SEPARATOR . '*.php');
foreach ($routes as $route) {
    include $route;
}

$app->run();
