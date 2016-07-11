<?php

namespace App;

use Cartalyst\Sentinel\Users\EloquentUser;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends EloquentUser
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'permissions', 'first_name', 'last_name', 'gender', 'phone', 'birthday', 'location_id', 'type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Relationship Profile
     * The User hasOne Profile
     *
     * */
    public function profile ()
    {
        return $this->hasOne('App\Profile', 'user_id', 'id');
    }

    /**
     * Relationship Gallery
     * The User hasMany Gallery
     *
     * */
    public function galleries ()
    {
        return $this->hasMany('App\Gallery', 'user_id', 'id');
    }
}
