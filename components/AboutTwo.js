import React,{ Component } from 'react';

export default class AboutTwo extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="about-two">
                <img src="/assets/images/resources/fact-moc-1-1.png" className="about-two__moc wow fadeInRight"
                     data-wow-animation-duration="1500ms" alt=""/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-two__content">
                                    <div className="block-title text-left">
                                        <p>Coronavirus Disease (COVID-19)</p>
                                        <h3>The Coronavirus Wordlwide <br/> Situation reports</h3>
                                    </div>

                                    <div className="about-two__icon-wrap">
                                        <div className="about-two__icon-single">
                                            <div className="about-two__icon">
                                                <i className="vimns-icon-screw"></i>
                                            </div>
                                            <div className="about-two__icon-text">
                                                <h3>Stay <br/> Informed</h3>
                                            </div>
                                        </div>
                                        <div className="about-two__icon-single">
                                            <div className="about-two__icon">
                                                <i className="vimns-icon-work"></i>
                                            </div>
                                            <div className="about-two__icon-text">
                                                <h3>New <br/> Updates</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been
                                        the industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took.</p>
                                    <div className="about-two__btn-block">
                                        <a href="#" className="thm-btn about-two__btn-1">Discover More</a>
                                        <a href="#" className="thm-btn about-two__btn-2">Download Reports</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}