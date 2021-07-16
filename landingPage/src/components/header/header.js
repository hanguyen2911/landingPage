import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
          
        <header className="section page-header">
        {/* RD Navbar*/}
        <div className="rd-navbar-wrap" style={{height: '0px'}}> 
          <nav className="rd-navbar rd-navbar-aside rd-navbar-original rd-navbar-fixed" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-lg-stick-up-offset="46px" data-xl-stick-up-offset="46px" data-xxl-stick-up-offset="46px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {/* RD Navbar Panel*/}
                <div className="rd-navbar-panel">
                  {/* RD Navbar Toggle*/}
                  <button className="rd-navbar-toggle toggle-original" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span /></button>
                  {/* RD Navbar Brand*/}
                  <div className="rd-navbar-brand"><a href="index.html"><img className="brand-logo-light" src="https://www.passerellesnumeriques.org/misc/logo-en.png" alt="" width={211} height={68} srcSet="https://www.passerellesnumeriques.org/misc/logo-en.png 2x" /></a></div>
                  <div className="block-right">
                    <ul className="list-inline nav-list">
                      <li className="list-inline-item"><a href="#latest-causes" data-custom-scroll-to="latest-causes">Causes</a></li>
                      <li className="list-inline-item"><a href="#about" data-custom-scroll-to="about">About</a></li>
                      <li className="list-inline-item"><a href="#get-in-touch" data-custom-scroll-to="get-in-touch">Contact Us</a></li>
                    </ul>
                    <div className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1 toggle-original" data-rd-navbar-toggle=".rd-navbar-collapse"><span /></div>
                    <div className="rd-navbar-aside-outer rd-navbar-collapse toggle-original-elements">
                      <div className="rd-navbar-aside">
                        <ul className="list-inline header-soc-list">
                          <li><a className="icon fa-facebook" href="#" /></li>
                          <li><a className="icon fa-instagram" href="#" /></li>
                          <li><a className="icon fa-twitter" href="#" /></li>
                          <li><a className="icon fa-youtube-play" href="#" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rd-navbar-main-element"> 
                  <div className="rd-navbar-nav-wrap toggle-original-elements">
                    {/* RD Navbar Nav*/}
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active"><a className="rd-nav-link " href="#home">Home</a>
                      </li>
                      <li className="rd-nav-item "><a className="rd-nav-link" href="#our-mission">Our mission</a>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="#latest-causes">Latest Causes</a>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="#about">About Sunrise</a>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="#news">Recent News</a>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="#partners">Partners</a>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="#get-in-touch">Get in Touch</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
        );
    }
}

export default Header;