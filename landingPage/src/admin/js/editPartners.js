import React, { Component } from 'react';
import axios from 'axios';
class EditPartners extends Component {
    constructor(props){
		super(props);
		this.state={
            name:'',
			image:'',
            info:'',
			link:'',
            top:''
        }
    }
    componentDidMount(){//xảy ra khi render xong component
        console.log("Hello");
        const  id  = this.props.match.params.id;  //lay id tu trinh duyet (đc truyền từ app.js trong thẻ Route)
        console.log(id);
        axios.get('http://localhost:8000/api/news/'+id)
          .then(res => {
            this.setState({
                name: res.data.data.name,
                image: res.data.data.image,
                info: res.data.data.info,
                link:res.data.data.link,
                top:res.data.data.top,
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
        formData.append('name',this.state.name);
        formData.append('image', this.state.image);
        formData.append('info', this.state.info);
        formData.append('link', this.state.link);
        formData.append('top', this.state.top);
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
        console.log('Partners updated!');
        this.props.history.push('/');
    }
});
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
                                    <h4 className="text-body" >Edit Partner</h4>
                                    <div className="container">
                                        <form action method="POST" encType="multipart/form-data">
                                            <div className="form-group">
                                                <label htmlFor="name" className="text-body">Name :</label>
                                                <input type="text" className="form-control text-body" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} required />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="image" className="text-body">Image :</label>
                                                <input type="file" className="form-control text-body" name="image" value={this.state.image} onChange={(e) => this.setState({ image: e.target.value })} required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="info" className="text-body">Information : </label>
                                                <input type="text" class="form-control text-body" name="info" value={this.state.info} onChange={(e) => this.setState({ info: e.target.value })}  required />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="link" className="text-body">Link : </label>
                                                <input type="text" class="form-control text-body" name="link" value={this.state.link} onChange={(e) => this.setState({ link: e.target.value })} required />
                                            </div>
                                            <button type="submit" name="editpartners" className="btn btn-primary" style={{ float: 'right' }} >Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditPartners;