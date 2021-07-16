<?php

namespace App\Http\Controllers\API;

use App\Models\Partner;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class PartnerApiController extends Controller
{
    private $status = 200;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Partner::all();
        $partners = Partner::all();
        if(count( $partners)>0){
            return response()->json(["status"=>$this->status,"success"=>true,"count"=>count( $partners),"data"=> $partners]);
        }else{
            return response()->json(["status"=>"failed","success"=>false,"message"=>"Whoopa! no record found"]);
            
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validation = Validator::make($request->all(),
        [
            "name"  => "required",
            "info" => "required",
            "link"  => "required|date",
            "top" => "required",
            'image'=>'required'
        ]
    );
        $name='';
            if($request->hasfile('image'))
        {
            $this->validate($request,
            [
            //Kiểm tra đúng file đuôi .jpg,.jpeg,.png.gif và dung lượng không quá 2M
                'image' => 'mimes:jpg,jpeg,png,gif|max:2048',
            ],
            [
            //Tùy chỉnh hiển thị thông báo không thõa điều kiện
                'image.mimes' => 'Chỉ chấp nhận hình thẻ với đuôi .jpg .jpeg .png .gif',
                'image.max' => 'Hình thẻ giới hạn dung lượng không quá 2M',
            ]
        );
            $file = $request->file('image');
            $name=time().'_'.$file->getClientOriginalName();
            $destinationPath=public_path('images'); //project\public\images\news, //public_path(): trả về đường dẫn tới thư mục public
            $file->move($destinationPath, $name); //lưu hình ảnh vào thư mục public/images/news
        }
         //nếu dùng $this->validate() thì lấy về lỗi: $errors = $vali
            //kiểm tra file tồn tại
            $partner=new Partner();
            $partner->name=$request->input('name');
            $partner->info=$request->input('info');
            $partner->link=$request->input('link');
            $partner->top=$request->input('top');
            $partner->image=$name;
            $partner->save();
        if($partner) {
                return response()->json(["status" => $this->status, "data" => $partner]);
            }
        else {
                return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show( Partner $id)
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
    public function update(Request $request,Partner $id)
    {
        $id->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(   $id)
    {
        $partner=Partner::find($id);
        $partner->delete();
        return redirect()->route('/partner')->with('success','Removed a partner');
    }
}
