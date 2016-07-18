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
    $api->group(['namespace' => 'App\Http\Controllers\Api'], function ($api) {
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

        $api->post('register', 'Auth\AuthController@register');
        $api->post('update/{id}', 'Auth\AuthController@update');
        $api->post('user-info', 'Auth\AuthController@userInfor');
        $api->get('locations', 'Location\LocationController@index');
        /**
         * tungtv api
         */
        $api->resource('booking', 'Booking\BookingController');
        $api->post('booking-list', 'Booking\BookingController@listBooking');
        $api->post('check-date', 'Booking\BookingController@checkDate');

        $api->get('users/{id}', 'Model\ModelController@show');

//        Route::get('model', [
//            'as' => 'model', 'uses' => 'ModelNudeController@index'
//        ]);
//        Route::resource('model', 'ModelNudeController');



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