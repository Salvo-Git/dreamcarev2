import React,{ Component } from 'react';

export default class FunFactTwo extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="funfact-two">
                <img src="/assets/images/shapes/virus-shape-1-3.png" className="funfact-two__virus" alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                                <div className="funfact-two__single">
                                    <i className="vimns-icon-network"></i>
                                    <h3 className="counter">46700 </h3>
                                    <p>People Infected</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                                <div className="funfact-two__single">
                                    <i className="vimns-icon-grave"></i>
                                    <h3 className="counter">3750 </h3>
                                    <p>People Died</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                                <div className="funfact-two__single">
                                    <i className="vimns-icon-family"></i>
                                    <h3 className="counter">3420 </h3>
                                    <p>People Recovered</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                                <div className="funfact-two__single">
                                    <i className="vimns-icon-worldwide"></i>
                                    <h3 className="counter">104 </h3>
                                    <p>Countries Affected</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}