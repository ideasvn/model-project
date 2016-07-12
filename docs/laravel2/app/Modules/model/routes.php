<?php
/**
 * Created by PhpStorm.
 * User: tungtv
 * Date: 7/1/2016
 * Time: 9:23 AM
 */
$namespace = 'App\Modules\Model\Controllers';
Route::group(
    ['module'=>'Model', 'namespace' => $namespace],
    function() {
        Route::resource('model', 'ModelController');
    }
);