// import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import Routes from './Routers/Router';
// import Footer from './footer';
// class Partner extends Component {
//     render() {
//         return (
//             <div >
//                 <br></br>
//                 <button className='btn btn-outline-success' style={{ float: 'right' }}><span><Link to="/addpartner">Add new</Link></span></button>
//                 <b><h2>Partner</h2></b>
//                 <table className="table table-condensed">
//                     <thead >
//                         <tr>
//                             <th>STT</th>
//                             <th>Name</th>
//                             <th>Image</th>
//                             <th>Information</th>
//                             <th>Link</th>
//                             <th>Top</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>2</td>
//                             <td>John</td>
//                             <td>Doe</td>
//                             <td>john@example.com</td>
//                             <td>fgf</td>
//                             <td>gfg</td>
//                             <td>
//                                 <button className='btn btn-success' style={{ margin: '10px' }}> <span><Link to="/editpartner"> Edit</Link></span></button>
//                                 <button className='btn btn-danger'> Delete</button>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>2</td>
//                             <td>John</td>
//                             <td>Doe</td>
//                             <td>john@example.com</td>
//                             <td>fgf</td>
//                             <td>gfg</td>
//                             <td>
//                                 <button className='btn btn-success' style={{ margin: '10px' }}> <span><Link to="/editpartner"> Edit</Link></span></button>
//                                 <button className='btn btn-danger'> Delete</button>
//                             </td>
//                         </tr>

//                         <tr>
//                             <td>2</td>
//                             <td>John</td>
//                             <td>Doe</td>
//                             <td>john@example.com</td>
//                             <td>fgf</td>
//                             <td>gfg</td>
//                             <td>
//                                 <button className='btn btn-success' style={{ margin: '10px' }}><Link to="/editpartner"> Edit</Link></button>
//                                 <button className='btn btn-danger'> Delete</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
           
                        
            
//         );
//     }
// }

// export default Partner


// import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import Routes from './Routers/Router';
// import Footer from './footer';
// class partners extends Component {
//   render() {
//     return (
//       <div>
//         <br></br>
//         <button className="btn btn-outline-success" style={{ float: 'right' }}>
//           {' '}
//           <span>
//             <Link to="/addnew"> Add new</Link>
//           </span>
//         </button>
//         <b>
//           <h2>partners</h2>
//         </b>
//         <table className="table table-condensed">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Time</th>
//               <th>Title</th>
//               <th>Contact</th>
//               <th>Image</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>2</td>
//               <td>John</td>
//               <td>john@example.com</td>
//               <td>gtytytyutyuyiyu</td>
//               <td>djkfhjdskgh</td>
//               <td>
//                 <button
//                   className="btn btn-success"
//                   style={{ margin: '10px', color: 'white' }}
//                 >
//                   {' '}
//                   <span>
//                     <Link to="/editnew"> Edit</Link>
//                   </span>{' '}
//                 </button>
//                 <button className="btn btn-danger"> Delete</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default partners;

import React, { Component } from 'react';
import { Table,Button } from 'reactstrap';
import axios from 'axios';
// import Addcar from './addres.components';
import {
    BrowserRouter as Router,Link
  } from "react-router-dom";
class partners extends Component {
    constructor(props){
        super(props);    
        this.state={
            partners:[],
            noDataFound:[],
            newModalCar:false,
        }
    }

    componentDidMount(){
        this.getpartners();
    }

    getpartners=()=>{
        axios.get("http://localhost:8000/api/partners").then((response)=>
        {
            console.log(response.data);
            if(response.status === 200){
                this.setState({partners:response.data?response.data:[],});
            }if(response.status ==="failed" && response.success === "false"){
                this.setState({noDataFound:response.message,});
            }
      }).catch((error)=>{
          console.log(error);
      });
    }


    deleteCar=(id)=>{
        axios.delete("http://localhost:8000/api/partners/"+id)
            .then((res)=>{
                console.log("partners removed");
                this.getpartners();
            }).catch((error)=>{
            console.log(error)
        })
    }
    render() {
          const{partners,noDataFound,newModalCar}=this.state;
          var partnerDetail=[];
          if(partners.length){
            partnerDetail = partners.map((res,index)=>{
                return(
                  <tr key={res.id}>
                    <td>{res.id}</td>
                    <td>{res.name}</td>
                    <td><img src={"/images/"+res.image} ></img></td>
                    <td>{res.info}</td>
                    <td>{res.link}</td>
                    <td>{res.top}</td>
                    <td className="display=flex">
                    <Link to={"/partners/"+res.id+"/editnew"} className="edit-link">
                      <Button color="btn btn-success" className="mr-3" size="sm">
                          Edit
                      </Button>
                    </Link>
                        <Button className="btn btn-danger" size="sm">Delete</Button>
                    </td>
                  </tr>
                );
            });
        }
        return (
            <div>
              <br></br>
              <button className="btn btn-outline-success" style={{ float: 'right' }}>
                {' '}
                <span>
                  <Link to="/addpartner"> Add Partner</Link>
                </span>
              </button>
              <b>
                <h2>partners</h2>
              </b>
              <table className="table table-condensed">
              <Table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Information</th>
                    <th>Link</th>
                    <th>Top</th>
                    <th>Action</th>
                  </tr>
                </thead>   
                {partners.length === 0 ?
                (<tbody><tr><td><h2>{noDataFound}</h2></td></tr></tbody>):
                (<tbody>{partnerDetail}</tbody>)}
            </Table>
           </table>
       </div>
        );
    }
  }


export default partners;
