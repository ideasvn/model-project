<?php
/**
 * Created by PhpStorm.
 * User: Hoangdv
 * Date: 6/25/2016
 * Time: 10:05 AM
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Schema\Blueprint;

use App\Modules\Helper\Facade\Utility;

class Profile extends Model
{
    protected $table = 'profiles';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'height', 'round_breast', 'waist_size', 'round_hip', 'dress_size', 'shore_size', 'hair_color', 'eye_color'
    ];

    /**
     * Relationship User
     *
     **/
    public function user ()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
}