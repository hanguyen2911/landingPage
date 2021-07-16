import React, { Component } from 'react';
import Home from './home';
import Missi from './ourMission';
// import Latest from './latestCause'
class Body extends Component {

    render() {
        return (
            <div>
                 <div className="page animated" style={{animationDuration: '500ms'}}>
                <Home/>
                <Missi/>
                {/* <Latest/> */}
                </div>
            </div>
        );
    }
}

export default Body;