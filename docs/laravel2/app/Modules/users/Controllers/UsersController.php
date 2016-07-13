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
use App\Modules\Controller;
use App\Modules\Users\Models\Users;
use Illuminate\Support\Facades\Input;

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
            $arr_push=array();
            $data=$this->model->getById($id);
            if(!empty($data))
            {
                $data=array_merge($data->toArray(),array('image'=>''));
                $data_profile=$this->model->profile($id)->toArray();
                if(!empty($data_profile))
                {
                    unset($data_profile['id']);
                    $data=array_merge($data,$data_profile);
                }
                $data_image=$this->model->image($id)->toArray();
                if(!empty($data_image))
                {
                    $image=array();
                    foreach($data_image as $model_sub)
                    {
                        array_push($image,array(
                            'id'=>$model_sub['id'],
                            'value'=>'img/model/'.$model_sub['images']
                        ));
                    }
                    $data=array_merge($data,array('image'=>$image));
                }
                array_push($arr_push,$data);
                return $this->_return($arr_push,'Successfully',true,200);
            }
            else{
                return $this->_return('','Model is empty',true,200);
            }

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
    public function checkDate(Request $request){
        if ($request->has('idModel')&&$request->idModel!='') {
           $user_id=$request->idModel;
        }
        else{
            return $this->_return('','Not isset id model',false,200);
        }
        if ($request->has('startDate')&&$request->startDate!='') {
            $startDate=$request->startDate;
        }
        else{
            return $this->_return('','Not isset start date',false,200);
        }
        if ($request->has('endDate')&&$request->endDate!='') {
            $endDate=$request->endDate;
        }
        else{
            return $this->_return('','Not isset end date',false,200);
        }
        if ($request->has('startHours')&&$request->startHours!='') {
            $startDate.=' '.$request->startHours;
        }
        else{
            $startDate.=' 00';
        }
        if ($request->has('startMins')&&$request->startMins!='') {
            $startDate.=':'.$request->startMins.':00';
        }
        else{
            $startDate.=':00:00';
        }

        if ($request->has('endHours')&&$request->endHours!='') {
            $endDate.=' '.$request->endHours;
        }
        else{
            $endDate.=' 00';
        }
        if ($request->has('endMins')&&$request->endMins!='') {
            $endDate.=':'.$request->endMins.':00';
        }
        else{
            $endDate.=':00:00';
        }
         $startDate=date("Y-m-d H:i:s",strtotime($startDate));
         $endDate=date("Y-m-d H:i:s",strtotime($endDate));
        $dk='model_id = ? and start_time <= ? and end_time >= ?';
        $value=array($user_id,$startDate,$endDate);
        if($this->model->booking($dk,$value)==0)
        {
            return $this->_return('','Chưa trùng lịch',false,200);
        }
        else{
            return $this->_return('','Đã trùng lịch',true,200);
        }
    }
}