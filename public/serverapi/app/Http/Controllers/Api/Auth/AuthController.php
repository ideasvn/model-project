<?php

namespace App\Http\Controllers\Api\Auth;

use App\Gallery;
use App\Http\Controllers\Api\ApiController;
use App\Profile;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;
use Dingo\Api\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class AuthController extends ApiController
{
    /**
     * Verify login by Password
     */

    public function verify($username, $password)
    {
        $credentials = [
            'email' => $username,
            'password' => $password
        ];
        $userData = Sentinel::authenticate($credentials);
        if ($userData) {
            return $userData->id;
        }
        return false;
    }

    public function register(Request $request)
    {
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

        $profile = [
            'height' => $request->height,
            'round_breast' => $request->round_breast,
            'waist_size' => $request->waist_size,
            'round_hip' => $request->round_hip,
            'dress_size' => $request->dress_size,
            'shore_size' => $request->shore_size,
            'hair_color' => $request->hair_color,
            'eye_color' => $request->eye_color,
        ];
        $userData = Sentinel::registerAndActivate($user);
        if (count($userData)):
            if (array_filter($profile)):
                $profile['user_id'] = $userData->id;
                $profileData = Profile::create($profile);
                $userName = str_slug($userData->first_name . $userData->last_name . $userData->id);
                if ($request->hasFile('gallery')):
                    $files = $request->file('gallery');
                    foreach ($files as $key => $file):
                        $fileExt = $file->getClientOriginalExtension();
                        $fileName = $userName . '-' . $key . '.' . $fileExt;
                        $isDone = Storage::disk('public')->put($fileName, file_get_contents($file));
                        if ($isDone):
                            Gallery::create([
                                'user_id' => $userData->id,
                                'images' => '/serverapi/public/uploads/' . $fileName
                            ]);
                        endif;
                    endforeach;
                endif;
            endif;
        endif;
        return $this->response->array(['data' => $userData, 'success' => true]);
    }
}