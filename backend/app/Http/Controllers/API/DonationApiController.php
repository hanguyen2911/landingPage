<?php

namespace App\Http\Controllers\API;

use App\Models\Donation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DonationApiController extends Controller
{

    /**
     * Nhan notifyUrl tu momo server de xac nhan
     *
     * @return \Illuminate\Http\Response
     * @param \Illuminate\Http\Request  $request from momo API NHA
     *
     */
    public function confirm(Request $request)
    {



        $data_to_hash = "accessKey=" . $request->accessKey . "&amount=" . $request->amount . "&message=" . $request->message . "&momoTransId=" . $request->momoTransId
            . "&partnerCode=" . $request->partnerCode . "&partnerRefId=" . $request->partnerRefId . "&partnerTransId=" . $request->partnerTransId
            . "&responseTime=" . $request->responseTime . "&status=" . $request->status . "&storeId=" . $request->storeId . "&transType=momo_wallet";

        if (hash_hmac('sha256', $data_to_hash, 'PPuDXq1KowPT1ftR8DvlQTHhC03aul17') != $request->signature) {
            $message = "Chữ kí không trùng";
            $status = -1;
            $data_to_hash_fail = "amount=" . $request->amount . "&message=" . $message . "&momoTransId=" . $request->momoTransId . "&partnerRefId=" . $request->partnerRefId . "&status=" . $status;
            $data = [
                "status" => $status,
                "message" => $message,
                "amount" => $request->amount,
                "partnerRefId" => $request->partnerRefId,
                "momoTransId" => $request->momoTransId,
                "signature" => hash_hmac('sha256', $data_to_hash_fail, 'PPuDXq1KowPT1ftR8DvlQTHhC03aul17')
            ];
            return $data;
        } else {
            $message = "Thành công nha";
            $status = 0;
            $data_to_hash_success = "amount=" . $request->amount . "&message=" . $message . "&momoTransId=" . $request->momoTransId . "&partnerRefId=" . $request->partnerRefId . "&status=" . $status;
            $data = [
                "status" => $status,
                "message" => $message,
                "amount" => $request->amount,
                "partnerRefId" => $request->partnerRefId,
                "momoTransId" => $request->momoTransId,
                "signature" => hash_hmac('sha256', $data_to_hash_success, 'PPuDXq1KowPT1ftR8DvlQTHhC03aul17')
            ];
            Donation::create([
                "name" => "Test",
                "info" => "Test",
                "link" => "Test",
                "amount" => $request->amount,
                "donation_code" => "Test",
            ]);
            return $data;
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        return Donation::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Donation::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Donation $id)
    {
        return $id;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donation $id)
    {
        $id->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donation $id)
    {
        $id->delete();
    }
}
