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

class Gallery extends Model
{
    protected $table = 'galleries';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'images'
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