import React, { Component } from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter, Button, FormGroup, Label, Input,Span} from 'reactstrap';
class AddNews extends Component {
    constructor(props){
		super(props);
		//this.handleAddSubmit=this.handleAddSubmit.bind(this);
		this.state={
			file:null,
			image:'',
			name:'',
			info:'',
			link:'',
            top:'',
            errors:{
                image:[''],
                name:[''],
                info:[''],
                link:[''],
                top:['']
            },
		}
	}

	onRedirect=()=>{
		this.setState({file:null,
			image:'',
			name:'',
			info:'',
            link:'',
			top:'',});
		this.props.getCars();
	}

	handleAddSubmit=(e)=>{
		e.preventDefault();
		const fileInput=document.querySelector("#fileupload");
		const formData=new FormData();
		console.log(fileInput);
		console.log(fileInput.files[0]);
		formData.append('image',fileInput.files[0]);
		formData.append('name',this.state.name);
		formData.append('info',this.state.info);
		formData.append('link',this.state.link);
		formData.append('top',this.state.top);
		fetch('http://localhost:8000/api/partners', {
        method: 'POST',
        body: formData,
        
      })
      .then(res => { return res.json() }) //ko có return thì kết quả data là undefined
      .then(data => {
        if (data.status === "error") {
            this.setState({
            status:data.status,
            errors: data.errors,
            });

          }else{
          this.props.handleAddSubmit(data.data);//truyền sang cho cha là carList.js để cập nhật lại list car ra trình duyệt
          console.log(data.data);
          this.props.toogleAddModal();
          this.onRedirect();
          this.props.onCloseFormAdd();
          return data;   }//hết else
      })//sau khi nhấn nút submit trên form Add Car thì trả về data, bên phía hàm handleAddSubmit() bên cha là carList.js sẽ nhận lại 
  
	}

	onChangeName=(e)=>{
		this.setState({name:e.target.value});
	}

	onChangeImage=(e)=>{
		this.setState({file:URL.createObjectURL(e.target.files[0])})
	}

	onChangeInfor=(e)=>{
		this.setState({info:e.target.value});
	}

	onChangeLink=(e)=>{
		this.setState({link:e.target.value});
	}

	onChangeTop=(e)=>{
		this.setState({top:e.target.value})
	}

    render() {
        return (
            <div className=" body bg-theme bg-theme1">
                <div id="wrapper">
                    <div className="clearfix" />
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="card">
                                <div className="card-body text-body">
                                    <h4 className="text-body">Add Recent News</h4>
                                    <div className="container">
                                        <form action method="POST" onSubmit={this.handleAddSubmit} encType="multipart/form-data">
                                            <div className="form-group">
                                                <label htmlFor="time" className="text-body">Name :</label>
                                                <input type="text" className="form-control text-body" name="name" onChange = {this.onChangeName} placeholder="Name"  required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="image" className="text-body">Image :</label>
                                                <input type="file" className="form-control text-body" name="image" onChange = {this.onChangeImage}  placeholder="Image" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title" className="text-body">Information : </label>
                                                <input type="text" className="form-control text-body" name="info" onchange = {this.onChangeInfor}  placeholder="Title" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="content" className="text-body">Link : </label>
                                                <input type="text" class="form-control text-body" name="link" onChange = {this.onChangeLink} placeholder="Content"  required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="content" className="text-body">Top : </label>
                                                <input type="text" className="form-control text-body" name="top" onChange = {this.onChangeTop} placeholder="Content"  required />
                                            </div>
                                            <Button type="submit" name="addnews" className="btn btn-primary" style={{ float: 'right' }} >Submit</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>     
                            <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
                        </div>
                    </div></div></div>
        );
    }
}

export default AddNews;