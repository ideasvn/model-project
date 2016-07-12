<?php

namespace App\Modules\Gallery\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $table='galleries';
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
//    public function getByAll($condition,$value,$field_order,$order, $start, $limit)
//    {
//        return Users::select('id', 'name', 'email', 'address', 'phone', 'avatar', 'round_brest as roundBrest')->take($limit)->skip($start)->whereRaw($condition, $value)->orderBy($field_order,$order)->get()->toArray();
//    }
//    public function images () {
//        return $this->hasMany('App\Modules\ModelImage\Models\ModelImage','model_id');
//    }


}
