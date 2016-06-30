<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Api\ApiController;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;
use Dingo\Api\Http\Request;

class AuthController extends ApiController {
    /**
     * Verify login by Password
     */

    public function verify($username, $password) {
        $credentials = [
            'email' => $username,
            'password' => $password
        ];
        $userData = Sentinel::authenticate($credentials);
        if($userData) {
            return $userData->id;
        }
        return false;
    }

    public function register(Request $request) {
        $user = [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => $request->password,
            'gender' => $request->gender,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'type' => $request->type,
            'location_id' => $request->location_id,
        ];

        $userData = Sentinel::registerAndActivate($user);
        dd($userData);
    }
}