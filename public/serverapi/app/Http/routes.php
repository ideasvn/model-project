<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

/**
 * Backend Routes
 */

Route::group(['prefix' => 'admin', 'namespace' => 'Backend'], function () {
    Route::get('/', function () {
        return view('welcome');
    });

    Route::get('/login', 'Auth\AuthController@login');

    Route::group(['middleware' => 'auth'], function () {

    });
});

/**
 * API Routes
 */

$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function ($api) {
    $api->group(['namespace' => 'Api'], function ($api) {
        /**
         * No-need login
         */
        $api->get('/', function () {
            return 'xxx';
        });

        $api->post('login', function () {
            return Response::json(Authorizer::issueAccessToken());
        });

        $api->post('/fake/account', function () {
            $credentials = [
                'email' => 'ideasvn@hotmail.com',
                'password' => '12345678'
            ];

            \Cartalyst\Sentinel\Laravel\Facades\Sentinel::registerAndActivate($credentials);

        });

        /**
         * Group need login
         */

        $api->group(['middleware' => 'api.auth'], function ($api) {
            $api->get('/fake/time', function () {
                return 'xxx time';
            });
        });


    });


    /**
     * Group route model
     *
     * */
    $api->group(['namespace' => 'App\Http\Controllers\Api\Model'], function ($api) {
        $api->get('slides', 'ModelController@getSlides');
        $api->get('models', 'ModelController@index');
    });

});