<?php
/**
 * Created by PhpStorm.
 * User: tungtv
 * Date: 7/1/2016
 * Time: 9:37 AM
 */
namespace App\Modules\Booking\Controllers;
use DB;
use Illuminate\Http\Request;
//use App\Http\Controllers\Controller;
use App\Modules\Controller;
use App\Modules\Booking\Models\Booking;

class BookingController extends Controller{
    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct(Booking $model)
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
        $data       = $this->model;
        if ($request->has('idModel')&&$request->idModel!='') {
            $data->model_id=$request->idModel;
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
        $data->start_time=date("Y-m-d H:i:s",strtotime($startDate));
        $data->end_time=date("Y-m-d H:i:s",strtotime($endDate));
        $data->status=0;
        try {
            $data->save();
            return $this->_return($data,'Successfully',true,200);
        } catch (QueryException $e) {
//            return response()->json(['message' => $e->getMessage()], 403);
            return $this->_return($data,$e->getMessage(),false,200);
        }
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
    public function listBooking(Request $request)
    {
        if($request->has('modelId')&&$request->modelId!='')
        {
            $modelId=$request->modelId;
        }
        else{
            return $this->_return('','Not isset model id',false,200);
        }
        $dk='model_id = ?';
        $value=array($modelId);
        $data=$this->model->getByAll($dk,$value)->toArray();
        if(!empty($data))
        {
            return $this->_return($data,'Successfully',false,200);
        }
        else{
            return $this->_return('','Model is empty',true,200);
        }
    }
}