
import React, { Component } from 'react';
class News extends Component {
    render() {
        return (
            <section className="section-lg bg-default" id="news" data-type="anchor">
                <div className="container wow-outer">
                    <h3 className="text-center wow slideInDown" style={{ visibility: 'visible', animationName: 'slideInDown' }}>Recent News</h3>
                    {/* Owl Carousel*/}
                    <div className="owl-carousel owl-dots-primary wow fadeInUp owl-loaded" data-items={1} data-md-items={2} data-lg-items={3} data-dots="true" data-nav="false" data-stage-padding="0px" data-loop="false" data-margin="15px" data-mouse-drag="false" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 3173 }}>
                                <div className="owl-item active" style={{ width: '337.5px', marginRight: 15 }}>
                                 
                                    <div className="post-corporate"><a className="badge" href="#">13 May 2021</a>
                                        <h4 className="post-corporate-title">
                                            <a href="#">"I chose to say no"</a>
                                        </h4>
                                        <img src="images/huou.jpg" />
                                        <div className="post-corporate-text">
                                            <p>That's what Ho T.H., a 2nd year student at Passerelles numériques Vietnam (PNV) class 22 chose. H. has chosen to say no to the prejudice that if a girl is old enough, she should get married to fulfill her filial piety. H. chose to say no with the thought that if she was poor, she did not need to study much, and stayed at home to help her parents work and raise her younger brother.
                                 And H. chooses to say no to giving up his dream, the dream of changing his life.</p>
                                        </div>
                                        <a className="post-corporate-link" href="https://www.passerellesnumeriques.org/vi/2021/05/em-da-chon-noi-khong/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>

                                <div className="owl-item active" style={{ width: '337.5px', marginRight: 15 }}>
                                    <div className="post-corporate"><a className="badge" href="#">5 May 2021</a>
                                        <h4 className="post-corporate-title"><a href="#">Blossom in the storm</a></h4>
                                        <img src="images/quyen.jpg" alt width={270} height={121} />
                                        <div className="post-corporate-text">
                                            <p>“Every person is born with a destiny” – That is what Tran T.Q., a Passerelles numériques Vietnam student of batch 20, currently a software engineer, told about the story of her life. Like a flower in the thunderstorms, the young girl has been...</p>
                                        </div>
                                        <a className="post-corporate-link" href="https://www.passerellesnumeriques.org/en/2021/05/blossom-in-the-storm/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>
            
                                <div className="owl-item" style={{ width: '337.5px', marginRight: 15 }}>
                                    <div className="post-corporate"><a className="badge" href="#">29 Jun 2020</a>
                                        <h4 className="post-corporate-title"><a href="#">COVID-19 challenges our innovative solutions</a></h4>
                                        <img src="images/covid19.png" alt width={270} height={121} />
                                        <div className="post-corporate-text">
                                            <p>COVID-19 is a challenge for everyone, including Passerelles numériques staff and students: it has challenged our mission, it has changed our work habits and made us question our ways of proceeding. We would like to share with you how we have overcome challenges and to...</p>
                                        </div>
                                        <a className="post-corporate-link" href="https://www.passerellesnumeriques.org/en/2020/06/newsletter-covid-19-challenges-innovative-solutions/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>
                                

                                <div className="owl-item" style={{ width: '337.5px', marginRight: 15 }}>
                                    <div className="post-corporate"><a className="badge" href="#">9 Nov 2020</a>
                                        <h4 className="post-corporate-title"><a href="#">Damage in our classrooms due to heavy rains in Central Vietnam</a></h4>
                                        <img src="images/damage.jpg" alt width={270} height={121} />
                                        <div className="post-corporate-text">
                                            <p>Since the beginning of Oct 2020, people in central Vietnam have been exposed to constant natural disasters, including widespread flooding, landslides and large damaging storms. According to the latest UNICEF’s press release, at least 135.000 families in this region...</p>
                                        </div>
                                        <a className="post-corporate-link" href="https://www.passerellesnumeriques.org/en/2020/11/damage-classrooms-due-heavy-rains-central-vietnam-need-support/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>


                                <div className="owl-item" style={{ width: '337.5px', marginRight: 15 }}>
                                    <div className="post-corporate">
                                        <a className="badge" href="#">25 Jun 2020</a>
                                        <h4 className="post-corporate-title">
                                            <a href="#">Vietnam – PNV19 Graduates, we are proud of you!</a>
                                        </h4>
                                        <img src="images/pnv19.png" alt width={270} height={121} />

                                        <div className="post-corporate-text">
                                            <p>Last October, 40 class PNV19 students graduated, becoming the first class to complete PN Vietnam’s new three-year training program. Eight months on, we are reaching out again to see how they are doing, and how PN has had a positive initial impact on their lives. We... </p>
                                        </div>
                                        <a className="post-corporate-link" href="https://www.passerellesnumeriques.org/en/2020/06/pnv19-graduates-proud/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>

                                <div className="owl-item" style={{ width: '337.5px', marginRight: 15 }}>
                                    <div className="post-corporate"><a className="badge" href="#">25 Nov 2019</a>
                                        <h4 className="post-corporate-title"><a href="#">Vietnam – Class 2019 Graduation Ceremony</a></h4>
                                        <img src="images/class2019.png" alt width={270} height={121} />
                                        <div className="post-corporate-text">
                                            <p>Graduates of PN Vietnam’s 2019 Class On October 12th, the first class of PN Vietnam’s new three-year training program graduated. The students celebrated one of the most important turning points of their lives – the Graduation Ceremony! Starting in September 2016, 40...</p>
                                        </div>
                                        <a className="post-corporate-link" href="https://www.passerellesnumeriques.org/en/2019/11/vietnam-class-2019-graduation-ceremony/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>

                                <div className="owl-item" style={{ width: '337.5px', marginRight: 15 }}>
                                    <div className="post-corporate">
                                        <a className="badge" href="#">21 Aug 2019</a>
                                        <h4 className="post-corporate-title"><a href="#">Vietnam – Career Seminar 2019 – One step ahead for a better future
                                        </a></h4>
                                        <img src="images/career.png" alt width={270} height={121} />
                                        <div className="post-corporate-text">
                                            <p>Career Seminar 2019 took place successfully in June 2019 With the aim of offering a closer look at IT companies in Danang and providing career guidance, a Career Seminar was held in June by our 2nd-year students for all PN Vietnam students. PN Vietnam’s annual Career...</p>
                                        </div>
                                        <a className="post-corporate-link" href="https://www.passerellesnumeriques.org/en/2019/08/vietnam-career-seminar-2019-one-step-ahead-better-future/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>

                                <div className="owl-item" style={{ width: '337.5px', marginRight: 15 }}>
                                    <div className="post-corporate"><a className="badge" href="#">24 May 2019</a>
                                        <h4 className="post-corporate-title"><a href="#">Pascal Lambert: Insights on Commitment to the Community    </a></h4>
                                        <img src="images/lamber.jpg" alt width={270} height={121} />
                                        <div className="post-corporate-text">
                                            <p>Pascal Lambert leads Societe Generale in South East Asia and India. He is based in Singapore and has been working with us since 2013, first as a partner and, then more on a personal level, becoming in 2016 an official board member of the PN organization in Singapore....</p>
                                        </div>
                                        <a className="post-corporate-link" href="https://www.passerellesnumeriques.org/en/2019/05/pascal-lambert-insights-commitment-community/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>


                                <div className="owl-item" style={{ width: '337.5px', marginRight: 15 }}>
                                    <div className="post-corporate">
                                        <a className="badge" href="#">25 Feb 2019</a>
                                        <h4 className="post-corporate-title"><a href="#">Vietnam – Pitching Contest: More than just a competition</a></h4>
                                        <img src="images/pitching.png" alt width={270} height={121} />
                                        <div className="post-corporate-text">
                                            <p>One of our students during her presentation In December 2018, for the first time ever, PN Vietnam successfully organized a pitching contest for the 3rd-year students. This contest is a major highlight in the training program that PN Vietnam has been working on since... </p>
                                        </div><a className="post-corporate-link" href="https://www.passerellesnumeriques.org/en/2019/02/vietnam-pitching-contest-just-competition/">Read more<span className="icon linearicons-arrow-right" /></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}

export default News;
