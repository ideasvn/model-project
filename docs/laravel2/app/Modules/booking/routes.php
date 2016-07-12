<?php
/**
 * Created by PhpStorm.
 * User: tungtv
 * Date: 7/1/2016
 * Time: 9:23 AM
 */
$namespace = 'App\Modules\Booking\Controllers';
Route::group(
    ['module'=>'Booking', 'namespace' => $namespace],
    function() {
        Route::resource('booking', 'BookingController');
        Route::POST('booking-list', 'BookingController@listBooking');
    }
);