import React,{ Component } from 'react';

export default class AboutFour extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="about-four">
                <img src="/assets/images/shapes/virus-shape-1-2.png" className="about-four__shape" alt=""/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-four__image">
                                    <img src="/assets/images/resources/about-3-1.png" alt=""/>
                                        <div className="about-four__image-content">
                                            <p>Call for any <br/> emergencies</p>
                                            <h3><a href="tel:666-888-0000">666 888 0000</a></h3>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-four__content">
                                    <div className="block-title text-left">
                                        <p>About Coronavirus</p>
                                        <h3>More Know About Coronavirus</h3>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered
                                        alteration in some form, by injected humour, or not that ahnd randomised.</p>
                                    <div className="about-two__icon-wrap">
                                        <div className="about-two__icon-single">
                                            <div className="about-two__icon">
                                                <i className="vimns-icon-infected"></i>
                                            </div>
                                            <div className="about-two__icon-text">
                                                <h3>4684,200 people <br/> Infected</h3>
                                            </div>
                                        </div>
                                        <div className="about-two__icon-single">
                                            <div className="about-two__icon">
                                                <i className="vimns-icon-washing-hands"></i>
                                            </div>
                                            <div className="about-two__icon-text">
                                                <h3>Daily <br/> Wash Hands</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered
                                        alteration in some form, by injected humour, or not that ahnd randomised.</p>
                                    <a href="#" className="thm-btn about-four__btn">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}