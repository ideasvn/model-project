<?php

namespace App\Http\Controllers\Api\Model;

use App\Profile;
use App\User;
use App\Http\Controllers\Api\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class ModelController extends ApiController
{
    protected $perPage;

    /**
     * get all Slides
     * fake data
     * */
    public function getSlides()
    {
        return response()->json([
            "data" => [
                [
                    "image" => "http://lorempixel.com/1170/293"
                ],
                [
                    "image" => "http://lorempixel.com/1170/293"
                ],
                [
                    "image" => "http://lorempixel.com/1170/293"
                ],
                [
                    "image" => "http://lorempixel.com/1170/293"
                ],
                [
                    "image" => "http://lorempixel.com/1170/293"
                ]
            ]
        ]);
    }

    /**
     * get profile
     *
     * @return {JSON} profiles
     * */
    public function index()
    {
        $params = \Request::all();

        $this->perPage = !empty($params['per_page']) ? $params['per_page'] : 12;

        return response()->json(User::with('profile', 'galleries')->paginate($this->perPage));
    }
}