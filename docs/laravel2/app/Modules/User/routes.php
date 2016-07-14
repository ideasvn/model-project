<?php
/**
 * Created by PhpStorm.
 * User: tungtv
 * Date: 7/1/2016
 * Time: 9:23 AM
 */
$namespace = 'App\Modules\User\Controllers';
Route::group(
    ['module'=>'User', 'namespace' => $namespace],
    function() {
//        Route::get('admin/user', [
//            # middle here
//            'as' => 'index',
//            'uses' => 'UserController@index'
//        ]);
        Route::resource('user', 'UserController');
    }
);