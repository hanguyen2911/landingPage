<?php

namespace App\Http\Controllers\API;
use App\Models\News;
use GuzzleHttp\Psr7\Message;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class NewsApiController extends Controller
{
    private $status = 200;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $news = News::all();
        // if(count($news)>0){
        //     return response()->json(["status"=>$this->status,"success"=>true,"count"=>count($news),"data"=>$news]);
        // }else{
        //     return response()->json(["status"=>"failed","success"=>false,"message"=>"Whoopa! no record found"]);  
        // }
        return News::all();
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
            'time' =>  "required|date",
            'title' => 'required|unique:posts|max:255',
            'content' => 'request',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ],
        [
            //Tùy chỉnh hiển thị thông báo
            'title.request' => 'Bạn chưa nhập thời gian',
            'title.required' => 'Bạn chưa nhập tiêu đề!',
            'content.required' => 'Bạn chưa nhập nội dung!',
            'image.required' => 'Bạn chưa thêm hình ảnh!',
        ]
    );
         //nếu dùng $this->validate() thì lấy về lỗi: $errors = $vali
        $name='';
        
        if($request->hasfile('image'))
        {
                     //Hàm kiểm tra dữ liệu
         $this->validate($request, 
         [
         //Kiểm tra đúng file đuôi .jpg,.jpeg,.png.gif và dung lượng không quá 2M
             'image_file' => 'mimes:jpg,jpeg,png,gif|max:2048',
         ],          
         [
         //Tùy chỉnh hiển thị thông báo không thõa điều kiện
             'image_file.mimes' => 'Chỉ chấp nhận hình thẻ với đuôi .jpg .jpeg .png .gif',
             'image_file.max' => 'Hình thẻ giới hạn dung lượng không quá 2M',
         ]
        );
        if ($validation->fails()){
            $response=array('status'=>'error','errors'=>$validation->errors()->toArray()); 
            return response()->json($response);
        }
            $file = $request->file('image');
            $name=time().'_'.$file->getClientOriginalName();
            $destinationPath=public_path('images'); //project\public\images\cars, //public_path(): trả về đường dẫn tới thư mục public
            $file->move($destinationPath, $name); //lưu hình ảnh vào thư mục public/images/cars
        } 
      
        $new=new News();
        $new->time=$request->input('time');
        $new->title=$request->input('title');
        $new->content=$request->input('content');
        $new->image=$name;
        $new->save();
        if($new) {            
                return response()->json(["status" => $this->status, "success" => true, "message" => "car record created successfully", "data" => $new]);
            }    
        else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! failed to create."]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(News $id)
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
    public function update(Request $request, News $id)
    {
        $id->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    $news = News::find($id);
    $news->delete();
    return response()->json([$news,
         'message' => 'expense deleted'
    ]);
    }
}
