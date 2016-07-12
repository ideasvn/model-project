<?php

namespace App\Http\Controllers\Api\Location;

use App\Gallery;
use App\Http\Controllers\Api\ApiController;
use App\Location;
use App\Profile;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;
use Dingo\Api\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class LocationController extends ApiController
{
    public function index() {
        $locations = Location::all();
        return $this->response->array(['data' => $locations]);
    }
}