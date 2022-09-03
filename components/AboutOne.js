import React,{ Component } from 'react';

export default class AboutOne extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="about-one">
                <img src="/assets/images/shapes/virus-shape-1-1.png" className="about-one__virus" alt=""/>
                    <div className="container">
                        <div className="inner-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about-one__images wow fadeInLeft"
                                         data-wow-animation-duration="1500ms">
                                        <img src="assets/images/resources/about-1-1.jpg" alt=""/>
                                            <img src="assets/images/resources/about-1-2.jpg" alt=""/>
                                                <a href="href=https://www.youtube.com/watch?v=Xj1nUFFVK1E"
                                                   className="about-one__video-btn video-popup"><i
                                                    className="fa fa-play"></i></a>
                                    </div>
                                    <div className="about-one__fact-wrap">
                                        <div className="about-one__fact">
                                            <div className="about-one__fact-icon">
                                                <i className="vimns-icon-mask"></i>
                                            </div>
                                            <div className="about-one__fact-content">
                                                <h4>387000</h4>
                                                <p>Recovered <br/> Patients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-one__content">
                                        <div className="block-title text-left">
                                            <p>Introduction of Coronavirus </p>
                                            <h3>Coronavirus disease (COVID-19)</h3>
                                        </div>
                                        <div className="about-one__icon-box">
                                            <div className="about-one__icon">
                                                <i className="vimns-icon-virus"></i>
                                            </div>
                                            <div className="about-one__icon-content">
                                                <p>Coronavirus disease is an infectious disease caused by a new
                                                    virus.</p>
                                            </div>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority have
                                            suffered alteration in some form, by injected humour, or not that ahnd
                                            randomised.</p>

                                        <ul className="list-unstyled about-one__list">
                                            <li><i className="vimns-icon-tick"></i> Wash your hands regularly for 20
                                                seconds.
                                            </li>
                                            <li><i className="vimns-icon-tick"></i> Cover your nose and mouth with a
                                                disposable tissue.
                                            </li>
                                            <li><i className="vimns-icon-tick"></i> Avoid close contact (1 meter or 3
                                                feet) with people.
                                            </li>
                                            <li><i className="vimns-icon-tick"></i> Stay home and self-isolate from
                                                others in the household.
                                            </li>
                                            <li><i className="vimns-icon-tick"></i> Protect yourself and help prevent
                                                spreading the virus.
                                            </li>
                                        </ul>
                                        <a href="#" className="thm-btn about-one__btn">Discover More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}