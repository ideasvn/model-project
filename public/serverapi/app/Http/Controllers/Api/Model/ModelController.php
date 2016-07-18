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
                    "image" => "img/slide/banner_1.jpg"
                ],
                [
                    "image" => "img/slide/banner_2.jpg"
                ],
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
        $gender = isset($params->gender) ? $params->gender : NULL;

        $this->perPage = !empty($params['per_page']) ? $params['per_page'] : 12;

        return response()->json(User::where(function ($query) use ($gender) {
            $query->where('type', '<>', 0);
            if (!empty($gender)):
                $query->where('gender', '=', $gender);
            endif;
        })->orderBy('created_at', 'DESC')->with('profile', 'galleries')->paginate($this->perPage));
    }

    public function show($id)
    {
        $users = User::findOrFail($id)->load('profile', 'galleries');
        return $this->response->array(['data' => $users]);
    }
}