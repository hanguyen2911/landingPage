import React, { Component } from 'react';
import { Button, FormGroup, Label, Input,Span} from 'reactstrap';
class AddNews extends Component {
    constructor(props){
		super(props);
		//this.handleAddSubmit=this.handleAddSubmit.bind(this);
		this.state={
			file:null,
			image:'',
			time:'',
			title:'',
			content:'',
            errors:{
                time:[''],
                title:[''],
                content:[''],
                image:[''],
            },
		}
	}

	onRedirect=()=>{
		this.setState({file:null,
			time:'',
			title:'',
			content:'',
			image:'',});
		this.props.getNews();
	}

	handleAddSubmit=(e)=>{
		e.preventDefault();
		const fileInput=document.querySelector("#fileupload");
		const formData=new FormData();
		formData.append('image',fileInput.files[0]);
		formData.append('time',this.state.time);
		formData.append('title',this.state.title);
		formData.append('content',this.state.content);
        console.log(this.state.title);
        console.log(this.state.time);
        console.log(this.state.content);
		console.log(fileInput.files[0]);

		fetch('http://localhost:8000/api/news', {
        method: 'POST',
        body: formData,
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      .then(res => { return res.json() }) //ko có return thì kết quả data là undefined
      .then(data => {
        if (data.status === "error") {
            this.setState({
            status: data.status,
            errors: data.errors,
            });

          }else{
          this.props.handleAddSubmit(data.data);//truyền sang cho cha là carList.js để cập nhật lại list car ra trình duyệt
          console.log(data.data);
          this.onRedirect();
          this.props.onCloseFormAdd();
          return data;   
        }//hết else
      })
  
	}

	onChangeTime=(e)=>{
		this.setState({time:e.target.value});
	}


	onChangeTitle=(e)=>{
		this.setState({title:e.target.value});
	}

	onChangeContent=(e)=>{
		this.setState({content:e.target.value});
	}

    onChangeImage=(e)=>{
		this.setState({file:URL.createObjectURL(e.target.files[0])})
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
                                                <Label htmlFor="time" className="text-body">Time :</Label>
                                                <Input type="date" className="form-control text-body" name="time" onChange = {this.onChangeTime} placeholder="Name"  required />
                                                <span className ="text-danger">{this.state.errors.time}</span>
                                            </div>

                                            <div className="form-group">
                                                <Label htmlFor="title" className="text-body">Title : </Label>
                                                <Input type="text" className="form-control text-body" name="title" onChange = {this.onChangeTitle}  placeholder="Title" />
                                                <span className ="text-danger">{this.state.errors.title}</span>
                                            </div>
                                            <div className="form-group">
                                                <Label htmlFor="content" className="text-body">Content : </Label>
                                                <Input type="text" className="form-control text-body" name="content" onChange = {this.onChangeContent} placeholder="Content"  required />
                                                <span className ="text-danger">{this.state.errors.content}</span>
                                            </div>
                                            <div className="form-group">
                                                <Label htmlFor="image" className="text-body">Image :</Label>
                                                <Input id="fileupload" type="file" className="form-control text-body" name="image" onChange = {this.onChangeImage}  placeholder="Image" required />
                                                <span className ="text-danger">{this.state.errors.image}</span>
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