import React,{ Component } from 'react';

export default class ServiceOne extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="service-one">
                <div className="container">
                    <div className="block-title text-center">
                        <p>Virus Arround the Globe </p>
                        <h3>How Virus is Spreading</h3>
                    </div>

                    <div className="row no-gutters">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-animation-duration="1500ms">
                            <div className="service-one__single">
                                <div className="service-one__inner">
                                    <div className="service-one__image">
                                        <img src="/assets/images/shapes/service-i-1.png" alt=""/>
                                    </div>
                                    <div className="service-one__content">
                                        <h3><a href="#">Close Contact With an Infected Person </a></h3>
                                        <p> There are many variations of passages of lorem Ipsum but the available
                                            majority. </p>
                                        <a href="#" className="service-one__link"><i
                                            className="vimns-icon-front"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-animation-duration="1500ms">
                            <div className="service-one__single">
                                <div className="service-one__inner">
                                    <div className="service-one__image">
                                        <img src="assets/images/shapes/service-i-2.png" alt=""/>
                                    </div>
                                    <div className="service-one__content">
                                        <h3><a href="#">Close Contact With an Infected Person </a></h3>
                                        <p> There are many variations of passages of lorem Ipsum but the available
                                            majority. </p>
                                        <a href="#" className="service-one__link"><i
                                            className="vimns-icon-front"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInRight" data-wow-animation-duration="1500ms">
                            <div className="service-one__single">
                                <div className="service-one__inner">
                                    <div className="service-one__image">
                                        <img src="/assets/images/shapes/service-i-3.png" alt=""/>
                                    </div>

                                    <div className="service-one__content">
                                        <h3><a href="#">Close Contact With an Infected Person </a></h3>
                                        <p> There are many variations of passages of lorem Ipsum but the available
                                            majority. </p>
                                        <a href="#" className="service-one__link"><i
                                            className="vimns-icon-front"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}