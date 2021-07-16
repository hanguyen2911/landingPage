import React, { Component } from 'react';
import axios from 'axios';
class EditNews extends Component {
    constructor(props){
		super(props);
		this.state={
            time:'',
			title:'',
			image:'',
			content:'',
        }
    }
    componentDidMount(){//xảy ra khi render xong component
        console.log("Hello");
        const  id  = this.props.match.params.id;  //lay id tu trinh duyet (đc truyền từ app.js trong thẻ Route)
        console.log(id);
        axios.get('http://localhost:8000/api/news/'+id)
          .then(res => {
            this.setState({
            time: res.data.data.time,
            title: res.data.data.title,
            image: res.data.data.image,
            content:res.data.data.content
            });
            console.log(res.data.data);
          })
          .catch((error) => {
            console.log(error);
          })
      }
      handleEditSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('time',this.state.time);
        formData.append('title', this.state.title);
        formData.append('image', this.state.image);
        formData.append('content', this.state.content);
        formData.append('_method','PUT'); 
        let config = {
            headers: {
                "Content-Type": "application/json",
                 
        }

    }
    axios.post('http://localhost:8000/api/news/'+this.props.match.params.id,formData, config).then(Response => {
        console.log(Response.data.message);  
        }).catch (function (error) {
    if (error.response) {
        console.log(error.response.headers);
    }else{
        console.log('News updated!');
        this.props.history.push('/');
    }
})
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
                                        <form action method="POST" encType="multipart/form-data">
                                            <div className="form-group">
                                                <label htmlFor="time" className="text-body">Time :</label>
                                                <input type="date" className="form-control text-body" name="time" value={this.state.time} onChange={(e) => this.setState({ time: e.target.value })} required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title" className="text-body">Title : </label>
                                                <input type="text" className="form-control text-body" name="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="image" className="text-body">Image :</label>
                                                <input type="file" className="form-control text-body" name="image" value={this.state.image} onChange={(e) => this.setState({ image: e.target.value })} required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="content" className="text-body">Content : </label>
                                                <input type="text" class="form-control text-body" name="content" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} required />
                                            </div>
                                        
                                            <button type="submit" name="editnews" className="btn btn-primary" style={{ float: 'right' }} >Submit</button>
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

export default EditNews;