import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Routes from './Routers/Router';
import Footer from './footer';
import axios from 'axios';
class News extends Component {
    constructor(props){
		super(props);
		this.state={
            time:'',
			title:'',
			image:'',
			content:'',
        }
    }
        myhandleChange = (event) => {
            let name = event.target.name;
            let value = event.target.value;
            this.setState({[name]:value});
        }
        getNews=()=>{
            axios.get("http://localhost:8000/api/news").then((response)=>
            {
                console.log(response.data.data);
                if(response.status === 200){
                    this.setState({cars:response.data.data?response.data.data:[],});
                }if(response.data.status ==="failed" && response.data.success === "false"){
                    this.setState({noDataFound:response.data.message,});
                }
            }).catch((error)=>{
                console.log(error);
            });
        }
        deleteNews=(id)=>{
            axios.delete("http://localhost:8000/api/cars/"+id)
            .then((res)=>{
                console.log("News removed deleted");
                this.getCar();
            }).catch((error)=>{
            console.log(error)
        })
    
        }
    render() {
        return (
            <div>
                <br></br>
                <button className='btn btn-outline-success'style={{ float: 'right' }}> <span><Link to="/addnew"> Add new</Link></span></button>
                <b><h2>News</h2></b>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Time</th>
                            <th>Title</th>
                            <th>Contact</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>djkfhjdskgh</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editnew"> Edit</Link></span> </button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>

                        </tr>

                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default News;