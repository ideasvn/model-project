<?php
/**
 * Created by PhpStorm.
 * User: tungtv
 * Date: 7/1/2016
 * Time: 9:23 AM
 */
$namespace = 'App\Modules\Users\Controllers';
Route::group(
    ['module'=>'Users', 'namespace' => $namespace],
    function() {
        Route::resource('users', 'UsersController');
        Route::POST('check-date', 'UsersController@checkDate');
    }
);