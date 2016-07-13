<?php

namespace App\Modules\Users\Models;

use App\Modules\Booking\Models\Booking;
use Illuminate\Database\Eloquent\Model;
use App\Modules\Profile\Models\Profile;
class Users extends Model
{
    protected $table='users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id','name','email','address','phone','avatar','round_brest','waist_size','round_hip','dress_size','shore_size'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
    public function getByAll($condition,$value,$field_order,$order, $start, $limit)
    {
        return Users::select('id', 'email', 'first_name as firstName', 'last_name as lastName','gender', 'phone', 'birthday')->take($limit)->skip($start)->whereRaw($condition, $value)->orderBy($field_order,$order)->get()->toArray();
    }
    public function getById($id)
    {
        return Users::select('id', 'email', 'first_name as firstName', 'last_name as lastName','gender', 'phone', 'birthday')->find($id);
    }
    public function profile($id) {
        return \App\Modules\Profile\Models\Profile::select('id', 'user_id as userId', 'height', 'round_breast as roundBreast','waist_size as waistSize', 'round_hip as roundHip', 'dress_size as dressSize','shore_size as shoreSize','hair_color as hairColor','eye_color as eyeColor')->find($id);
    }
    public function image($id) {
        return \App\Modules\Gallery\Models\Gallery::select('id','user_id as userId','images')->where('user_id',$id)->get();
    }
    public function booking($condition,$value) {
        return \App\Modules\Booking\Models\Booking::select('id')->whereRaw($condition, $value)->count();
    }


}
