<?php

namespace App\Modules\Booking\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table='booking';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
//    protected $fillable = ['id','name','email','address','phone','avatar','round_brest','waist_size','round_hip','dress_size','shore_size'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
    public function getByAll($condition,$value)
    {
        return Booking::select('id', 'model_id as modelId', 'agent_id as agentId', 'start_time as startTime', 'end_time as endTime', 'status')->whereRaw($condition, $value)->get();
    }
//    public function images () {
//        return $this->hasMany('App\Modules\ModelImage\Models\ModelImage','model_id');
//    }


}
