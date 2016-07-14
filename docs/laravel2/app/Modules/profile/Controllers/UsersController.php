<?php
/**
 * Created by PhpStorm.
 * User: tungtv
 * Date: 7/1/2016
 * Time: 9:37 AM
 */
namespace App\Modules\Users\Controllers;
use DB;
use Illuminate\Http\Request;
//use App\Http\Controllers\Controller;
use App\Modules\Controller;
use App\Modules\Users\Models\Users;

class UsersController extends Controller{
    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct(Users $model)
    {
        $this->model = $model;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $dk='id > ? and name = ?';
        $value=array('0','fsdf');
        $field_oder='id';
        $order='DESC';
        $prevPageUrl=$nextPageUrl = $this->_returnLinkServer();
        return $this->_returnGetByAll('Model',$this->model,$request,$dk,$value,$field_oder, $order,$nextPageUrl,$prevPageUrl);
//        $data = $this->model->getByAll($dk,$value,'id','asc');
//        $arr_response=array();
//        if(!empty($data))
//        {
//            array_push($arr_response,$data);
//            return $this->_return($arr_response,'Successfully',true,200);
//        }
//        else{
//            $this->_return('',true,'Model is empty',200);
//        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $data=$this->model->find($id);
            if(!empty($data))
            {
//                $sub_data=$data->images()->get()->toArray();
//                if(!empty($sub_data))
//                {
//                    $image=array();
//                    foreach($sub_data as $model_sub)
//                    {
//                        array_push($image,array(
//                            'id'=>$model_sub['id'],
//                            'value'=>'img/model/'.$model_sub['image']
//                        ));
//                    }
//                    $data=array_merge($data->toArray(),array('image'=>$image));
//
//                }
//                else{
//                    $data=array_merge($data->toArray(),array('image'=>''));
//                }
            }
            return $this->_return($data,'Successfully',true,200);
        } catch (QueryException $e) {
            return response()->json(['message' => 'Not found'], 404);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}