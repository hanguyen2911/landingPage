import React, { Component } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class Partner extends Component {
  render() {
    return (

      <section className="section-lg text-center" id="partners" data-type="anchor">
        <div className="container">
          <div className="wow-outer">
            <div className="wow slideInDown" style={{ visibility: 'visible', animationName: 'slideInDown' }}>
              <h3>Partners</h3>
            </div>
          </div>

          {/* Owl Carousel*/}
          <div className="owl-carousel owl-dots-primary dots-offset-lg owl-carousel-lg owl-loaded">
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 2880 }}>

                <div className="owl-item active" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/blancmesni.png" alt="Owl Image" alt width={270} height={121} />
                    </div>
                  </a>
                </div>
                <div className="owl-item active" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/DVT.png" alt="Owl Image" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/Enouvo.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/FondationAmanjaya.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/J.P.Morgan.jpg" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/KMS-Technology.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/Laidon.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/LeKhanhTech.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/linkbynet.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/Luciole.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>


                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/microsoft.jpg" alt width={270} height={121} />
                    </div>
                  </a>
                </div>
                

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/motorola.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>
                

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/PYCO.png" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

                <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
                  <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
                    <div className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                      <img src="images/Thales.jpg" alt width={270} height={121} />
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Partner;
