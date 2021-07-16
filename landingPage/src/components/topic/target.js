import React, { Component } from 'react';
class Target extends Component {
    render() {
        return (
            <div>
                <section className="section section-xxl bg-default" id="about" data-type="anchor">
                    <div className="container">
                        <div className="row row-50 justify-content-center align-items-lg-center">
                            <div className="col-lg-6 col-xl-5 wow-outer">
                                <div className="wow slideInLeft"><img src="images/cotrang.PNG" alt="mr.Trang" width={471} height={327} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 wow-outer">
                                <div className="wow slideInRight">
                                    <h3>About  Target</h3>
                                    <p>Fund of 70 million VND per month (December 6th) from the IT community, dedicated to cover IT classes and food for PNV students for the next 7 months (Total: 500 million VND until the end of 2021)</p>
                                    <p>"Covid-19 makes up the way to the school of the PNV of the EMV becomes more and more difficult. PNV and the children have never been insensitive or surrendered to difficulties, but in the face of Covid's ups and downs, we have never been indifferent or surrendered to difficulties. It is very much in need of community support.There are many people asking why I give you such a long-term and comprehensive program?Enter the definition to change the life of yourself and your family. "</p>
                                <p> ------------Vo Hoang Thuy Trang------------ </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Target;