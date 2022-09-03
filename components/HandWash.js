import React,{ Component } from 'react';

export default class HandWash extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="hand-wash-one">
                <div className="container">
                    <div className="block-title text-center">
                        <p>4 Easy Steps </p>
                        <h3>Hand Wash Procedure</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="000ms">
                            <div className="hand-wash-one__single">
                                <div className="hand-wash-one__image">
                                    <img src="/assets/images/shapes/hw-i-1-1.png" alt="" />
                                </div>
                                <h3>Use Soap</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="100ms">
                            <div className="hand-wash-one__single">
                                <div className="hand-wash-one__image">
                                    <img src="/assets/images/shapes/hw-i-1-2.png" alt="" />
                                </div>
                                <h3>Palm to Palm</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="200ms">
                            <div className="hand-wash-one__single">
                                <div className="hand-wash-one__image">
                                    <img src="/assets/images/shapes/hw-i-1-3.png" alt="" />
                                </div>
                                <h3>Fingers Interlaced</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="300ms">
                            <div className="hand-wash-one__single">
                                <div className="hand-wash-one__image">
                                    <img src="/assets/images/shapes/hw-i-1-4.png" alt="" />
                                </div>
                                <h3>Rinse Hands</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}