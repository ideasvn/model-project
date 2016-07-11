<?php

namespace App\Http\Controllers\Api\Booking;

use App\Booking;
use App\Http\Controllers\Api\ApiController;
use Illuminate\Http\Request;

class BookingController extends ApiController
{
    public function __construct(Booking $model)
    {
        $this->model = $model;
    }

    public function store(Request $request)
    {
        //
        $data = $this->model;
        if ($request->has('idModel') && $request->idModel != '') {
            $data->model_id = $request->idModel;
        } else {
            return $this->response->array('Not isset id model', 200);
        }
        if ($request->has('startDate') && $request->startDate != '') {
            $startDate = $request->startDate;
        } else {
            return $this->response->array('Not isset start date', 200);
        }
        if ($request->has('endDate') && $request->endDate != '') {
            $endDate = $request->endDate;
        } else {
            return $this->response->array('Not isset end date', 200);
        }
        if ($request->has('startHours') && $request->startHours != '') {
            $startDate .= ' ' . $request->startHours;
        } else {
            $startDate .= ' 00';
        }
        if ($request->has('startMins') && $request->startMins != '') {
            $startDate .= ':' . $request->startMins . ':00';
        } else {
            $startDate .= ':00:00';
        }

        if ($request->has('endHours') && $request->endHours != '') {
            $endDate .= ' ' . $request->endHours;
        } else {
            $endDate .= ' 00';
        }
        if ($request->has('endMins') && $request->endMins != '') {
            $endDate .= ':' . $request->endMins . ':00';
        } else {
            $endDate .= ':00:00';
        }
        $data->start_time = date("Y-m-d H:i:s", strtotime($startDate));
        $data->end_time = date("Y-m-d H:i:s", strtotime($endDate));
        $data->status = 0;
        try {
            $data->save();
            return $this->response->array(['data' => $data, 'message' => 'Thêm lịch book thành công', 'status' => 200, 'success' => true]);
        } catch (QueryException $e) {
//            return response()->json(['message' => $e->getMessage()], 403);
            return $this->response->error($data, 400);
        }
    }

    public function show($id)
    {
        try {
            $data = $this->model->find($id);
            if (!empty($data)) {
                return $this->response->array($data, 200);
            }
        } catch (QueryException $e) {
            return $this->response->error('Not found', 404);
        }
    }

    public function listBooking(Request $request)
    {
        if($request->has('idModel') && $request->idModel != '')
        {
            $modelId=$request->idModel;
        }
        else{
            return $this->response->errorNotFound('Not isset model id');
        }
        $dk='model_id = ?';
        $value=array($modelId);
        $data=$this->model->getByAll($dk,$value)->toArray();
        if(!empty($data))
        {
            return $this->response->array($data,200);
        }
        else{
            return $this->response->array('Model is empty',200);
        }
    }

    public function checkDate(Request $request){
        if ($request->has('idModel')&&$request->idModel!='') {
            $user_id=$request->idModel;
        }
        else{
            return $this->response->array('Not isset id model',200);
        }
        if ($request->has('startDate')&&$request->startDate!='') {
            $startDate=$request->startDate;
        }
        else{
            return $this->response->array('Not isset start date',200);
        }
        if ($request->has('endDate')&&$request->endDate!='') {
            $endDate=$request->endDate;
        }
        else{
            return $this->response->array('Not isset end date',200);
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
            return $this->response->error('Chưa trùng lịch', 400);
        }
        else{
            return $this->response->array('Đã trùng lịch', 200);
        }
    }
}