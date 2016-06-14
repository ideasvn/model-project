<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Api\ApiController;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;

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
}